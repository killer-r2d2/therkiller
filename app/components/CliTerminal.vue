<script setup lang="ts">
	import { ref } from 'vue';
	import type { Joke } from '~/types/joke';

	const currentCommand = ref('');
	const history = ref([
		'Welcome to the Developer CLI!',
		'Type `help` to see a list of available commands.',
	]);

	const commands: { [key: string]: string | (() => string | Promise<string>) } =
		{
			help: 'Available commands: help, joke, hack, sudo, adventure, compliment, clear, exit',
			sudo: 'Nice try, but you\'re not an admin here!',
			hack: 'Initiating hack... just kidding, stay ethical!',
			compliment: () => {
				const compliments = [
					'You have the best coding style!',
					'Your code is as clean as your desk… I hope.',
					'You are a JavaScript wizard!',
				];
				return compliments[Math.floor(Math.random() * compliments.length)];
			},
			adventure: `
  You are in a dark room. There is a door to the left and right.
  Type "left" or "right" to choose a path.
  `,
			left: 'You found a treasure chest! But it\'s locked. The game ends here.',
			right: 'You encounter a monster. Game over!',
			clear: () => {
				history.value = [];
				return 'Terminal cleared';
			},
			exit: 'Goodbye! Refresh the page to restart the CLI.',

			joke: async (): Promise<string> => {
				try {
					const response: Joke = await $fetch(
						'https://v2.jokeapi.dev/joke/Programming?type=twopart'
					);
					return `${response.setup} - ${response.delivery}`;
				} catch (error) {
					console.error(error);
					return 'Failed to fetch a joke. Please try again later.';
				}
			},

			default: 'Command not found. Try `help`.',
		};

	const executeCommand = async () => {
		const command = currentCommand.value.trim();

		if (commands[command]) {
			const response =
				typeof commands[command] === 'function'
					? await commands[command]()
					: commands[command];
			history.value.push(`$ ${command}`, response);
		} else {
			const defaultResponse = 
				typeof commands.default === 'function'
					? await commands.default()
					: commands.default;
			history.value.push(`$ ${command}`, defaultResponse);
		}

		currentCommand.value = '';
	};

	const focusInput = () => {
		const input = document.querySelector('.cli-input') as HTMLInputElement;
		if (input) {
			input.focus();
		}
	};
</script>

<template>
	<BaseSection>
		<BaseContainer>
			<div
				class="mx-auto max-w-3xl rounded-lg bg-primary-900 p-6 text-primary-500 shadow-lg"
				@click="focusInput"
			>
				<div class="output mb-4 min-h-[50px]">
					<p
						v-for="(line, index) in history"
						:key="index"
						class="font-mono text-sm text-primary-400"
					>
						{{ line }}
					</p>
				</div>
				<div class="input-line flex items-center">
					<span class="prompt mr-2 text-primary-400">$</span>
					<input
						ref="cliInput"
						v-model="currentCommand"
						class="cli-input flex-grow border-none bg-transparent font-mono text-sm text-white outline-none"
						type="text"
						@keydown.enter="executeCommand"
					/>
				</div>
			</div>
		</BaseContainer>
	</BaseSection>
</template>
