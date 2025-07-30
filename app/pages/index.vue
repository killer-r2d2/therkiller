<script setup lang="ts">

</script>

<template>
	<main>
		<TheHero />
		<Suspense>
			<template #default>
				<div>
					<LazyBlogPostList />
				</div>
			</template>
			<template #fallback>
				<div class="animate-pulse">
					<BaseSection>
						<BaseContainer>
							<p class="text-center">Loading...</p>
						</BaseContainer>
					</BaseSection>
				</div>
			</template>
		</Suspense>
		<LazyLogoCollection />
	</main>
</template>
