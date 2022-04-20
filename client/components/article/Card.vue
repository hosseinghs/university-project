<template>
  <v-card id="article_card">
    <v-card-title class="title">{{ title }}</v-card-title>
    <v-card-title class="author py-0">{{ author }}</v-card-title>
    <v-card-text v-html="text" class="text_summary pb-0"></v-card-text>
    <v-card-actions>
      <v-btn class="read_more" small rouned>مطالعه مطلب...</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleCardComponent',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    text: {
      type: String,
      default: 'text',
    },
    author: {
      type: String,
      default: 'author',
    },
  },
};
</script>

<style>
#article_card .title {
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  text-align: inherit;
  text-transform: none;
  color: #383838;
}

#article_card:hover .title {
  color: #FF3A3A;
}

#article_card .author {
  color: #9e2558;
  font-weight: 400;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
}

#article_card .text_summary {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: right;
  text-transform: none;
  color: #888888;
}

#article_card .read_more {
  background-color: #40617a;
  color: #fff !important;
}
</style>
