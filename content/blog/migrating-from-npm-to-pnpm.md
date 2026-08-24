---
title: Why I Switched This Nuxt Site from npm to pnpm
description: pnpm did not make my website smaller. It made working on it faster, saved local disk space, and made its dependencies easier to understand.
author: '@therkiller'
dates:
  published: 2026-08-21T00:00:00.000Z
tags: pnpm, npm, nuxt, developer-experience
---

# Why I Switched This Nuxt Site from npm to pnpm

When I first considered [pnpm](https://pnpm.io/), I thought it might make my application smaller. After migrating this site, I realised that was the wrong goal.

This Nuxt site is generated as static files. Its `node_modules` folder is needed while I work on the project, but it is not part of the website I deploy. Changing the package manager was never going to shrink my images, CSS, or JavaScript in a meaningful way.

The real benefits are on my development machine.

## Faster day-to-day development

pnpm keeps downloaded packages in a shared store and reuses them between projects. That can make repeated installs quicker, especially when several projects use the same tools and frameworks.

I did not run a speed benchmark for this migration because the npm and pnpm caches were not in the same state. A stopwatch result would have looked convincing without being fair. The practical improvement is simpler: pnpm has less work to repeat.

It also gives me faster feedback when the project setup is wrong. During the migration, pnpm found that the lint command used ESLint without declaring it as a direct dependency. npm's flatter dependency layout had hidden that mistake. Fixing it now avoids a future "works on my machine" problem.

## Less duplicated storage

In this repository, the local `node_modules` folder went from about 421 MiB with npm to 392 MiB with pnpm. That is roughly 29 MiB, or 7%, less for this project.

The more interesting saving appears across multiple projects. Instead of storing another full copy of the same package for every repository, pnpm can link them to its shared store. The exact amount depends on the projects on a machine, but the benefit grows when they share dependencies.

My lockfile also became about 34% smaller, which is a pleasant bonus when reviewing dependency changes.

## A dependency tree I can understand

pnpm's `node_modules` folder is not magically simple. Its internal `.pnpm` directory still contains the complete dependency graph.

What is clearer is the top level: it mainly represents the packages the project declares directly. A tool cannot quietly rely on a random package that happened to be hoisted there by another dependency.

That makes the dependency tree more honest. I can see what the project actually depends on, and missing declarations fail earlier instead of becoming confusing bugs later.

## What stayed the same

The generated site and the production container are effectively the same size as before. That is expected: pnpm changes how dependencies are installed during development and the build, not the static files Nuxt produces.

I also added stricter install settings while migrating, but I would not claim that pnpm makes an application secure by itself. Dependency updates, reviews, and sensible build settings still matter.

## Was it worth switching?

For me, yes. Not because visitors receive a smaller website, but because the project is nicer to work with:

- repeated installs can reuse packages that are already on my machine;
- shared packages take less duplicated disk space;
- direct and transitive dependencies are easier to tell apart;
- undeclared dependencies are exposed earlier.

That is a less dramatic promise than "a smaller application", but it is much closer to what pnpm actually improves.
