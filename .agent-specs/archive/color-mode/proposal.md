# Dark And Light Color Mode

## Summary

Add a polished light color mode alongside the existing dark presentation while preserving the site's minimalist identity and established turquoise accent.

## Problem

The application currently hard-codes a black background, white text, white borders, and white icon fills across its layout and content components. Visitors cannot adapt the presentation to their operating-system preference, and the hard-coded colors make future visual refinement harder to maintain consistently.

## Users And Scenarios

- A first-time visitor sees the site in the color mode selected by their operating system.
- A visitor can switch between light and dark presentation from the main navigation.
- A returning visitor keeps their explicit selection across page loads and browser sessions.
- A reader can comfortably use home, blog listing, and blog detail content in either mode, including prose and code samples.
- Keyboard and screen-reader users can identify and operate the color-mode control.

## Scope

- Introduce semantic color tokens for page background, surfaces, primary text, muted text, borders, and accents.
- Add coordinated warm light and charcoal dark palettes that retain the current brand accents.
- Use the operating-system color preference when no explicit visitor selection exists.
- Add an accessible light/dark toggle to the main navigation.
- Persist explicit light or dark selections locally in the browser.
- Apply theme-aware colors to all current application pages, blog prose, borders, social icons, and technology-logo presentation.
- Avoid a visible incorrect-theme flash during initial page loading.
- Respect reduced-motion preferences for theme transitions.

## Not In Scope

- A broader layout, typography, content, or component redesign.
- Additional themes or user-configurable color palettes.
- Synchronizing preferences across devices or through a backend account.
- Adding a new color-mode dependency or changing existing package versions.
- Reworking third-party logo artwork beyond providing a suitable theme-aware container.

## Success Criteria

- With no stored selection, the rendered page follows the browser's `prefers-color-scheme` value.
- Activating the navigation control immediately switches the full interface between light and dark modes.
- An explicit selection survives a reload and navigation between routes.
- The toggle exposes an accurate accessible label and visible focus state.
- Current pages, article prose, code blocks, links, borders, icons, and logos remain readable and visually coherent in both modes.
- The initial HTML applies the resolved color mode before the application hydrates.
- `scripts/verify.sh` completes successfully.

## Open Questions

None. The accepted defaults are system preference on first visit, an explicit two-state navigation toggle, local persistence, and no new dependency.

## Risks

- Applying the preference too late could produce a flash of the wrong color mode.
- Hard-coded colors in less prominent components could cause contrast regressions in light mode.
- Syntax highlighting and third-party logos may need different treatment from ordinary text.
- Browser storage can be unavailable, so the interface must still work for the current session when persistence fails.
