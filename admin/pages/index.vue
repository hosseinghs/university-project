<template>
  <v-container>
    <v-card class="px-8 py-8 mx-auto">
      <v-form ref="login" @submit.prevent="submitForm()">
        <h2>به ادمین خوش آمدید!</h2>
        <h5>برای ادامه وارد شوید</h5>
        <v-divider class="mt-2 mb-5"></v-divider>
        <v-row>
          <v-col cols="12">
            <FormText
              label="شماره تلفن"
              :rules="[mustFillRule, mobileLengthRule, PhoneNumberRule]"
              @change="setUserLoginData({ k: 'phoneNumber', v: $event })"
            />
          </v-col>
          <v-col cols="12">
            <FormText
              label="رمزعبور"
              :rules="[mustFillRule]"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? icons.hide : icons.show"
              @click:append="showPassword = !showPassword"
              @change="setUserLoginData({ k: 'password', v: $event })"
            />
          </v-col>
        </v-row>
        <v-btn block type="submit" class="primary mt-5">ورود</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mdiEye, mdiEyeOff, mdiReload } from '@mdi/js'
import {
  mustFillRule,
  mobileLengthRule,
  PhoneNumberRule,
} from '~/utils/validations'

export default {
  name: 'LoginPage',
  layout: 'login',
  data() {
    return {
      icons: {
        show: mdiEye,
        hide: mdiEyeOff,
        reload: mdiReload,
      },
      showPassword: false,
    }
  },
  computed: {
    ...mapState('login', ['isLoggedIn']),
  },
  methods: {
    mustFillRule,
    mobileLengthRule,
    PhoneNumberRule,
    ...mapActions('login', ['loginUser', 'setUserLoginData']),
    async submitForm() {
      if (this.$refs.login.validate()) {
        const res = await this.loginUser()
        if (res) this.$router.push({ path: '/admin/articles' })
      }
    },
  },
}
</script>
