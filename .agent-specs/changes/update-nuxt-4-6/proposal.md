# Update Nuxt To 4.6

## Summary

Upgrade the static portfolio and blog from Nuxt 4.5.1 to the newest 4.6 patch allowed by the existing package release-age policy.

## Problem

The project should receive the improvements and fixes described in https://nuxt.com/blog/v4-6 while retaining working content rendering, navigation, and static delivery.

## Users And Scenarios

Visitors continue to browse prerendered pages and blog posts. Maintainers can install dependencies, start development, and generate the production site.

## Scope

- Upgrade Nuxt and align the direct Vue Router dependency with its requirement.
- Keep the existing Nuxt 5 compatibility setting and make only necessary compatibility fixes.
- Document and declare Nuxt's supported Node.js versions.
- Verify installation, development startup, and static generation.

## Not In Scope

Nuxt 5 migration, Vapor, a different server builder, new product features, unrelated dependency updates, or changes to package security policies.

## Success Criteria

- Nuxt resolves to an eligible 4.6 patch without bypassing the 24-hour release-age policy.
- The direct Vue Router dependency resolves consistently with Nuxt.
- `scripts/verify.sh` passes and representative generated pages contain their content.
- The development server starts and serves representative routes.

## Open Questions

None. The user's request authorizes this framework update.

## Risks

The existing `future.compatibilityVersion: 5` enables additional defaults in 4.6. Nuxt modules and the new CLI must remain compatible with static generation and development.
