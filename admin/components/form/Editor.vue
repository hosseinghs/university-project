<template>
  <div>
    <span v-if="label" class="label">{{ label }}</span>
    <ckeditor
      :id="id"
      v-bind="$attrs"
      :editor="classicEditor"
      :config="editorConfig"
      v-on="$listeners"
    />
  </div>
</template>

<script>
let ClassicEditor
let CKEditor
if (process.client) {
  ClassicEditor = require('@/plugins/ckeditor/ckeditor')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = { component: { template: '<div></div>' } }
}
export default {
  name: 'CKEditorComponent',
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    id: {
      type: String,
      default: 'editor',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      classicEditor: ClassicEditor,
      editorConfig: {
        removePlugins: ['Title'],
        language: 'fa',
        contentsLangDirection: 'rtl',
        placeholder: 'محتوای خود را وارد کنید',
      },
      editorElement: null,
    }
  },
  methods: {
    insertTextAtTheEnd(text) {
      function findCorrectPosition(htmlStr) {
        const lastIndexOfHTMLTag = htmlStr.lastIndexOf('</')
        const lastUlTag = htmlStr.lastIndexOf('</ul>')
        const lastOlTag = htmlStr.lastIndexOf('</ol>')
        if (
          lastUlTag === lastIndexOfHTMLTag ||
          lastOlTag === lastIndexOfHTMLTag
        ) {
          const lastLiTag = htmlStr.lastIndexOf('</li>')
          return lastLiTag
        }
        return lastIndexOfHTMLTag
      }
      const currentString = this.value
      const correctIndex = findCorrectPosition(currentString)
      const firstHalf = currentString.substring(0, correctIndex)
      const secondHalf = currentString.substring(correctIndex)
      const newString = `${firstHalf}${text}${secondHalf}`
      this.$emit('input', newString)
    },
  },
}
</script>

<style lang="scss">
.ck-editor {
  width: 100% !important;
}
.ck-content {
  padding-right: 30px !important;
  padding-left: 30px !important;
  min-height: var(--minHeight);
}
.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,
.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw {
  right: unset !important;
  left: 0 !important;
}
.ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
  position: static !important;
}
.ck-editor__top::before {
  content: var(--labelText);
  color: #0009;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-family: Irsans;
  padding-bottom: 4px;
}
.ck-editor__editable_inline {
  min-height: 350px;
}
</style>
