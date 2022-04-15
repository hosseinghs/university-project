<template>
  <div>hi</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getArticles();
  },

  methods: {
    ...mapActions('client/articles', ['getArticles', 'getCategories']),
  },
};
</script>

<style></style>
