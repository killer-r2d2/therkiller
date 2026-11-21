<script setup lang="ts">
	useSeoMeta({
		title: 'About | therkiller.dev',
		description:
			'Roger Killer is a Full Stack Developer at Brüggli Admedia, building modern interfaces, APIs, and complete web applications.',
	});
</script>

<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<div class="grid grid-cols-12 gap-x-8 gap-y-16">
					<header class="col-span-12 md:col-span-4">
						<h1 class="mb-8 font-sans text-2xl">About</h1>
					</header>

					<div
						class="prose-themed col-span-12 prose md:col-span-6 md:col-start-7 [&>section:first-child>h2]:mt-0"
					>
						<section>
							<p>
								I’m a Full Stack Developer at
								<a
									href="https://www.brueggli-admedia.ch/"
									target="_blank"
									rel="noopener noreferrer"
									>Brüggli Admedia</a
								>. I like to build things — from modern interfaces to APIs and
								complete web applications.
							</p>
						</section>
					</div>
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
