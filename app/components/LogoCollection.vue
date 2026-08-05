<script setup lang="ts">
import type { Component } from 'vue';

import CoolifyLogo from '~/components/logo/Coolify.vue';
import HtmlCssJavascriptLogo from '~/components/logo/HtmlCssJavascript.vue';
import KirbyLogo from '~/components/logo/Kirby.vue';
import NuxtLogo from '~/components/logo/Nuxt.vue';
import StrapiLogo from '~/components/logo/Strapi.vue';
import TailwindLogo from '~/components/logo/Tailwind.vue';

type LogoItem = {
	name: string;
	component: Component;
	href?: string;
};

const logoItems: LogoItem[] = [
	{ name: 'Nuxt', href: 'https://nuxt.com/', component: NuxtLogo },
	{
		name: 'Tailwind CSS',
		href: 'https://tailwindcss.com/',
		component: TailwindLogo,
	},
	{ name: 'Kirby CMS', href: 'https://getkirby.com/', component: KirbyLogo },
	{ name: 'Strapi', href: 'https://strapi.io/', component: StrapiLogo },
	{ name: 'Coolify', href: 'https://coolify.io/', component: CoolifyLogo },
	{ name: 'HTML, CSS, and JavaScript', component: HtmlCssJavascriptLogo },
];
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<div
				class="grid grid-cols-1 gap-5 overflow-hidden p-5 sm:mx-0 sm:grid-cols-2 md:grid-cols-3"
			>
				<div
					v-for="logoItem in logoItems"
					:key="logoItem.name"
					class="scale-100 transform rounded-lg border-2 border-logo-border bg-logo-surface text-logo-foreground transition-all duration-300 hover:scale-110 motion-reduce:transition-none"
				>
					<NuxtLink
						v-if="logoItem.href"
						:to="logoItem.href"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="`Visit ${logoItem.name}`"
						class="flex h-full items-center justify-center p-4 no-underline"
					>
						<component :is="logoItem.component" class="max-w-24" />
					</NuxtLink>
					<div
						v-else
						class="flex h-full items-center justify-center p-4"
					>
						<component :is="logoItem.component" class="max-w-24" />
					</div>
				</div>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
