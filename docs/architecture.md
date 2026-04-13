# DocuMind — Architecture

> This document is the interview answer AND the north star.
> When in doubt about a technical decision, come back here first.

---

## Service Diagram

```
                           ┌─────────────────────────────────────────┐
                           │          TypeScript App (Vercel)         │
  Browser ─────────────►  │  Next.js 16 · App Router · Tailwind CSS  │
                           │  Auth, file pipeline, LLM streaming,     │
                           │  orchestration, MCP server               │
                           └───────┬──────────────┬───────────────────┘
                                   │              │
              ┌────────────────────┘              └────────────────────┐
              ▼                                                        ▼
  ┌───────────────────────┐                            ┌──────────────────────────┐
  │  Supabase             │                            │  Python ML Service       │
  │  Postgres + pgvector  │                            │  FastAPI · local → ECS   │
  │  Auth (RLS)           │◄── pgvector top-50 ───────►│                          │
  │  Storage (Phase 1)    │                            │  POST /embed             │
  └───────────────────────┘                            │  POST /retrieve          │
                                                       │  POST /evaluate          │
  ┌───────────────────────┐                            └──────────────────────────┘
  │  Upstash Redis        │
  │  Rate limiting        │
  │  Response cache       │
  └───────────────────────┘

  ┌───────────────────────────────────────────────────────────────────┐
  │  MCP Server (TypeScript)                                          │
  │  search_documents · compare_documents · get_document_summary      │
  │  Any MCP-compatible AI agent (Claude Desktop, Cursor, etc.)       │
  └───────────────────────────────────────────────────────────────────┘
```

**The retrieval pipeline** (Weeks 6–8):
```
User query
  → pgvector cosine HNSW top 50   [TypeScript, Drizzle, Supabase]
  → BM25 scoring                  [Python, bm25s]
  → RRF fusion (60 / (60 + rank)) [Python]
  → CrossEncoder rerank top 20    [Python, ms-marco-MiniLM-L-6-v2]
  → Return top 10                 [Python → TypeScript]
```

---

## Language Decision Record

| Use case | Language | Justification |
|---|---|---|
| UI, auth, file pipeline, LLM streaming | TypeScript | 90% of AI eng jobs; App Router; fastest path to a working product |
| pgvector cosine top-50 retrieval | TypeScript | Pure SQL — Drizzle `cosineDistance()` is native; no Python needed |
| Embeddings (Weeks 1–5) | TypeScript | OpenAI embeddings API call — one HTTP request, no ML runtime |
| Embeddings (Weeks 6+) | Python | `sentence-transformers` for local model path; swappable behind `/embed` |
| BM25 scoring | Python | `bm25s` library — Python-only; no equivalent TS implementation |
| RRF fusion | Python | Co-located with BM25 — one function, negligible cost to keep together |
| CrossEncoder reranking | Python | `sentence-transformers` CrossEncoder — Python-only ONNX runtime |
| RAGAS evaluation | Python | RAGAS v0.4 — Python-only; async LLM judge pipeline |
| MCP tools | TypeScript | MCP SDK is TypeScript-first; co-located with the app it exposes |

**The rule:** No Python code enters the production request path except through the three defined endpoints.

---

## Python Endpoint Signatures

All three endpoints are the only interface between TypeScript and Python.
Types are authoritative in `/types/ml.ts`.

### POST /embed

```
Request:  { text: string }
Response: { embedding: number[], model: string, tokens?: number }

Weeks 1–5: TypeScript calls OpenAI directly (this endpoint not deployed)
Weeks 6+:  Python uses sentence-transformers, returns same shape
```

### POST /retrieve

```
Request: {
  query: string,
  chunks: Array<{ text: string, id: string, metadata?: Record<string, unknown> }>
}

Response: {
  results: Array<{ id: string, score: number, rank: number }>
}

Pipeline:
  1. TypeScript fetches pgvector cosine HNSW top 50 (Drizzle + Supabase)
  2. Passes chunks to this endpoint
  3. Python: BM25 scoring (bm25s)
  4. Python: RRF fusion (60 / (60 + rank))
  5. Python: CrossEncoder rerank top 20 (ms-marco-MiniLM-L-6-v2)
  6. Returns top 10 with scores
```

