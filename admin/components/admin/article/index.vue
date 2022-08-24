<template>
  <v-card elevation="1" class="px-2 py-2">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text v-html="item.text"></v-card-text>
    <v-card-subtitle>نوشته شده توسط {{ item.author }}</v-card-subtitle>
    <v-card-text>تاریخ ایجاد {{ faDate(item.date) }}</v-card-text>
    <v-card-actions class="justify-end">
      <UiTooltip v-if="isPublished" text="نامنتشر کردن">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          :color="isPublished ? 'red' : 'primary'"
          @click.stop="$emit('generateWarningConfig', { item, enable: false })"
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
          @click.stop="$emit('generateWarningConfig', { item, enable: true })"
        >
          <v-icon dark> mdi-upload</v-icon>
        </v-btn>
      </UiTooltip>

      <UiTooltip text="ویرایش">
        <span>
          <v-btn class="mx-2" fab small @click.stop="$emit('edit', item)">
            <v-icon dark> mdi-pen</v-icon>
          </v-btn>
        </span>
      </UiTooltip>
      <UiTooltip text="حذف">
        <span>
          <v-btn class="mx-2" fab small @click.stop="$emit('delete', item)">
            <v-icon dark> mdi-close</v-icon>
          </v-btn>
        </span>
      </UiTooltip>
    </v-card-actions>
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
    ...mapActions('article', ['changeArticlePublishmentState']),
  },
}
</script>
