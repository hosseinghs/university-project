<template>
  <div id="quillEditor">
    <quillEditor
      v-model="content"
      class="quill-editor"
      @change="$emit('onEditorChange', $event)"
    ></quillEditor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'EditorComponent',
  components: {
    quillEditor,
  },
  data() {
    return {
      content: '',
    }
  },
}
</script>

<style>
#quillEditor .ql-editor {
  text-align: right !important;
  direction: rtl !important;
}

#quillEditor .ql-container {
  background-color: #fff !important;
}

#quillEditor .ql-container .ql-snow {
  min-height: 150px;
}
</style>
