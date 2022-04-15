<template>
  <v-app style="background-color: #f5f5f5">
    <LayoutLoading />
    <LayoutNotif />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import lazyCaller from '../mixins/lazyCaller';
export default {
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
