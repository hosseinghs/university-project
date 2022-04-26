<template>
  <div></div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SingleArticlePage',

  computed: {
    ...mapState('client/articles', ['article']),
  },

  created() {
      const articleId = this.$route.params.articleId
      articleId && this.getArticleById(articleId)
  },
  
  methods: {
    ...mapActions('client/articles', ['getArticleById']),
  },
};
</script>

<style></style>
