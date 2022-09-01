<template>
  <v-container>
    <div v-if="articles.length > 0">
      <v-row>
        <v-col
          v-for="{ text, author, title, id } in articles"
          :key="id"
          cols="12"
          sm="6"
          md="3"
          lg="4"
        >
          <ArticleCard :id="id" :text="text" :author="author" :title="title" />
        </v-col>
      </v-row>
    </div>
    <div v-else>مقاله ای یافت نشد!</div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('client/articles', ['articles']),
  },

  created() {
    const promises = [this.getArticles(), this.getLatestArticles()];
    Promise.all(promises);
  },

  methods: {
    ...mapActions('client/articles', [
      'getArticles',
      'getCategories',
      'getLatestArticles',
    ]),
  },
};
</script>
