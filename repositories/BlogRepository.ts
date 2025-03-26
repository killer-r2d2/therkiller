import type { BlogPost } from '~/types/blogPost';

export default class BlogRepository {
	async getAllPosts(): Promise<BlogPost[]> {
		const posts = await queryContent<BlogPost>('/blog').find();
		return posts.sort(
			(a, b) =>
				new Date(b.dates.published).getTime() -
				new Date(a.dates.published).getTime()
		);
	}

	async getPostByPath(path: string): Promise<BlogPost | null> {
		const post = await queryContent<BlogPost>(path).findOne();
		return post;
	}

	// Add other methods as needed
}
