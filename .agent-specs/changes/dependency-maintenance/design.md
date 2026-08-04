# Dependency Maintenance Design

## Approach

Implement dependency maintenance as a sequence of independently reviewable branches and pull requests. Every branch starts from the updated `main`, changes one risk group, regenerates the npm lockfile, and passes the repository verification gates before the next group begins.

Version targets must be refreshed with `npm outdated` and official Nuxt guidance when implementation starts. The planning baseline captured on 2026-08-04 is:

| Group              | Package                       |                       Installed |          Planned target | Decision                                                                 |
| ------------------ | ----------------------------- | ------------------------------: | ----------------------: | ------------------------------------------------------------------------ |
| Nuxt core          | `nuxt`                        |                           4.4.8 |                   4.5.1 | Upgrade and deduplicate                                                  |
| Nuxt core          | `vue`                         |                          3.5.38 |                  3.5.40 | Align with Nuxt                                                          |
| Nuxt core          | `vue-router`                  | 4.6.4 direct / 5.1.0 transitive |                   5.2.0 | Align the direct dependency with Nuxt and remove the duplicate major     |
| Nuxt compatibility | `nostics`                     |    0.2.0 hoisted / 1.2.0 nested |                   1.2.0 | Pin the Nuxt-compatible release at the project root                      |
| Maintenance        | `@nuxt/content`               |                          3.14.0 |                  3.15.2 | Upgrade within the existing major                                        |
| Maintenance        | `@tailwindcss/vite`           |                           4.3.1 |                   4.3.3 | Upgrade within the existing major                                        |
| Maintenance        | `@iconify-json/lucide`        |                         1.2.113 |                 1.2.121 | Upgrade within the existing major                                        |
| Maintenance        | `autoprefixer`                |                          10.5.0 |                  10.5.4 | Upgrade within the existing major                                        |
| Maintenance        | `postcss`                     |                          8.5.15 |                  8.5.25 | Upgrade within the existing major                                        |
| Maintenance        | `prettier`                    |                           3.8.4 |                   3.9.6 | Upgrade within the existing major                                        |
| Maintenance        | `tailwindcss`                 |                           4.3.1 |                   4.3.3 | Upgrade within the existing major                                        |
| Nuxt module major  | `@nuxt/image`                 |                          1.11.0 |                   2.1.0 | Isolated migration batch                                                 |
| Nuxt module major  | `@nuxt/icon`                  |                          1.15.0 |                   2.4.1 | Isolated migration batch                                                 |
| Tooling major      | `prettier-plugin-tailwindcss` |                          0.6.14 |                   0.8.1 | Isolated formatting-compatibility batch                                  |
| Tooling cleanup    | `lint-staged`                 |                          15.5.2 |                 Removed | Remove unused package and configuration                                  |
| Deferred           | `better-sqlite3`              |                         12.11.1 | Stay on compatible 12.x | Nuxt Content 3.15.2 declares a `^12.5.0` peer range                      |
| Deferred           | `typescript`                  |                           5.9.3 |           Stay on 5.9.x | Defer TypeScript 7 until Nuxt and module support is explicitly confirmed |

Direct dependencies not listed as updates remain on their installed versions unless the implementation-time inventory finds a new compatible release. In the current baseline these include `@nuxt/eslint`, `@tailwindcss/typography`, `husky`, and `prettier-plugin-organize-imports`.

### Batch 1: Maintenance And Nuxt Core Alignment

1. Capture the baseline dependency tree, audit report, lint output, generation output, and known warnings.
2. Update Nuxt to 4.5.x using the official deduplicating upgrade path.
3. Update Vue and the direct Vue Router dependency to the versions selected by Nuxt 4.5.x.
4. Apply the compatible maintenance updates from the table.
5. Pin `nostics` 1.2.x as a direct development dependency so Nuxt's prerender bundle resolves the API required by Nuxt 4.5 rather than the 0.2.x release hoisted through the ESLint inspector.
6. Confirm that `npm ls vue vue-router nuxt nostics` contains one intended Vue Router major, Nuxt resolves `nostics` 1.2.x, and the ESLint inspector retains its own nested 0.2.x release.
7. Review the Nuxt 4.5 build-layer changes against this repository's custom Vite Tailwind plugin and `future.compatibilityVersion: 5` setting.

This batch is first because all later Nuxt modules should be evaluated against the final Nuxt 4.5 baseline.

### Batch 2: Nuxt Image 2

1. Reconfirm that the repository has no `NuxtImg`, `NuxtPicture`, custom image provider, or removed `xs`/`xxl` image-screen usage.
2. Upgrade `@nuxt/image` to 2.x and retain the existing WebP format configuration if accepted by the new module.
3. Generate the site and inspect representative image-bearing pages and emitted asset URLs.

The current source scan found only the module registration and `image.format` configuration, so no component migration is expected.

### Batch 3: Nuxt Icon 2

1. Upgrade `@nuxt/icon` to 2.x together with the compatible Lucide collection release.
2. Verify the `lucide:arrow-left` usage on the blog detail page during static generation and in the generated output.
3. Treat the current repeated icon-load warning as a recorded baseline issue: the batch must either resolve it or document why it remains, and must not introduce missing icons on rendered pages.

### Batch 4: Formatting Tooling And Hook Cleanup

1. Upgrade `prettier-plugin-tailwindcss` to 0.8.x.
2. Run Prettier in check mode before applying formatting. If the plugin changes ordering, isolate the mechanical formatting diff from configuration changes and review the affected files.
3. Remove `lint-staged` and the unused `lint-staged` block from `package.json`; keep the existing Husky hook running the full repository lint command.
4. Keep TypeScript on 5.9.x until current Nuxt support for TypeScript 7 is confirmed through official Nuxt sources and a separate compatibility review.

