<script setup lang="ts">
	const { toggleColorMode } = useColorMode();
	const route = useRoute();
	const isMobileMenuOpen = ref(false);
	const mobileMenuButton = ref<HTMLButtonElement | null>(null);
	const mobileMenuCloseButton = ref<HTMLButtonElement | null>(null);

	const navigationItems = [
		{ label: 'Projects', to: '/projects' },
		{ label: 'Blog', to: '/blog' },
	];

	const openMobileMenu = () => {
		isMobileMenuOpen.value = true;
		nextTick(() => mobileMenuCloseButton.value?.focus());
	};

	const closeMobileMenu = (restoreFocus = false) => {
		const wasOpen = isMobileMenuOpen.value;
		isMobileMenuOpen.value = false;

		if (wasOpen && restoreFocus) {
			nextTick(() => mobileMenuButton.value?.focus());
		}
	};

	const isNavigationItemActive = (path: string) =>
		route.path === path || route.path.startsWith(`${path}/`);

	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeMobileMenu(true);
		}
	};

	watch(
		() => route.path,
		() => closeMobileMenu()
	);
	watch(isMobileMenuOpen, (isOpen) => {
		document.body.classList.toggle('overflow-hidden', isOpen);
	});

	onMounted(() => {
		window.addEventListener('keydown', handleEscapeKey);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('keydown', handleEscapeKey);
		document.body.classList.remove('overflow-hidden');
	});
</script>

<template>
	<nav
		aria-label="Primary navigation"
		class="container mx-auto my-12 w-full md:my-12 lg:my-24"
	>
		<div
			class="flex w-full items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]"
			:inert="isMobileMenuOpen"
			:aria-hidden="isMobileMenuOpen"
		>
			<NuxtLink
				to="/"
				class="justify-self-start text-base text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none lg:text-base"
				@click="closeMobileMenu()"
			>
				therkiller.dev
			</NuxtLink>
			<ul class="hidden items-center gap-8 md:flex">
				<li v-for="navigationItem in navigationItems" :key="navigationItem.to">
					<NuxtLink
						:to="navigationItem.to"
						class="text-base no-underline transition-colors duration-200 hover:text-accent motion-reduce:transition-none lg:text-base"
						:class="
							isNavigationItemActive(navigationItem.to)
								? 'text-accent'
								: 'text-foreground'
						"
					>
						{{ navigationItem.label }}
					</NuxtLink>
				</li>
			</ul>
			<div class="ml-auto flex items-center gap-3 md:ml-0 md:justify-self-end">
				<button
					type="button"
					class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:border-accent hover:text-accent motion-reduce:transition-none"
					aria-label="Toggle light and dark color mode"
					title="Toggle light and dark color mode"
					@click="toggleColorMode"
				>
					<Icon
						name="lucide:sun"
						size="20"
						class="color-mode-toggle__sun"
						aria-hidden="true"
					/>
					<Icon
						name="lucide:moon"
						size="20"
						class="color-mode-toggle__moon"
						aria-hidden="true"
					/>
				</button>
				<button
					ref="mobileMenuButton"
					type="button"
					class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:border-accent hover:text-accent motion-reduce:transition-none md:hidden"
					:aria-expanded="isMobileMenuOpen"
					aria-controls="mobile-navigation"
					aria-label="Open navigation menu"
					title="Open navigation menu"
					@click="openMobileMenu"
				>
					<Icon name="lucide:menu" size="20" aria-hidden="true" />
				</button>
			</div>
		</div>
		<Transition name="mobile-menu">
			<div
				v-if="isMobileMenuOpen"
				id="mobile-navigation"
				class="fixed inset-0 z-50 min-h-dvh w-full overflow-y-auto bg-background/80 backdrop-blur-xl"
				role="dialog"
				aria-modal="true"
				aria-label="Mobile navigation"
			>
				<div class="container mx-auto flex min-h-dvh flex-col">
					<div class="my-12 flex items-center justify-between">
						<NuxtLink
							to="/"
							class="text-base text-accent transition-colors duration-200 hover:text-accent-hover motion-reduce:transition-none lg:text-base"
							@click="closeMobileMenu()"
						>
							therkiller.dev
						</NuxtLink>
						<button
							ref="mobileMenuCloseButton"
							type="button"
							class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:border-accent hover:text-accent motion-reduce:transition-none"
							aria-label="Close navigation menu"
							title="Close navigation menu"
							@click="closeMobileMenu(true)"
						>
							<Icon name="lucide:x" size="20" aria-hidden="true" />
						</button>
					</div>
					<div class="flex flex-1 items-center justify-center pb-24">
						<ul class="flex flex-col items-center gap-8">
							<li
								v-for="navigationItem in navigationItems"
								:key="navigationItem.to"
							>
								<NuxtLink
									:to="navigationItem.to"
									class="text-base no-underline transition-colors duration-200 hover:text-accent motion-reduce:transition-none lg:text-base"
									:class="
										isNavigationItemActive(navigationItem.to)
											? 'text-accent'
											: 'text-foreground'
									"
									@click="closeMobileMenu()"
								>
									{{ navigationItem.label }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<style scoped>
	.mobile-menu-enter-active {
		transition:
			opacity 300ms ease-out,
			backdrop-filter 300ms ease-out,
			-webkit-backdrop-filter 300ms ease-out;
	}

	.mobile-menu-leave-active {
		transition:
			opacity 200ms ease-in,
			backdrop-filter 200ms ease-in,
			-webkit-backdrop-filter 200ms ease-in;
	}

	.mobile-menu-enter-from,
	.mobile-menu-leave-to {
		opacity: 0;
		-webkit-backdrop-filter: blur(0);
		backdrop-filter: blur(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.mobile-menu-enter-active,
		.mobile-menu-leave-active {
			transition: none;
		}
	}
</style>
