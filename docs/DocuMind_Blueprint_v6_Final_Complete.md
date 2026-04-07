# DocuMind Blueprint · v6 Final · April 2026

**TypeScript Product Brain · Python AI Engine · MCP-Native · AWS-Deployed · React Dev → AI Engineer**

---

## DocuMind — AI Document Intelligence Platform

**16-Week Build Blueprint · React Developer → AI Engineer**

| Parameter | Value |
|---|---|
| Duration | 16 weeks (Day Zero + 16 build weeks) |
| Commitment | 10–15 hrs/week |
| Target Income | $60K–$80K (first role), $80K–$100K (12–24 month stretch) |
| Architecture | TypeScript-First, Python AI Engine, MCP-Native |
| Planning | Minimum Viable Plan (Day Zero, 3–4 hrs) |
| Infrastructure | Managed-first → AWS migration (career + entrepreneurship) |
| Certification | AWS SAA-C03 (parallel study Weeks 9–16, exam Week 16) |
| Learning Method | Build-Break-Explain cycle + context-driven just-in-time learning |

**What this blueprint is.** DocuMind is a platform where users upload documents and ask questions across them — with an AI agent that retrieves, compares, and synthesises answers with source citations. You build it in TypeScript first on managed services for speed, ship a working product, plug in a small Python ML service where it makes answers measurably better, then deliberately migrate the infrastructure to AWS — producing a portfolio that signals product-building ability, AI engineering depth, and production cloud architecture. The SAA-C03 certification, earned in the final weeks through parallel study, adds a standardized credential that clears automated screening filters and delivers a ~26% salary lift.

**The sequencing philosophy.** Two infrastructure phases: Phase 1 (Weeks 1–10) builds and ships on managed services — Vercel, Supabase, Upstash — where deployment is a git push. Phase 2 (Weeks 11–12) migrates the Python ML service to AWS ECS Fargate and file storage to S3. This produces a better interview narrative than "I deployed to AWS from day one" — it demonstrates product-first thinking and deliberate infrastructure decisions.

**The career-first, entrepreneurship-ready principle.** Every skill and infrastructure choice serves your primary goal — landing a $60K–$80K remote AI engineering role — while ensuring direct transfer to entrepreneurship. Docker is universal. Managed services scale from portfolio to SaaS. AWS skills transfer to any production system. If you pivot DocuMind into a product tomorrow, the entire stack works at production scale without re-architecting.

---

## The Learning System — How You Will Actually Learn

Building DocuMind is not enough. You must deeply understand what you build, because interviews will probe beneath the surface: "How does HNSW indexing work?", "Why did your cross-encoder improve retrieval?", "What happens when your embedding model produces poor representations for a specific document type?" If you built it with AI assistance but cannot answer these questions, the portfolio becomes a liability rather than an asset.

Anthropic's 2026 randomized controlled trial found that developers using AI coding assistants scored 17% lower on comprehension than those who coded by hand — not because AI is harmful, but because it eliminated the productive friction where skill formation occurs. The developers who learned most effectively used AI for conceptual inquiry (asking "why" and "how") while writing code independently.

This blueprint uses a learning system grounded in cognitive science to ensure you build fast AND understand deeply.

### The Build-Break-Explain Cycle

Every major feature follows this three-step cycle:

**Build (50 min).** Write the code yourself, using documentation as reference. Resist the urge to ask AI for solutions. When stuck for more than 15 minutes, ask AI to explain the concept — not to write the code. Use Cursor or Claude Code for syntax help and boilerplate, but write the core logic by hand on the first attempt.

**Break (25 min).** After the feature works, deliberately break it. Remove components, change parameters, introduce edge cases, and observe what fails. This builds causal mental models — understanding not just that something works, but why it works and what makes it stop working. When you break your pgvector search by removing the HNSW index and see latency spike from 50ms to 800ms, you understand indexing at a visceral level no tutorial can provide.

**Explain (25 min).** Write a TIL (Today I Learned) entry or an Architecture Decision Record explaining what you built and why. Use the Feynman Technique: explain it as if teaching a junior developer. If you cannot explain it simply, you do not understand it deeply enough. These entries become your interview preparation material and your blog post drafts.

### AI Tool Usage Rules

These rules are not about limiting AI — they're about using it in the pattern that research shows produces both speed and retention.

**Ask AI "why" and "how", not "what code should I write."** The Anthropic study's highest-performing learners asked conceptual questions while writing code independently. This was both the second-fastest approach AND produced the highest comprehension.

**Write core logic by hand first, then use AI to improve.** For each week's key feature, implement the first version yourself. Then ask AI to review, suggest improvements, and explain alternatives. This preserves the productive struggle while still benefiting from AI acceleration.

**If AI generates code you don't understand, stop.** Do not use generated code until you can explain every line. Ask AI to explain it step by step. This is the single most important rule — violated, it produces the "illusion of competence" that destroys interview performance.

**Use AI aggressively for boilerplate and configuration.** Dockerfiles, CI/CD configs, database migrations, CSS styling, test scaffolding — these are legitimate acceleration targets where AI saves time without harming understanding.

### The Weekly Learning Artifacts

**TIL entries (3–5 per week).** Short markdown files capturing specific concepts, behaviors, or discoveries. Stored in `/docs/til/` in your repo. Example: `til-2026-04-15-hnsw-ef-search-tradeoff.md` — "Increasing ef_search from 40 to 200 improved recall from 92% to 99% but increased latency from 12ms to 45ms. The tradeoff is recall vs speed, and for DocuMind's use case (sub-200ms total response), ef_search=100 is the sweet spot." These compound into deep domain knowledge and become blog post material.

**Architecture Decision Records (2–3 per month).** Stored in `/docs/adr/`. Format: Context → Decision → Consequences. Example: ADR-003 "Why we use RRF instead of simple score averaging for hybrid search" — forces you to articulate the reasoning behind your choices.

