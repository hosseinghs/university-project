<template>
  <v-app style="background-color: #f5f5f5">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import lazyCaller from '../mixins/lazyCaller'
export default {
  name: 'DefaultLayout',
  mixins: [lazyCaller],
}
</script>
