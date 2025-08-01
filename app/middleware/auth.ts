export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/dashboard') {
    return navigateTo('/login')
  }

  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
}) 