# Technical Styleguide

## Summary

Add a public technical styleguide at `/styleguide` that documents and demonstrates the site's current typography, colors, buttons, and links in one responsive, theme-aware reference page.

## Problem

The visual foundations of therkiller.dev are currently distributed across Tailwind theme variables, global CSS, and component-specific utility classes. There is no single page where maintainers can inspect the intended fonts, semantic colors, or common interactive treatments. This makes visual drift and configuration mistakes harder to notice.

## Users And Scenarios

- Maintainers need a quick visual reference when changing global styles or adding a page.
- Contributors need to see which typography, color, button, and link treatments already exist before inventing new ones.
- Reviewers need a single route for checking light and dark theme behavior, focus visibility, and responsive presentation.
- Visitors interested in the site's implementation can discover the reference from the footer.

## Scope

- Add a public, statically generated page at `/styleguide`.
- Display the locally hosted Lato and Roboto Slab families with representative weights and text samples.
- Display the semantic light/dark theme colors and the existing primary color scale with token names and hexadecimal values.
- Add a small reusable base button component and demonstrate its primary, secondary, quiet, icon, and disabled presentations.
- Demonstrate the existing inline, navigation, action, and external link treatments.
- Preserve the existing light/dark color-mode behavior and global focus treatment.
- Correct font-face configuration that would prevent the documented font samples from representing the intended local fonts.
- Add a Styleguide link to the footer without adding it to the primary navigation.

## Not In Scope

- Introducing Storybook, a component explorer dependency, or an automated visual-regression service.
- Redesigning the site or replacing the existing Tailwind theme.
- Creating a complete component library or refactoring every existing button and link.
- Adding form controls, layout primitives, icon catalogs, content-writing rules, or downloadable brand assets.
- Changing the site's primary navigation structure.

## Success Criteria

- Visiting `/styleguide` renders a page with distinct Typography, Colors, Buttons, and Links sections.
- Typography samples visibly use local Lato and Roboto Slab files for light, regular, and bold weights.
- Color samples list the semantic theme tokens for light and dark modes and the complete configured primary scale.
- Button samples use one reusable base component and include primary, secondary, quiet, icon, and disabled examples.
- Link samples include inline, navigation, action, and safe external-link examples.
- The page is reachable through the footer and remains usable at mobile and desktop widths.
- Keyboard focus remains visible, color-mode switching applies to the page, and reduced-motion behavior is respected.
- `scripts/verify.sh` completes successfully.

## Open Questions

None. The accepted direction is a public technical reference page, discoverable from the footer but not the primary navigation.

## Risks

- Displayed token labels can drift from CSS definitions if future theme changes update only one location.
- Synthetic font weights could hide incomplete `@font-face` declarations.
- A styleguide can imply broader component-library guarantees than this intentionally small first version provides.
