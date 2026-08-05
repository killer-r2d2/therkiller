<script setup lang="ts">
	type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'icon';
	type ButtonType = 'button' | 'submit' | 'reset';

	withDefaults(
		defineProps<{
			variant?: ButtonVariant;
			type?: ButtonType;
			disabled?: boolean;
		}>(),
		{
			variant: 'primary',
			type: 'button',
			disabled: false,
		}
	);

	const baseClasses =
		'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full font-bold transition-colors duration-200 motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-50';

	const variantClasses = {
		primary:
			'bg-accent px-5 py-2.5 text-accent-contrast enabled:hover:bg-accent-hover',
		secondary:
			'border border-border bg-surface px-5 py-2.5 text-foreground enabled:hover:border-accent enabled:hover:text-accent',
		quiet:
			'px-5 py-2.5 text-accent underline enabled:hover:text-accent-hover enabled:hover:opacity-80',
		icon: 'h-11 w-11 border border-border bg-surface p-0 text-foreground enabled:hover:border-accent enabled:hover:text-accent',
	} satisfies Record<ButtonVariant, string>;
</script>

<template>
	<button
		:type="type"
		:disabled="disabled"
		:class="[baseClasses, variantClasses[variant]]"
	>
		<slot />
	</button>
</template>
