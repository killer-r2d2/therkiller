# Dark And Light Color Mode Tasks

## Implementation

- [x] T001 Add semantic light and dark palette tokens, base color behavior, focus treatment, and reduced-motion handling in `app/assets/css/main.css`.
- [x] T002 Add the pre-paint initializer in `app/app.vue` and the persisted, system-aware state management in `app/composables/useColorMode.ts`.
- [x] T003 Add an accessible sun/moon control to `app/components/Navigation/index.vue` and bundle its icons through `nuxt.config.ts`.
- [x] T004 Replace hard-coded theme colors across the layout, hero, logo collection, social links, and blog detail page.

## Verification

- [x] T005 Run `scripts/verify.sh` and inspect the generated output for the initializer and bundled icons.
- [x] T006 Smoke-test both modes, system preference, persistence, keyboard focus, native button semantics, home and blog detail presentation, and responsive navigation.
- [x] T007 Run the spec-verification and PR-readiness workflows; resolve any in-scope findings.

## Delivery

- [x] T008 Commit only color-mode files, push the feature branch, and prepare the manual pull-request handoff through the ship workflow.
