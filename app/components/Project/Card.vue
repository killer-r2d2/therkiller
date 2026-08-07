<script setup lang="ts">
	import type { Collections } from '@nuxt/content';

	const props = withDefaults(
		defineProps<{
			project: Collections['content'];
			headingLevel?: 'h2' | 'h3';
		}>(),
		{
			headingLevel: 'h3',
		}
	);

	const hostname = computed(() => {
		if (!props.project.url) {
			return '';
		}

		return new URL(props.project.url).hostname.replace(/^www\./, '');
	});

	const headingClasses = computed(() =>
		props.headingLevel === 'h3'
			? undefined
			: 'text-2xl leading-tight font-bold tracking-tight'
	);
</script>

<template>
	<article class="h-full border-t border-border">
		<a
			:href="project.url"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="`Visit ${project.title} (opens in a new tab)`"
			class="group flex h-full flex-col pt-2 pb-4 no-underline"
		>
			<div class="flex items-center justify-between gap-3">
				<p
					class="text-sm text-muted transition-colors duration-200 group-hover:text-accent motion-reduce:transition-none"
				>
					{{ hostname }}
				</p>
				<span
					class="flex h-6 w-6 shrink-0 items-center justify-center text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none"
				>
					<Icon
						name="lucide:arrow-right"
						size="20"
						class="-rotate-45"
						aria-hidden="true"
					/>
				</span>
			</div>

			<div>
				<component
					:is="headingLevel"
					:class="[
						'mt-2 transition-colors duration-200 group-hover:text-accent motion-reduce:transition-none',
						headingClasses,
					]"
				>
					{{ project.title }}
				</component>
				<ul
					v-if="project.technologies?.length"
					class="mt-3 flex flex-wrap gap-1.5"
					aria-label="Technologies"
				>
					<li
						v-for="technology in project.technologies"
						:key="technology"
						class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted lg:text-sm"
					>
						{{ technology }}
					</li>
				</ul>
			</div>
		</a>
	</article>
</template>
