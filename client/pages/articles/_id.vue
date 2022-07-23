<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card class="rounded-lg" elevation="2">
          <v-card-title class="title">{{ article.title }}</v-card-title>
          <v-card-text>
            <p>
              <span class="author">{{ article.author }}</span>
            </p>
          </v-card-text>
          <v-card-text v-html="article.text"></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">asdasdasdasdasd</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SingleArticlePage',

  computed: {
    ...mapState('client/articles', ['article']),
  },

  created() {
    const articleId = this.$route.params.id;

    const promises = [this.getLatestArticles(), this.getArticleById(articleId)];
    if (articleId) Promise.all(promises);
  },

  methods: {
    ...mapActions('client/articles', ['getArticleById', 'getLatestArticles']),
  },
};
</script>

<style scoped>
.title {
  color: #444444;
  line-height: 1.3;
  font-size: 30px;
  font-weight: 700;
}
.author {
  margin-left: auto;
  font-weight: 700;
  color: #4d4d4d;
}
</style>
