<template>
  <v-container>
    <v-card elevation="0" class="px-15">
      <v-row align="center">
        <v-col>
          <v-form ref="addArticleForm" @submit.prevent="submitForm()">
            <FormText
              :rules="[mustFillRule]"
              label="عنوان"
              @change="setNewArticleData({ k: 'title', v: $event })"
            />
            <FormText
              :rules="[mustFillRule]"
              label="نویسنده"
              @change="setNewArticleData({ k: 'author', v: $event })"
            />
            <FormAutoComplete
              item-text="name"
              item-value="id"
              label="دسته بندی"
              :items="categories"
              :rules="[mustFillRule]"
              @change="setNewArticleData({ k: 'categoryId', v: $event })"
            />
            <FormCkEditor
              fill-err
              label="متن مقاله"
              @input="
                setNewArticleData({
                  k: 'text',
                  v: $event,
                })
              "
            />
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
