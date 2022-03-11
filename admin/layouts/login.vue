<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutNotification />
    <v-main
      style="width: 100%; heigth: 100vh; display: grid; place-items: center"
    >
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware({ store, redirect }) {
    const token = window.localStorage.getItem('token')
    if (token) redirect('/admin/articels')
    store.dispatch('login/setLoggedInState', !!token)
  },
}
</script>