**Friday self-review (15 min).** Pull up the week's Git commits. Ask three questions: What pattern did I use most? What would I change? What mistake did I repeat? This is the metacognition practice that Dunlosky's meta-review rated highest for long-term retention.

---

## The Mental Model: Product Brain + AI Engine + MCP Interface

Your TypeScript application is the **product brain** — it owns the user experience, the auth, the file pipeline, the orchestration, and the LLM streaming. Your Python ML service is the **AI engine** — a precision instrument that does exactly three things TypeScript genuinely cannot do as well. Your MCP server is the **integration interface** — it exposes DocuMind's capabilities as tools that any AI agent can consume via the standard protocol.

**Phase 1 (Weeks 1–10):** Vercel + Supabase (Postgres+pgvector) + Upstash Redis.

**Phase 2 (Weeks 11–12):** Python ML service → AWS ECS Fargate. File storage → AWS S3. Redis → AWS ElastiCache (optional). CI/CD → GitHub Actions → ECR → ECS.

**Stays on Vercel throughout:** Next.js app. **Stays on Supabase throughout:** Postgres+pgvector+Auth.

**Why pgvector stays in TypeScript.** pgvector is pure SQL. Drizzle ORM has native `vector()` column types, `cosineDistance()`, and HNSW index creation. The Python `/retrieve` endpoint receives the top-50 candidates from TypeScript and applies BM25 scoring and cross-encoder reranking on top.

**Why MCP earns its place.** 97 million monthly SDK downloads. Adopted by OpenAI, Google, Microsoft, Anthropic. Donated to Linux Foundation. Building an MCP server transforms DocuMind from "an app" into "a platform."

**Why managed-first → AWS migration.** Weeks 1–10 produce 100% product output. The AWS migration in Weeks 11–12 becomes a deliberate evolution: "I shipped fast on managed services, then migrated when I needed production-grade infrastructure."

---

## The Three Python Endpoints

### POST /embed — The Path to Local Models

Your TypeScript app calls the OpenAI embeddings API directly in Weeks 1–5. In Week 6, you move this to Python. The justification is forward-looking: when you swap for a local sentence-transformers model, you change one file. `sentence-transformers` is Python-only.

### POST /retrieve — Where Answers Measurably Improve

Pipeline: (1) pgvector cosine top 50 → (2) BM25 scoring (bm25s) → (3) RRF fusion (score = Σ 1/(60 + rank)) → (4) CrossEncoder ms-marco-MiniLM-L-6-v2 reranks top 20 → (5) Return top 10. Cross-encoders deliver 10–25% accuracy improvement. Both libraries are Python-only.

### POST /evaluate — The Hidden Senior-Level Skill

RAGAS v0.4 with GPT-4o-mini as judge. Four metrics: context_precision, context_recall, answer_faithfulness, answer_relevancy. ~$0.004–$0.01 per sample. Python-only.

---

## The MCP Server — Non-Negotiable in 2026

Three tools via `@modelcontextprotocol/sdk`: **search_documents**, **compare_documents**, **get_document_summary**. Transport: stdio + SSE. The interview story: "Any AI agent — Claude Desktop, Cursor, a custom agent — can query my document analysis pipeline through a standard protocol."

---

## Day Zero — Minimum Viable Plan (3–4 hours)

No PRD. No dev stories. No BMAD. Three artifacts, then code.

**Artifact 1: architecture.md (60 min).** Two-service diagram, Language Decision Record, Python endpoint signatures, two-phase infrastructure plan. This is your interview answer AND your north star.

**Artifact 2: types/ml.ts (30 min).** TypeScript interfaces: EmbedRequest, EmbedResponse, RetrieveRequest, RetrieveResponse, EvalSample, EvalResult. ~40 lines.

**Artifact 3: CLAUDE.md / .cursor/rules (30 min).** AI coding context file with architecture decisions, conventions, the TypeScript/Python split rationale, and the rule that no Python enters the production path except through the three defined endpoints.

**Scaffold monorepo (15 min).** /app, /ml-service, /mcp-server, /types, /infra, /docs/til, /docs/adr.

**Done when:** All committed. Git shows docs before code. Ready to build.

---

## PART I — Ship First (Weeks 1–5)

*Build a working TypeScript AI product on managed services before touching Python*

### Week 1 — TypeScript Foundation + App Router

**What to learn.** TypeScript's type system: interfaces, generics, union types, discriminated unions, type narrowing. Next.js App Router: file-system routing, Server Component / Client Component boundary, Route Handlers for API endpoints.

**Why the project needs it now.** TypeScript appears in ~90% of $100K+ AI engineering postings. Every file in DocuMind is `.ts` or `.tsx` with zero `any` escape hatches. The shared type system across the monorepo is your primary architectural differentiator — your `Document`, `Chunk`, `Embedding`, and `AgentTrace` types are defined once in `/types` and used everywhere. The Server/Client Component boundary is still the #1 Next.js interview question.

**Who teaches it best.** TypeScript Handbook (typescriptlang.org) chapters 1–4 for foundations. Matt Pocock (YouTube) for advanced patterns like discriminated unions and generic constraints. Next.js official docs (nextjs.org/docs) for App Router — these are among the best framework docs in the ecosystem.

**What to build.** Dashboard with document list and upload UI as a Server Component. Upload form as a Client Component with a Route Handler at POST /api/documents. Deploy to Vercel on Day 4.

**Build-Break-Explain focus.** After building the upload handler, break it: what happens when you try to access a Server Component's state from a Client Component? What error does TypeScript give when you use `any`? Write a TIL entry explaining the Server/Client Component boundary in your own words — this is the concept you'll be asked about most in Next.js interviews.

