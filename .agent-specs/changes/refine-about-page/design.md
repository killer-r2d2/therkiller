# Refine the About Page Design

## Approach

Keep the implementation in `app/pages/about.vue`. Use the existing `BaseSection`, `BaseContainer`, and `SocialLinks` components with responsive Tailwind utilities and semantic theme tokens. Continue the existing dedicated About branch as requested by the ongoing session.

## Impacted Areas

Only the About page and this change specification. Existing navigation, shared components, and global styling stay outside this change.

## Data And Contracts

Keep `/about` and its SEO title. Reuse `/roger-killer.jpg` with intrinsic dimensions and a fixed square size. Reuse the established employer URL, shared social links, and internal `/projects` and `/blog` routes. No data fetching or new dependencies.

## UI And Content

Keep the About h1 at `text-2xl` and every h2 at `text-xl`, so the heading hierarchy is visually clear at every breakpoint.

Use the site's existing editorial layout: an About heading on the left and a compact introduction on the right, stacked on mobile. Enable the 12-column grid only at the medium breakpoint so fixed grid gaps cannot overflow narrow screens. Put a small circular portrait beside a restrained h2, followed by one brief professional paragraph and inline project/blog links. Retain the approved work section and technology list, writing section, and contact section, with `SocialLinks` immediately below the contact paragraph. Keep English copy supported by existing repository content; avoid unverifiable personal claims. Use one h1, descriptive h2 headings and links, and the existing focus styles.

The initial implementation had an oversized hero. The user requested subtler styling and less text, then clarified that the original text sections were good. The final design retains those sections while making the introduction small and quiet. The user also explicitly requested replacing the standalone LinkedIn contact link with the same GitHub, Bluesky, and LinkedIn icons used on the homepage, and animating the section dividers as they become visible.

## Divider Motion

Use four decorative 1px lines with a left transform origin and a 1.5s scaleX transition, slowed at the user's request. Set up a native IntersectionObserver after mounting, reveal each line once 24px inside the viewport, and unobserve it afterward. Disconnect the observer on unmount. Default lines remain visible without JavaScript or observer support. Skip observer setup for reduced motion and provide a CSS reduced-motion override so preference changes also reveal lines immediately. Do not animate content or change layout dimensions.

## Security And Privacy

Use existing public professional information and assets. The employer link uses `noopener noreferrer` and an accessible new-tab description. Social links reuse the established component without changing shared behavior.

## Verification Strategy

- Run `scripts/verify.sh` for lint and static generation.
- Inspect the generated `/about` HTML and metadata.
- Check narrow/mobile and desktop layouts, both themes, portrait loading, keyboard focus, and internal navigation in the local browser.
- Check divider state before and after scrolling into view and confirm revealed lines do not replay.
- Review scope, edge cases, and the diff before committing and pushing.

## Design Risks

Global base typography applies directly to all elements, so responsive type sizes must be explicit on styled text. Use a readable portrait crop and check it visually.
