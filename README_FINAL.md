# Final Deliverables — Agile & DevOps Lab

This file aggregates the Sprint plans, artifacts, CI, tests, and evidence checklist for submission.

Overview

- Project: Todo REST API (Node.js / Express)
- Location of important artifacts:
  - Sprint 0 & Backlog: [README_SPRINT1.md](README_SPRINT1.md)
  - Sprint 1 docs: [README_SPRINT1.md](README_SPRINT1.md), [SPRINT1_REVIEW.md](SPRINT1_REVIEW.md), [SPRINT1_RETROSPECTIVE.md](SPRINT1_RETROSPECTIVE.md)
  - Sprint 2 docs: [README_SPRINT2.md](README_SPRINT2.md), [SPRINT2_REVIEW.md](SPRINT2_REVIEW.md), [SPRINT2_RETROSPECTIVE.md](SPRINT2_RETROSPECTIVE.md)
  - CI workflow: [.github/workflows/ci.yml](.github/workflows/ci.yml)
  - Tests: `app/test/` (Jest + Supertest)
  - Server entry: `app/server.js`

# Final Deliverables — Agile & DevOps Lab

This file aggregates the Sprint plans, artifacts, CI, tests, and evidence checklist for submission.

Overview

- Project: Todo REST API (Node.js / Express)
- Location of important artifacts:
  - Sprint 0 & Backlog: [README_SPRINT1.md](README_SPRINT1.md)
  - Sprint 1 docs: [README_SPRINT1.md](README_SPRINT1.md), [SPRINT1_REVIEW.md](SPRINT1_REVIEW.md), [SPRINT1_RETROSPECTIVE.md](SPRINT1_RETROSPECTIVE.md)
  - Sprint 2 docs: [README_SPRINT2.md](README_SPRINT2.md), [SPRINT2_REVIEW.md](SPRINT2_REVIEW.md), [SPRINT2_RETROSPECTIVE.md](SPRINT2_RETROSPECTIVE.md)
  - CI workflow: [.github/workflows/ci.yml](.github/workflows/ci.yml)
  - Tests: `app/test/` (Jest + Supertest)
  - Server entry: `app/server.js`

How to run locally

1. Install dependencies and run tests

```powershell
cd app
npm install
npm run lint
npm test
```

2. Run the app (development)

```powershell
cd app
npm run dev
```

CI / Evidence checklist (for grading)

- [ ] CI runs on `develop` and `main` with lint and tests passing (see [.github/workflows/ci.yml](.github/workflows/ci.yml)).
- [ ] Tests present and passing: `app/test/front.test.js`, `app/test/health.test.js`, `app/test/tracing.test.js`.
- [ ] Logging and health: `app/config/logger.js`, `GET /health` returns JSON.
- [ ] Validation and centralized error handling implemented in `app/routes/front.js` and `app/server.js`.
- [ ] Tracing: request-id middleware at `app/middleware/tracing.js`, responses include `X-Request-Id` header and logs include request id.
- [ ] README files and Sprint Review/Retrospectives attached: Sprint 1 and Sprint 2.

Submission notes

- Include screenshots or links to CI runs and `npm test` output.
- Provide the git commit history showing incremental commits (see [COMMIT_EXAMPLES.md](COMMIT_EXAMPLES.md) for guidance and commands to simulate incremental commits if needed).
