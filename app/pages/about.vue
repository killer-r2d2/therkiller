<script setup lang="ts">
	useSeoMeta({
		title: 'About | therkiller.dev',
		description:
			'Meet Roger Killer, Full Stack Developer at Brüggli Admedia, working across interfaces, content systems, and APIs.',
	});

	const dividerRoot = ref<HTMLElement | null>(null);
	let dividerObserver: IntersectionObserver | undefined;

	onMounted(() => {
		if (
			!dividerRoot.value ||
			!('IntersectionObserver' in window) ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		dividerObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('is-visible');
					dividerObserver?.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -24px 0px' }
		);

		for (const divider of dividerRoot.value.querySelectorAll(
			'.about-divider'
		)) {
			divider.setAttribute('data-reveal', '');
			dividerObserver.observe(divider);
		}
	});

	onBeforeUnmount(() => dividerObserver?.disconnect());
</script>

<template>
	<main>
		<BaseSection class="mt-0 mb-12 md:mt-0 md:mb-16 lg:mt-0 lg:mb-20">
			<BaseContainer>
				<header class="max-w-prose">
					<h1 class="text-2xl">About</h1>
					<p class="mt-6 border-s-2 border-border ps-5 leading-relaxed">
						I like hearing how people figure things out. My favourite part of
						the story is usually the first guess that turned out to be wrong.
					</p>
				</header>
			</BaseContainer>
		</BaseSection>
		<BaseSection class="my-12 md:my-16 lg:my-20">
			<BaseContainer>
				<div ref="dividerRoot">
					<div class="about-divider" aria-hidden="true" />
					<section
						aria-labelledby="work-heading"
						class="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14"
					>
						<h2 id="work-heading" class="font-sans text-xl md:col-span-4">
							What I work on
						</h2>
						<div class="min-w-0 md:col-span-7 md:col-start-6">
							<p class="max-w-prose leading-relaxed">
								I like working on the whole picture: what people see in the
								browser, how content is managed, and how everything fits
								together behind the scenes. My projects range from websites
								built with Kirby CMS to applications using Nuxt and Strapi.
							</p>
							<dl class="mt-8 divide-y divide-border border-y border-border">
								<div class="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
									<dt class="font-bold">Interfaces</dt>
									<dd class="text-muted">Vue, Nuxt & Tailwind CSS</dd>
								</div>
								<div class="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
									<dt class="font-bold">Content & APIs</dt>
									<dd class="text-muted">Kirby CMS & Strapi</dd>
								</div>
								<div class="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
									<dt class="font-bold">Self-hosting</dt>
									<dd class="text-muted">Coolify, Docker & Hetzner</dd>
								</div>
							</dl>
						</div>
					</section>
					<div class="about-divider" aria-hidden="true" />
					<section
						aria-labelledby="writing-heading"
						class="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14"
					>
						<h2 id="writing-heading" class="font-sans text-xl md:col-span-4">
							Learning, then writing it down
						</h2>
						<div class="min-w-0 md:col-span-7 md:col-start-6">
							<p class="max-w-prose leading-relaxed">
								The blog is my notebook for things I figure out while building:
								setting up a server, testing a form, trying a browser API, or
								improving my development tools. I write down the steps, the
								surprises, and what I’d do differently next time.
							</p>
							<NuxtLink
								to="/blog"
								class="mt-5 inline-flex min-h-11 items-center text-accent hover:text-accent-hover"
							>
								Read my development notes
							</NuxtLink>
						</div>
					</section>
					<div class="about-divider" aria-hidden="true" />
					<section
						aria-labelledby="contact-heading"
						class="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14"
					>
						<h2 id="contact-heading" class="font-sans text-xl md:col-span-4">
							Let’s talk web
						</h2>
						<div class="min-w-0 md:col-span-7 md:col-start-6">
							<p class="max-w-prose leading-relaxed">
								Have a question about a project or something I’ve written? I’m
								happy to compare notes, hear what you’re building, or just say
								hello.
							</p>
							<div class="mt-5 flex gap-x-4"><SocialLinks /></div>
						</div>
					</section>
					<div class="about-divider" aria-hidden="true" />
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>

<style scoped>
	.about-divider {
		height: 1px;
		background-color: var(--theme-border);
		transform-origin: left;
	}

	.about-divider[data-reveal] {
		transform: scaleX(0);
		transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.about-divider[data-reveal].is-visible {
		transform: scaleX(1);
	}

	@media (prefers-reduced-motion: reduce) {
		.about-divider[data-reveal] {
			transform: none;
			transition: none;
		}
	}
</style>
