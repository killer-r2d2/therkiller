<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			heading: string;
			description: string;
			limit?: number;
			showAllLink?: boolean;
			headingLevel?: 'h1' | 'h2';
		}>(),
		{
			limit: undefined,
			showAllLink: false,
			headingLevel: 'h2',
		}
	);

	const { getAllProjects } = useProjects();
	const { data: allProjects } = await getAllProjects();

	const projectList = computed(() => {
		const projects = allProjects.value ?? [];

		return props.limit === undefined
			? projects
			: projects.slice(0, Math.max(0, props.limit));
	});

	const cardHeadingLevel = computed(() =>
		props.headingLevel === 'h1' ? 'h2' : 'h3'
	);
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<header class="mb-8 max-w-3xl md:mb-10">
				<component :is="headingLevel" class="font-sans text-2xl">
					{{ heading }}
				</component>
				<p class="mt-3 text-muted md:text-xl">{{ description }}</p>
			</header>

			<ul class="grid gap-x-8 md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
				<li v-for="project in projectList" :key="project.path">
					<ProjectCard
						:project="project"
						:heading-level="cardHeadingLevel"
					/>
				</li>
			</ul>

			<NuxtLink
				v-if="showAllLink"
				to="/projects"
				class="mt-8 inline-flex items-center gap-2 text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
			>
				View all projects
				<Icon name="lucide:arrow-right" size="20" aria-hidden="true" />
			</NuxtLink>
		</BaseContainer>
	</BaseSection>
</template>
