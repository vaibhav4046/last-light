# Last Light

A browser-local candidate passage finder for remembered stories. Hackathon prototype, not submitted.

Paste a copy of a story or transcript, search in your own words, then inspect an unchanged passage. Results are candidates, not answers. The detail you asked for may be absent. The app does not imitate a person or preserve an archive.

## Run
Node 22+: `npm ci`, `npm run dev`. `npm test` runs 11 deterministic function tests; `npm run build` creates the app.

## What is local
The Apache-2.0 Xenova/all-MiniLM-L6-v2 model through Transformers.js embeds paragraphs and queries in a browser worker. App code has no content-upload endpoint, backend or analytics. First use downloads model/runtime assets from Hugging Face/CDN. This is not a security audit or a full-offline guarantee. Text and embeddings live in tab memory; refresh or close loses them. Keep the original file.

## Evidence and failures
`evidence/qualification-set.json` is a developer-authored fictional set frozen before execution: 18 passages, 16 answerable queries and 8 unanswerable. Embeddings top-1 15/16, top-3 16/16; keyword overlap 9/16, BM25 11/16. This is not independent user research, PMF, or proof of superiority across documents. No model tuning.

The model ranked the wrong factory passage above the hospital-roof passage for a wages question. All eight unanswerable questions still return passages. No-answer top similarity can exceed answerable similarity. No confidence threshold is presented as answerability. Verify the original text; a result is not a factual answer.

Passage numbers and one-based UTF-16 character positions identify exact spans in the pasted source. Show in source selects that span; Copy exact passage copies only the original words. Long paragraphs split into overlapping excerpts. Maximum input 60,000 characters; up to 200 passages. English embedding model; no multilingual quality claim.

## Competition and scope
Midzimu covers a richer family archive. SemanticFinder and SearchThing provide local passage/hybrid search. Last Light is a small focused remembrance experience, not a novelty or commercial-advantage claim.

## Attribution
- Transformers.js, Apache-2.0: https://github.com/huggingface/transformers.js
- all-MiniLM-L6-v2, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2
- Vite, MIT. System fonts, no remote fonts.
- Samples and evaluation text are fictional and developer-authored. Import only material you may use.

AI-assisted research and implementation. No claim of manually authored-only work, contest eligibility, prize or win odds. Code license: MIT; dependencies retain their licenses.
