<template>
  <v-card elevation="1" class="px-2 py-2">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text v-html="item.text"></v-card-text>
    <v-card-subtitle>نوشته شده توسط {{ item.author }}</v-card-subtitle>
    <v-card-text>تاریخ ایجاد {{ faDate(item.date) }}</v-card-text>
    <v-card-actions class="justify-end">
      <UiTooltip v-if="isPublished" text="درآوردن از حالت انتشار">
        <v-btn
          class="mx-2"
          color="orange"
          fab
          small
          @click.stop="$emit('unpublish', item)"
        >
          <v-icon>mdi-upload-off</v-icon>
        </v-btn>
      </UiTooltip>
      <UiTooltip v-else text="انتشار">
        <v-btn
          class="mx-2"
          color="primary"
          fab
          small
          @click.stop="$emit('publish', item)"
        >
          <v-icon> mdi-upload</v-icon>
        </v-btn>
      </UiTooltip>

      <UiTooltip text="ویرایش">
        <span>
          <v-btn
            color="purple"
            class="mx-2"
            fab
            small
            @click.stop="$emit('edit', item)"
          >
            <v-icon> mdi-pen</v-icon>
          </v-btn>
        </span>
      </UiTooltip>
      <UiTooltip text="حذف">
        <span>
          <v-btn
            color="red"
            class="mx-2"
            fab
            small
            @click.stop="$emit('delete', item)"
          >
            <v-icon> mdi-close</v-icon>
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
