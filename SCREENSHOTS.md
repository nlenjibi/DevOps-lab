# Screenshots Guide

This document provides a lightweight template and instructions for capturing the screenshots reviewers will expect. Save all screenshots in the repository folder `/screenshots/` and commit them alongside your submission.

Recommended filenames (use PNG):

- `app-running.png` — Application running in browser
- `test-output.png` — `npm test` console output
- `docker-ps.png` — `docker ps` command output
- `ci-pipeline.png` — Successful GitHub Actions pipeline run
- `lint-output.png` — `npm run lint` console output

General tips

- Use a readable terminal font and increase window width so outputs are not wrapped.
- Include the full browser URL bar (http://localhost:3000) for the app screenshot.
- Prefer 1280×720 or higher for clarity; crop out unrelated UI chrome.
- Use a single screenshot per file and write a short caption in the markdown.

1. App running (browser)

[Screenshot: App running in browser]

Caption: Browser window showing the Todo application at `http://localhost:3000`. Evaluators should confirm the UI renders and the address bar shows `localhost:3000`.

Suggested capture command/notes:

"Open http://localhost:3000 in your browser and capture the window." Save as `/screenshots/app-running.png`.

2. Successful test run (`npm test`)

[Screenshot: npm test output]

Caption: Terminal showing a successful `npm test` run (all tests passing). Evaluators should notice the final summary and status (e.g., `Tests: 10 passed`).

Suggested terminal command:

```bash
cd app
npm test -- --runInBand
```

Save output screenshot as `/screenshots/test-output.png`.

3. Docker containers running

[Screenshot: docker ps output]

Caption: Terminal output of `docker ps` showing the running container(s), image, status and exposed ports.

Suggested command:

```bash
docker ps
```

Save as `/screenshots/docker-ps.png`.

4. Successful CI pipeline run (GitHub Actions)

[Screenshot: CI pipeline run]

Caption: GitHub Actions page showing the workflow run for `.github/workflows/ci.yml` completed successfully. Evaluators should be able to see the workflow name, run status (green check), and relevant job names (lint, test).

Suggested capture: Open `https://github.com/nlenjibi/DevOps-lab/actions` and capture the run details for the most recent successful run. Save as `/screenshots/ci-pipeline.png`.

5. Linting passing (`npm run lint`)

[Screenshot: lint output]

Caption: Terminal showing the `npm run lint` execution with no errors (or only allowed warnings). Evaluators should see a successful exit or summary.

Suggested command:

```bash
cd app
npm run lint
```

Save as `/screenshots/lint-output.png`.

How to reference screenshots in `README.md`

Use standard markdown image links to embed or link screenshots. Example:

```markdown
![App running](screenshots/app-running.png)
```

Where to save

- Create a top-level folder `screenshots/` in the repository root and add the PNG files named above.
- Commit them with your changes so reviewers can view them from GitHub.

That's it — follow these templates and your submission will include clear, reproducible evidence for grading.
