# Sprint 1 — Execution Summary

## Sprint Goal

Deliver a stable CRUD increment for the Todo REST prototype: create, list, update (mark complete). Provide automated tests and CI to demonstrate delivery discipline.

## Delivered Work

- Core endpoints: `POST /` (create), `GET /` (list), `POST /todo/destroy` (delete) and update via existing form flow.
- Project structure: kept existing Express routes and `models/Todo` (Mongoose).
- Tests: Jest + Supertest tests added at `app/test/front.test.js` (mocked model).
- CI: GitHub Actions workflow added at `.github/workflows/ci.yml` to run tests on `develop` and `main`.

## How to run locally

From repository root:

```powershell
cd app
npm install
npm test
npm run dev   # to run with nodemon
```

## Evidence to collect for grading

- Screenshots of passing GitHub Actions build (CI run).
- Output of `npm test` showing test pass.
- Example API request/response screenshots (Postman or curl).
