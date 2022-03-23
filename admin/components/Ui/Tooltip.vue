<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <div style="display: inline-block" v-bind="attrs" v-on="on">
        <slot></slot>
      </div>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'TooltipComponent',
  props: {
    text: {
      type: String,
      default: 'tooltip',
      require: true,
    },
  },
}
</script>
