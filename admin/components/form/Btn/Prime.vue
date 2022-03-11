<template>
  <v-btn color="#485ec4" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'LoginBtnComponent',
}
</script>