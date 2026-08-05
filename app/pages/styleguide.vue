<script setup lang="ts">
	type FontWeight = {
		label: string;
		value: number;
		className: string;
	};

	type SemanticColor = {
		name: string;
		utility: string;
		light: string;
		dark: string;
	};

	type PrimaryColor = {
		name: string;
		value: string;
	};

	useSeoMeta({
		title: 'Styleguide | therkiller.dev',
		description:
			'The technical styleguide for therkiller.dev, including typography, colors, buttons, and links.',
	});

	const fontWeights: FontWeight[] = [
		{ label: 'Light', value: 300, className: 'font-light' },
		{ label: 'Regular', value: 400, className: 'font-normal' },
		{ label: 'Bold', value: 700, className: 'font-bold' },
	];

	const semanticColors: SemanticColor[] = [
		{
			name: 'background',
			utility: 'bg-background',
			light: '#f7f5f2',
			dark: '#0b0d12',
		},
		{
			name: 'surface',
			utility: 'bg-surface',
			light: '#ffffff',
			dark: '#151923',
		},
		{
			name: 'foreground',
			utility: 'text-foreground',
			light: '#17181c',
			dark: '#f3f5f7',
		},
		{
			name: 'muted',
			utility: 'text-muted',
			light: '#636873',
			dark: '#a8b0bb',
		},
		{
			name: 'border',
			utility: 'border-border',
			light: '#d8d4cc',
			dark: '#2c3340',
		},
		{
			name: 'accent',
			utility: 'text-accent',
			light: '#0b6570',
			dark: '#54bdc8',
		},
		{
			name: 'accent-hover',
			utility: 'hover:text-accent-hover',
			light: '#084c54',
			dark: '#80d3dc',
		},
		{
			name: 'accent-contrast',
			utility: 'text-accent-contrast',
			light: '#ffffff',
			dark: '#0b0d12',
		},
	];

	const primaryColors: PrimaryColor[] = [
		{ name: 'primary-400', value: '#54bdc8' },
		{ name: 'primary-500', value: '#238c97' },
		{ name: 'primary-600', value: '#136289' },
		{ name: 'primary-700', value: '#0c4368' },
		{ name: 'primary-800', value: '#06314c' },
		{ name: 'primary-900', value: '#041f30' },
	];
</script>

