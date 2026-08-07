# Add Projects Showcase Design

## Approach

Store every project as a frontmatter-only Markdown entry under `content/projects/`. Extend the existing catch-all Nuxt Content schema with project-specific fields and add a `useProjects` composable that queries project paths and sorts them by an explicit numeric `projectOrder`.

Render the data through reusable project list and card components. The projects index requests the complete list, while the homepage passes a limit of three. Add `/projects` links to the desktop/mobile primary navigation and footer.

## Impacted Areas

- `content.config.ts`: validate the project URL, stack, and order fields.
- `content/projects/*.md`: store the 13 supplied projects.
- `app/composables/useProjects.ts`: query and sort project entries.
- `app/components/Project/Card.vue`: accessible external project card.
- `app/components/Project/List.vue`: responsive section and optional all-projects link.
- `app/pages/projects/index.vue`: full project overview and SEO metadata.
- `app/pages/index.vue`: latest-three project section.
- `app/components/Navigation/index.vue`: projects navigation entry.
- `app/components/Footer/index.vue`: projects footer entry.

## Data And Contracts

Each project entry uses the existing `content` collection and adds:

```yaml
title: string
url: absolute URL
technologies: string[]
projectOrder: positive integer
```

`projectOrder` is ascending: `1` is the newest project. Filenames are stable slugs and do not control ordering. The projects query only includes `/projects/*` entries with a numeric `projectOrder` and returns a new sorted array.

## UI And Content

Projects use a restrained editorial grid inspired by the supplied Tailwind UI three-column reference. Each entry has a fine top divider, project name, visible hostname, technology pills, and a small external-link indicator. There are no dates, descriptions, sequence numbers, images, or decorative backgrounds.

The grid is one column on small screens, two columns from the medium breakpoint, and three columns on large screens. Every project has equal visual weight. Hover feedback is limited to subtle accent-color and arrow movement. Homepage and index use the same component, keeping the three-item preview consistent with the complete collection.

All interface text remains English to match the existing site. Links expose their external behavior, have visible focus styling through the global focus rule, and use motion-reduce variants.

## Security And Privacy

External links use `target="_blank"` with `rel="noopener noreferrer"`. The implementation loads no content or assets from project sites, avoiding third-party requests and preserving the current privacy posture.

## Verification Strategy

- Run `scripts/verify.sh`, which covers lint and static generation.
- Confirm generation includes `/projects`.
- Inspect the generated project data/order for 13 overview entries and three homepage entries.
- Review the homepage and projects page at mobile and desktop widths in both color modes when a local browser preview is available.

## Alternatives Considered

- Dates were rejected because none are known and fabricated dates would misrepresent the work.
- Remote screenshots and client logos were rejected because they introduce unstable third-party dependencies and would require asset sourcing or approval.
- Prominent colored tiles, sequence numbers, and featured-card sizing were rejected after visual review because the requested direction is quieter and more editorial.
- Hard-coding the projects in Vue was rejected because Nuxt Content already provides the site's editorial data layer.

## Design Risks

- A project with a missing or duplicated order could be placed incorrectly. Schema validation requires an integer, and review of the generated list catches duplicates.
- Long project names and technology combinations must wrap cleanly across responsive widths.
