<script setup lang="ts">
const supabase = useSupabaseClient();


const { data: { user } } = await supabase.auth.getUser();

if (!user) {
	await navigateTo('/login');
}

const logout = async () => {
	await supabase.auth.signOut();
	await navigateTo('/login');
};
</script>

<template>
	<div>
		<BaseSection>
			<BaseContainer>
				<h1>Dashboard</h1>
				<p>Welcome, {{ user?.email }}</p>
				<button @click="logout">Logout</button>
			</BaseContainer>
		</BaseSection>
	</div>
</template>