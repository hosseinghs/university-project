<template>
  <v-container>
    <v-card elevation="0">
      <v-row align="center">
        <v-col>
          {{article}}
          <v-form ref="addArticleForm" @submit.prevent="submitForm()">
            <v-col>
              <FormText
                label="عنوان"
                :rules="[mustFillRule]"
                :value="article.title"
                @change="setNewArticleData({ k: 'title', v: $event })"
              />
            </v-col>

            <v-col>
              <FormText
                label="نویسنده"
                :rules="[mustFillRule]"
                :value="article.author"
                @change="setNewArticleData({ k: 'author', v: $event })"
              />
            </v-col>

            <v-col>
              <FormText
                label="مقدمه"
                placeholder="بین 30 تا 50 کاراکتر"
                :rules="[mustFillRule]"
                :value="article.text"
                @change="setNewArticleData({ k: 'text', v: $event })"
              />
            </v-col>

            <v-col>
              <FormAutoComplete
                item-text="name"
                item-value="id"
                label="دسته بندی"
                :items="categories"
                :value="article.category"
                :rules="[mustFillRule]"
                @change="setNewArticleData({ k: 'categoryId', v: $event })"
              />
            </v-col>

            <v-col>
              <FormEditor
              :value="article.htmlContent"
                @input="
                  setNewArticleData({
                    k: 'htmlContent',
                    v: $event,
                  })
                "
              />
            </v-col>

            <FormBtnPrime type="submit" class="t-white px-10 mt-10">
              افزودن
            </FormBtnPrime>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mustFillRule } from '~/utils/validations'
export default {
  name: 'AddNewArticleComponent',

  computed: {
    ...mapState(['isModalVisible']),
    ...mapState('article', ['categories', 'article']),
  },
  watch: {
    isModalVisible(val) {
      if (!val) {
        this.clearArticle()
        this.$refs.addArticleForm.resetValidation()
      }
    },
  },
  methods: {
    mustFillRule,
    ...mapActions(['setModalState']),
    ...mapActions('article', [
      'clearArticle',
      'setNewArticleData',
      'createArticle',
    ]),
    async submitForm() {
      if (this.$refs.addArticleForm.validate()) {
        const res = await this.createArticle()
        if (res) this.setModalState(false)
      }
    },
  },
}
</script>
