# Triage Workflow

Use this workflow before code review, branch takeover, pull request preparation, or when the user asks where review attention should go first.

## Inputs

- Current branch name.
- `git status --short`.
- Current branch diff against the intended base branch.
- Relevant Jira issue, product requirement, design reference, or user request when available.

## Procedure

1. Identify the intended task scope.
2. Inspect changed files and group them by feature area.
3. Classify review risk as `High`, `Medium`, or `Low`.
4. Prefer concrete paths and reasons over broad summaries.
5. Flag scope drift, generated-file churn, dependency changes, content changes, migrations, and unverified external integrations.
6. Do not paste large diffs into the response.

## Output

Use this shape:

```markdown
**Triage**

- High: ...
- Medium: ...
- Low: ...

**Review Focus**

- ...

**Open Questions**

- ...
```

If there are no meaningful risks in a category, omit the category.