**How to prove you learned it.** Every component fully typed. Zero `any`. `tsc --noEmit` passes across the monorepo. You can explain without notes why the dashboard is a Server Component and the upload form is a Client Component.

**Done when:** Dashboard deployed on Vercel. types/ml.ts committed. First LinkedIn build-in-public post.

### Week 2 — Auth, Schema, File Pipeline

**What to learn.** Supabase Auth with Row-Level Security. PostgreSQL schema design: foreign keys, indexes, RLS policies. PDF text extraction with pdf-parse. Text chunking strategies with @langchain/textsplitters.

**Why the project needs it now.** PostgreSQL appears in ~75% of senior postings. RLS prevents the most dangerous production bug — data leakage between users. Chunking strategy is asked at most AI engineer interviews — "How did you choose your chunk size?" reveals whether you understand the tradeoff between context window limits and retrieval precision.

**Who teaches it best.** Supabase docs for Auth + RLS setup. PostgreSQL Tutorial (postgresqltutorial.com) for schema design fundamentals. @langchain/textsplitters npm documentation for chunking API.

**What to build.** Full Postgres schema: users, documents, chunks (with vector column), conversations, messages, agent_traces (with prompt_version field), eval_runs, feedback table (id, message_id, rating, comment, created_at). File upload pipeline: multipart form → Supabase Storage → PDF text extraction → chunking with three strategies compared (fixed-size 512 tokens with 10% overlap, paragraph-based, recursive character). Store chunks with metadata.

**Build-Break-Explain focus.** After implementing RLS, break it: try to query User B's documents as User A by directly calling the Supabase API. Does RLS hold? For chunking, run all three strategies against the same test document and visually compare the chunks — which strategy preserves semantic units? Write a TIL entry documenting your chunking comparison with specific examples of where each strategy wins and loses.

**How to prove you learned it.** User A cannot see User B's documents (RLS verified with a real test). PDF upload produces clean chunks in the database. Three chunking strategies documented with reasoning for your final choice.

**Done when:** RLS verified. Chunks in DB. 3 strategies documented. Feedback table in schema.

### Week 3 — Embeddings + pgvector + Streaming Chat + Citation UX

**What to learn.** How embeddings represent text as vectors. Cosine similarity and why it measures semantic relatedness. pgvector HNSW indexing: how it works, the ef_search/recall/speed tradeoff. Vercel AI SDK v6: streamText() on the server, useChat() on the client, the Server-Sent Events protocol underneath.

**Why the project needs it now.** Vector databases appear in the majority of AI engineer postings. pgvector runs inside PostgreSQL — no extra service. HNSW indexing reduces p99 retrieval from ~800ms (sequential scan) to under 50ms. Understanding how streamText() works under the hood (SSE over Web Streams API) is what impresses interviewers who probe beyond "I used the SDK." This is also the week where you make a conscious product decision about citation UX — how you present sources is what separates your project from every other "chat with PDF" demo.

**Who teaches it best.** Vercel AI SDK docs (ai-sdk.dev) for streamText/useChat — read the source code, not just the API reference. Supabase pgvector guide for setup. pgvector GitHub README for HNSW parameters. For embeddings conceptually: the first 20 minutes of the 3Blue1Brown "Neural Networks" YouTube series gives the geometric intuition for why vectors capture meaning.

**What to build.** Call OpenAI embeddings API from a Route Handler. Store vectors with pgvector-node. Create HNSW index. Build chat UI with streamText() and useChat(). Design the citation interface deliberately: (1) inline source highlights — when the answer references a chunk, the relevant sentence links to the source, (2) expandable source cards — each cited chunk appears as a collapsible card showing original text, document name, and page/section, (3) placeholder for confidence indicator (populated in Week 7 when reranking scores arrive). Measure baseline metrics: query latency (p50, p99), cost per query, retrieval quality for 10 test questions.

**Build-Break-Explain focus.** After HNSW works, break it: drop the index and run the same query. Measure the latency difference. Try queries where cosine similarity fails — "What is NOT mentioned in the document?" — and understand why. Write a TIL entry explaining HNSW in your own words: what is a navigable small world graph? Why does it trade accuracy for speed? What does ef_search control? Write an ADR documenting your citation UX design decisions.

**How to prove you learned it.** Upload PDF → ask question → streaming answer with inline source highlights and expandable source cards. HNSW index created. Can explain without notes what cosine similarity measures, why HNSW is faster than sequential scan, and how ef_search affects the speed/recall tradeoff. Baseline metrics documented.

**Done when:** First working AI product. Citation UX designed. Baseline metrics documented.

### Weeks 4–5 — Agent Layer + LangGraph.js + Feedback Loop + MCP Server

**What to learn (Week 4).** LangGraph.js v1.0: the graph/node/edge mental model, state management, tool orchestration, conditional branching, self-correction patterns. Conversation memory. Agent trace logging. How to build a user feedback mechanism.

**Why the project needs it now.** Agentic AI is the dominant 2026 hiring trend. LangGraph.js v1.0 is in production at LinkedIn, Uber, and 400+ companies. The agent layer transforms DocuMind from a RAG chatbot into a system that reasons about documents. The trace log is the single most impressive artifact you can show an interviewer. The feedback button closes the loop between users and evaluation — a production practice almost no portfolio project includes.

**Who teaches it best.** LangGraph.js docs (langchain-ai.github.io/langgraphjs). Critical: when LangGraph.js docs are sparse, read the Python LangGraph equivalent and translate — the graph/node/edge concepts are identical, only the syntax differs. Vercel AI SDK v6 docs for the new Agent abstraction class.

**What to build (Week 4).** Multi-step agent with LangGraph.js v1.0 that plans research tasks, selects from tools (retriever, comparator, web search), self-corrects when retrieval confidence is low. Log every step to agent_traces with: tool_used, input, output, confidence, latency, cost, prompt_text, and prompt_version (a string like "v1.0"). Add thumbs up/down feedback button below every AI response — when clicked, writes to the feedback table. Optional "what went wrong?" text field on thumbs down.

