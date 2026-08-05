<template>
	<main>
		<TheHero />
		<div>
			<LazyBlogPostList
				heading="Latest blog posts"
				description="A selection of my latest notes on web development, tooling, and the things I learn along the way."
				:limit="5"
				show-all-link
			/>
			<LazyLogoCollection />
		</div>
	</main>
</template>
