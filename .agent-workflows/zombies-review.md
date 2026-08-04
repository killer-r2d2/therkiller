# ZOMBIES Review Workflow

Use this workflow before review, before PR readiness, or when a change touches user-facing behavior, CMS data, integration boundaries, parsing, forms, state transitions, or rendering logic.

ZOMBIES means:

- Zero
- One
- Many
- Boundaries
- Interfaces
- Exceptions
- Simple

## Procedure

1. Read the intended behavior and changed files.
2. Check whether the implementation handles absent, singular, repeated, boundary, integration, exceptional, and simplest-valid cases.
3. Report only useful findings.
4. Do not list clean categories just to show coverage.
5. Tie every finding to a file, behavior, or verification gap.

## Output

Use this shape:

```markdown
**ZOMBIES Findings**

- [Risk] Path or behavior: issue and why it matters.

**Verification Gaps**

- ...
```

If there are no findings, say that clearly and list any remaining verification gaps.