**What to learn (Week 5).** MCP (Model Context Protocol): the server/client architecture, tool schemas, stdio vs SSE transport, the @modelcontextprotocol/sdk package. User testing methodology.

**Who teaches it best.** Official MCP specification (modelcontextprotocol.io). @modelcontextprotocol/sdk examples. MCP Inspector for debugging. For user testing: Steve Krug's "Don't Make Me Think" chapter on usability testing (30-minute read, covers 80% of what you need).

**What to build (Week 5).** MCP server exposing search_documents, compare_documents, get_document_summary. Test with Claude Desktop or MCP Inspector. Conduct 5 user feedback sessions: watch someone use DocuMind, ask "What did you expect when you clicked that?" and "Would you trust this answer enough to act on it?" Document findings in user-feedback-notes.md.

**Build-Break-Explain focus.** After the agent works, break it: give it a deliberately ambiguous query that spans two documents with contradictory information. Does it self-correct or hallucinate? After the MCP server works, test it from a different MCP client — does the tool schema make sense to a system that has never seen your code? Write a TIL entry explaining the LangGraph.js state management model. Write an ADR explaining why you chose your agent's tool selection strategy. Frame everything as "context engineering."

**How to prove you learned it.** Agent cross-references 2+ documents. Reasoning trace shows step-by-step decision making. Self-correction demonstrated on a tricky query. Thumbs up/down button live and writing to DB. MCP server working with Claude Desktop or MCP Inspector. Can explain the graph/node/edge model without notes. 5 user feedback sessions documented. 10+ real users tested.

**Done when:** Agent + feedback loop + MCP server all working. Part I complete.

**Part I Exit:** Working product on Vercel. Streaming agent with intentionally designed citations. Trace logging with prompt versioning. User feedback collection live. MCP server live. 10+ real users tested. Zero infrastructure hours.

---

## PART II — Plug In the AI Engine (Weeks 6–8)

*Add Python exactly where it makes answers measurably better*

### Week 6 — Python Service Skeleton + /embed + Transformer Intuition

**What to learn.** Python fundamentals for a TypeScript developer: async/await (same concept, different syntax), type hints (optional but use everywhere), Pydantic v2 (like TypeScript interfaces but with runtime validation). FastAPI: the Python equivalent of Next.js Route Handlers. The transformer architecture at a conceptual level: what attention is, why bi-encoders and cross-encoders differ, and why this matters for retrieval quality.

**Why the project needs it now.** Python appears in ~85% of AI engineering postings. FastAPI appears in ~60%. You need just enough Python to build three endpoints and explain them in interviews — not to become a Python expert. The transformer mental model is essential for Week 7 (cross-encoder reranking) and for every interview question about "how does your retrieval actually work?" Without this conceptual understanding, you can build the system but cannot debug it or explain it — and interviewers can tell the difference in 30 seconds.

**Who teaches it best.** For Python: use Cursor aggressively for syntax — focus your learning energy on logic and data flow, not on memorizing the standard library. FastAPI official tutorial (fastapi.tiangolo.com) — it's excellent and takes ~2 hours. For transformer intuition: Jay Alammar's "The Illustrated Transformer" blog post (~45 minutes to read). This single resource gives you the mental model you need. The key concept: a bi-encoder (your embedding model) encodes query and document independently, then compares by cosine similarity. A cross-encoder sees query and document together, allowing full cross-attention between them. This is why cross-encoders are more accurate but slower.

**What to build.** FastAPI service with /health and /embed endpoints. Pytest contract test that validates response shape against TypeScript interfaces. Update TypeScript Route Handler to call /embed instead of OpenAI directly. Run locally with docker-compose.

**Build-Break-Explain focus.** After /embed works, break it: send a request with a malformed body. Does Pydantic catch it? Does the error message help? Compare the Python Pydantic validation experience with TypeScript's compile-time type checking — they solve the same problem at different times. Write a TIL entry explaining bi-encoders vs cross-encoders in your own words — use an analogy (e.g., "a bi-encoder is like comparing two book summaries written independently; a cross-encoder is like having the same person read both books and compare them directly"). This analogy will serve you in interviews.

**How to prove you learned it.** Python /embed returns real vectors. TypeScript calls Python. Contract test passes. You can explain what a transformer does, why cross-encoders outperform bi-encoders for reranking, and what Pydantic's runtime validation gives you that TypeScript's compile-time checking doesn't.

**Done when:** Contract test passing. Mental model built. TIL entry on transformers written.

### Week 7 — /retrieve: Hybrid Search + Cross-Encoder Reranking

**What to learn.** BM25 keyword scoring and why it complements vector search. Reciprocal Rank Fusion: the math and the intuition. Cross-encoder inference: model loading, prediction, and the relationship between cross-attention and ranking quality. Why the two-stage retrieval paradigm (broad retrieval → precise reranking) is the production standard.

**Why the project needs it now.** This is the technical highlight of the entire Python service. Cross-encoders deliver 10–25% accuracy improvement over pure vector retrieval — the kind of measurable improvement that makes RAGAS numbers compelling. Understanding WHY is critical: interviewers will ask "what does the cross-encoder actually do that cosine similarity doesn't?" The answer involves cross-attention: the cross-encoder sees the query and chunk tokens together, allowing it to detect fine-grained relevance that independent encoding misses (e.g., "Q3 revenue" in the query matching "third quarter financial results" in the document — similar meaning, different tokens).

**Who teaches it best.** Sentence-transformers documentation for CrossEncoder API. The original MS MARCO paper abstract (2 minutes, gives you the training data context). For BM25: the Wikipedia article on Okapi BM25 gives the formula and intuition in 10 minutes. For RRF: the Cormack et al. (2009) paper abstract explains the formula in one paragraph.

