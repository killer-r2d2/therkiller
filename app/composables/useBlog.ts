const getPublishedTime = (publishedDate?: string) =>
	new Date(publishedDate ?? 0).getTime();

export const useBlog = () => {
	const getAllPosts = () =>
		useAsyncData('blogPosts', async () => {
			const posts = await queryCollection('content')
				.where('path', 'LIKE', '/blog/%')
				.all();

			return [...posts].sort(
				(firstPost, secondPost) =>
					getPublishedTime(secondPost.dates?.published) -
					getPublishedTime(firstPost.dates?.published)
			);
		});

	const getPostBySlug = (slug: string) => {
		const blogContentPath = `/blog/${slug}`;

		return useAsyncData(`blogPost:${blogContentPath}`, () =>
			queryCollection('content').path(blogContentPath).first()
		);
	};

	return {
		getAllPosts,
		getPostBySlug,
	};
};
