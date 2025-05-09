<script setup>
	const { data: content } = await useAsyncData('home', () =>
		queryContent('/').findOne()
	);
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<div class="text-center">
				<h1
					class="mt-1 text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl"
				>
					{{ content.title }}
				</h1>
				<div class="mx-auto mb-8 mt-5 max-w-2xl">
					<ContentDoc class="a:underline text-white" />
				</div>
				<div class="mb-8 flex justify-center">
					<img
						class="h-24 w-24 rounded-full object-cover"
						:src="content.profileImage"
						alt="Profile image Roger Killer"
					>
				</div>
				<div class="mb-8 flex justify-center gap-x-4 lg:mb-0">
					<SocialLinks />
				</div>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
