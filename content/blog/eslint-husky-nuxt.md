---
title: Setting Up ESLint with Nuxt and Husky for Git Hooks
description: Learn how to integrate ESLint with Nuxt and use Husky for managing Git hooks to ensure code quality and consistency.
author: '@yourname'
dates:
  published: 2024-03-01T00:00:00.000Z
image: /path-to-image.jpg
tags: nuxt, eslint, husky, git-hooks
---

# Setting Up ESLint with Nuxt and Husky for Git Hooks

In this blog post, we will explore how to set up ESLint with Nuxt and integrate Husky for managing Git hooks. This setup will help ensure code quality and consistency across your Nuxt projects.

## Setting Up ESLint with Nuxt

ESLint is a powerful tool for identifying and fixing problems in your JavaScript code. With the introduction of the ESLint flat config format, integrating ESLint into your Nuxt project has become more streamlined.

### Quick Setup

To add the ESLint module to your Nuxt project, run the following command:

```bash
npx nuxi module add eslint
```

This command will generate an `eslint.config.mjs` file in your project root, which you can customize as needed. If you're using TypeScript, make sure to install it as well:

```bash
yarn add --dev typescript
```

### Manual Setup

For a manual setup, you can add the necessary packages using:

```bash
yarn add --dev @nuxt/eslint eslint typescript
```

Then, update your `nuxt.config.ts` to include the ESLint module:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: {
    // options here
  }
})
```

Create an `eslint.config.mjs` file with your custom configurations:

```javascript
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here
)
```

## Integrating Husky for Git Hooks

Husky is a tool that enhances your Git workflow by allowing you to run scripts at different stages of the Git lifecycle. This can be particularly useful for running linting and testing scripts before commits or pushes.

### Setting Up Husky

To get started with Husky, install it in your project:

```bash
npm install husky --save-dev
```

After installation, you can set up Husky to manage your Git hooks by running:

```bash
npx husky install
```

This command will create a .husky directory in your project. You can then add hooks, such as a pre-commit hook to run ESLint:

```bash
npx husky add .husky/pre-commit "npm run lint"
```

This setup ensures that your code is linted before every commit, helping maintain code quality.

## Conclusion

By integrating ESLint with Nuxt and using Husky for Git hooks, you can create a robust development environment that enforces code quality and consistency. This setup not only helps in catching errors early but also streamlines the development process by automating repetitive tasks.

For more detailed information, you can refer to the [ESLint Nuxt Module Documentation](https://eslint.nuxt.com/packages/module) and the [Husky Documentation](https://typicode.github.io/husky/).
