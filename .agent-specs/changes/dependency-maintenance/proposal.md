# Dependency Maintenance

## Summary

Bring the project's production and development dependencies to an intentional, supportable state through staged updates that preserve the generated site's current behavior.

## Problem

The project has accumulated version drift across both `dependencies` and `devDependencies`. Several packages can be refreshed within their current compatibility ranges, while others require major-version migrations or are constrained by peer dependencies.

The current dependency graph also contains overlapping Vue Router versions through direct and Nuxt-managed dependencies. At the same time, the repository has no meaningful automated test suite: `npm test` is a placeholder, so linting and static generation are the only executable regression gates. Updating everything in one undifferentiated batch would make failures difficult to isolate and review.

## Users And Scenarios

- Maintainers need routine dependency updates that are small enough to review and diagnose.
- Contributors need one documented source of truth for which upgrades are safe now, which require migrations, and which are intentionally deferred.
- The static production build must continue to install and generate successfully with the repository's supported Node.js environment.
- Future agents need a repeatable update and verification sequence instead of recomputing dependency relationships from scratch.

## Scope

- Inventory direct production and development dependencies and assign each one an explicit update or deferral decision.
- Apply compatible maintenance updates in a low-risk batch.
- Align Nuxt, Vue, and Vue Router versions so the direct dependency graph follows the versions supported by the selected Nuxt release.
- Handle module and tooling major upgrades in isolated batches with package-specific migration checks.
- Decide whether the currently unused `lint-staged` configuration should be removed or intentionally integrated.
- Regenerate `package-lock.json` only through npm commands and review lockfile churn per batch.
- Run dependency security checks and document vulnerabilities that cannot be resolved within accepted compatibility constraints.
- Verify each implementation batch with linting and static generation, while distinguishing new failures from known baseline warnings.

## Not In Scope

- Adding Antfu skills or adopting Antfu's package, testing, formatting, or CSS conventions.
- Product features, content changes, visual redesigns, or unrelated source refactors.
- Replacing npm with another package manager.
- Introducing a full automated test framework as part of the dependency update.
- Upgrading `better-sqlite3` to a version outside the peer range supported by the selected `@nuxt/content` release.
- Silently fixing unrelated pre-existing lint or generation warnings unless a dependency update directly changes or worsens them.

## Success Criteria

- Every direct entry in `dependencies` and `devDependencies` has an implemented target version or a documented reason for deferral.
- Nuxt, Vue, and Vue Router resolve without an unintended duplicate or incompatible direct version.
- A clean npm install succeeds using the project's supported Node.js baseline.
- `npm run lint` completes without new errors or warnings introduced by the update.
- `npm run generate` completes successfully without new dependency-related failures.
- The committed `package-lock.json` is synchronized with `package.json` and contains only explainable dependency churn.
- Security findings are reduced where compatible fixes exist; remaining findings are explicitly recorded with their constraint or follow-up action.
- Major upgrades can be reviewed and, if necessary, reverted independently from maintenance updates.

## Open Questions

None. The accepted decisions are:

- Remove the unused `lint-staged` package and configuration because the existing Husky hook already runs the full lint command.
- Manage approved major upgrades under this initiative as independently reviewable implementation branches and pull requests.

## Risks

- Nuxt core upgrades can change transitive Vue and Vue Router versions even when application source remains unchanged.
- Major versions of Nuxt modules may require configuration or rendering changes that are not visible from package metadata alone.
- Native `better-sqlite3` artifacts can behave differently across local macOS and the Alpine-based production image.
- The absence of application tests increases reliance on static generation and targeted manual smoke checks.
- Lockfile regeneration can obscure meaningful changes if too many dependency groups are updated together.
