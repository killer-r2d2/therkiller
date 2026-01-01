import type { BlogPost } from '~/types/blogPost';

export const useBlog = () => {
	const getAllPosts = async () => {
		const { data } = await useAsyncData('blogPosts', () =>
			queryCollection('content').where('path', 'LIKE', '/blog/%').all()
		);

		const unsortedPosts = (data.value ?? []) as unknown as BlogPost[];
		return unsortedPosts.sort((firstPost, secondPost) => {
			const firstPublishedTime = new Date(
				firstPost.dates?.published ?? 0
			).getTime();
			const secondPublishedTime = new Date(
				secondPost.dates?.published ?? 0
			).getTime();
			return secondPublishedTime - firstPublishedTime;
		});
	};

	const getPostBySlug = async (slug: string) => {
		const blogContentPath = `/blog/${slug}`;
		const { data } = await useAsyncData(`blogPost:${blogContentPath}`, () =>
			queryCollection('content').path(blogContentPath).first()
		);
		return data.value as unknown as BlogPost | null;
	};

	return {
		getAllPosts,
		getPostBySlug,
	};
};