**What to build.** POST /retrieve: receive query + 50 chunk texts → BM25 score all 50 → RRF fusion → CrossEncoder reranks top 20 → return top 10 with scores. Load model once at startup (module-level global). Wrap predict() in run_in_executor() to avoid blocking async. Update citation UX: source cards now show confidence indicators derived from cross-encoder scores. Run same 10 test questions against Week 3 baseline.

**Build-Break-Explain focus.** After reranking works, break it in three ways. First, remove BM25 and use only vector search — which queries get worse? (Typically exact terminology matches.) Second, remove the cross-encoder and use only RRF — which queries get worse? (Typically complex multi-part questions.) Third, try a query in a language your cross-encoder wasn't trained on. Write a TIL entry documenting these three experiments and what each revealed about the retrieval pipeline. This is gold for interviews — "I systematically tested what each component contributes."

**How to prove you learned it.** Reranked chunks returning with measurable improvement. Can explain the RRF formula and why the constant 60 matters. Can explain what cross-attention does differently from cosine similarity. Three ablation experiments documented.

**Done when:** Improvement visible. Confidence indicators in citation UX. Ablation experiments documented.

### Week 8 — /evaluate: RAGAS as Proof + Evaluation System Design

**What to learn.** RAGAS v0.4: the four metrics and what each actually measures. Evaluation dataset design: what makes a good eval question, how many you need, when to add more. Error categorization: the taxonomy of RAG failures and what each category tells you about where to invest engineering effort. The difference between offline evaluation (RAGAS) and online evaluation (user feedback) and why both matter.

**Why the project needs it now.** Most AI builders measure quality by asking "does it feel better?" RAGAS replaces intuition with numbers. But RAGAS alone is not enough — you need to understand what the numbers mean and what engineering decisions each metric drives. Being able to say "72% of failures were retrieval misses, which validated adding BM25 hybrid search" demonstrates the diagnostic thinking that hiring managers associate with senior engineers. The eval dataset versioning practice is what separates a demo from a real system.

**Who teaches it best.** RAGAS official documentation (docs.ragas.io) — read the v0.4 migration guide before writing a line of code (field names changed from v0.3). For evaluation design: Chip Huyen's "AI Engineering" book, Chapter 8 on evaluation — the best single resource on this topic. For error categorization: the ARES paper (2023) provides the taxonomy of RAG failures.

**What to build.** POST /evaluate endpoint. RAGAS v0.4 with GPT-4o-mini as judge. 20 question/answer pairs with human-written reference answers (eval_v1.json). Run against Week 3 baseline AND Week 7 hybrid pipeline. Build dashboard showing metric trends. Implement error categorization: tag each failure as retrieval_miss, hallucination, partial_answer, or off_topic. Store tags in eval_runs table. Review thumbs-down feedback from Weeks 4–5. Identify the 3–5 most common failure patterns. Add questions targeting these patterns to eval_v2.json with a changelog explaining what changed.

**Build-Break-Explain focus.** After RAGAS works, break it: create a deliberately bad eval question (ambiguous, unanswerable from the documents). What scores does RAGAS produce? Does it detect the question is bad? This teaches you the limits of automated evaluation. Write a TIL entry explaining what each RAGAS metric actually measures and what engineering decisions each one drives. Write an ADR documenting your eval dataset versioning approach.

**How to prove you learned it.** All four RAGAS metrics live. Before/after documented with real numbers. Eval dataset versioned (v1, v2 with changelog). Failures categorized by type with distribution analysis. Can explain what context_precision measures vs context_recall, and why a system could score high on one and low on the other.

**Done when:** RAGAS live. Before/after documented. Eval versioned. Failures categorized. User feedback incorporated.

**Part II Exit:** Three Python endpoints live. RAGAS proves the upgrade worked. Evaluation system includes versioned datasets and categorized failures. You can explain every line of Python and what would break if you removed it.

---

## PART III — Production Grade (Weeks 9–13)

*Redis · Docker · AWS Migration · CI/CD · Benchmarks · SAA-C03 study begins*

### Week 9 — Redis Caching + Observability Dashboard

**What to learn.** Redis data structures and caching patterns. Cache invalidation strategies (TTL-based for embeddings, content-hash-based for CrossEncoder scores). How to build an AI-specific observability dashboard: not just "is the server up?" but "is the AI making better decisions?"

**Why the project needs it now.** Semantic caching reduces embedding API costs by 40–70% for real-world query distributions. Documenting these real savings is what interviewers remember. The observability dashboard with prompt_version filtering lets you correlate quality changes with prompt changes — this is AI-specific ops thinking that most candidates lack.

**Who teaches it best.** ioredis npm documentation for TypeScript Redis patterns. redis-py docs for Python caching. For observability concepts: the Vercel AI SDK observability docs show what production AI monitoring looks like.

**What to build.** Embedding cache in TypeScript (hash chunk text → store vector, skip OpenAI on repeat). CrossEncoder score cache in Python (hash query+chunk → store float). Observability dashboard showing every agent decision: step, tool, confidence, latency, tokens, cost, prompt_version. Prompt version filtering so you can see quality changes across versions.

**SAA-C03 parallel track begins.** Diagnostic practice exam → identify gaps. Begin Stephane Maarek's Udemy course (focus on weak areas). 3–5 hrs/week cert study.

**Build-Break-Explain focus.** After caching works, break it: flush the cache and measure the cost/latency difference for 10 repeated queries. The concrete numbers (e.g., "cache reduced OpenAI calls by 63% for this query distribution") become your interview talking points.

**Done when:** Caches live. Cost savings documented. Dashboard live with prompt_version filtering. SAA-C03 diagnostic done.

### Week 10 — Docker

