<script setup></script>
<template>
	<BaseSection>
		<BaseContainer>
			<div
				class="grid grid-cols-1 gap-5 overflow-hidden p-5 sm:mx-0 sm:grid-cols-2 md:grid-cols-3"
			>
				<NuxtLink
					to="https://nuxt.com/"
					target="_blank"
					aria-label="Visit Nuxtjs"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoNuxt class="max-w-24" />
					</div>
				</NuxtLink>

				<NuxtLink
					to="https://tailwindcss.com/"
					target="_blank"
					aria-label="Visit Tailwind CSS"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoTailwind class="max-w-24" />
					</div>
				</NuxtLink>

				<NuxtLink
					to="https://getkirby.com//"
					target="_blank"
					aria-label="Visit Kirby cms"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoKirby class="max-w-24" />
					</div>
				</NuxtLink>

				<NuxtLink
					to="https://strapi.io/"
					target="_blank"
					aria-label="Visit Strapi.io Headless CMS"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoStrapi class="max-w-24" />
					</div>
				</NuxtLink>

				<NuxtLink
					to="https://nextjs.org/"
					target="_blank"
					aria-label="Visit Nextjs"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoNextjs class="max-w-24" />
					</div>
				</NuxtLink>

				<NuxtLink
					to="https://supabase.com/"
					target="_blank"
					aria-label="Visit Supabase"
					class="scale-100 transform transition-all duration-300 hover:scale-110"
				>
					<div
						class="flex h-full items-center justify-center rounded-lg border-2 border-white p-4"
					>
						<LogoSupabase class="max-w-24" />
					</div>
				</NuxtLink>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
