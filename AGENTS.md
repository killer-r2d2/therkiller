# AGENTS.md - Guide for AI Assistants

This document defines how AI assistants should operate in this repository.

## Project Identity

- Project: therkiller
- Project slug: therkiller
- Jira prefix: THER (reserved; no Jira project is currently configured)
- Default branch: main

## Principles

- Prefer minimal, well-scoped edits.
- Work on one task at a time.
- Keep each change tied to a Jira issue when possible.
- Ask before large refactors, dependency changes, framework upgrades, or destructive content changes.
- Never commit secrets or create real credentials.
- Respect the project's existing conventions and tooling.

## Project Sources

Use these sources in this order:

1. User request and accepted change spec in `.agent-specs/changes/`
2. Repository source, configuration, and `README.md`
3. Product requirement: not configured
4. Figma design: not configured
5. Jira project: not configured
6. Slack channel: not configured

Source rules:

- The current user request and an accepted change spec define scope and acceptance intent.
- Repository behavior and tests are the source of truth for the current implementation.
- When configured, product requirements define product scope and content intent.
- When configured, Figma defines visual design, responsive behavior, and component variants.
- When configured, Jira defines ticket scope, ownership, status, and delivery order.
- When configured, Slack is for day-to-day decisions; durable decisions must be reflected in a change spec, Jira, or the product requirement.

## Agentic Workflow

- Always use a dedicated branch for implementation work.
- Do not commit directly to `master` or `main`.
- Start branches from the current default branch unless the user explicitly asks for a different base.
- Use clear branch names. In Codex, prefer `codex/short-description` or `codex/THER-123-short-description` when a Jira issue exists.
- Keep each branch focused enough to become one reviewable pull request.
- Unless the user explicitly requests local-only changes, run the ship workflow for completed implementation work.
- An implementation request authorizes the ship workflow to create or switch to a dedicated branch, commit only task-related changes, and push the branch.
- Treat the automated delivery step as complete when the branch is pushed and a manual pull-request handoff includes an exact title, meaningful description, and verification notes.
- Do not create, update, or merge a pull request as part of the ship workflow unless the user explicitly requests it in a later instruction.
- Include the Jira issue, relevant product requirement or Figma reference, and verification notes in the prepared pull-request metadata.
- When taking over work from another agent, inspect the current branch, `git status`, recent commits, and related Jira/PR comments before editing.
- Do not mix unrelated cleanup, dependency updates, formatting sweeps, or vendor changes into feature branches.
- Use the lightest planning process that controls risk:
  - Small fixes may be implemented directly.
  - Medium changes should start with a short plan.
  - Large, ambiguous, risky, or user-facing features must start with a change spec.

## Change Specs

Use `.agent-specs/changes/<change-slug>/` for non-trivial work that needs durable context.

Expected files:

- `proposal.md`: problem, users, scope, non-scope, open questions, and success criteria.
- `design.md`: technical approach, impacted areas, contracts, data changes, risks, and verification strategy.
- `tasks.md`: ordered implementation tasks small enough to implement and verify independently.

Spec rules:

- Write specs before implementation for large, ambiguous, risky, or user-facing changes.
- Keep specs focused on the current change. Do not turn small bugfixes into ceremony.
- Update the spec when accepted scope changes during implementation.
- Keep `not in scope` explicit and enforce it during review.
- Do not treat stale specs as higher authority than current product, design, Jira, code, or user instructions.

## Shared Agent Workflows

This repository uses shared workflow bodies with tool-specific adapters:

- Shared workflow body: `.agent-workflows/`
- Change specs: `.agent-specs/`
- Codex skills: `.agents/skills/`
- Claude skills: `.claude/skills/`
- Cursor rules: `.cursor/rules/`

Available workflows:

- `therkiller-spec-proposal`: create or update a change proposal before larger work starts.
- `therkiller-spec-design`: create or update the technical design for an accepted proposal.
- `therkiller-spec-tasks`: create or update the implementation task list for an accepted design.
- `therkiller-spec-verify`: compare implementation against the change spec before PR readiness.
- `therkiller-triage`: classify current-branch review risks before review, takeover, or PR preparation.
- `therkiller-zombies-review`: check edge cases with Zero, One, Many, Boundaries, Interfaces, Exceptions, Simple.
- `therkiller-refactor-readiness`: decide whether a proposed refactor is scoped and safe to start.
- `therkiller-pr-readiness`: decide whether a branch is ready for PR preparation.
- `therkiller-ship`: run a bounded readiness loop, commit scoped changes, push the branch, and prepare a fully described manual pull-request handoff.

Keep `.agent-workflows/` as the source of truth for workflow behavior. Tool-specific adapters should remain thin.

## Project Memory Maintenance

- Keep static context concise. `AGENTS.md` should contain durable project rules, not every detail an agent might ever need.
- Put specialized or rarely used knowledge in skills, workflow files, specs, or retrievable docs so agents load it only when relevant.
- Update `AGENTS.md` when a new durable architecture rule, workflow rule, command, or recurring agent mistake is discovered.
- Prefer concise rules over long transcripts.
- Use Mermaid diagrams when they clarify architecture, data models, or integration flows.
- Keep generated or obsolete notes out of always-loaded context unless they still guide future work.

## Repository Map

Preferred edit areas:

- `app/` for Vue components, pages, layouts, composables, assets, and application types.
- `content/` and `content.config.ts` for Nuxt Content collections and Markdown content.
- `public/` for static assets.
- Root Nuxt, ESLint, Prettier, TypeScript, Docker, and Nginx configuration when required by the task.

Protected or high-risk areas:

- `package-lock.json`: update only through npm commands and review dependency churn.
- `Dockerfile` and `nginx.conf`: changes affect production builds and delivery.
- `.env` files and credentials: never commit real secrets.
- `public/fonts/` and large binary assets: avoid unrelated replacements or normalization.

Generated or normalized files:

- `.nuxt/`, `.output/`, `.data/`, `.nitro/`, `.cache/`, `dist/`, and `node_modules/` are generated and must not be edited or committed.
- `package-lock.json` is npm-managed but committed and must stay synchronized with `package.json`.

Content or data directories:

- `content/` contains committed Markdown content.
- `public/` contains committed images, fonts, icons, and other static assets.
- `.data/` contains generated Nuxt Content data and is not committed.

## Coding Conventions

- Use descriptive variable names.
- Keep functions small and focused.
- Prefer early returns over deep nesting.
- Match existing formatting.
- Add comments only for non-obvious rationale or caveats.

## Commands

Do not run commands unless they are needed for the current task or the user asks for them.

```bash
npm ci
npm run dev
npm run lint
npm run generate
npm test  # Placeholder only; no automated test suite is configured yet.
```

Run `scripts/verify.sh` before declaring work done. Until an automated test suite is added, lint and static generation are the required executable gates.

## Testing

- Tests live in: no automated test directory is configured yet.
- Test command: `npm test` is currently a placeholder and does not count as verification.
- Required verification: `npm run lint` and `npm run generate`.
- If tests are expensive or require external services, state that clearly before running them.
- If a test cannot be run, include the reason in the final verification notes.

## Security And Privacy

- Never add secrets or credentials to the repository.
- Do not exfiltrate private data.
- Do not copy production data into fixtures unless explicitly approved and sanitized.
