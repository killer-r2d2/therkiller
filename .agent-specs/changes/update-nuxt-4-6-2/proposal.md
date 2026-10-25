# Update Nuxt To 4.6.2

## Summary

Upgrade Nuxt 4.6.1 to the latest stable release, 4.6.2, as requested by the user.

## Problem

The application should receive the latest framework fixes while preserving the portfolio and blog's existing behavior.

## Users And Scenarios

Visitors browse prerendered portfolio and blog pages. Maintainers install dependencies and generate the static site.

## Scope

Update Nuxt and its required transitive dependencies using pnpm, review dependency churn, and verify static generation and representative routes. Explicitly enable Nitro auto-imports so the existing Content and Image modules remain compatible with Nuxt 4.6.2 under the other Nuxt 5 compatibility defaults.

## Not In Scope

Nuxt 5 migration, unrelated dependency upgrades, feature changes, security-policy changes, or refactoring.

## Success Criteria

- Nuxt resolves to 4.6.2 with the existing 24-hour release-age policy intact.
- Existing Content and Image module versions work through the documented Nitro auto-import compatibility option.
- Frozen installation and `scripts/verify.sh` pass.
- Representative generated pages retain their content and development routes respond correctly.

## Open Questions

None. The user explicitly requested this framework upgrade.

## Risks

Framework patches can affect rendering or module integration under the existing Nuxt 5 compatibility setting.
