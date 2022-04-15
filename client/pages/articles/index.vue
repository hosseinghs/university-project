<template>
  <div>hi</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.fireApies();
  },

  methods: {
    ...mapActions('client/articles', ['getArticles', 'getCategories']),
    fireApies() {
      const promises = [this.getCategories(), this.getArticles()];
      Promise.all(promises);
    },
  },
};
</script>

<style></style>
