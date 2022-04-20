<template>
  <div>
    {{ $route.params }}
  </div>
</template>

<script>
export default {
  created() {
    console.log('article slug id', this.$route.params);
  },
};
</script>

<style></style>
