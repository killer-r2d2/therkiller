<script setup lang="ts">
	const { toggleColorMode } = useColorMode();
</script>

<template>
	<nav
		class="container mx-auto my-12 flex items-center justify-between md:my-12 lg:my-24"
	>
		<NuxtLink
			to="/"
			class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
		>
			therkiller.dev
		</NuxtLink>
		<button
			type="button"
			class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:border-accent hover:text-accent motion-reduce:transition-none"
			aria-label="Toggle light and dark color mode"
			title="Toggle light and dark color mode"
			@click="toggleColorMode"
		>
			<Icon
				name="lucide:sun"
				size="20"
				class="color-mode-toggle__sun"
				aria-hidden="true"
			/>
			<Icon
				name="lucide:moon"
				size="20"
				class="color-mode-toggle__moon"
				aria-hidden="true"
			/>
		</button>
	</nav>
</template>
