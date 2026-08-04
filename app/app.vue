<script setup lang="ts">
	const colorModeInitializer = `(() => {
		const root = document.documentElement;
		let colorMode = 'light';

		try {
			colorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} catch {}

		try {
			const storedColorMode = window.localStorage.getItem('therkiller-color-mode');
			if (storedColorMode === 'light' || storedColorMode === 'dark') {
				colorMode = storedColorMode;
			}
		} catch {}

		root.dataset.theme = colorMode;
		root.style.colorScheme = colorMode;
		root.classList.remove('light', 'dark');
		root.classList.add(colorMode);
	})();`;

	useHead({
		title: 'therkiller.dev',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{ name: 'color-scheme', content: 'light dark' }],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
		],
		script: [
			{
				key: 'color-mode-initializer',
				innerHTML: colorModeInitializer,
			},
		],
	});
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
	.page.enter-active,
	.page-leave-active {
		transition: opacity 0.22s;
	}

	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
