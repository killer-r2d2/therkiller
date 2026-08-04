# PR Readiness Workflow

Use this workflow after implementation work and before creating or preparing a pull request.

## Checks

1. Confirm the current branch is not `main` or `master`.
2. Confirm the branch scope matches the Jira issue or user request.
3. Inspect `git status --short` for unrelated, generated, dependency, or content changes.
4. Run the triage workflow.
5. Run the ZOMBIES review workflow when behavior or UI changed.
6. Check whether the change needed a spec under `.agent-specs/changes/`.
7. If a spec exists, run the spec-verify workflow and confirm implementation matches `proposal.md`, `design.md`, and `tasks.md`.
8. Confirm repository instructions in `AGENTS.md` were followed.
9. Confirm `scripts/verify.sh` was run, or document why it was not run.
10. Confirm the PR description can include scope, references, and verification notes.

## Verdicts

- `Ready`: no blocking issues.
- `Ready with notes`: acceptable to open PR, but the reviewer should see specific caveats.
- `Not ready`: blocking issue, unrelated changes, missing scope clarity, or required verification not done.

## Output

Use this shape:

```markdown
**PR Readiness: Ready | Ready with notes | Not ready**

**Blocking Issues**

- ...

**Notes For PR**

- Scope: ...
- References: ...
- Verification: ...
```

If a section does not apply, omit it.
