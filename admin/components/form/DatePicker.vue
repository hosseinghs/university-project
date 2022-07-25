<template>
  <div>
    <v-text-field
      v-bind="$attrs"
      color="#C89A67"
      :value="dateValue"
      clearable
      outlined
      dense
      append-icon="mdi-calendar"
      @click.stop="show = true"
      @click:clear="$emit('clearDate')"
    />
    <datePicker
      :id="`${name}-input`"
      v-model="date"
      :show="show"
      :min="min"
      :range="isRange"
      :color="color"
      display-format="jYYYY-jMM-jDD"
      :custom-input="`${name}-input`"
      @close="show = false"
    />
  </div>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  components: {
    datePicker: VuePersianDatetimePicker,
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    min: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      default: '#C89A67',
    },
    isRange: {
      type: Boolean,
      default: false,
    },
    clearValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    date: null,
    show: false,
  }),
  computed: {
    dateValue() {
      const date = this.date
      if (!date) return
      let res = null
      if (this.isRange) {
        res = `${date[0]} تا ${date[1]}`
      } else res = date
      return res
    },
  },
  watch: {
    date(val) {
      let date = val
      if (this.isRange) {
        date = {
          startDate: date[0],
          endDate: date[1],
        }
      }
      this.$emit('update', date)
    },
    clearValue(val) {
      if (val) this.date = null
    },
  },
}
</script>

<style>
.vpd-main input {
  border-color: #9e9e9e;
}
span.vpd-main {
  font-size: 13px;
}
</style>
