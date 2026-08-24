# Migrate To pnpm And Publish Findings Tasks

## Baseline And Migration

- [x] T001 Record npm dependency, lockfile, generated-output, route, and Docker baselines without modifying dependency versions.
- [x] T002 Pin the selected stable pnpm 11 release and import `package-lock.json` into `pnpm-lock.yaml`.
- [x] T003 Add repository pnpm settings with conservative supply-chain policy and the minimum dependency-build allowlist required by this project.
- [x] T004 Remove `package-lock.json`, perform a clean frozen pnpm install, and review dependency-resolution and build-script behavior.
- [x] T005 Update `Dockerfile`, `scripts/verify.sh`, `README.md`, and `AGENTS.md` to use pnpm consistently.

## Verification

- [x] T006 Run pnpm lint and static generation, compare the generated route set with the npm baseline, and record pnpm measurements.
- [x] T007 Build and inspect the production Docker image to confirm dependencies and the pnpm store do not enter the Nginx runtime stage.
- [x] T008 Run `scripts/verify.sh` as the final executable project gate.

## Content And Delivery

- [x] T009 Add `content/blog/migrating-from-npm-to-pnpm.md` with a concise account of development speed, local storage, dependency clarity, and the unchanged deployment size.
- [x] T010 Verify the generated article route and review every numerical claim against captured results.
- [x] T011 Run spec verification, ZOMBIES review, PR readiness, and the ship workflow; then commit, push, and prepare the manual pull-request handoff.
