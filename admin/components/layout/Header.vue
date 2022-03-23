<template>
  <v-app-bar elevation="0" app>
    <v-container>
      <v-col class="text-end">
        <FormBtnCancel outlined @click.stop="logout()"> خروج </FormBtnCancel>
      </v-col>
    </v-container>
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
