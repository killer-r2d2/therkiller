# Spec Design Workflow

Use this workflow after a proposal is accepted or sufficiently clear and before implementation tasks are written.

## Inputs

- `.agent-specs/changes/<change-slug>/proposal.md`
- Repository instructions from `AGENTS.md`
- Relevant code paths, commands, contracts, schemas, and integration notes

## Procedure

1. Read the proposal and identify the implementation boundaries.
2. Inspect the existing code before choosing an approach.
3. Create or update `.agent-specs/changes/<change-slug>/design.md`.
4. Document the technical approach, impacted files or modules, data/contracts, UI behavior, security/privacy implications, and verification strategy.
5. Call out rejected alternatives when the choice is meaningful.
6. Keep the design aligned with existing architecture and repository conventions.
7. Do not start implementation from an unresolved design unless the user explicitly accepts the risk.

## Output File Shape

```markdown
# <Change Title> Design

## Approach

## Impacted Areas

## Data And Contracts

## UI And Content

## Security And Privacy

## Verification Strategy

## Alternatives Considered

## Design Risks
```

Omit sections that clearly do not apply.

## Response

After writing or updating the design, summarize:

```markdown
**Spec Design**

- Path: `.agent-specs/changes/<change-slug>/design.md`
- Approach: ...
- Main risks: ...
- Ready for tasks: Yes | No
```
