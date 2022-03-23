<template>
  <v-dialog v-model="visibility" :width="width">
    <v-card>
      <v-card-title :class="`text-h5 t-white ${warningConfig.color}`">
        {{ warningConfig.title }}
      </v-card-title>

      <v-card-text class="text-center mt-8">
        <div class="mb-4">
          <v-img
            contain
            width="200"
            class="mx-auto"
            :src="require('~/assets/Img/warning-img.svg')"
          />
        </div>

        <v-icon :color="warningConfig.color"> mdi-alert-circle</v-icon>
        {{ warningConfig.text }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <FormBtnPrime
          class="t-white px-10"
          @click.stop="$emit('submitActionClicked')"
        >
          تایید
        </FormBtnPrime>
        <FormBtnCancel
          outlined
          :color="warningConfig.color"
          @click.stop="setWarningState(false)"
        >
          لغو
        </FormBtnCancel>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'WarningComponent',
  props: {
    width: {
      type: String,
      default: '550',
      required: false,
    },
  },
  computed: {
    ...mapState('warningGenerator', ['warningState', 'warningConfig']),
    visibility: {
      get() {
        return this.warningState
      },
      set(val) {
        return this.setWarningState(val)
      },
    },
  },
  methods: {
    ...mapActions('warningGenerator', ['setWarningState']),
  },
}
</script>
