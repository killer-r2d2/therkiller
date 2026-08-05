# Technical Styleguide Design

## Approach

Implement the styleguide as a normal Nuxt page at `app/pages/styleguide.vue` so it inherits the production layout, navigation, footer, color-mode behavior, global CSS, and static-generation pipeline. The page will use semantic HTML sections and existing `BaseSection` and `BaseContainer` layout primitives.

Add `app/components/Base/Button.vue` as a deliberately small native-button wrapper. It will expose `variant`, `type`, and `disabled` props, render a native `<button>`, accept arbitrary attributes through Vue fallthrough behavior, and use the same semantic theme utilities demonstrated by the styleguide. Supported variants are `primary`, `secondary`, `quiet`, and `icon`; the disabled presentation remains the native `disabled` state rather than a separate visual-only variant.

Correct and complete the local font declarations in `app/assets/css/main.css` for the three documented weights of Lato and Roboto Slab. Add a semantic accent-contrast token so the primary button keeps appropriate foreground contrast in light and dark themes.

The styleguide's color metadata will be a typed local constant in the page. Swatches will render the literal configured values so both light and dark palettes can be compared at the same time, independent of the active theme. The page will continue to use the active semantic theme for its surrounding interface.

## Impacted Areas

- `app/pages/styleguide.vue`: page metadata, section navigation, and all style specimens.
- `app/components/Base/Button.vue`: reusable native button variants used by the styleguide.
- `app/assets/css/main.css`: correct local font sources/weights and add the accent-contrast semantic token.
- `app/components/Footer/index.vue`: add the discoverability link.
- `.agent-specs/changes/technical-styleguide/`: accepted scope, design, and implementation tasks.

## Data And Contracts

No persisted data, API, or content-collection contract changes are required.

The base button contract is:

- `variant`: `'primary' | 'secondary' | 'quiet' | 'icon'`, defaulting to `'primary'`.
- `type`: native button type, defaulting to `'button'` to avoid accidental form submission.
- `disabled`: native disabled state, defaulting to `false`.
- Default slot: visible button content.
- Native attributes and listeners: inherited by the root button through Vue attribute fallthrough.

## UI And Content

The page content remains English to match the existing site. It uses a restrained reference-page layout:

1. Page introduction and anchor navigation.
2. Typography cards for both font families and three weights.
3. Light/dark semantic color pairs and the configured primary scale.
4. Interactive button examples with variant labels and disabled states.
5. Link examples matching inline, navigation, action, and external patterns.

The global navigation color-mode toggle provides theme switching. The page does not duplicate that control. Sections use real heading hierarchy, swatches include visible text labels outside their color field, and decorative icons are hidden from assistive technology.

## Security And Privacy

- No external font, script, analytics, or styleguide service is introduced.
- The external link example uses `target="_blank"` with `rel="noopener noreferrer"`.
- All assets remain locally hosted.

## Verification Strategy

- Run ESLint through `npm run lint`.
- Run static generation through `npm run generate` and confirm `/styleguide` is prerendered.
- Inspect the generated styleguide HTML for the required sections, font/token labels, and safe external-link attributes.
- Exercise the page at mobile and desktop widths, including light/dark mode and keyboard focus.
- Run `scripts/verify.sh` as the final executable gate.
- Perform spec verification and ZOMBIES review before PR readiness.

## Alternatives Considered

### Page-Local Button Markup Only

Rejected because copied button class strings would make the styleguide a visual mock rather than an executable reference for a reusable production primitive.

### Storybook Or Another Component Explorer

Rejected because the current scope covers one small static reference page and does not justify a new dependency, build path, or deployment surface.

### Add Styleguide To Primary Navigation

Rejected because it is a technical secondary destination. A footer link keeps it discoverable without competing with the site's main content.

## Design Risks

- Color values are represented in both CSS and page metadata to show light and dark values simultaneously; verification must catch drift.
- Replacing all existing buttons with the new base component would increase regression risk and is intentionally deferred.
- Font rendering depends on explicit local weight declarations; missing sources could otherwise fall back to browser-synthesized weights.
