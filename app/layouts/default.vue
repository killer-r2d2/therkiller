<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
	<div class="bg-black flex min-h-screen flex-col text-white">
		<Navigation />
		<div class="grow">
			<NuxtPage />
		</div>
		<Footer />
		<SpeedInsights />
	</div>
</template>
