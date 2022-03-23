<template>
  <v-card elevation="1" class="px-2 py-2">
    <v-card-title>{{ item.title }}</v-card-title>
    <div v-html="item.text"></div>
    <div>نوشته شده توسط {{ item.author }}</div>
    <div>تاریخ ایجاد {{ faDate(item.date) }}</div>
    <v-card-actions>
      <UiTooltip v-if="isPublished" text="نامنتشر کردن">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          :color="isPublished ? 'red' : 'primary'"
          @click.stop="generateWarningConfig(item)"
        >
          <v-icon dark>mdi-upload-off</v-icon>
        </v-btn>
      </UiTooltip>
      <UiTooltip v-else text="انتشار">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          :color="isPublished ? 'red' : 'primary'"
          @click.stop="generateWarningConfig(item)"
        >
          <v-icon dark> mdi-upload</v-icon>
        </v-btn>
      </UiTooltip>
    </v-card-actions>
    <UiWarning />
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
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
  computed: {
    isPublished() {
      return this.item.isPublished
    },
  },
  methods: {
    faDate,
    ...mapActions('warningGenerator', ['generateWarning']),
    generateWarningConfig({ isPublished, title }) {
      const _title = isPublished
        ? 'خارج کردن پست از حالت انتشار'
        : 'منتشر کردن پست'
      const color = isPublished ? 'red' : 'primary'
      const config = {
        color,
        title: _title + ' ' + title,
        text: 'آیا عملیات مورد تایید است؟',
      }
      this.generateWarning(config)
    },
  },
}
</script>
