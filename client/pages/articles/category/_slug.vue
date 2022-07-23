<template>
  <v-card max-width="1100" class="mx-auto px-8 py-8">
    <v-container>
      <v-chip color="black" class="t-white mb-1" filter label>
        مروری بر {{ $route.params.slug }}
      </v-chip>
      <v-divider color="black"></v-divider>
      <div class="my-5">
        <h1>{{ $route.params.slug }}</h1>
        <v-divider class="mt-5"></v-divider>
      </div>

      <v-row class="articles">
        <v-col v-for="article in articles" :key="article.id" cols="12" lg="6">
          <ArticleCard />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('client/articles', ['articles']),
  },
  created() {
    const articleId = this.$route.params.id;
    this.getArticelsWithCategoryWithCategoryId(articleId);
  },

  methods: {
    ...mapActions('client/articles', ['getArticelsWithCategoryWithCategoryId']),
  },
};
</script>
