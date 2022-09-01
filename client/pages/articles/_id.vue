<template>
  <v-card max-width="1100" class="mx-auto" elevation="0">
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <v-card class="rounded-lg" elevation="2">
            <v-card-title class="title">{{ article.title }}</v-card-title>
            <v-card-subtitle class="subtitle mt-1">{{
              article.text
            }}</v-card-subtitle>

            <v-card-text>
              <span class="author">نوشته شده توسط: {{ article.author }}</span>
            </v-card-text>
            <v-card-text v-html="article.htmlContent"></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card class="px-4 py-4" elevation="0">
            <h4>تازه ترین ها</h4>
            <v-divider class="mb-4" />
            <v-row>
              <v-col
                v-for="{ id, text, author, title } in articles"
                :key="id"
                cols="12"
              >
                <ArticleCard
                  :id="id"
                  :text="text"
                  :author="author"
                  :title="title"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SingleArticlePage',

  computed: {
    ...mapState('client/articles', ['article', 'articles']),
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
  font-size: 12px;
  color: #4d4d4d;
}
</style>
