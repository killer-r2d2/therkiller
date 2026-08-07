# Add Projects Showcase Tasks

## Implementation

- [x] T001 Extend `content.config.ts` and add all supplied entries under `content/projects/` with explicit display order, URL, and technologies.
- [x] T002 Add `app/composables/useProjects.ts` to query and sort project content.
- [x] T003 Build the reusable project card and restrained three-column list under `app/components/Project/` with responsive, accessible external links.
- [x] T004 Add `app/pages/projects/index.vue` and expose it from primary/mobile/footer navigation.
- [x] T005 Add the three-project preview and all-projects link to `app/pages/index.vue`.

## Verification

- [x] T006 Run `scripts/verify.sh` and confirm the generated routes and project ordering.
- [x] T007 Review `/` and `/projects` visually at representative mobile and desktop widths, including light and dark modes.

## Documentation And Cleanup

- [x] T008 Mark completed tasks and keep project-specific decisions aligned across proposal, design, and implementation.
