# therkiller.dev

Personal portfolio and blog built as a statically generated Nuxt application.

## Stack

- Nuxt 4 and Vue 3
- Nuxt Content for Markdown pages and blog posts
- Tailwind CSS 4
- Nuxt Icon and Lucide icons
- Nginx for serving the generated site in production

## Requirements

- Node.js 22
- pnpm 11.22.0

## Setup

Install the locked dependencies:

```bash
pnpm install --frozen-lockfile
```

Start the development server at `http://localhost:3000`:

```bash
pnpm run dev
```

## Verification

Run the complete project verification before preparing a pull request:

```bash
./scripts/verify.sh
```

The script runs ESLint and generates the static production site. No automated test suite is configured yet.

## Production

Generate the static site in `.output/public`:

```bash
pnpm run generate
```

The included `Dockerfile` builds the application and serves the generated files with Nginx.

## Project structure

- `app/`: pages, layouts, components, composables, utilities, and styles
- `content/`: Markdown content managed by Nuxt Content
- `public/`: static images, fonts, icons, and logos
- `scripts/verify.sh`: required lint and static-generation gate
- `.agent-specs/`: active and archived change specifications
