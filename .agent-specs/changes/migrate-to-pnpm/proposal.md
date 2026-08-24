# Migrate To pnpm And Publish Findings

## Summary

Migrate therkiller.dev from npm to pnpm without changing application behavior or dependency versions, then publish a concise English blog post about development speed, local storage, and a clearer dependency layout.

## Problem

The project currently uses npm across local development, verification, Docker builds, documentation, and repository instructions. This works, but it duplicates dependency files across local projects, permits dependency lifecycle scripts under the current defaults, and produces a large JSON lockfile that is difficult to review.

The initial idea that pnpm makes the application "safer and smaller" focuses on the wrong outcome. The migration should improve the local development workflow through package reuse, less duplicated storage, and dependency boundaries that expose undeclared packages. The article needs to explain those benefits without implying that the generated website becomes smaller.

## Users And Scenarios

- The maintainer installs and updates dependencies across multiple Node.js projects and wants less duplicated storage and faster repeated installs.
- Contributors need one pinned package-manager version and reproducible local and Docker builds.
- Reviewers need a readable lockfile and evidence that the migration did not silently change the application.
- Blog readers want a short, approachable account of what pnpm improves in everyday development.

## Scope

- Pin a stable pnpm 11 release for the repository.
- Replace `package-lock.json` with `pnpm-lock.yaml` while preserving the currently resolved dependency versions as closely as pnpm permits.
- Configure explicit dependency-build approvals and conservative supply-chain settings supported by the pinned pnpm version.
- Replace active npm commands in project scripts, Docker, README, and agent instructions with pnpm equivalents.
- Preserve the statically generated Nuxt application and Nginx production stage.
- Capture comparable npm and pnpm measurements for dependency storage, lockfile size, generated output, installation behavior, and Docker image output when available.
- Publish a concise English blog post focused on development speed, local storage, clearer direct dependencies, and the unchanged deployment size.

## Not In Scope

- Upgrading Nuxt, Vue, modules, or other application dependencies.
- Changing application routes, design, components, or runtime behavior beyond adding the blog post.
- Converting historical blog posts from npm commands to pnpm commands.
- Claiming that pnpm alone prevents vulnerable dependencies or supply-chain attacks.
- Claiming a smaller website or production image without supporting measurements.
- Introducing a monorepo or restructuring the repository into workspaces.

## Success Criteria

- `package.json` pins pnpm and the repository contains only the pnpm lockfile.
- A clean frozen pnpm installation succeeds using the committed lockfile.
- Only reviewed dependency build scripts are allowed to execute.
- Local verification and the Docker build use pnpm commands.
- `pnpm run lint`, `pnpm run generate`, and `scripts/verify.sh` succeed.
- The generated site still contains the existing routes and adds the new blog route.
- The production Docker stage still contains only the generated site served by Nginx.
- The blog post clearly explains the development-speed, local-storage, and dependency-clarity benefits without claiming that pnpm shrinks the deployed site.
- The article stays approachable, concise, and light on implementation detail.
- Every numerical comparison in the article comes from a recorded repository measurement.

## Open Questions

None. The accepted direction is a behavior-preserving migration with an evidence-based English article.

## Risks

- pnpm's dependency layout can expose undeclared dependencies that npm hoisting previously masked.
- Blocking dependency build scripts can break native or platform-specific packages until the required packages are explicitly approved.
- Translating lockfile formats can resolve peer dependencies differently or introduce unintended package-version drift.
- Filesystem hard links make simplistic `node_modules` size comparisons misleading unless the shared pnpm store is included and the measurement method is explained.
- Docker layers can retain package-manager stores if the multi-stage build is not kept carefully scoped.
