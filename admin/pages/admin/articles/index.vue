<template>
  <div>heloooo</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ArticlesPage',
  created() {
    this.getCategories()
  },
  methods: {
    ...mapActions('article', ['getCategories']),
  },
}
</script>

<style></style>
