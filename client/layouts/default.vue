<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutLoading />
    <LayoutNotif />
    <LayoutHeader />
    <FormBtnGoToTop />
    <v-main style="margin-top: 50px">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    const token = localStorage.getItem('authorization');
    if (!token) redirect('/login');
    store.dispatch('register/setLoggedInState', !!token);
  },
};
</script>
