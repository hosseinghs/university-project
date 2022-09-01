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

      <v-row v-if="articles.length > 0" class="articles">
        <v-col v-for="article in articles" :key="article.id" cols="12" lg="6">
          <ArticleCard
            :id="article.id"
            :title="article.title"
            :text="article.text"
            :author="article.author"
          />
        </v-col>
      </v-row>
      <v-col v-else>
        <div class="text-center">
          <v-img
            cover
            width="400"
            class="mx-auto"
            :src="require('~/assets/img/empty.svg')"
          />
          <div class="mt-2">داده ای موجود نمی باشد</div>
        </div>
      </v-col>
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
