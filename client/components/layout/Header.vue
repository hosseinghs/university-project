<template>
  <v-app-bar
    style="background-color: #fff !important; height: 90px"
    elevation="1"
    app
  >
    <hr class="__red__divider" />
    <v-row>
      <v-col cols="2">
        <nuxt-link to="/">
          <v-img contain width="223" :src="require('~/assets/logo.jpg')" />
        </nuxt-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions('client/articles', ['getCategories']),
  },
};
</script>

<style scoped>
.__red__divider {
  position: absolute;
  width: 100%;
  height: 4px;
  padding: 0;
  background-color: #9e2558;
  top: 0;
  left: 0;
  z-index: 10 !important;
}
</style>
