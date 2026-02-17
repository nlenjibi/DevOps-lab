This project demonstrates the application of Agile and DevOps practices through the development of a Todo application.

## Final Checklist

| Requirement         | How I Met It                                                                   | Evidence Location                                                                      |
| ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Agile Practice      | Created product backlog, sprint plans, user stories with acceptance criteria   | README_SPRINT1.md, README_SPRINT2.md                                                   |
| DevOps Practice     | Implemented CI/CD pipeline, automated tests, logging, health endpoint, tracing | .github/workflows/ci.yml, app/test/, app/config/logger.js, app/server.js, app/tracing/ |
| Delivery Discipline | Used Git with conventional commits and incremental progress                    | Commit history, COMMIT_EXAMPLES.md                                                     |
| Prototype Quality   | Built working Todo app with Docker support                                     | /app directory, compose.yaml                                                           |
| Reflection          | Conducted sprint retrospectives with actionable improvements                   | SPRINT1_RETROSPECTIVE.md, SPRINT2_RETROSPECTIVE.md                                     |

## Notes

- CI workflow: `.github/workflows/ci.yml` (lint + test on push/PR)
- Tests: `app/test/` (Jest + Supertest)
- Docker: `app/Dockerfile` and `compose.yaml` for multi-container runs

## Key lessons learned

Applying Agile and DevOps together made the project more predictable and easier to iterate on. Short sprints and incremental commits helped surface integration problems early. Automating linting, testing and a CI pipeline reduced manual verification work and increased confidence when making changes. Observability (logging and tracing) proved valuable when diagnosing runtime behavior during containerized and local runs.
