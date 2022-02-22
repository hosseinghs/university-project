<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutHeader />
    <v-main>
      <nuxt />
    </v-main>
    <FormGoToTopBtn />
    <LayoutLoading />
    <LayoutNotif />
    <LayoutNavigationDrawer :items="sideBarProducts" />
    <LayoutFooter />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import lazyCaller from '../mixins/lazyCaller';
export default {
  mixins: [lazyCaller],
  computed: {
    ...mapGetters('products', ['sideBarProducts']),
  },
  methods: {
    ...mapActions('register', ['setLoginState', 'setUserProfileData']),
    ...mapActions('basket', ['getUserBasket']),
    ...mapActions('search', ['updateFilters']),
  },
  async created() {
    const token = window.localStorage.getItem('token');
    if (!!token) {
      const promises = [
        this.setUserProfileData(),
        this.setLoginState(true),
        this.getUserBasket(),
      ];
      await Promise.all(promises);
    }
  },
};
</script>
