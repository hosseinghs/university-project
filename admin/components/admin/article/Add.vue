<template>
  <v-container>
    <v-card elevation="0">
      <v-row align="center">
        <v-col>
          <v-form ref="addArticleForm" @submit.prevent="submitForm()">
            <v-col>
              <FormText
                :rules="[mustFillRule]"
                label="عنوان"
                @change="setNewArticleData({ k: 'title', v: $event })"
              />
            </v-col>
            <v-col>
              <FormText
                :rules="[mustFillRule]"
                label="نویسنده"
                @change="setNewArticleData({ k: 'author', v: $event })"
              />
            </v-col>
            <v-col>
              <FormAutoComplete
                item-text="name"
                item-value="id"
                label="دسته بندی"
                :items="categories"
                :rules="[mustFillRule]"
                @change="setNewArticleData({ k: 'categoryId', v: $event })"
              />
            </v-col>
            <v-col>
              <FormEditor
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
    ...mapState('article', ['categories']),
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
    ...mapActions('article', [
      'clearArticle',
      'setNewArticleData',
      'createArticle',
    ]),
    submitForm() {
      if (this.$refs.addArticleForm.validate()) this.createArticle()
    },
  },
}
</script>
