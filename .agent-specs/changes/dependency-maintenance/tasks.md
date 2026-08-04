# Dependency Maintenance Tasks

The implementation is split into four update pull requests followed by a consolidated verification pass. Each pull request must start from the latest `main`, contain only its assigned dependency group, and complete its local verification before the next batch starts.

## Planning Decisions And Baseline

- [x] T001 Confirm the proposal defaults before implementation: remove unused `lint-staged`, manage all approved majors under this initiative as separate pull requests, defer `better-sqlite3` 13 and TypeScript 7.
- [x] T002 On the first implementation branch, use the official Nuxt MCP and `npm outdated` to refresh the target-version matrix without crossing any additional major boundary.
- [x] T003 Capture the pre-update baseline in implementation notes: `node --version`, `npm --version`, `npm ls --depth=0`, `npm ls vue vue-router nuxt @nuxt/content better-sqlite3`, `npm audit --json`, `npm run lint`, and `npm run generate`.
- [x] T004 Record the known baseline separately: the self-closing image lint warning in `app/components/logo/Kirby.vue`, repeated `lucide:arrow-left` generation warnings, sourcemap warnings, generated route count, and any existing audit findings.

## Pull Request 1: Maintenance And Nuxt Core

- [x] T005 Create `codex/dependencies-core-maintenance` from the latest `main`; depends on T001-T004.
- [x] T006 Review the Nuxt 4.5 release and upgrade guidance through the Nuxt MCP, focusing on Vite 8, Unhead 3, `future.compatibilityVersion: 5`, and the recommended deduplication flow.
- [x] T007 Upgrade `nuxt` to the current approved 4.5.x patch and regenerate the lockfile through the official deduplicating Nuxt/npm upgrade path.
- [x] T008 Align direct `vue` and `vue-router` ranges with the versions selected by Nuxt 4.5.x; do not retain direct Vue Router 4.
- [x] T009 Update the approved compatible packages in `package.json`: `@nuxt/content`, `@tailwindcss/vite`, `@iconify-json/lucide`, `autoprefixer`, `postcss`, `prettier`, and `tailwindcss`.
- [x] T010 Pin `nostics` 1.2.x for Nuxt 4.5 prerender compatibility, then review `package.json` and `package-lock.json` for unexpected majors, new lifecycle scripts, loss of Alpine optional packages, or unrelated churn.
- [x] T011 Run `npm ci`, then `npm ls vue vue-router nuxt nostics`; verify one intended Vue Router major is installed, Nuxt resolves `nostics` 1.2.x, and no invalid peer dependency is reported.
- [x] T012 Run `npm run lint` and `npm run generate`; compare exit status, route count, and warnings against T003-T004.
- [x] T013 Smoke-check the home-page blog listing and one blog detail route from the generated output to catch routing or rendering regressions.
- [x] T014 Run the `therkiller-spec-verify` and `therkiller-ship` workflows for this batch, preparing a pull request that documents exact versions, baseline differences, audit changes, and remaining deferrals.

## Pull Request 2: Nuxt Image 2

- [ ] T015 After Pull Request 1 is merged, create `codex/nuxt-image-2` from the latest `main`.
- [ ] T016 Use the Nuxt MCP to review the current Nuxt Image 2 migration guide and confirm compatibility with the installed Nuxt version.
- [ ] T017 Search for `NuxtImg`, `NuxtPicture`, custom image providers, and `xs`/`xxl` image screen modifiers; record whether the source still has only `nuxt.config.ts` module and format configuration.
- [ ] T018 Upgrade `@nuxt/image` to the approved 2.x release and apply only migration changes required by actual repository usage.
- [ ] T019 Run `npm ci`, `npm run lint`, and `npm run generate`; inspect representative generated pages and image asset URLs for missing or malformed output.
- [ ] T020 Review the manifest and lockfile diff, then run `therkiller-spec-verify` and `therkiller-ship` for the isolated module-major pull request.

## Pull Request 3: Nuxt Icon 2

- [ ] T021 After Pull Request 2 is merged, create `codex/nuxt-icon-2` from the latest `main`.
- [ ] T022 Use the Nuxt MCP to review Nuxt Icon 2 migration and collection-loading guidance for static generation.
- [ ] T023 Upgrade `@nuxt/icon` to the approved 2.x release and update `@iconify-json/lucide` only if the merged maintenance version is not the current compatible release.
- [ ] T024 Run `npm ci`, `npm run lint`, and `npm run generate`; compare icon-related warnings to the baseline.
- [ ] T025 Inspect a generated blog detail page and verify that `lucide:arrow-left` is rendered or its required asset/data is present. If the warning remains, diagnose and document it without expanding into unrelated icon refactors.
- [ ] T026 Review the manifest and lockfile diff, then run `therkiller-spec-verify` and `therkiller-ship` for the isolated module-major pull request.

## Pull Request 4: Formatting Tooling And Cleanup

- [ ] T027 After Pull Request 3 is merged, create `codex/dependency-tooling-cleanup` from the latest `main`.
- [ ] T028 Run `npx prettier --check .` with the current plugin and save the baseline result in implementation notes.
- [ ] T029 Upgrade `prettier-plugin-tailwindcss` to the approved 0.8.x release and run `npx prettier --check .` again.
- [ ] T030 If formatting changes are required, apply them as a separate mechanical commit and review the diff for class-order changes or non-formatting edits.
- [ ] T031 Remove `lint-staged` from `devDependencies` and remove the unused `lint-staged` block from `package.json`; leave `.husky/pre-commit` running `npm run lint`.
- [ ] T032 Keep `typescript` within the supported 5.9.x line and document TypeScript 7 as deferred pending explicit Nuxt ecosystem support.
- [ ] T033 Run `npm ci`, `npx prettier --check .`, `npm run lint`, and `npm run generate`; compare results to the baseline.
- [ ] T034 Review the manifest and lockfile diff, then run `therkiller-spec-verify` and `therkiller-ship` for the tooling pull request.

## Consolidated Verification And Documentation

- [ ] T035 After all accepted batches are merged, start from the latest `main` and run a clean `npm ci` using the committed lockfile.
- [ ] T036 Run `scripts/verify.sh`; confirm lint and static generation introduce no new failures or warnings relative to T004.
- [ ] T037 Run `docker build --target build -t therkiller-dependency-check .` to verify Node 22 Alpine installation, native `better-sqlite3`, and static generation on the production build platform.
- [ ] T038 Run `npm ls --depth=0`, the focused Nuxt/Vue/Router/Content tree, and `npm audit --json`; compare them with T003 and confirm every direct dependency has an update or deferral decision.
- [ ] T039 Update `proposal.md`, `design.md`, and this task list if accepted scope or version constraints changed during implementation; mark completed tasks accurately.
- [ ] T040 Prepare final implementation notes listing merged batches, exact versions, fixed vulnerabilities, remaining audit findings, known warnings, and deferred upgrades (`better-sqlite3` 13 and TypeScript 7).

## Optional Follow-Ups Outside This Change

These are not part of the implementation tasks above and must not be folded into a dependency batch without a new scope decision:

- Add meaningful automated application tests to replace the placeholder `npm test` command.
- Reconsider whether direct `vue` and `vue-router` entries are still desirable in the project manifest.
- Upgrade `better-sqlite3` after Nuxt Content accepts the next major.
- Evaluate TypeScript 7 after Nuxt and the installed modules publish explicit compatibility guidance.
- Fix pre-existing source or generation warnings that remain unrelated to the approved dependency changes.
