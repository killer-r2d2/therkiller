<script setup lang="ts">
const logout = async () => {
	// Authentication is currently disabled - Supabase has been removed
	await navigateTo('/');
};
</script>

<template>
	<div>
		<BaseSection>
			<BaseContainer>
				<h1>Dashboard</h1>
				<p>Welcome to Dashboard</p>
				<button @click="logout">Logout</button>
			</BaseContainer>
		</BaseSection>
	</div>
</template>