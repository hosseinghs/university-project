<template>
  <v-container>
    <v-card elevation="0" class="bg-transparent">
      <v-col>
        <v-row align="center">
          <v-col lg="2">
            <FormAutoComplete
              v-model="articleType"
              label="نوع"
              item-value="id"
              clearable
              :items="articleTypes"
            />
          </v-col>
          <v-col class="text-end">
            <FormBtnPrime class="t-white" @click.stop="setModalState(true)">
              افزودن مقاله جدید
            </FormBtnPrime>
          </v-col>
        </v-row>
      </v-col>
      <section>
        <div v-for="article in articles" :key="article.id">
          <v-col cols="12">
            <AdminArticle :item="article" />
          </v-col>
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

  data() {
    return {
      articleType: null,
    }
  },

  computed: {
    ...mapState('article', ['articles', 'articleTypes']),
  },

  watch: {
    articleType(val) {
      this.getArticles(val)
    },
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
