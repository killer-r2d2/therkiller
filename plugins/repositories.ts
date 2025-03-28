import BlogRepository from '~/repositories/BlogRepository';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			blogRepository: new BlogRepository(),
		},
	};
});