**What to learn.** Multi-stage Docker builds: why they matter for image size and security. CPU-only PyTorch: why the full PyTorch package is ~800MB and how the CPU-only variant reduces it to ~400MB. Docker Compose for multi-service local development.

**Why the project needs it now.** Docker appears in 65% of senior postings. A single docker-compose command that starts your entire 4-service stack (app, ml-service, postgres, redis) is the sign of a production-ready project. The Python image optimization (CPU-only PyTorch) is exactly the kind of container optimization that interviewers ask about.

**Who teaches it best.** Docker official docs. Next.js Dockerfile deployment guide (nextjs.org/docs/deployment). The PyTorch installation docs (pytorch.org) for understanding CPU vs GPU builds.

**What to build.** Multi-stage Next.js Dockerfile (deps → builder → runner, standalone output). python:3.12-slim FastAPI Dockerfile with CrossEncoder model cached in image layer. docker-compose.yml with 4 services.

**SAA-C03:** Core services — VPC, EC2, S3, IAM, RDS. These map directly to next week's AWS migration. 4–5 hrs cert study.

**Build-Break-Explain focus.** After Docker works, break it: build the Python image without CPU-only PyTorch and compare the image sizes. Try running the Python container with a 256MB memory limit — does the CrossEncoder fit? Write a TIL entry on container optimization.

**Done when:** docker-compose up starts all 4 services. Python image optimized.

### Week 11 — AWS Migration (The Deliberate Upgrade)

**What to learn.** VPC networking: subnets, security groups, internet gateways. ECS Fargate: task definitions, services, load balancers, health checks. S3: bucket policies, presigned URLs, IAM roles. The mental model of how AWS networking differs from managed platforms.

**Why the project needs it now.** AWS appears in ~40–45% of cloud job postings. This week's hands-on work covers ~60% of SAA-C03 exam content through direct experience. The migration narrative — "I shipped on managed services, then deliberately upgraded" — demonstrates product-first thinking.

**Who teaches it best.** AWS ECS Getting Started guide (official, follow step-by-step BEFORE customizing). Stephane Maarek's Udemy course sections on VPC and ECS. For S3 presigned URLs: the AWS SDK documentation has the clearest examples.

**What moves to AWS:** Python ML service → ECS Fargate (0.5 vCPU, 1GB, via ECR). File storage → S3 + presigned URLs. Redis → ElastiCache (optional, Type 2 decision).

**What stays:** Next.js on Vercel. Postgres+Auth on Supabase. For interviews: "I chose Supabase for managed pgvector because migration risk outweighed the benefit, but I'd use RDS Aurora with pgvector for 100K+ users needing read replicas."

**AWS costs:** $25–37/month with EventBridge scheduling (12hrs/day), ~$50/month 24/7. Set $50/month billing alert on Day 1.

**SAA-C03:** Hands-on reinforcement — this week's work IS exam study. 4–5 hrs cert study on advanced services.

**Build-Break-Explain focus.** After ECS works, break it: misconfigure the security group to block the ALB → ECS traffic. Observe the health check failure. This teaches you how AWS networking actually works at a level no tutorial can. Write an ADR documenting the managed → AWS migration decision with specific tradeoffs.

**Done when:** Python ML service on ECS. S3 storage. Health checks passing. Billing alert set.

### Week 12 — CI/CD Pipeline

**What to learn.** GitHub Actions: workflow syntax, parallel jobs, secrets management, deployment strategies. ECR image pushing and ECS task updating. Contract validation testing across service boundaries.

**Why the project needs it now.** CI/CD appears in ~70% of senior postings. The pipeline that deploys ML service first (its contract must be live before the app calls it) demonstrates understanding of deployment ordering in distributed systems.

**Who teaches it best.** GitHub Actions official docs (excellent). AWS ECR/ECS deployment action examples on GitHub Marketplace.

**What to build.** Parallel vitest + pytest → ECR push → ECS update. Deploy order: ML service first. Contract validation tests in both suites.

**SAA-C03:** Disaster recovery patterns, data analytics services, edge services. Practice Exam #1 (Tutorials Dojo). 5–6 hrs cert study.

**Done when:** Push to main deploys both services. Contract tests passing.

### Week 13 — Performance Benchmarks + RAGAS Validation

**What to learn.** Load testing with k6 (HTTP-focused) and locust (Python, good for ML endpoints). pgvector HNSW tuning: ef_search parameter optimization. How to validate that performance optimizations didn't degrade AI quality.

**What to build.** Load tests. HNSW tuning. Run eval_v2.json against production pipeline. Business metrics report: cost per query, p99 latency, cache hit rate, RAGAS before/after, AWS cost, user feedback summary (thumbs up/down ratio, top failure categories). Note in README: "RAGAS should be re-run monthly or after any pipeline change."

**SAA-C03:** Practice Exams #2–3. Focus on cost optimization domain (20% of exam — most common failure area for developers). 6–7 hrs cert study.

**Done when:** Business metrics compiled. RAGAS validated. Practice exams ≥75%.

**Part III Exit:** ML service on AWS. CI/CD automated. Caching documented. Benchmarks compiled. SAA-C03 in passing zone.

---

## PART IV — Polish and Launch (Weeks 14–16)

### Week 14 — Portfolio Launch

**What to build.** GitHub README: problem statement → architecture diagram (including managed → AWS migration story) → three Python endpoints and why → MCP server → RAGAS before/after (with eval version history) → business metrics → "Tradeoffs & Decisions" section → how to run locally. 2-minute Loom demo showing: upload, multi-hop query, citation UX (highlights, cards, confidence), feedback button, reasoning trace, RAGAS dashboard. At least one blog post.

**The three blog posts that get traction.** "How I upgraded RAG retrieval with cross-encoder reranking (and measured it with RAGAS)" — include your ablation experiments. "Building a TypeScript AI app with a Python sidecar: the architecture and the tradeoffs." "I added an MCP server to my RAG app — here's what happened."

