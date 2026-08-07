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
</script>

<template>
	<article class="h-full border-t border-border">
		<a
			:href="project.url"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="`Visit ${project.title} (opens in a new tab)`"
			class="group flex h-full flex-col py-6 no-underline md:py-7"
		>
			<div class="flex items-center justify-between gap-6">
				<p
					class="text-sm text-muted transition-colors duration-200 group-hover:text-accent motion-reduce:transition-none"
				>
					{{ hostname }}
				</p>
				<span
					class="flex h-11 w-11 shrink-0 items-center justify-center text-muted transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none"
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
					class="mt-4 text-2xl leading-tight font-bold tracking-tight transition-colors duration-200 group-hover:text-accent motion-reduce:transition-none"
				>
					{{ project.title }}
				</component>
				<ul
					v-if="project.technologies?.length"
					class="mt-5 flex flex-wrap gap-2"
					aria-label="Technologies"
				>
					<li
						v-for="technology in project.technologies"
						:key="technology"
						class="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted lg:text-sm"
					>
						{{ technology }}
					</li>
				</ul>
			</div>
		</a>
	</article>
</template>
