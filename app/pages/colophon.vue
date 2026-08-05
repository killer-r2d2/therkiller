<script setup lang="ts">
	useSeoMeta({
		title: 'Colophon | therkiller.dev',
		description:
			'How therkiller.dev is designed, built, and operated with accessibility, performance, and privacy in mind.',
	});
</script>

<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<div class="grid grid-cols-12 gap-x-8 gap-y-16">
					<header class="col-span-12 md:col-span-4">
						<h1 class="mb-8 font-sans text-2xl">Colophon</h1>
						<p>
							A few notes about how this personal portfolio and blog is
							designed, built, and operated.
						</p>
					</header>

					<div
						class="prose-themed col-span-12 prose md:col-span-6 md:col-start-7 [&>section:first-child>h2]:mt-0"
					>
						<section>
							<h2>Accessibility</h2>
							<p>
								The site is built with semantic HTML, keyboard navigation,
								visible focus styles, and colour contrast in mind. It respects
								the system colour scheme and reduced-motion preference.
							</p>
							<p>
								Accessibility is an ongoing process. If something prevents you
								from using the site, please let me know through one of the
								contact profiles in the footer.
							</p>
						</section>

						<section>
							<h2>Performance</h2>
							<p>
								Pages are generated as static files and served by nginx. Fonts
								and images are hosted locally, and the site does not load
								analytics, advertising, or social-media scripts.
							</p>
						</section>

						<section>
							<h2>Technology</h2>
							<p>The current site is built with:</p>
							<ul>
								<li>Nuxt and Vue</li>
								<li>Nuxt Content</li>
								<li>Tailwind CSS</li>
								<li>Nuxt Image and Nuxt Icon</li>
								<li>Docker and nginx</li>
							</ul>
						</section>

						<section>
							<h2>Privacy by design</h2>
							<p>
								There are no analytics, advertising trackers, or embedded
								third-party widgets. Browser storage is limited to the selected
								colour mode and a local cache of published site content; neither
								is used to identify or track visitors. Details are available in
								the
								<NuxtLink to="/privacy">privacy notice.</NuxtLink>
							</p>
						</section>

						<section>
							<h2>Source and credits</h2>
							<p>
								The source code is available on
								<a
									href="https://github.com/killer-r2d2/therkiller"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub.
								</a>
								The locally hosted Lato and Roboto Slab fonts are distributed
								under the SIL Open Font License. Interface icons come from
								Lucide. Product names and logos belong to their respective
								owners.
							</p>
						</section>

						<section>
							<h2>Responsibility</h2>
							<p>
								Content and operation of this website are the responsibility of
								Roger Killer, Switzerland. You can get in touch through the
								LinkedIn or Bluesky profiles in the footer.
							</p>
						</section>
					</div>
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
