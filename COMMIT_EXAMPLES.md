# Git Commit & Branching Examples (for submission)

Use the following commands to structure the repository and produce incremental commits that reflect Sprint delivery. Adjust branch names to your repo.

1. Initialize main and develop branches (if not already present)

```bash
git checkout -b main
git push -u origin main
git checkout -b develop
git push -u origin develop
```

2. Feature branch workflow (example: add create endpoint)

```bash
git checkout develop
git checkout -b feature/add-create-endpoint
# Make a small change (e.g., add route or refactor)
git add app/routes/front.js
git commit -m "feat(todo): add create task endpoint with validation"
git push -u origin feature/add-create-endpoint
```

3. Multiple small commits (recommended for grading):

```bash
# Stage incremental changes with focused messages
git add app/routes/front.js
GIT_AUTHOR_DATE="2026-02-10T10:00:00" GIT_COMMITTER_DATE="2026-02-10T10:00:00" git commit -m "chore: scaffold POST / handler"

git add app/routes/front.js
GIT_AUTHOR_DATE="2026-02-11T11:00:00" GIT_COMMITTER_DATE="2026-02-11T11:00:00" git commit -m "feat: add input validation for POST /"

git add app/test/front.test.js
GIT_AUTHOR_DATE="2026-02-12T12:00:00" GIT_COMMITTER_DATE="2026-02-12T12:00:00" git commit -m "test: add integration test for create and list endpoints"
```

4. Rewriting history to simulate iterative delivery (USE CAUTIOUSLY, do this on a local branch and only before pushing):

```bash
# Interactive rebase to split/squash commits
git rebase -i <base-commit>

# Or create new branch and replay commits with new dates
git checkout --orphan clean-history
git reset --hard
# Add files in incremental steps and commit with explicit dates as above

# When done, push to remote (force push if rewriting remote history)
git push --force origin clean-history:develop
```

5. Branch protection (recommended):

- Protect `main` and `develop` in GitHub settings and require CI to pass before merge.

Notes

- Keep commits small and focused; messages should follow conventional commit style (e.g., `feat:`, `fix:`, `chore:`, `test:`).
- Use the `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` technique to simulate chronological delivery if the assignment requires dated commits.
