<template>
  <v-menu nudge-bottom="35" close-on-content-click>
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <div>
          <v-icon>{{ $vuetify.icons.values.menuDown }}</v-icon>
          <v-chip class="caption"> {{ name }} {{ family }}</v-chip>
        </div>
      </div>
    </template>

    <v-list>
      <v-list-item to="profile" nuxt exact>
        <v-list-item-icon>
          <v-icon color="indigo">{{ $vuetify.icons.values.profile }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content nuxt exat to="/profile">
          <v-list-item-title>پروفایل</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item nuxt @click="logOut()">
        <v-list-item-icon>
          <v-icon color="error">{{ $vuetify.icons.values.logout }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['showResponsiveMenu']),
    ...mapGetters('register', ['isLoggedIn', 'name', 'family', 'user']),
  },
  methods: {
    ...mapActions(['setResponsiveMenuState', 'setOverlayState']),
    ...mapActions('register', ['clearUserState', 'setLoginState']),
    logOut() {
      window.localStorage.removeItem('token');
      this.$router.push({ path: '/' });
      this.setLoginState(false);
      this.clearUserState();
    },
  },
};
</script>

<style></style>
