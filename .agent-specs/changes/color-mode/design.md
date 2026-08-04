# Dark And Light Color Mode Design

## Approach

Implement color mode with existing Nuxt and browser capabilities rather than adding a module.

1. Define semantic CSS custom properties for background, surface, foreground, muted foreground, border, and accent colors. Light values are the default CSS fallback, dark values apply through `data-theme="dark"`, and a media-query fallback supports users without JavaScript.
2. Add a static initialization script through Nuxt `useHead`. It reads the trusted, fixed local-storage key, falls back to `matchMedia('(prefers-color-scheme: dark)')`, and sets `data-theme` plus `color-scheme` on the root element before the body is painted.
3. Add an auto-imported `useColorMode` composable to own reactive state, synchronize it with the root element, persist explicit changes, and follow operating-system changes only until the visitor makes an explicit selection.
4. Add an icon button to the existing navigation. It displays the action available to the visitor, includes a matching accessible label, and uses the installed Lucide icon set.
5. Replace hard-coded black, white, border, prose, and icon colors with the semantic tokens. Use a deep petrol accent in light mode and the existing brighter turquoise in dark mode.

## Impacted Areas

- `app/app.vue`: register the pre-paint color-mode initializer.
- `app/composables/useColorMode.ts`: reactive theme state, system preference, persistence, and toggling.
- `app/components/Navigation/index.vue`: accessible toggle control.
- `app/assets/css/main.css`: palettes, semantic tokens, theme transitions, focus treatment, and themed prose.
- `app/layouts/default.vue`: semantic application background and foreground.
- `app/components/TheHero.vue`: inherit themed foreground rather than forcing white.
- `app/components/LogoCollection.vue`: semantic card surfaces and borders.
- `app/components/SocialLinks.vue`: use `currentColor` so icons inherit the theme.
- `app/pages/blog/[...slug].vue`: theme-aware article prose and empty state.
- `nuxt.config.ts`: include the sun and moon icons in the static client bundle.

## Data And Contracts

- Local-storage key: `therkiller-color-mode`.
- Supported persisted values: `light` and `dark` only.
- Root DOM contract: `<html class="light|dark" data-theme="light|dark">` with matching `color-scheme` style/property. The class also selects the matching generated Shiki syntax-highlighting palette.
- Invalid or inaccessible stored values are ignored and fall back to the current operating-system preference.

## UI And Content

- Light palette: warm off-white page background, white elevated surfaces, near-black text, subdued slate secondary text, and restrained borders.
- Dark palette: deep charcoal page background, subtly lighter surfaces, soft-white text, cool gray secondary text, and restrained blue-gray borders.
- Syntax-highlighted code uses a light neutral code surface with Shiki's light palette in light mode and a deep blue-gray surface with Shiki's dark palette in dark mode.
- The navigation control shows a sun when the next action is switching to light mode and a moon when the next action is switching to dark mode.
- Theme changes use a short color transition, disabled by `prefers-reduced-motion: reduce`.
- Focus-visible treatment uses the existing turquoise accent and remains visible in both modes.

## Security And Privacy

The feature stores only a non-sensitive `light` or `dark` string in local storage. The initialization script is static repository code and does not interpolate user or content data.

## Verification Strategy

- Run `scripts/verify.sh` for lint and static generation.
- Inspect generated HTML to confirm the initialization script, icon data, and theme attributes are emitted without runtime-only dependencies.
- Manually smoke-test first-load system preference, explicit toggling, persistence after reload, route navigation, and operating-system preference changes before and after an explicit choice.
- Visually inspect the home page and a blog detail page in both modes at desktop and narrow viewport widths.
- Confirm keyboard focus and accessible labels on the toggle.

## Alternatives Considered

- `@nuxtjs/color-mode`: mature and feature-rich, but unnecessary for two fixed modes and would require an unrequested dependency change.
- CSS-only `prefers-color-scheme`: provides no explicit visitor override or persistence.
- Applying the mode only after Vue mounts: simpler, but risks a visible flash and an initially incorrect control state.

## Design Risks

- The server cannot know a browser-only preference, so the static initializer and CSS fallback must remain aligned.
- Theme-aware syntax highlighting depends on generated Shiki markup; visual verification is required after generation.
- The composable must safely handle local-storage and media-query API failures without breaking navigation.
