<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<!-- create a back button -->
				<NuxtLink to="/" class="mb-8 block max-w-max text-primary-400">
					Back
				</NuxtLink>

				<!-- Display the content only if the blogPost is available -->
				<ContentDoc
					class="prose text-white prose-headings:text-white prose-p:font-serif prose-a:text-white prose-strong:font-serif prose-strong:text-primary-400 prose-li:font-serif"
				/>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
