<script setup lang="ts">
	useSeoMeta({
		title: 'Privacy | therkiller.dev',
		description:
			'Information about the limited personal data processed when visiting therkiller.dev.',
	});
</script>

<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<div class="grid grid-cols-12 gap-x-8 gap-y-16">
					<header class="col-span-12 md:col-span-4">
						<h1 class="mb-8 font-sans text-2xl">Privacy</h1>
						<p>
							This notice explains the limited personal data processed when you
							visit therkiller.dev.
						</p>
						<p class="mt-4 text-muted">Last updated: 5 August 2026</p>
					</header>

					<div
						class="prose-themed col-span-12 prose md:col-span-6 md:col-start-7 [&>section:first-child>h2]:mt-0"
					>
						<section>
							<h2>Who is responsible</h2>
							<p>
								Roger Killer, Switzerland, is responsible for this website and
								its data processing. For privacy questions or requests, you can
								contact me through the LinkedIn or Bluesky profiles in the
								footer.
							</p>
						</section>

						<section>
							<h2>Hosting and server logs</h2>
							<p>
								This website is hosted on infrastructure provided by Hetzner
								Online GmbH in Germany. When you access the site, your browser
								and the hosting infrastructure exchange technical request data.
								This can include your IP address, the date and time, the
								requested page, the referring page, and browser or
								operating-system information.
							</p>
							<p>
								This data is processed to deliver the website, maintain reliable
								operation, and investigate misuse or security incidents. It is
								not used for visitor analytics or profiling and is retained only
								for as long as operational or security purposes require it.
							</p>
						</section>

						<section>
							<h2>Local browser storage</h2>
							<p>
								The site stores your chosen light or dark colour mode in your
								browser under the key
								<code>therkiller-color-mode</code>
								. This setting contains no unique identifier and is not used for
								tracking.
							</p>
							<p>
								Nuxt Content may also store a compressed cache of published site
								content and checksums under keys beginning with
								<code>content_</code>
								. This cache contains content from the website, not information
								you provide, and is not used to identify or track you.
							</p>
							<p>
								Both types of storage remain on your device and can be removed
								by clearing the site data in your browser.
							</p>
							<p>The site does not set analytics or advertising cookies.</p>
						</section>

						<section>
							<h2>External links</h2>
							<p>
								The website contains ordinary links to external services such as
								GitHub, Bluesky, and LinkedIn. No content from these services is
								embedded. Data is sent to an external service only after you
								follow its link, and the service's own privacy terms then apply.
							</p>
						</section>

						<section>
							<h2>Your rights</h2>
							<p>
								Subject to applicable Swiss data-protection law, you may request
								information about personal data concerning you and ask for
								incorrect data to be corrected or data to be deleted. You may
								also object to particular processing where the law provides for
								it.
							</p>
						</section>

						<section>
							<h2>Changes to this notice</h2>
							<p>
								This notice will be updated if the website starts using new
								services or changes how personal data is processed. The date at
								the top shows the latest revision.
							</p>
						</section>
					</div>
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
