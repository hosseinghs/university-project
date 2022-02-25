<template>
  <v-app style="background-color: #f5f5f5">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import lazyCaller from '../mixins/lazyCaller'
export default {
  name: 'DefaultLayout',
  mixins: [lazyCaller],
  computed: {
    ...mapGetters('products', ['sideBarProducts']),
  },
  methods: {
    ...mapActions('register', ['setLoginState', 'setUserProfileData']),
  },
}
</script>
