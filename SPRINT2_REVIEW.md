# Sprint 2 — Review

## What was delivered

- Observability: `morgan` request logging forwarded to `winston`.
- Robustness: centralized error middleware and input validation for `POST /`.
- Operability: `/health` endpoint returning service status and uptime.
- CI: ESLint added to pipeline; CI fails on lint/test failures.

## Acceptance Evidence

- CI run showing lint and tests passing.
- Logs demonstrating request-level entries (console or saved output).
- `GET /health` sample response JSON.

## Demonstration notes

- Run `cd app && npm run dev` and show `/health` and form behavior; display lint and test outputs.