**Accuracy improvement:** 10–25% over pure vector search.
**Interview story:** "Each component serves a purpose. Vector search is fast but unsemantic. BM25 catches exact terminology. RRF fuses both rankings without assumptions. CrossEncoder applies true semantic understanding."

### POST /evaluate

```
Request: {
  queries: Array<{
    q: string,
    reference_answer: string,
    context: string[],
    llm_answer?: string
  }>
}

Response: {
  results: Array<{
    context_precision: number,    // 0–1
    context_recall: number,       // 0–1
    answer_faithfulness: number,  // 0–1
    answer_relevancy: number,     // 0–1
    error_category?: 'retrieval_miss' | 'hallucination' | 'partial_answer' | 'off_topic'
  }>
}

Uses: RAGAS v0.4, GPT-4o-mini judge
Cost: ~$0.004–$0.01 per sample
```

---

## Two-Phase Infrastructure Plan

### Phase 1 — Managed First (Weeks 1–10)

| Layer | Service | Notes |
|---|---|---|
| Frontend | Vercel | Deploy = git push. Zero config. |
| Database | Supabase (Postgres + pgvector) | Row-Level Security, native auth, `vector()` columns in Drizzle |
| Cache | Upstash Redis | Serverless, pay-per-request |
| Files | Supabase Storage | Phase 1 only; migrates to S3 in Phase 2 |
| Python ML | Local only | Run `uvicorn app:app` during dev; no prod deploy until Week 11 |

**Why:** Ship a working product in 10 weeks before touching infrastructure. "Deploy = git push" removes all friction.

### Phase 2 — Deliberate AWS Migration (Weeks 11–12)

| Layer | Service | Notes |
|---|---|---|
| Python ML | AWS ECS Fargate | 0.5 vCPU · 1 GB · $25–37/mo (12 hrs/day) or ~$50 (24/7) |
| Files | S3 + presigned URLs | Replace Supabase Storage |
| CI/CD | GitHub Actions → ECR → ECS | `docker build` → push image → rolling deploy |
| Database | Supabase stays | pgvector migration risk exceeds benefit; RDS costs more |
| Frontend | Vercel stays | No reason to change |

**Interview narrative:** "Shipped on managed services first, understood requirements, then deliberately migrated the ML service to AWS for scale and cost visibility. I know *why* I moved it, not just *how*."

---

## Monorepo Layout

```
/app            Next.js application (TypeScript, App Router, Tailwind)
/ml-service     Python FastAPI — /embed, /retrieve, /evaluate
/mcp-server     MCP server (TypeScript) — search, compare, summarize
/types          Shared TypeScript interfaces — source of truth
/infra          Docker Compose, Dockerfiles, GitHub Actions
/docs
  /architecture.md  (this file)
  /til              Today I Learned entries
  /adr              Architecture Decision Records
```

---

## Key Architectural Decisions

1. **TypeScript-first, Python sidecar** — 90% of the system is TypeScript. Python is isolated behind three HTTP endpoints. This maximises career signal while using Python only where it provides measurable accuracy gains.

2. **Managed services before AWS** — Supabase + Vercel + Upstash remove all infrastructure friction for Weeks 1–10. The AWS migration in Weeks 11–12 becomes a deliberate, story-worthy decision rather than incidental complexity.

3. **pgvector stays on Supabase** — Drizzle's native `cosineDistance()` makes pgvector trivial. Moving Postgres to RDS would add cost, complexity, and migration risk with no benefit at this scale.

4. **MCP server is non-negotiable** — 97M SDK downloads. Adopted by OpenAI, Google, Microsoft, Anthropic. Donated to Linux Foundation. Transforms DocuMind from "an app" into "a platform any AI agent can query."

5. **Measure everything** — Agent traces with `prompt_version`, error categorisation, before/after latency/cost metrics. Most portfolios measure nothing. This one measures what matters.
