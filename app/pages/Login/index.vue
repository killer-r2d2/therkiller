<script setup lang="ts">

const supabase = useSupabaseClient();

const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
	isLoading.value = true;
	errorMessage.value = ''; // Clear previous errors
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email.value,
			password: password.value,
		});

		if (error) {
			errorMessage.value = error.message;
			return;
		}

		// Redirect to dashboard if login is successful
		if (data.user) {
			await navigateTo('/dashboard');
		}
	} catch (err) {
		console.error('Login error:', err);
		errorMessage.value = 'An unexpected error occurred. Please try again.';
	} finally {
		isLoading.value = false;
	}
};
</script>

<template>
	<main>
		<BaseSection class="mt-12 md:mt-12 lg:mt-12">
			<BaseContainer>
				<h2 class="mb-10 text-center font-bold tracking-tight text-white">Sign in to your account</h2>
				<div class="sm:mx-auto sm:w-full sm:max-w-sm">
					<form @submit.prevent="handleSubmit" class="space-y-6">
						<div>
							<label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
							<div class="mt-2">
								<input id="email" type="email" v-model="email" required autocomplete="email"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400 sm:text-sm/6" />
							</div>
						</div>

						<div>
							<div class="flex items-center justify-between">
								<label for="password" class="block text-sm/6 font-medium text-white">Password</label>
							</div>
							<div class="mt-2">
								<input id="password" type="password" v-model="password" required autocomplete="current-password"
									class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400 sm:text-sm/6" />
							</div>
						</div>

						<div>
							<button type="submit" :disabled="isLoading"
								class="flex w-full justify-center rounded-md bg-transparent px-3 py-1.5 text-sm/6 font-semibold text-primary-400 shadow-xs hover:text-white transition-all duration-200 focus-visible:outline-2 border-2 border-primary-400 focus-visible:outline-offset-2 hover:bg-primary-400 hover:border-primary-400 focus-visible:outline-primary-400 disabled:bg-primary-500/50 disabled:cursor-not-allowed cursor-pointer">
								<span v-if="!isLoading">Sign in</span>
								<span v-else class="flex items-center">
									<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
										</path>
									</svg>
									Signing in...
								</span>
							</button>
						</div>
					</form>
					<!-- Error Message -->
					<div v-if="errorMessage"
						class="mt-4 p-3 rounded-md bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
						{{ errorMessage }}
					</div>
				</div>
			</BaseContainer>
		</BaseSection>
	</main>
</template>