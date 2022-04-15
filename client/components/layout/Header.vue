<template>
  <v-app-bar
    style="background-color: #fff !important; height: 90px"
    elevation="1"
    app
  >
    <v-row>
      <v-col>
        <nuxt-link to="/">
          <v-img contain width="223" :src="require('~/assets/logo.jpg')" />
        </nuxt-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {};
</script>

