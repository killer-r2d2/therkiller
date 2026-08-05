<template>
	<footer class="mb-12 md:mb-24 lg:mb-44">
		<BaseContainer>
			<div class="flex flex-col items-center text-center">
				<NuxtLink
					to="/"
					class="mb-4 text-base text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none lg:text-base"
				>
					therkiller.dev
				</NuxtLink>
				<nav aria-label="Footer navigation" class="mb-6 flex gap-x-6">
					<NuxtLink
						to="/blog"
						class="text-base text-foreground transition-colors duration-200 hover:text-accent motion-reduce:transition-none lg:text-base"
					>
						Blog
					</NuxtLink>
				</nav>
				<div class="flex flex-row gap-x-4">
					<SocialLinks />
				</div>
			</div>
		</BaseContainer>
	</footer>
</template>
