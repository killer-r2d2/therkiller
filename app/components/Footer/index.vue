<script setup lang="ts"></script>

<template>
	<footer class="mb-12 md:mb-24 lg:mb-44">
		<BaseContainer>
			<div class="flex flex-col items-center text-center">
				<NuxtLink to="/" class="text-accent hover:text-accent-hover text-sm mb-4 transition-colors duration-200 motion-reduce:transition-none">therkiller.dev</NuxtLink>
				<div class="gap-x-4 flex flex-row">
					<SocialLinks />
				</div>
			</div>
		</BaseContainer>
	</footer>
</template>
