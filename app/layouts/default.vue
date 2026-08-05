<template>
	<div
		class="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200 motion-reduce:transition-none"
	>
		<Navigation />
		<div class="grow">
			<slot />
		</div>
		<Footer />
	</div>
</template>
