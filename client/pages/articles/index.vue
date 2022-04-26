<template>
  <v-container>
    <v-row>
      <v-col
        v-for="{ text, author, title, id } in articles"
        :key="id"
        cols="12"
        sm="2"
        md="3"
        lg="4"
      >
        <ArticleCard :id="id" :text="text" :author="author" :title="title" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('client/articles', ['articles']),
  },

  created() {
    this.getArticles();
  },

  methods: {
    ...mapActions('client/articles', ['getArticles', 'getCategories']),
  },
};
</script>
