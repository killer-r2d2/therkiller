import type { BlogPost } from '~/types/blogPost';

export const useBlog = () => {
	const getAllPosts = async () => {
		const { data } = await useAsyncData('blogPosts', () =>
			queryContent<BlogPost>('/blog').sort({ 'dates.published': -1 }).find()
		);
		return data.value;
	};

	const getPostByPath = async (path: string) => {
		const { data } = await useAsyncData(`blogPost-${path}`, () =>
			queryContent<BlogPost>(`/blog/${path}`).findOne()
		);
		return data.value;
	};

	return {
		getAllPosts,
		getPostByPath,
	};
};
