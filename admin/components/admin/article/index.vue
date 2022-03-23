<template>
  <v-card elevation="1" class="px-2 py-2">
    <v-card-title>{{ item.title }}</v-card-title>
    <div v-html="item.text"></div>
    <div>نوشته شده توسط {{ item.author }}</div>
    <div>تاریخ ایجاد {{ faDate(item.date) }}</div>
  </v-card>
</template>

<script>
import { faDate } from '~/utils/general'
export default {
  name: 'ArticleCardComponent',
  props: {
    item: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    faDate,
  },
}
</script>

<style></style>
