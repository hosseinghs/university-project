<template>
  <v-sheet :color="`darken-2`">
    <v-skeleton-loader
      v-bind="$attrs"
      :style="`height:${height}px ;`"
    ></v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
  props: {
    height: {
      type: [String || Number],
    },
  },
};
</script>

<style></style>
