<template>
  <v-app-bar
    style="background-color: #fff !important; height: 90px"
    elevation="1"
    app
  >
    <hr class="__red__divider" />
    <v-row align="center">
      <v-col cols="2">
        <nuxt-link to="/">
          <v-img contain width="223" :src="require('~/assets/logo.jpg')" />
        </nuxt-link>
      </v-col>
      <v-col cols="8">
        <v-btn-toggle >
          <v-btn v-for="{ name, id } in categories" :key="id" value="left">
            <span class="hidden-sm-and-down">{{ name }}</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('client/articles', ['categories']),
  },

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
