<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutNotification />
    <LayoutHeader />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import lazyCaller from '../mixins/lazyCaller'
export default {
  name: 'DefaultLayout',
  mixins: [lazyCaller],
  middleware({ store, redirect }) {
    const token = window.localStorage.getItem('token')
    if (!token) {
      redirect('/')
    }
    store.dispatch('login/setLoggedInState', !!token)
  },
}
</script>
