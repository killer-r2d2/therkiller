# Ship Workflow

Use this workflow after implementation when completed work should be verified, committed, pushed, and prepared for a manually created pull request. It orchestrates the existing PR-readiness gate; it does not replace it.

## Completion Contract

Report work as `Prepared` only when all of the following are true:

- PR readiness has no blocking issues.
- Required verification passed, or any documented exceptions are acceptable for `Ready with notes`.
- Only task-related changes are committed.
- The current branch is pushed to its remote.
- The exact pull-request title and a meaningful, non-empty description are prepared.
- The source branch, destination branch, verification result, title, and description are reported to the user for manual pull-request creation.

Do not create, update, or merge a pull request as part of this workflow. A later explicit user request may override this manual handoff policy. If the branch cannot be pushed, report `Blocked` and explain the safest next action. Do not claim that the work was shipped.

## Inputs

- The user request, Jira issue, or accepted change spec.
- `AGENTS.md` and the repository's contribution rules.
- Current branch, status, diff, and commits relative to the intended base branch.
- Verification output from `scripts/verify.sh` or the documented project commands.

## Procedure

### 1. Establish Delivery State

1. Confirm the current branch is not `main`, `master`, or the configured default branch.
2. Determine the intended base branch from `AGENTS.md` or the remote default. Stop if it is ambiguous.
3. Inspect `git status --short`, the branch diff, and commits relative to the base branch.
4. Identify unrelated, generated, dependency, credential, or content changes before staging anything.
5. Record the source and destination branches for the manual pull-request handoff.

### 2. Run A Bounded Readiness Loop

1. Run the PR-readiness workflow, including `scripts/verify.sh` when configured.
2. If the result is `Not ready` because of an in-scope implementation issue, fix it and rerun the relevant checks.
3. Perform at most three correction cycles. Stop earlier when the same blocker repeats twice, the fix would expand scope, or external input is required.
4. Never modify or discard unrelated user changes to make the gate pass.
5. Continue only with `Ready` or `Ready with notes`. Preserve all notes for the pull-request description.

### 3. Prepare Delivery Metadata

Generate a Conventional Commit subject from the task and actual diff. Keep it concise and describe the delivered outcome rather than the agent's process.

Generate a pull-request title and description before committing or pushing. The description must contain concrete content under at least `Summary` and `Verification`; headings with placeholders or no content count as empty.

Use this shape:

```markdown
## Summary

- What changed and why.

## Verification

- Checks that passed.
- Checks not run and the reason, when applicable.

## References

- Jira issue, product requirement, Figma, or change spec when available.

## Notes

- Reviewer caveats, risks, or follow-up work when applicable.
```

Omit `References` and `Notes` when they do not apply. Never invent references or verification results.

### 4. Commit Scoped Changes

1. Stage only files that belong to the current task.
2. Review the staged diff before committing.
3. Commit with the prepared Conventional Commit subject.
4. Do not amend, rewrite history, add AI attribution, or add co-author footers unless the user explicitly requests it.
5. If the work is already committed and the worktree is clean, do not create an empty commit.

### 5. Push The Branch

1. Reconfirm the branch and remote before pushing.
2. Push the current branch and set its upstream when needed.
3. Never force-push unless the user explicitly requests it and the repository rules allow it.

### 6. Prepare The Manual Pull-Request Handoff

1. Do not call a hosting integration, API, browser, or repository CLI to create or update a pull request.
2. Report the source and destination branches.
3. Report the exact prepared title and full description in copy-ready Markdown blocks.
4. Include a pull-request creation URL when it can be derived safely without creating external state.
5. Clearly state that the user must create the pull request manually.
6. Preserve all `Ready with notes` caveats in the prepared description.

## Output

Use this shape:

```markdown
**Delivery: Prepared | Blocked**

- Commit: ...
- Branch: ...
- Pull request: Create manually from ... into ...
- Verification: ...
- Title: ...
- Description: ...
- Notes: ...
```

For `Prepared`, include the exact pull-request title and description. For `Blocked`, state the blocking condition and the safest next action. Omit fields that do not apply.