### Batch 5: Final Consolidated Verification

1. Install from the committed lockfile with `npm ci`.
2. Run `scripts/verify.sh`.
3. Build through the Node 22 Alpine Docker stage to exercise native `better-sqlite3` installation on the production platform.
4. Compare `npm audit` and dependency-tree output with the baseline.
5. Record all intentional deferrals and remaining warnings in the final pull-request handoff.

## Impacted Areas

- `package.json`: version ranges, the Nuxt-compatible `nostics` pin, removal of `lint-staged`, and removal of its unused configuration.
- `package-lock.json`: npm-managed resolution changes for every batch.
- `nuxt.config.ts`: only if Nuxt Image 2 or Nuxt Icon 2 requires a documented configuration migration.
- `.husky/pre-commit`: expected to remain `npm run lint`; change only if the accepted lint-staged decision changes.
- `app/pages/blog/[...slug].vue`: verification target for the existing Lucide icon, not an expected edit.
- `Dockerfile`: verification target for Node 22 Alpine compatibility, not an expected edit.
- `.agent-specs/changes/dependency-maintenance/`: durable decisions and implementation progress.

## Data And Contracts

There are no application API, content schema, or persisted user-data changes. The relevant contracts are:

- `package.json` defines intentional direct dependency ranges.
- `package-lock.json` provides the reproducible npm dependency graph.
- Nuxt module configuration in `nuxt.config.ts` must remain valid for the selected module majors.
- Node 22 Alpine is the production build compatibility baseline because it is declared by `Dockerfile`.
- Static output under `.output/public` must continue to contain all prerendered routes and required assets.

## UI And Content

No deliberate UI or content changes are planned. Manual smoke checks should compare representative generated pages before and after each module major, with specific attention to:

- Blog detail navigation and the Lucide back-arrow icon.
- Pages containing Markdown images or static image assets.
- Navigation and route generation after Vue Router alignment.

## Security And Privacy

- Run `npm audit` before and after the update, but do not use `npm audit fix --force` because it can cross accepted major-version boundaries.
- Prefer compatible, direct upgrades for actionable vulnerabilities.
- Document vulnerabilities that remain due to Nuxt Content, native SQLite, or other peer constraints.
- Do not add registries, tokens, credentials, install scripts, or new external services.
- Review new or materially changed lifecycle scripts in the lockfile before accepting a batch.

## Verification Strategy

For every batch:

1. Record `npm ls --depth=0` and relevant focused dependency trees.
2. Run `npm ci` from the updated lockfile.
3. Run `npm run lint` and compare warnings to the captured baseline.
4. Run `npm run generate` and compare warnings, route count, and exit status to the baseline.
5. Inspect the `package.json` and `package-lock.json` diff for unexpected packages, duplicate majors, or platform-specific lockfile loss.

Additional gates:

- After Batch 1, run `npm ls vue vue-router nuxt` and confirm Vue Router 4 is no longer installed directly alongside Router 5.
- After Batch 1, run `npm ls nostics` and confirm Nuxt resolves 1.2.x while the ESLint inspector's incompatible 0.2.x release remains nested.
- After Batch 2, inspect generated image URLs and representative pages.
- After Batch 3, verify the blog back-arrow icon and icon-related generation output.
- After Batch 4, run `npx prettier --check .` and review any mechanical formatting separately.
- At final verification, run the Docker build stage on Node 22 Alpine and compare `npm audit` results.

`npm test` is not a verification gate because it currently prints a placeholder and executes no tests.

## Alternatives Considered

### Update Everything In One Pull Request

Rejected because core framework, module, native dependency, and formatting changes would share one lockfile diff and make regression isolation difficult.

### Keep The Direct Vue Router 4 Dependency

Rejected because Nuxt 4.5 selects Vue Router 5, and keeping Router 4 creates parallel major versions without any direct Router import in the application source.

### Remove Vue And Vue Router From Direct Dependencies

Not selected for this initiative. Keeping them explicitly aligned with Nuxt follows the project's existing manifest shape and makes the runtime contract visible. Removal can be reconsidered separately if Nuxt's current project template and support guidance favor it.

### Upgrade `better-sqlite3` To 13 Immediately

Rejected until the selected Nuxt Content version accepts that major. Bypassing the peer constraint would put native builds and content generation outside the supported combination.

### Upgrade TypeScript 7 Immediately

Rejected for this cycle because the update is not needed to complete the Nuxt maintenance work and would add compiler/tooling compatibility risk without a real automated test suite.

### Wire `lint-staged` Into Husky

Not selected because the pre-commit hook already runs the full lint command and the current staged-file configuration covers only formatting for a subset of file types. Removing unused configuration is the smaller, clearer change.

## Design Risks

- Nuxt 4.5 upgrades Vite and other build internals, so the Tailwind Vite integration may expose build changes even though both packages remain on compatible majors.
- `future.compatibilityVersion: 5` opts into forward-looking behavior and increases the importance of reviewing Nuxt 4.5 warnings.
- The current local dependency tree contains extraneous platform packages; a clean `npm ci` may alter them and must not accidentally remove lockfile entries required by Alpine builds.
- Nuxt 4.5's prerender bundle can resolve the `nostics` release hoisted by the ESLint inspector instead of Nuxt's nested release; the direct 1.2.x pin is required until upstream dependency resolution no longer needs it.
- Nuxt Icon warnings may be caused by configuration or prerender behavior rather than package age, so a major upgrade is not guaranteed to resolve them.
- Mechanical formatting changes from the Tailwind Prettier plugin can be large enough to hide functional edits if they are not isolated.
- Registry releases can move between planning and implementation, so implementation must refresh target versions without automatically crossing new major boundaries.
