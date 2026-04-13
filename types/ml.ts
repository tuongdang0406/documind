/**
 * Shared ML service interface contracts.
 * These mirror the Python FastAPI endpoint signatures exactly.
 * Import from here — never redefine these types locally.
 *
 * Endpoints:
 *   POST /embed     → EmbedRequest / EmbedResponse
 *   POST /retrieve  → RetrieveRequest / RetrieveResponse
 *   POST /evaluate  → EvalRequest / EvalBatchResponse
 */

// ---------------------------------------------------------------------------
// POST /embed
// ---------------------------------------------------------------------------

export interface EmbedRequest {
  text: string;
}

export interface EmbedResponse {
  embedding: number[];
  model: string;
  tokens?: number;
}

// ---------------------------------------------------------------------------
// POST /retrieve
// ---------------------------------------------------------------------------

export interface RetrieveChunk {
  text: string;
  id: string;
  metadata?: Record<string, unknown>;
}

export interface RetrieveRequest {
  query: string;
  chunks: RetrieveChunk[];
}

export interface RetrieveResult {
  id: string;
  score: number;
  rank: number;
}

export interface RetrieveResponse {
  results: RetrieveResult[];
}

// ---------------------------------------------------------------------------
// POST /evaluate
// ---------------------------------------------------------------------------

export type ErrorCategory =
  | 'retrieval_miss'
  | 'hallucination'
  | 'partial_answer'
  | 'off_topic';

export interface EvalSample {
  q: string;
  reference_answer: string;
  context: string[];
  llm_answer?: string;
}

export interface EvalResult {
  context_precision: number;
  context_recall: number;
  answer_faithfulness: number;
  answer_relevancy: number;
  error_category?: ErrorCategory;
}

export interface EvalRequest {
  queries: EvalSample[];
}

export interface EvalBatchResponse {
  results: EvalResult[];
}