**SAA-C03:** Practice Exams #4–5. Target ≥80%. Book exam for Week 16. 7–8 hrs cert study.

**Done when:** Portfolio live. Practice exams ≥80%. Exam scheduled.

### Week 15 — System Design + Interview Prep

**Seven questions to answer without notes:**

1. **Why two services?** CrossEncoder and RAGAS are Python-only. Embeddings moved for local model path.
2. **How does retrieval work?** pgvector HNSW (50) → BM25 → RRF → CrossEncoder (20→10). ~100–150ms.
3. **How do you evaluate?** RAGAS v0.4, versioned eval dataset, error categorization. "72% retrieval misses → validated BM25."
4. **What's MCP for?** Standard protocol. Any AI agent can query my pipeline.
5. **Why not AWS from day one?** Product shipped first. Migrated deliberately. Understood exactly what AWS gave me because I had the baseline.
6. **How do you handle AI failures?** Four categories tracked via RAGAS. User feedback is leading indicator. Eval dataset versioned to target specific failure types.
7. **Scale to 100K users?** Async ingestion (S3→SQS→worker). Redis cache (40–70% savings). pgvector read replicas. ECS auto-scaling. Scheduled RAGAS drift detection.

Record yourself. Watch it back. Do it three times. The gap between what you think you know and what comes out of your mouth is where preparation fails.

**SAA-C03:** Practice Exam #6 (confidence check). Light review. 5–6 hrs cert study.

**Done when:** Architecture under 3 minutes. All 7 questions answered without notes. Practice exam ≥80%.

### Week 16 — SAA-C03 Exam + Final Polish

**Take the exam.** Online via Pearson VUE (available 24/7 from Vietnam). ESL +30 minute accommodation available. 65 questions, 720/1000 to pass. $150. After passing: 50% discount voucher for next cert.

**Final polish.** Add SAA-C03 badge to README. Verify all links. Confirm demo URL is live. Begin job applications.

**Done when:** SAA-C03 PASSED. Portfolio polished. Applications underway.

---

## SAA-C03: 8-Week Parallel Study Plan

| Week | Focus | Cert Hrs | Project Hrs |
|---|---|---|---|
| 9 | Diagnostic + Maarek course (weak areas) | 3–5 | 10–12 |
| 10 | Core: VPC, EC2, S3, IAM, RDS | 4–5 | 10–12 |
| 11 | Advanced + hands-on AWS migration | 4–5 | 12–15 |
| 12 | Security + resilience + Practice Exam #1 | 5–6 | 8–10 |
| 13 | Cost + performance + Practice Exams #2–3 | 6–7 | 8–10 |
| 14 | Practice Exams #4–5 + gap fill. Book exam. | 7–8 | 8–10 |
| 15 | Practice Exam #6 + light review | 5–6 | 5–8 |
| 16 | Final review + TAKE EXAM | 4–6 | 3–5 |

**Resources.** Stephane Maarek (Udemy, ~27hrs, $15–20 on sale) + Tutorials Dojo practice exams (Jon Bonso, 400+ questions). Split: 30–40% video, 35–40% practice exams with review, 20–25% hands-on.

---

## 16-Week Execution Table

| Wk | Learn | Build | SAA-C03 | Ship |
|---|---|---|---|---|
| D0 | MVP Planning | architecture.md + types/ml.ts + CLAUDE.md | — | Docs before code |
| 1 | TS types (Handbook ch1–4) + App Router (Next.js docs) | Dashboard + upload UI | — | Deployed. Zero any. |
| 2 | Supabase Auth + RLS + chunking strategies | Auth + schema + PDF → chunks | — | RLS verified. 3 strategies. |
| 3 | Embeddings (3B1B) + pgvector + AI SDK v6 (source code) | HNSW + streaming + citation UX | — | First AI product. Baseline metrics. |
| 4 | LangGraph.js v1.0 (docs + Python examples) | Agent + traces (w/ prompt_version) + feedback button | — | Agent cross-refs. Feedback live. |
| 5 | MCP SDK + user testing | MCP server + 5 user sessions | — | MCP working. Feedback documented. |
| 6 | Python (FastAPI tutorial) + transformers (Illustrated Transformer) | /embed + contract test | — | TS calls Python. Mental model built. |
| 7 | BM25 + RRF + CrossEncoder (sentence-transformers docs) | /retrieve + confidence UX + ablation experiments | — | Improvement visible. Ablations documented. |
| 8 | RAGAS v0.4 (docs + Chip Huyen Ch.8) + eval design | /evaluate + dashboard + versioning + error categories | — | Before/after documented. Failures categorized. |
| 9 | Redis patterns (ioredis docs) + observability | Caches + dashboard | Begin study | Cost savings documented. |
| 10 | Docker (official docs + Next.js guide) | 2 Dockerfiles + compose | Core services | docker-compose works. |
| 11 | AWS ECS + VPC + S3 (Maarek + official tutorials) | ML service → Fargate, Storage → S3 | Hands-on reinforcement | ML service on AWS. |
| 12 | GitHub Actions (official docs) | CI/CD → ECR → ECS | Practice Exam #1 | Push deploys both. |
| 13 | k6 + locust + HNSW tuning | Benchmarks + RAGAS validation | Practice Exams #2–3 | Business metrics compiled. |
| 14 | Portfolio + blogging | README + Loom + blog post | Practice Exams #4–5 | Portfolio live. |
| 15 | System design (record yourself) | Interview prep (7 questions) | Practice Exam #6 | Explanation <3min. |
| 16 | Final polish | SAA-C03 EXAM | **EXAM** | Certified. Applying. |

---

## Weekly Rhythm (Weeks 1–8: Build-Break-Explain)

