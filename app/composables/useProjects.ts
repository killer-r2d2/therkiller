export const useProjects = () => {
	const getAllProjects = () =>
		useAsyncData('projects', async () => {
			const projects = await queryCollection('content')
				.where('path', 'LIKE', '/projects/%')
				.all();

			return [...projects].sort(
				(firstProject, secondProject) =>
					(firstProject.projectOrder ?? Number.MAX_SAFE_INTEGER) -
					(secondProject.projectOrder ?? Number.MAX_SAFE_INTEGER)
			);
		});

	return {
		getAllProjects,
	};
};
