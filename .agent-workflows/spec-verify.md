# Spec Verify Workflow

Use this workflow after implementation and before PR readiness when a change spec exists or should have existed.

## Inputs

- `.agent-specs/changes/<change-slug>/proposal.md`
- `.agent-specs/changes/<change-slug>/design.md`
- `.agent-specs/changes/<change-slug>/tasks.md`
- Current branch diff and verification results

## Procedure

1. Confirm the implementation stays within `Scope` and avoids `Not in scope`.
2. Compare changed files and behavior against the design.
3. Check each task in `tasks.md` and mark whether it is complete, incomplete, obsolete, or intentionally deferred.
4. Flag unimplemented success criteria, missing tests, missing documentation, and scope drift.
5. If the implementation changed the accepted approach, decide whether the spec should be updated before PR.
6. Do not silently rewrite history in the spec to hide drift.

## Output

Use this shape:

```markdown
**Spec Verification: Pass | Pass with notes | Fail**

**Findings**

- ...

**Task Status**

- Complete: ...
- Incomplete: ...
- Deferred: ...

**Spec Updates Needed**

- ...
```

If a section does not apply, omit it.
