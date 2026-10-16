# Update Nuxt To 4.6 Design

## Approach

Use pnpm to update only Nuxt and the direct Vue Router dependency, retaining existing lockfile selections where compatible. Start with Nuxt 4.6.1 because 4.6.2 was published on 2026-10-16 and is still within the configured 1440-minute minimum release age. Do not add release-age exceptions.

Keep `future.compatibilityVersion: 5` and the Nitro static build. Inspect relevant compatibility defaults: this application has no custom server handlers requiring auto-import migration and uses Composition API components. Verify Content's server integration and generated page rendering through the production build.

## Impacted Areas

- `package.json` and `pnpm-lock.yaml`: Nuxt, Vue Router, and required transitive dependencies.
- `package.json` and `README.md`: Node.js requirement `^22.22.3 || ^24.15.0 || >=26.0.0`, matching Nuxt's published package metadata.
- `nuxt.config.ts`: correct its stale compatibility comment; adjust behavior only if verification exposes a required fix.
- The existing `node:22-alpine` Docker image remains on a supported major; no Docker change is needed.

## Data And Contracts

Content schemas, routes, and published content remain unchanged. New sessions and server APIs are not used.

## Verification Strategy

Run `pnpm install --frozen-lockfile`, inspect resolved Nuxt/router versions and dependency churn, and run `scripts/verify.sh`. Inspect generated home, blog index/article, and projects HTML. Start the development server with the new CLI and request representative routes. Record warnings or verification limitations.

## Design Risks

The new compatibility defaults can affect modules, payload extraction, or routing. Resolve only issues needed to preserve existing application behavior. The supported local Node version is 24.19.0; a Docker build is additional validation only if a Docker runtime is available.
