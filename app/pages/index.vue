<template>
	<main>
		<TheHero />
		<div>
			<LazyProjectList
				heading="Selected projects"
				description="Recent websites built with Kirby CMS, Nuxt, Strapi, and Tailwind CSS."
				:limit="3"
				show-all-link
			/>
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
