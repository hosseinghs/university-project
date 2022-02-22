<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <div style="display: inline-block" dark v-bind="attrs" v-on="on">
        <slot></slot>
      </div>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'tooltip',
    },
  },
};
</script>

<style></style>
