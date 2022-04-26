<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutLoading />
    <LayoutNotif />
    <LayoutHeader />
    <v-main style="margin-top: 50px">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import lazyCaller from '../mixins/lazyCaller';
export default {
  middleware({ store, redirect }) {
    const token = localStorage.getItem('authorization');
    if (!token) redirect('/login');
    store.dispatch('register/setLoggedInState', !!token);
  },
  mixins: [lazyCaller],
  computed: {
    // ...mapGetters('', ['']),
  },
  methods: {
    // ...mapActions('', []),
    // ...mapActions('', []),
    // ...mapActions('', []),
  },
};
</script>