| Day | Hours | Focus |
|---|---|---|
| Monday | 1.5 hrs | Plan the week. Read docs for the new skill (not tutorials — primary docs). |
| Tuesday | 2 hrs | **Build.** Scaffold the feature. Write core logic by hand. AI for syntax only. |
| Wednesday | 2.5 hrs | **Build.** Core implementation. Longest session. Resist AI for logic. |
| Thursday | 2.5 hrs | **Break.** Deliberately break what you built. Edge cases. Remove components. Observe failures. |
| Friday | 2 hrs | **Explain.** Polish feature. Write 1–2 TIL entries. 15-min self-code-review of week's commits. |
| Saturday | 2 hrs | Deploy. LinkedIn build-in-public post. Write ADR if applicable. |
| Sunday | Rest | Do not work on DocuMind. Diffuse mode processing. |

### Weekly Rhythm (Weeks 9–16: Project + SAA-C03)

| Day | Hours | Focus |
|---|---|---|
| Monday | 1.5 hrs | Plan project work. |
| Tuesday | 2 hrs | Project: build. |
| Wednesday | 2.5 hrs | Project: core implementation. |
| Thursday | 2 hrs | Project: break + debug. |
| Friday | 1 hr project + 1.5 hrs cert | Finish project + SAA-C03 video/reading. |
| Saturday | 1 hr project + 2 hrs cert | Deploy + SAA-C03 practice questions. |
| Sunday | 1.5 hrs cert only | SAA-C03 study only. Light review. |

---

## Job Targeting

| Range | Feasibility | Requires |
|---|---|---|
| $50K–$70K | Realistic first target | Portfolio + SAA-C03 + right company |
| $70K–$80K | Achievable | Top portfolio + location-agnostic company |
| $80K–$100K | Stretch (12–24 months) | Track record + specialized demand |

| Company | Why | Est. TC |
|---|---|---|
| Supabase (remote-first) | Built on their stack, graduated to AWS | $70K–$110K |
| Automattic (81+ countries) | TS-primary AI roles | $60K–$90K |
| GitLab (65+ countries) | Duo Chat uses Python AI backends | $55K–$75K |
| Vercel (APAC presence) | Next.js company, AI SDK v6 | $70K–$110K |
| Sourcegraph (remote-first) | AI code intelligence | $70K–$100K |
| AI Startups (Wellfound/HN) | Flexible, global rates | $60K–$100K |
| Toptal / Arc.dev | Premium freelance rates | $80–$150/hr |

---

## Anti-Failure Protocol

### Hardest Weeks

| Week | Problem | Solution |
|---|---|---|
| 5 — MCP | SDK docs sparse, transport gotchas | Official examples → MCP Inspector → Claude Desktop. stdio first, SSE second. |
| 7 — CrossEncoder | PyTorch blocks async, 3–5s load | Module-level global. run_in_executor(). curl before TypeScript. |
| 11 — AWS | ECS + VPC + SGs + ALB is config-heavy | Deploy Python first. Health check → 200 before anything. $50/mo billing alert. |

### Fallback Hierarchy

**RAGAS + error categorization > MCP server > AWS deployment > cross-encoder reranking > Redis caching > load tests > SAA-C03 (defer 2–4 weeks, don't skip).**

---

## Accountability Checklist

- **D0** [ ] architecture.md + types/ml.ts + CLAUDE.md. /docs/til and /docs/adr created.
- **Wk 1** [ ] Dashboard on Vercel. Zero any. First LinkedIn post. 2+ TIL entries.
- **Wk 2** [ ] RLS verified. Chunks in DB. 3 strategies documented. Feedback table. 2+ TILs.
- **Wk 3** [ ] First AI product with citation UX. Baseline metrics. HNSW TIL. Citation UX ADR.
- **Wk 4** [ ] Agent cross-refs. Traces with prompt_version. Feedback button live. 2+ TILs.
- **Wk 5** [ ] MCP working. 5 user sessions documented. 10+ users. LangGraph TIL.
- **Wk 6** [ ] Python /embed live. Contract test. Transformer TIL (bi-encoder vs cross-encoder).
- **Wk 7** [ ] /retrieve live. Confidence UX. 3 ablation experiments documented. 2+ TILs.
- **Wk 8** [ ] RAGAS live. Eval versioned (v1, v2). Failures categorized. Eval design ADR.
- **Wk 9** [ ] Caches live. Dashboard with prompt_version. SAA-C03 diagnostic done.
- **Wk 10** [ ] docker-compose works. Images optimized. Container optimization TIL.
- **Wk 11** [ ] ML service on ECS. S3 storage. Billing alert. Migration ADR.
- **Wk 12** [ ] CI/CD automated. Practice Exam #1 done.
- **Wk 13** [ ] Benchmarks + RAGAS validated. Practice Exams #2–3 ≥75%.
- **Wk 14** [ ] Portfolio live. Blog post. Practice Exams #4–5 ≥80%. Exam scheduled.
- **Wk 15** [ ] 7 questions without notes. Under 3 min. Practice Exam #6 ≥80%.
- **Wk 16** [ ] SAA-C03 PASSED. Portfolio polished. Applying.

---

## Post-Program

**Weeks 17–20:** Active applications (5–10/week). AWS AI Practitioner ($100, 2–3 weeks) as add-on.

**Months 5–8:** Land $60K–$80K role. Continue DocuMind if entrepreneurship energy is there.

**Months 9–18:** Deepen to AWS ML Engineer Associate. Evaluate entrepreneurship switch.

**AWS Activate:** $1,000 credits for bootstrapped startups, up to $100K for VC-backed. Your SAA-C03 + production AWS experience makes application straightforward.

---

**Ship TypeScript first. Add Python where it proves itself. Expose via MCP. Design citations intentionally. Collect feedback. Version your evaluations. Categorize your failures. Build, break, explain. Start managed, migrate to AWS deliberately. Measure everything. Get certified.**
