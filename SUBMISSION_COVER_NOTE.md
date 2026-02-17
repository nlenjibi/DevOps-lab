# Submission Cover Note — Mapping Requirements to Evidence

This note maps common assignment requirements to the exact files, commands, and tests in this repo so an evaluator can quickly verify each item.

- Automated tests (unit & integration):
  - Files: `app/test/front.test.js`, `app/test/health.test.js`, `app/test/tracing.test.js`
  - Run: `cd app && npm test`

- Linting:
  - Files: `app/package.json` (`lint` script), ESLint config if present
  - Run: `cd app && npm run lint`

- CI (lint + tests):
  - File: `.github/workflows/ci.yml` (if present)
  - Evidence: CI run link or screenshot showing workflow passing on push/PR

- Docker / Containerization:
  - Files: `app/Dockerfile`, `compose.yaml`
  - Run: `docker compose up --build` (or `docker build` + `docker run`)

- Health endpoint & logging:
  - Files: `app/server.js` (registers routes), `app/config/logger.js`
  - Verify: `curl http://localhost:3000/health` → expect JSON response

- Tracing / observability:
  - Files: `app/tracing/opentelemetry.js`, `app/middleware/tracing.js`
  - Test: `app/test/tracing.test.js` checks tracing headers (`X-Request-Id`) and propagation

- Validation & centralized error handling:
  - Files: `app/routes/front.js`, `app/server.js` (error handling middleware)

- Data model:
  - File: `app/models/Todo.js` (Mongoose schema)

- Views / UI:
  - File: `app/views/todos.ejs`

- Commit history / incremental commits:
  - File: `COMMIT_EXAMPLES.md` — use this as guidance to show sequential commits and messages
  - Evidence: include a `git log --oneline --decorate --graph -n 10` snippet or link to commit list

Quick evidence commands to include with your submission (copy/paste outputs):

```powershell
cd app
npm run lint
npm test
curl http://localhost:3000/health
docker compose up --build -d
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"
git --no-pager log --oneline -n 10
```

Notes for the evaluator:

- If CI workflow file is absent, run the lint and tests locally and attach output/screenshot.
- If the app expects environment variables (e.g., Mongo connection), mention that in your submission and include the minimal command used in your environment.

If you want, I can:

- Attach the exact output of `npm test` from my environment (if you want me to run tests here).
- Add these verification commands as a small script (e.g., `verify-submission.ps1`) in the repo for graders to run.
