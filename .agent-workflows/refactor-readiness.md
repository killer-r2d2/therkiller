# Refactor Readiness Workflow

Use this workflow before refactoring, modernization, dependency replacement, large cleanup, or any change where the main goal is structural rather than direct product behavior.

## Inputs

- User request, Jira issue, or proposed refactor goal.
- Current branch, `git status --short`, and intended base branch.
- Existing tests, commands, and relevant public interfaces.

## Procedure

1. State the concrete refactor goal and expected behavior preservation.
2. Identify public APIs, data contracts, routes, templates, generated files, and integration boundaries that must not change accidentally.
3. Confirm the refactor can be split into small reviewable steps.
4. Identify tests or smoke checks that should pass before and after the refactor.
5. Flag broad rewrites, mixed feature work, dependency churn, formatting sweeps, or unclear behavior changes.
6. Recommend whether to proceed, narrow scope, write a change spec first, or stop.

## Verdicts

- `Ready`: scope is clear, behavior preservation is testable, and blast radius is controlled.
- `Ready with constraints`: proceed only with listed limits.
- `Not ready`: scope, baseline behavior, or verification is too unclear.

## Output

Use this shape:

```markdown
**Refactor Readiness: Ready | Ready with constraints | Not ready**

**Scope**

- ...

**Protected Behavior**

- ...

**Required Verification**

- ...

**Constraints**

- ...
```

If a section does not apply, omit it.
