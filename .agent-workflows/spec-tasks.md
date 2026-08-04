# Spec Tasks Workflow

Use this workflow after a proposal and design exist and before implementation starts.

## Inputs

- `.agent-specs/changes/<change-slug>/proposal.md`
- `.agent-specs/changes/<change-slug>/design.md`
- Repository commands and constraints from `AGENTS.md`

## Procedure

1. Create or update `.agent-specs/changes/<change-slug>/tasks.md`.
2. Break the design into ordered, reviewable tasks.
3. Keep tasks small enough to implement and verify independently.
4. Include verification tasks close to the behavior they validate.
5. Mark dependencies between tasks when order matters.
6. Separate implementation, tests, documentation, migration, and cleanup work.
7. Do not include unrelated nice-to-have work.

## Output File Shape

```markdown
# <Change Title> Tasks

## Implementation

- [ ] T001 ...
- [ ] T002 ...

## Verification

- [ ] T003 ...

## Documentation And Cleanup

- [ ] T004 ...
```

Use as few sections as needed. Prefer explicit paths and commands when known.

## Response

After writing or updating the tasks, summarize:

```markdown
**Spec Tasks**

- Path: `.agent-specs/changes/<change-slug>/tasks.md`
- Task count: ...
- First task: ...
- Ready for implementation: Yes | No
```
