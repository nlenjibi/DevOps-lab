# DevOps Lab — Todo App (Final Submission)

This repository contains a small Todo web app and supporting DevOps artifacts demonstrating containerization, automated testing, observability, and CI.

## Submission Checklist (evidence)

Mark items you have completed; each bullet includes pointers to where the evidence lives in the repo.

- [ ] Dockerized app: [app/Dockerfile](app/Dockerfile) and service composition in [compose.yaml](compose.yaml)
- [ ] Start/Run with Docker Compose: `docker compose up --build` (see [compose.yaml](compose.yaml))
- [ ] Automated tests (unit & integration): tests in [app/test/](app/test/) — run with `npm test` (see `test` script in [app/package.json](app/package.json))
- [ ] Linting: ESLint configured; run `npm run lint` (see `lint` script in [app/package.json](app/package.json))
- [ ] Health endpoint and basic logging: [app/config/logger.js](app/config/logger.js) and `GET /health` (implemented in [app/server.js](app/server.js))
- [ ] Tracing/instrumentation: OpenTelemetry setup in [app/tracing/opentelemetry.js](app/tracing/opentelemetry.js) and middleware at [app/middleware/tracing.js](app/middleware/tracing.js)
- [ ] CI workflow: CI configuration (lint + test) in [.github/workflows/ci.yml](.github/workflows/ci.yml) if present
- [ ] Project documentation and Sprint artifacts: [README_SPRINT1.md](README_SPRINT1.md), [README_SPRINT2.md](README_SPRINT2.md), [SPRINT1_REVIEW.md](SPRINT1_REVIEW.md), [SPRINT2_REVIEW.md](SPRINT2_REVIEW.md)

If any checklist item is unchecked, include a short note in the submission explaining why and where partial evidence exists.

## Quick start — local development

Prerequisites: Node.js (14+), npm, Docker (optional for container run).

1. Install dependencies

```powershell
cd app
npm install
```

2. Run tests and lint

```powershell
npm run lint
npm test
```

3. Start the app (development)

```powershell
npm run dev
# or for production-style start
npm start
```

4. Start with Docker Compose

```powershell
docker compose up --build
```

API now available at http://localhost:3000 (default). Health endpoint: `GET /health`.

## Project structure (key files)

- [app/server.js](app/server.js) — Express server and routes registration
- [app/routes/front.js](app/routes/front.js) — Primary routes / controllers
- [app/models/Todo.js](app/models/Todo.js) — Mongoose model (data layer)
- [app/views/todos.ejs](app/views/todos.ejs) — Simple EJS view
- [app/tracing/opentelemetry.js](app/tracing/opentelemetry.js) — OpenTelemetry bootstrap
- [app/middleware/tracing.js](app/middleware/tracing.js) — request ID / tracing middleware
- [app/config/logger.js](app/config/logger.js) — Winston logger setup
- [app/test/](app/test/) — Jest + Supertest tests
- [app/Dockerfile](app/Dockerfile) — container image for the app
- [compose.yaml](compose.yaml) — service composition for local multi-container runs

## API Endpoints (examples)

- `GET /` — main page
- `GET /health` — service health (JSON)
- Additional routes are defined in [app/routes/front.js](app/routes/front.js). Use the tests in [app/test/](app/test/) as concrete examples of expected behavior.

## Observability

- Application logs are written using the logger in [app/config/logger.js](app/config/logger.js).
- Request tracing and context propagation are set up in [app/tracing/opentelemetry.js](app/tracing/opentelemetry.js) and enabled by middleware in [app/middleware/tracing.js](app/middleware/tracing.js). Check `app/test/tracing.test.js` for test coverage of tracing headers.

## CI / Grading guidance

Provide the following when submitting for evaluation:

- A passing CI run (link or screenshot) showing lint and tests executed on push or PR. CI config (if used) lives at [.github/workflows/ci.yml](.github/workflows/ci.yml).
- Test output from running `npm test` locally (paste or attach console output).
- Docker image built via `docker build` or `docker compose` and a note showing the running container (or screenshot).
- Short notes for any checklist items that are incomplete.

## Notes & troubleshooting

- If tests fail, run `npm run lint` first and fix lint issues, then `npm test`.
- If you need to reset the DB (app uses an in-memory or local Mongo instance depending on configuration), see `app/config/keys.js` for environment variables.



