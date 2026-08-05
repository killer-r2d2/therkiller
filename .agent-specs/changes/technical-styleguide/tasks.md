# Technical Styleguide Tasks

## Implementation

- [x] T001 Correct and complete the Lato and Roboto Slab light, regular, and bold `@font-face` declarations in `app/assets/css/main.css`.
- [x] T002 Add a theme-aware accent-contrast token to `app/assets/css/main.css` for primary button text.
- [x] T003 Create `app/components/Base/Button.vue` with primary, secondary, quiet, icon, and native disabled presentations.
- [x] T004 Create `app/pages/styleguide.vue` with page metadata, anchor navigation, and Typography, Colors, Buttons, and Links sections.
- [x] T005 Add `/styleguide` to the footer navigation without changing the primary navigation.

## Verification

- [x] T006 Format touched source files and run `npm run lint`.
- [x] T007 Run `npm run generate` and confirm the generated `/styleguide` output contains all required sections and safe external-link attributes.
- [x] T008 Inspect mobile/desktop layout, light/dark behavior, and keyboard focus for the styleguide.
- [x] T009 Run `scripts/verify.sh`, spec verification, ZOMBIES review, and PR readiness.

## Documentation And Delivery

- [x] T010 Keep the change spec aligned with any accepted implementation deviations and prepare the scoped commit, pushed branch, and manual pull-request handoff.
