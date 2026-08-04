# Dependency Maintenance Implementation Notes

## Status

Completed on 2026-08-04. All planned dependency batches and the consolidated verification pass are complete.

## Merged Batches

| Pull request | Merge commit | Scope                                                                                  |
| ------------ | ------------ | -------------------------------------------------------------------------------------- |
| #3           | `002a255`    | Compatible maintenance updates and Nuxt/Vue/Vue Router alignment                       |
| #4           | `4d25a24`    | Nuxt Image 2 migration                                                                 |
| #5           | `96dc994`    | Nuxt Icon 2 migration and static Lucide icon bundling                                  |
| #6           | `27a72f3`    | Reproducible npm 10.9.8 lockfile and Docker install hotfix                             |
| #7           | `1a14902`    | Prettier Tailwind 0.8.1, Tailwind 4 formatter configuration, and `lint-staged` cleanup |

## Final Direct Dependency State

| Dependency                         | Manifest range | Resolved version | Decision                                       |
| ---------------------------------- | -------------- | ---------------- | ---------------------------------------------- |
| `@nuxt/content`                    | `^3.15.2`      | 3.15.2           | Updated                                        |
| `@nuxt/eslint`                     | `^1.3.0`       | 1.16.0           | Current compatible release                     |
| `@nuxt/image`                      | `^2.1.0`       | 2.1.0            | Major migration completed                      |
| `@tailwindcss/vite`                | `^4.3.3`       | 4.3.3            | Updated                                        |
| `better-sqlite3`                   | `^12.5.0`      | 12.11.1          | Keep on Nuxt Content-compatible 12.x           |
| `vue`                              | `^3.5.40`      | 3.5.40           | Aligned with Nuxt                              |
| `vue-router`                       | `^5.2.0`       | 5.2.0            | Aligned with Nuxt; Router 4 removed            |
| `@iconify-json/lucide`             | `^1.2.121`     | 1.2.121          | Updated                                        |
| `@nuxt/icon`                       | `^2.4.1`       | 2.4.1            | Major migration completed                      |
| `@tailwindcss/typography`          | `^0.5.12`      | 0.5.20           | Current compatible release                     |
| `autoprefixer`                     | `^10.5.4`      | 10.5.4           | Updated                                        |
| `husky`                            | `^9.1.7`       | 9.1.7            | Retained; pre-commit hook still runs full lint |
| `nostics`                          | `^1.2.0`       | 1.2.0            | Pinned for Nuxt prerender compatibility        |
| `nuxt`                             | `^4.5.1`       | 4.5.1            | Updated                                        |
| `postcss`                          | `^8.5.25`      | 8.5.25           | Updated                                        |
| `prettier`                         | `^3.9.6`       | 3.9.6            | Updated                                        |
| `prettier-plugin-organize-imports` | `^4.1.0`       | 4.3.0            | Current compatible release                     |
| `prettier-plugin-tailwindcss`      | `^0.8.1`       | 0.8.1            | Major migration completed                      |
| `tailwindcss`                      | `^4.3.3`       | 4.3.3            | Updated                                        |
| `typescript`                       | `^5.9.3`       | 5.9.3            | Keep on supported 5.9.x                        |

`lint-staged` 15.5.2 and its unused package configuration were removed. The existing Husky hook remains `npm run lint`.

## Security Result

- The Nuxt Image 2 batch removed the three high-severity audit findings present in the earlier image dependency chain.
- Final `npm audit --json`: 0 total vulnerabilities across all severities.
- Fresh local npm 10.9.8 install: 1,039 packages installed, 1,041 audited, 0 vulnerabilities.
- No-cache Node 22 Alpine install: 1,050 packages installed, 1,052 audited, 0 vulnerabilities.

## Final Verification

- `npx --yes npm@10.9.8 ci`: passed.
- `npm ls --depth=0`: passed; npm labels several auto-installed optional WASM platform packages as extraneous, but reports no invalid dependency tree and exits successfully.
- Focused Nuxt/Vue/Router/Content tree: one Vue 3.5.40 and Vue Router 5.2.0 runtime graph; Nuxt resolves `nostics` 1.2.0 and `better-sqlite3` 12.11.1.
- `scripts/verify.sh`: passed with zero lint errors and 25 prerendered routes.
- `docker build --no-cache --target build -t therkiller-dependency-check .`: passed on Node 22 Alpine with npm 10.9.8 and native dependencies installed from scratch.
- The Coolify deployment of merge commit `27a72f3` completed successfully after the lockfile hotfix.

## Known Warnings And Baselines

- ESLint retains one pre-existing `vue/html-self-closing` warning in `app/components/logo/Kirby.vue`.
- Nuxt generation reports unused H3 imports from the generated Nuxt Nitro server integration; generation still succeeds locally and in Alpine.
- npm reports deprecation notices for transitive `prebuild-install@7.1.3` and `glob@10.5.0`; the security audit remains clean.
- `npx prettier --check .` retains the documented 43-file pre-existing formatting baseline. No unrelated repository-wide formatting sweep was included.
- A `PLUGIN_TIMINGS` diagnostic appeared once while generation ran alongside dependency-tree checks and did not reproduce during the isolated generation run.
- The former repeated `lucide:arrow-left` prerender warnings are resolved by the explicit Nuxt Icon client bundle.

## Intentional Deferrals

- `better-sqlite3` 13.0.2: defer until the selected Nuxt Content release supports the next native SQLite major.
- TypeScript 7.0.2: defer until Nuxt and the installed tooling publish and verify explicit ecosystem support.

The final `npm outdated --json` output contains only these two accepted major-version deferrals.

## Follow-Up Boundaries

The following work remains outside this initiative and should use separate scope:

- Add meaningful automated application tests.
- Resolve the existing repository-wide Prettier baseline.
- Revisit direct Vue and Vue Router manifest entries if future Nuxt guidance changes.
- Re-evaluate `better-sqlite3` 13 and TypeScript 7 when their compatibility constraints change.
