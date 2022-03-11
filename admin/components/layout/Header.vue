<template>
  <v-app-bar elevation="0" app>
    <FormBtnCancel outlined @click.stop="logout()"> خروج </FormBtnCancel>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HeaderComponent',
  methods: {
    ...mapActions('login', ['setLoggedInState']),
    logout() {
      this.setLoggedInState(false)
      localStorage.removeItem('token')
      this.$router.push({ path: '/' })
    },
  },
}
</script>
