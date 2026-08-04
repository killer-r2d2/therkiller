# Spec Proposal Workflow

Use this workflow before implementation when a change is large, ambiguous, risky, user-facing, cross-cutting, or likely to need multiple implementation steps.

Skip this workflow for small, clearly scoped bugfixes unless the user asks for a spec.

## Inputs

- User request, Jira issue, product requirement, design reference, or incident context.
- Relevant current behavior from the codebase when available.
- Known constraints, risks, deadlines, or non-goals.

## Procedure

1. Choose a clear change slug in kebab-case.
2. Create or update `.agent-specs/changes/<change-slug>/proposal.md`.
3. Describe the problem and expected outcome in product terms.
4. Define scope and `Not in scope` explicitly.
5. Capture users, scenarios, acceptance criteria, open questions, and risks.
6. Prefer falsifiable statements over broad intent.
7. Do not make technical decisions that belong in `design.md` unless they are hard constraints.

## Output File Shape

```markdown
# <Change Title>

## Summary

## Problem

## Users And Scenarios

## Scope

## Not In Scope

## Success Criteria

## Open Questions

## Risks
```

## Response

After writing or updating the proposal, summarize:

```markdown
**Spec Proposal**

- Path: `.agent-specs/changes/<change-slug>/proposal.md`
- Scope: ...
- Open questions: ...
- Ready for design: Yes | No
```
