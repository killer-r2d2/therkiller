# Update Nuxt To 4.6.2 Tasks

## Implementation

- [x] T001 Update Nuxt to 4.6.2 using pnpm, enable Nitro auto-import compatibility for existing modules, and review dependency churn.

## Verification

- [x] T002 Verify frozen installation and resolved versions.
- [x] T003 Run `scripts/verify.sh` and inspect representative generated pages.
- [x] T004 Smoke-test representative development routes and a missing route.
- [x] T005 Complete spec verification, triage, and PR readiness; prepare the manual PR handoff metadata.

## Verification Results

- `pnpm install --frozen-lockfile`: passed with pnpm 11.22.0 and Node.js 24.19.0.
- Nuxt resolves to 4.6.2; other direct dependency versions remain unchanged, including Image 2.1.0, Content 3.15.2, Vue 3.5.44, and Vue Router 5.4.0. pnpm refreshed transitive dependencies and peer contexts; Nitro resolves to 2.13.5 and Vite to 8.3.5. Package security policies are unchanged.
- The initial build exposed missing `useRuntimeConfig` server imports in Image; testing Image 2.2.0 exposed the same issue in Content. The final implementation retains both original module versions and enables the documented `experimental.nitroAutoImports` compatibility option.
- `scripts/verify.sh`: passed ESLint and static generation of 33 routes with the final configuration.
- Generated home, blog index, article, and projects HTML contain expected visible content and the existing analytics script.
- Development HTTP checks: home, blog index, article, and projects return 200 with expected content; an unknown route returns 404. The actual profile image returns 200 with the expected image content. An exploratory `/_ipx` request returns 404 because the configured `ipxStatic` provider only registers that handler for prerendering; runtime transformation is not exercised by the application and was not verified.
- Browser smoke check: home renders, client navigation through the blog index to a full article succeeds, and no console errors are recorded.
- Spec verification: pass. Scope, design, and acceptance criteria match the final implementation; the documented compatibility option is the only configuration change.
- Triage: medium risk in framework/transitive dependency changes and Nitro auto-import compatibility; low risk in the focused change spec. No application, content, security-policy, or generated-file changes are included.
- ZOMBIES review: no actionable findings. Representative content collections, article rendering, client navigation, and missing-route behavior pass. No permanent automated test suite exists.
- PR readiness: ready with notes. `pnpm peers check` reports the existing `oxc-parser >=0.140.0` and `unplugin ^3.3.0` mismatches; base-lockfile inspection confirms both existed before this update, and they now affect additional shared `unctx@3.0.1` contexts. Development retains the existing Content/MDC optimize-dependency warning. Production verification and browser checks pass.
