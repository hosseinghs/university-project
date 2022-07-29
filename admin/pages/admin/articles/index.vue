<template>
  <v-container>
    <v-card elevation="0" max-width="1110" class="mx-auto bg-transparent">
      <v-col>
        <v-row align="center">
          <v-col lg="2">
            <FormAutoComplete
              label="نوع"
              item-value="id"
              outlined
              dense
              hide-details
              :items="articleTypes"
              @change="updateQueries({ key: 'type', v: $event })"
            />
          </v-col>
          <v-col cols="5">
            <FormDatePicker
              id="article-date-picker"
              name="article-date-picker"
              label="انتخاب بازه"
              placeholder="از x تا y"
              is-range
              hide-details
              @update="updateDateValues($event)"
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
      articleType: 2,
    }
  },

  computed: {
    ...mapState('article', ['articles', 'articleTypes']),
  },

  created() {
    this.fireApies()
  },

  methods: {
    ...mapActions(['setModalState']),
    ...mapActions('article', ['getCategories', 'getArticles', 'updateQueries']),

    updateDateValues(v) {
      this.updateQueries({
        k: 'start',
        v: v.startDate,
        forceUpdate: false,
      })

      this.updateQueries({
        k: 'end',
        v: v.endDate,
      })
    },

    fireApies() {
      const promises = [this.getCategories(), this.getArticles()]
      Promise.all(promises)
    },
  },
}
</script>

<style></style>
