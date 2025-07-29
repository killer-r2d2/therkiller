<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
	<div class="bg-black flex min-h-screen flex-col text-white">
		<div class="grow">
			<Navigation />
			<NuxtPage />
			<Footer />
		</div>
		<SpeedInsights />
	</div>
</template>
