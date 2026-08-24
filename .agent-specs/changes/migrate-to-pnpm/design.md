# Migrate To pnpm And Publish Findings Design

## Approach

Create the migration on a dedicated branch and pin an exact stable pnpm 11 version in `package.json`. Generate `pnpm-lock.yaml` from the existing npm lockfile before removing `package-lock.json`, then use frozen installs for all verification and Docker builds. Do not run a general dependency update.

Add a root `pnpm-workspace.yaml` even though the repository contains a single package because current pnpm project settings, including supply-chain policy, live there. Keep the policy narrow: explicitly approve only dependency build scripts required for successful Nuxt generation, block exotic transitive dependency sources, and state the minimum release-age policy explicitly instead of relying on a machine-global configuration.

The imported lockfile reports three transitive peer warnings for `oxc-parser`, `unplugin`, and `cac` because pnpm flattens nested npm peer contexts differently. A fresh pnpm resolution removes those warnings but also updates direct framework packages, so preserving the existing application dependency versions takes precedence. Do not suppress the warnings; record them and rely on successful lint, generation, and Docker verification to demonstrate behavior preservation.

Update active package-manager references in `package.json`, `README.md`, `Dockerfile`, `scripts/verify.sh`, and `AGENTS.md`. Historical blog content remains unchanged. The Docker build keeps its two-stage shape: pnpm and all dependencies exist only in the Node build stage, while the Nginx stage receives `.output/public` only.

Capture npm baselines before replacing the lockfile and capture pnpm results after a frozen clean install. Record commands and results in the new blog article only when the measurements are comparable. Explain that a content-addressable store reduces duplication across projects, while the static Nuxt output and Nginx image are expected to remain essentially unchanged.

## Impacted Areas

- `package.json`: exact package-manager pin and pnpm-compatible script invocation.
- `package-lock.json`: removed after lockfile import.
- `pnpm-lock.yaml`: committed dependency-resolution source.
- `pnpm-workspace.yaml`: repository-level pnpm and supply-chain settings.
- `Dockerfile`: install pinned pnpm and use a frozen lockfile in the build stage.
- `scripts/verify.sh`: run lint and generation through pnpm.
- `README.md`: pnpm requirements, setup, and commands.
- `AGENTS.md`: pnpm-managed lockfile rules and required commands.
- `.gitignore` and `.dockerignore`: exclude pnpm cache data and planning artifacts from commits and build contexts.
- `content/blog/migrating-from-npm-to-pnpm.md`: measured migration article.
- `.agent-specs/changes/migrate-to-pnpm/`: proposal, design, and task tracking.

## Data And Contracts

No application data, route contract, content schema, or public component API changes are required. The new Markdown file adds `/blog/migrating-from-npm-to-pnpm` through the existing Nuxt Content route.

The package-management contract becomes:

- An exact `pnpm@11.x` version is declared through `packageManager`.
- `pnpm-lock.yaml` is committed and frozen installs must reject drift from `package.json`.
- Dependency build scripts are denied unless explicitly reviewed and allowed.
- Docker and local verification use the same lockfile and package manager.

## UI And Content

The article remains English to match the existing site. It uses the established frontmatter fields and a personal, first-person narrative. It stays concise and follows the maintainer's revised motivation:

1. Faster day-to-day development through package reuse and earlier feedback.
2. Less duplicated local storage, supported by the repository measurement.
3. A clearer distinction between direct and transitive dependencies, illustrated by the ESLint issue found during migration.
4. A short clarification that the generated site and production container remain effectively unchanged.
5. A practical recommendation based on developer experience rather than deployment size.

Avoid lengthy setup instructions, exhaustive security-policy detail, speculative server-rendering comparisons, and marketing-style conclusions. Keep methodological caveats only where they prevent a misleading claim.

## Security And Privacy

- Keep the committed pnpm settings free of credentials and registry tokens.
- Allow only dependency build scripts needed by this dependency graph and successful Linux/macOS generation.
- Preserve the committed lockfile and use frozen installs in automated builds.
- Do not treat pnpm as a vulnerability scanner or replacement for dependency maintenance.
- Do not include local usernames, absolute paths, machine identifiers, or private cache locations in the public article.

## Verification Strategy

- Record the current npm lockfile, `node_modules`, generated output, route set, and Docker behavior before migration.
- Import the npm lockfile into pnpm and inspect direct and transitive dependency changes.
- Remove installed dependencies, perform a clean frozen pnpm install, and review blocked build scripts.
- Run `pnpm run lint`, `pnpm run generate`, and `scripts/verify.sh`.
- Confirm the expected blog route exists in `.output/public` and existing generated routes remain present.
- Build the production Docker image and confirm its final stage is still Nginx-only.
- Review the article's numbers against captured command output.
- Run spec verification, ZOMBIES review, PR readiness, and the ship workflow.

## Alternatives Considered

### Keep npm And Add Security Configuration

Rejected for this change because it would improve install-script policy but would not provide pnpm's shared content-addressable store or stricter default dependency layout, which are primary goals.

### Use pnpm 12 Release Candidate

Rejected because a package-manager migration should use the current stable major rather than combine the change with a prerelease runtime rewrite.

### Rewrite Historical npm Articles

Rejected because those posts document their original contexts and npm commands remain valid for readers using npm. Rewriting them would create unrelated content churn.

### Claim Savings From `du node_modules` Alone

Rejected because pnpm uses hard links to a shared store. A fair comparison must describe both project-visible size and the shared store or limit the claim to cross-project deduplication.

## Design Risks

- Native packages such as `better-sqlite3` and build tools such as `esbuild` may require explicit build approval.
- pnpm's symlink layout may reveal tooling that relied on npm's hoisting behavior.
- A first clean pnpm install can be slower than a warm install, so timing comparisons must identify cache state.
- Docker image size may vary slightly because base-image tags are mutable; the article must not attribute unrelated base-layer drift to pnpm.
