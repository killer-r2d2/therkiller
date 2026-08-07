# Add Projects Showcase

## Summary

Add a dedicated projects showcase to therkiller.dev and feature the three most recent projects on the homepage. Projects are maintained without invented publication dates and use an explicit editorial order instead.

## Problem

The site currently presents Roger's writing but does not provide a structured overview of delivered web projects. Visitors therefore cannot quickly see representative client work or the technology used for it.

## Users And Scenarios

- Prospective clients can scan all selected projects and open the live websites.
- Peers and collaborators can see the technology stack used for each project.
- Homepage visitors can discover the three most recent projects without navigating away first.
- Roger can change the display order later without assigning inaccurate dates.

## Scope

- Add the 13 supplied projects as structured Nuxt Content entries.
- Add a public projects overview page linked from the primary and footer navigation.
- Add the first three projects from the supplied order to the homepage.
- Show each project's name, website, and technology stack.
- Use a card-based visual treatment that is clearly different from the blog list.
- Support the site's existing responsive layout, light/dark modes, keyboard navigation, and reduced-motion preference.

## Not In Scope

- Project detail pages or long case studies.
- Invented completion or launch dates.
- Client testimonials, project roles, or outcome claims not supplied by the user.
- Remote screenshots, logos, tracking, or third-party embeds.
- Changes to the existing blog presentation.

## Success Criteria

- `/projects` lists all 13 supplied projects in the supplied order.
- The homepage lists exactly the first three projects from that same order.
- Every project opens the supplied live URL in a new tab with safe external-link attributes.
- Kirby CMS, Nuxt, Strapi, and Tailwind CSS labels match the supplied stack for each project.
- The project UI is visually distinct from the date-based blog list.
- `scripts/verify.sh` passes.

## Open Questions

None. Until exact dates are available, the supplied list order is treated as newest first and stored explicitly so it can be changed independently of the filenames.

## Risks

- The supplied order may not represent chronological launch order; an explicit order field makes later correction straightforward.
- External project URLs can change or become unavailable independently of this site.
