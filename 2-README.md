# Last Light
A new, local-first semantic story archive for DEV Hacktoberfest Week 4.

Status: prototype. Not submitted. No prize or eligibility claim.

## Run
Node 22+: `npm ci`, `npm run dev`, then open the local Vite URL.
`npm test` runs deterministic search-function tests. `npm run build` produces the browser app.

## What it actually does
The open Apache-2.0 all-MiniLM-L6-v2 model, through Transformers.js, embeds paragraphs and queries locally in a browser worker. Results quote the original passages unchanged. No generative impersonation, synthesis or conversation with the deceased.

First use downloads model/runtime assets from Hugging Face. Stories are not included in those requests. No full-offline guarantee until model/runtime caching is verified. No analytics or app backend. Text and embeddings stay in tab memory, not durable storage. The prototype does not persist an archive after closing the tab.

Samples are fictional. Import only text you have the right to use. Similarity scores are not truth or evidence of identity. The archive may miss the passage you want.

## Dependencies and attribution
- Transformers.js: Apache-2.0, https://github.com/huggingface/transformers.js
- all-MiniLM-L6-v2: Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2
- Vite: MIT
- System fonts only. No remote font requests.

AI-assisted research and implementation. No claim of manually authored-only development.
