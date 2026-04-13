@AGENTS.md

# DocuMind — AI Coding Context

## Project

DocuMind: users upload documents and ask AI questions across them with citations.
16-week portfolio project. TypeScript-first, Python sidecar for ML only.

## Architecture

Two services. See `/docs/architecture.md` for the full diagram and decision record.

- **TypeScript (Next.js /app):** all product logic — auth, file pipeline, LLM streaming, MCP server, orchestration
- **Python (FastAPI /ml-service):** exactly three endpoints — `/embed`, `/retrieve`, `/evaluate`

## The Rule

**NO Python code enters the production request path except through `/embed`, `/retrieve`, `/evaluate`.**

If you are about to write Python logic inside `/app/`, stop. If you are about to add a fourth Python endpoint, stop and ask why it cannot be done in TypeScript.

## Monorepo Layout

```
/app          Next.js application (App Router, Tailwind, TypeScript strict)
/ml-service   Python FastAPI — local dev only until Week 11, then AWS ECS Fargate
/mcp-server   MCP server (TypeScript) — Week 5
/types        Shared TypeScript interfaces — source of truth for all ML contracts
/infra        Docker Compose, Dockerfiles, GitHub Actions
/docs/til     Today I Learned entries (til-YYYY-MM-DD-kebab-topic.md)
/docs/adr     Architecture Decision Records (adr-NNN-kebab-title.md)
```

## TypeScript Conventions

- No `any`. TypeScript strict mode always. Use `unknown` and narrow.
- ML interfaces live in `/types/ml.ts` — import from there, never redefine locally.
- Path alias inside `/app/`: `@/*` → `./src/*`
- Agent traces must include: `prompt_version` (string, e.g. `"v1.0"`), `tool_used`, `latency_ms`, `cost_usd`.
- Database schema: always include `created_at`, `updated_at`, proper RLS policies.

## Learning Artifacts

- TIL format: `til-YYYY-MM-DD-kebab-topic.md` — write 3–5 per week in `/docs/til/`
- ADR format: `adr-NNN-kebab-title.md` — sections: **Context**, **Decision**, **Consequences**
- Commit `docs/til/` and `docs/adr/` entries **before** the code they describe. Git history should show thinking before building.

## AI Tool Rules

- Ask AI "why" and "how", not "what code should I write".
- Write core logic yourself first, then ask AI to review and improve.
- If AI generates code you don't understand, **stop**. Ask it to explain every line before continuing.
- Use AI freely for: Dockerfiles, CI/CD YAML, CSS, database migrations, boilerplate tests.

## Current Stack (Week 0)

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 16.2, React 19 | App Router, React Compiler |
| Styling | Tailwind CSS v4 | |
| Language | TypeScript 5 (strict) | |
| Database | Supabase (Postgres + pgvector) | Added Week 1 |
| Cache | Upstash Redis | Added Week 1 |
| LLM | Vercel AI SDK v6 | Added Week 1 |
| ML service | Python FastAPI | Added Week 6 |
| MCP | @modelcontextprotocol/sdk | Added Week 5 |
| Infra | AWS ECS Fargate | Added Week 11 |