<template>
	<main>
		<BaseSection>
			<BaseContainer>
				<header class="max-w-3xl">
					<p class="text-sm font-bold tracking-widest text-accent uppercase">
						Technical reference
					</p>
					<h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
						Styleguide
					</h1>
					<p class="mt-6 text-lg text-muted">
						The visual foundations used across therkiller.dev. Every example
						runs inside the production layout and follows the active color mode.
					</p>
				</header>

				<nav aria-label="Styleguide sections" class="mt-10">
					<ul class="flex flex-wrap gap-x-6 gap-y-3">
						<li>
							<a
								href="#typography"
								class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
							>
								Typography
							</a>
						</li>
						<li>
							<a
								href="#colors"
								class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
							>
								Colors
							</a>
						</li>
						<li>
							<a
								href="#buttons"
								class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
							>
								Buttons
							</a>
						</li>
						<li>
							<a
								href="#links"
								class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
							>
								Links
							</a>
						</li>
					</ul>
				</nav>

				<div class="mt-24 space-y-24 md:mt-32 md:space-y-32">
					<section id="typography" aria-labelledby="typography-heading">
						<header class="mb-10 border-b border-border pb-6">
							<h2 id="typography-heading" class="text-2xl font-bold">
								Typography
							</h2>
							<p class="mt-3 max-w-2xl text-muted">
								Lato is the interface typeface. Roboto Slab adds a more
								editorial voice to long-form content.
							</p>
						</header>

						<div class="grid gap-6 lg:grid-cols-2">
							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									Sans serif
								</p>
								<h3 class="mt-2 text-3xl font-bold">Lato</h3>
								<p class="mt-3 text-muted">
									Interface, navigation, and headings
								</p>

								<div class="mt-8 space-y-7">
									<div
										v-for="fontWeight in fontWeights"
										:key="fontWeight.value"
									>
										<div class="mb-2 flex items-center justify-between gap-4">
											<span class="text-sm text-muted">
												{{ fontWeight.label }}
											</span>
											<code class="font-mono text-xs text-muted">
												{{ fontWeight.value }}
											</code>
										</div>
										<p :class="['text-2xl', fontWeight.className]">
											Sphinx of black quartz, judge my vow.
										</p>
									</div>
								</div>
							</article>

							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									Slab serif
								</p>
								<h3 class="mt-2 font-serif text-3xl font-bold">Roboto Slab</h3>
								<p class="mt-3 text-muted">Articles and editorial emphasis</p>

								<div class="mt-8 space-y-7">
									<div
										v-for="fontWeight in fontWeights"
										:key="fontWeight.value"
									>
										<div class="mb-2 flex items-center justify-between gap-4">
											<span class="text-sm text-muted">
												{{ fontWeight.label }}
											</span>
											<code class="font-mono text-xs text-muted">
												{{ fontWeight.value }}
											</code>
										</div>
										<p :class="['font-serif text-2xl', fontWeight.className]">
											Sphinx of black quartz, judge my vow.
										</p>
									</div>
								</div>
							</article>
						</div>
					</section>

					<section id="colors" aria-labelledby="colors-heading">
						<header class="mb-10 border-b border-border pb-6">
							<h2 id="colors-heading" class="text-2xl font-bold">Colors</h2>
							<p class="mt-3 max-w-2xl text-muted">
								Semantic tokens adapt to the selected theme. The primary scale
								provides the underlying brand colors.
							</p>
						</header>

						<h3 class="mb-5 text-xl font-bold">Semantic palette</h3>
						<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							<article
								v-for="color in semanticColors"
								:key="color.name"
								class="overflow-hidden rounded-3xl border border-border bg-surface"
							>
								<div class="p-5">
									<code class="font-mono text-sm font-bold">
										{{ color.name }}
									</code>
									<p class="mt-1 text-sm text-muted">{{ color.utility }}</p>
								</div>
								<div class="grid grid-cols-2 border-t border-border">
									<div class="border-r border-border p-3">
										<div
											class="h-20 rounded-xl border border-black/10"
											:style="{ backgroundColor: color.light }"
										/>
										<p class="mt-2 text-xs text-muted">Light</p>
										<code class="font-mono text-xs">{{ color.light }}</code>
									</div>
									<div class="p-3">
										<div
											class="h-20 rounded-xl border border-white/10"
											:style="{ backgroundColor: color.dark }"
										/>
										<p class="mt-2 text-xs text-muted">Dark</p>
										<code class="font-mono text-xs">{{ color.dark }}</code>
									</div>
								</div>
							</article>
						</div>

						<h3 class="mt-12 mb-5 text-xl font-bold">Primary scale</h3>
						<div
							class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
						>
							<article
								v-for="color in primaryColors"
								:key="color.name"
								class="overflow-hidden rounded-3xl border border-border bg-surface"
							>
								<div
									class="h-28 border-b border-black/10"
									:style="{ backgroundColor: color.value }"
								/>
								<div class="p-4">
									<code class="font-mono text-sm font-bold">
										{{ color.name }}
									</code>
									<p class="mt-1 font-mono text-xs text-muted">
										{{ color.value }}
									</p>
								</div>
							</article>
						</div>
					</section>

					<section id="buttons" aria-labelledby="buttons-heading">
						<header class="mb-10 border-b border-border pb-6">
							<h2 id="buttons-heading" class="text-2xl font-bold">Buttons</h2>
							<p class="mt-3 max-w-2xl text-muted">
								Buttons share a minimum touch target, rounded shape, semantic
								colors, and the global visible focus treatment.
							</p>
						</header>

						<div class="rounded-3xl border border-border bg-surface p-6 md:p-8">
							<div class="flex flex-wrap items-center gap-4">
								<BaseButton>
									Primary action
									<Icon
										name="lucide:arrow-right"
										size="20"
										aria-hidden="true"
									/>
								</BaseButton>
								<BaseButton variant="secondary">Secondary action</BaseButton>
								<BaseButton variant="quiet">Quiet action</BaseButton>
								<BaseButton
									variant="icon"
									aria-label="Next example"
									title="Next example"
								>
									<Icon
										name="lucide:arrow-right"
										size="20"
										aria-hidden="true"
									/>
								</BaseButton>
								<BaseButton disabled>Disabled action</BaseButton>
							</div>

							<dl
								class="mt-8 grid gap-5 border-t border-border pt-8 md:grid-cols-2"
							>
								<div>
									<dt class="font-bold">Component</dt>
									<dd class="mt-1 text-muted">
										<code class="font-mono text-sm">BaseButton</code>
									</dd>
								</div>
								<div>
									<dt class="font-bold">Variants</dt>
									<dd class="mt-1 text-muted">
										primary, secondary, quiet, icon
									</dd>
								</div>
								<div>
									<dt class="font-bold">Native states</dt>
									<dd class="mt-1 text-muted">
										hover, focus-visible, disabled
									</dd>
								</div>
								<div>
									<dt class="font-bold">Default type</dt>
									<dd class="mt-1 text-muted">
										<code class="font-mono text-sm">button</code>
									</dd>
								</div>
							</dl>
						</div>
					</section>

					<section id="links" aria-labelledby="links-heading">
						<header class="mb-10 border-b border-border pb-6">
							<h2 id="links-heading" class="text-2xl font-bold">Links</h2>
							<p class="mt-3 max-w-2xl text-muted">
								Links remain recognisable through underlines, color, context,
								and the same keyboard focus treatment as buttons.
							</p>
						</header>

						<div class="grid gap-6 md:grid-cols-2">
							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									Inline
								</p>
								<p class="mt-5">
									Read more about how the site is built in the
									<NuxtLink to="/colophon">colophon</NuxtLink>
									.
								</p>
							</article>

							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									Navigation
								</p>
								<div class="mt-5">
									<NuxtLink
										to="/blog"
										class="text-foreground no-underline transition-colors duration-200 hover:text-accent motion-reduce:transition-none"
									>
										Blog
									</NuxtLink>
								</div>
							</article>

							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									Action
								</p>
								<div class="mt-5">
									<NuxtLink
										to="/blog"
										class="inline-flex items-center gap-2 text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
									>
										View all blog posts
										<Icon
											name="lucide:arrow-right"
											size="20"
											aria-hidden="true"
										/>
									</NuxtLink>
								</div>
							</article>

							<article
								class="rounded-3xl border border-border bg-surface p-6 md:p-8"
							>
								<p
									class="text-sm font-bold tracking-wider text-muted uppercase"
								>
									External
								</p>
								<div class="mt-5">
									<a
										href="https://github.com/killer-r2d2/therkiller"
										target="_blank"
										rel="noopener noreferrer"
										class="text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none"
									>
										Source on GitHub ↗
									</a>
								</div>
							</article>
						</div>
					</section>
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>
