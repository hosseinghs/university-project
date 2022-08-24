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
              @change="updateQueries({ k: 'type', v: $event })"
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

      <section class="px-3">
        <div v-if="articles.length > 0">
          <v-row>
            <v-col
              v-for="article in articles"
              :key="article.id"
              cols="12"
              lg="6"
            >
              <AdminArticle
                :item="article"
                @edit="openEditModal($event)"
                @delete="generateDeleteWarning($event)"
              />
            </v-col>
          </v-row>
        </div>
        <div v-else class="text-center mt-10">
          <div class="mb-2">
            <v-img
              cover
              width="400"
              class="mx-auto"
              :src="require('~/assets/img/empty.svg')"
              alt="no-data"
            />
          </div>
          <span> هیچ مقاله ای موجود نمی باشد! </span>
        </div>
      </section>
    </v-card>
    <UiModal full-screen :title="isEdit ? 'ویرایش مقاله' : 'افزودن مقاله جدید'">
      <AdminArticleAdd :is-edit="isEdit" />
    </UiModal>
    <UiWarning @submitActionClicked="deleteArticleFunc(articleId)" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ArticlesPage',

  data() {
    return {
      isEdit: false,
      articleId: null,
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
    ...mapActions('warningGenerator', ['generateWarning', 'setWarningState']),
    ...mapActions('article', [
      'setArticle',
      'getArticles',
      'getCategories',
      'updateQueries',
      'deleteArticle',
    ]),

    generateDeleteWarning({ id }) {
      this.articleId = id
      const _title = `حذف کردن مقاله`
      const color = 'red'
      const config = {
        color,
        title: _title,
        text: 'آیا عملیات مورد تایید است؟',
      }
      this.generateWarning(config)
    },

    async deleteArticleFunc(id) {
      const res = await this.deleteArticle(id)
      if (res) this.setWarningState(!!res)
    },

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

    openEditModal(article) {
      this.isEdit = true
      this.setArticle(article)
      this.setModalState(true)
    },

    fireApies() {
      const promises = [this.getCategories(), this.getArticles()]
      Promise.all(promises)
    },
  },
}
</script>
