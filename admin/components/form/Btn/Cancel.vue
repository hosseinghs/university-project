<template>
  <v-btn v-bind="$attrs" color="#FF5252" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'CancelBtnComponent',
}
</script>
