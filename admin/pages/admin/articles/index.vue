<template>
  <v-container>
    <v-card elevation="0">
      <FormBtnPrime class="t-white" @click.stop="setModalState(true)"
        >افزودن مقاله جدید
      </FormBtnPrime>
      <section>
        <div v-for="article in articles" :key="article.id">
          <AdminArticle :item="article"/>
        </div>
      </section>
    </v-card>
    <UiModal full-screen title="افزودن مقاله جدید">
      <AdminArticleAdd />
    </UiModal>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ArticlesPage',
  computed: {
    ...mapState('article', ['articles']),
  },

  created() {
    this.fireApies()
  },

  methods: {
    ...mapActions(['setModalState']),
    ...mapActions('article', ['getCategories', 'getArticles']),
    fireApies() {
      const promises = [this.getCategories(), this.getArticles()]
      Promise.all(promises)
    },
  },
}
</script>

<style></style>
