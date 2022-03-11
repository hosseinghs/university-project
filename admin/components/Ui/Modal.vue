<template>
  <v-dialog
    v-model="visibility"
    :fullscreen="fullScreen"
    :max-width="width"
    transition="dialog-bottom-transition"
  >
    <v-card min-width="500" :class="{ blured: isBlured }">
      <v-toolbar id="modalComponent" class="t-white px-8" color="#485EC4">
        <v-btn
          v-if="fullScreen"
          color="#fff"
          icon
          text
          large
          @click="setModalState(false)"
        >
          <v-icon>{{ $vuetify.icons.values.close }}</v-icon>
        </v-btn>

        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-toolbar>

      <v-container>
        <slot />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mdiChevronUp } from '@mdi/js'
export default {
  name: 'ModalComponent',
  props: {
    fullScreen: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '1000',
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      icons: {
        arrow: mdiChevronUp,
      },
    }
  },
  computed: {
    ...mapState(['isModalVisible', 'isBlured']),
    visibility: {
      get() {
        return this.isModalVisible
      },
      set(val) {
        return this.setModalState(val)
      },
    },
  },
  methods: {
    ...mapActions(['setModalState']),
  },
}
</script>
