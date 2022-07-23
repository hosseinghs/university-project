<template>
  <div>{{ $route.params }}</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    const articleId = this.$route.params.id;
    this.getArticelsWithCategoryWithCategoryId(articleId);
  },

  methods: {
    ...mapActions('client/articles', [
      'getArticelsWithCategoryWithCategoryId',
    ]),
  },
};
</script>
