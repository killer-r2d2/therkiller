<script setup>
	useHead({
		title: 'the rkiller.dev',
		htmlAttrs: {
			lang: 'en',
		},
		link: [],
	});
</script>

<template>
	<NuxtLayout><NuxtPage /></NuxtLayout>
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
