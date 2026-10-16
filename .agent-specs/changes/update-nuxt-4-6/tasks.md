# Update Nuxt To 4.6 Tasks

## Implementation

- [x] T001 Update Nuxt and align Vue Router using pnpm without weakening package security policies.
- [x] T002 Declare and document supported Node.js versions and correct the compatibility comment.

## Verification

- [x] T003 Check the lockfile diff, resolved versions, and frozen installation.
- [x] T004 Run `scripts/verify.sh` and inspect representative generated content.
- [x] T005 Smoke-test the new development CLI and representative routes.
- [x] T006 Complete spec verification, triage, ZOMBIES review, and PR readiness; prepare the manual PR handoff.

## Verification Results

- `pnpm install --frozen-lockfile`: passed with pnpm 11.22.0 and Node.js 24.19.0.
- Resolved Nuxt 4.6.1, Vue Router 5.4.0, and Vue 3.5.44. Other direct dependency versions stayed unchanged; the lockfile updates Nuxt/router's transitive dependencies and peer contexts.
- `scripts/verify.sh`: passed ESLint and static generation of 33 routes.
- Generated home, blog index, blog article, and projects HTML contain the expected content.
- Development HTTP checks: home, blog index, article, and projects return 200 with expected content; an unknown route returns 404.
- Browser smoke check: home loads and client navigation through the blog index to a full article works without console errors.
- `docker build -t therkiller:nuxt-4-6 .`: passed using the existing Dockerfile and Node 22 Alpine image.
- Spec verification: pass. All scope and success criteria are satisfied; no content or application behavior changes were required.
- Triage: medium risk in framework/transitive dependency changes and existing compatibility-v5 defaults; low risk in Node requirement documentation and the corrected config comment. No unrelated or generated files are included.
- ZOMBIES review: no actionable findings. Content collections, article rendering, successful route requests, and a missing route were checked. No permanent automated test suite exists.
- PR readiness: ready with notes. `pnpm peers check` still reports the existing `oxc-parser >=0.140.0` and `unplugin ^3.3.0` mismatches; comparing the untouched main lockfile confirms both were already present. The new Nuxt `unctx@3.0.1` instance shares the parser mismatch. Development also warns about a DevTools Vite hook and unresolved Content/MDC dependency-optimization entries; the browser and production checks above pass. Local production builds print plugin timing warnings.
- Nuxt 4.6.2 is intentionally deferred because its 2026-10-16 publication is inside the unchanged 24-hour release-age policy.
