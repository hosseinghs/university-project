<template>
  <div>{{ $route.params }}</div>
</template>

<script>
export default {
  created() {
    console.log('article slug', this.$route.params);
  },
};
</script>

<style></style>
