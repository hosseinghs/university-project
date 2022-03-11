<template>
  <ckeditor
    :id="id"
    v-bind="$attrs"
    :editor="classicEditor"
    :config="editorConfig"
    v-on="$listeners"
  />
</template>

<script>
let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require('@/plugins/ckeditor/ckeditor');
  CKEditor = require('@ckeditor/ckeditor5-vue2');
} else {
  CKEditor = { component: { template: '<div></div>' } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },

  props: {
    fillErr: {
      type: Boolean,
      default: false,
      required: false,
    },
    minHeight: {
      type: String,
      default: '350px',
      required: false,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
  },

  data() {
    return {
      classicEditor: ClassicEditor,
      editorConfig: {
        language: 'fa',
        contentsLangDirection: 'rtl',
      },
      editorElement: null,
      id: null,
    };
  },

  computed: {
    value() {
      return this.$attrs.value;
    },
  },

  watch: {
    value(newVal) {
      if (this.fillErr) {
        if (!newVal) this.showFillErr();
        else this.hideFillErr();
      }
    },
  },

  created() {
    this.id = this.uuidv4();
  },

  mounted() {
    if (!document.getElementById('editorFaTranslate')) {
      const faScript = document.createElement('script');
      faScript.setAttribute('charset', 'utf-8');
      faScript.setAttribute('type', 'text/js');
      faScript.setAttribute('id', 'editorFaTranslate');
      faScript.setAttribute(
        'src',
        require('@@/plugins/ckeditor/translations/fa.js')
      );
      document.head.appendChild(faScript);
    }

    const intervalId = setInterval(() => {
      const ckEditor = document.querySelector(`[id="${this.id}"] + .ck-editor`);
      if (ckEditor) {
        clearInterval(intervalId);
        this.editorElement = ckEditor;
        this.setMinHeight();
        this.setLabelText();
      }
    });
  },

  methods: {
    showFillErr() {
      if (this.editorElement)
        this.editorElement.classList.add('editor--fill-err');
    },
    hideFillErr() {
      const intervalId = setInterval(() => {
        if (this.editorElement) {
          clearInterval(intervalId);
          this.editorElement.classList.remove('editor--fill-err');
        }
      }, 1);
    },
    setMinHeight() {
      if (this.editorElement) {
        const editorMainElement = this.editorElement.children[2];
        editorMainElement.style.setProperty('--minHeight', this.minHeight);
      }
    },
    setLabelText() {
      if (this.label && this.editorElement) {
        const toolBar = this.editorElement.children[1];
        toolBar.style.setProperty('--labelText', JSON.stringify(this.label));
      }
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    insertTextAtTheEnd(text) {
      function findCorrectPosition(htmlStr) {
        const lastIndexOfHTMLTag = htmlStr.lastIndexOf('</');
        const lastUlTag = htmlStr.lastIndexOf('</ul>');
        const lastOlTag = htmlStr.lastIndexOf('</ol>');
        if (
          lastUlTag === lastIndexOfHTMLTag ||
          lastOlTag === lastIndexOfHTMLTag
        ) {
          const lastLiTag = htmlStr.lastIndexOf('</li>');
          return lastLiTag;
        }
        return lastIndexOfHTMLTag;
      }
      const currentString = this.value;
      const correctIndex = findCorrectPosition(currentString);
      const firstHalf = currentString.substring(0, correctIndex);
      const secondHalf = currentString.substring(correctIndex);
      const newString = `${firstHalf}${text}${secondHalf}`;
      this.$emit('input', newString);
    },
  },
};
</script>

<style lang="scss">
@mixin must-fill-err {
  border: 2px solid #ff5252 !important;
  border-radius: 5px !important;
  margin-bottom: 5px !important;
  &::after {
    content: 'پر کردن این بخش الزامیست';
    color: #ff5252;
    position: absolute;
    font-size: 12px;
    bottom: -20px;
    margin-right: 10px;
  }
}

.ck-editor {
  width: 100% !important;
}

.editor--fill-err {
  @include must-fill-err;
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
</style>
