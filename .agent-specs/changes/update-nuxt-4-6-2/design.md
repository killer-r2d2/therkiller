# Update Nuxt To 4.6.2 Design

## Approach

The official Nuxt MCP changelog and npm latest tag identify 4.6.2 as the latest stable release. It was published on 2026-10-16, outside the configured minimum release age on 2026-10-25. Use `pnpm update nuxt@^4.6.2` to retain the existing version-range convention and compatible dependency selections.

Production verification exposed server `useRuntimeConfig` imports from `#imports` in both Nuxt Image 2.1.0 and Nuxt Content 3.15.2. Nuxt 4.6.2 disables the corresponding Nitro presets under the existing compatibility-v5 defaults. Explicitly set `experimental.nitroAutoImports: true`, the documented compatibility option, to retain the modules' existing behavior. Keep the remaining Nuxt 5 compatibility defaults.

## Impacted Areas

`package.json`, `pnpm-lock.yaml`, `nuxt.config.ts`, and this change spec. The configuration edit restores Nitro auto-import compatibility for existing modules.

## Data And Contracts

Keep content schemas, route rules, static delivery, and `future.compatibilityVersion: 5` unchanged. Existing Node.js requirements already cover this patch release. Remove the explicit Nitro auto-import opt-in once the installed modules use explicit server imports.

## Alternatives Considered

Nuxt Image 2.2.0 fixes its server imports, but testing that update revealed the same problem in Content 3.15.2. Retain the existing module versions and use the shared compatibility option to keep this framework upgrade scoped.

## Verification Strategy

Inspect resolved versions, peer warnings, and the lockfile diff. Run `pnpm install --frozen-lockfile` and `scripts/verify.sh`. Inspect generated home, blog index, article, and projects HTML. Check representative development routes and a missing route.

## Design Risks

Existing peer warnings were documented in the prior 4.6 upgrade spec. Compare any warnings against the base lockfile before attributing them to this patch.

## References

- https://github.com/nuxt/nuxt/releases/tag/v4.6.2
- https://nuxt.com/docs/4.x/getting-started/upgrade
