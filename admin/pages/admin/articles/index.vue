<template>
  <v-container>
    <v-card elevation="0">
      <FormBtnPrime class="t-white" @click.stop="setModalState(true)"
        >افزودن مقاله جدید
      </FormBtnPrime>
    </v-card>
    <UiModal full-screen title="افزودن مقاله جدید">
      <AdminArticleAdd />
    </UiModal>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ArticlesPage',
  created() {
    this.getCategories()
  },
  methods: {
    ...mapActions(['setModalState']),
    ...mapActions('article', ['getCategories']),
  },
}
</script>

<style></style>
