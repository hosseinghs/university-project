<template>
  <v-row class="m">
    <v-col cols="11" md="10" lg="6" xl="4" class="mx-auto">
      <v-card class="px-4 py-4 mx-auto">
        <v-form ref="login" @submit.prevent="submitForm()">
          <h2>خوش آمدید!</h2>
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
          <FormBtnPrime block class="mt-5" type="submit"> ورود </FormBtnPrime>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { mdiEye, mdiEyeOff, mdiReload } from '@mdi/js';
import {
  mustFillRule,
  mobileLengthRule,
  PhoneNumberRule,
} from '~/utils/validations';

export default {
  name: 'LoginPage',

  layout: 'register',

  data() {
    return {
      icons: {
        show: mdiEye,
        hide: mdiEyeOff,
        reload: mdiReload,
      },
      showPassword: false,
    };
  },

  computed: {
    ...mapState('register', ['isLoggedIn']),
  },

  methods: {
    mustFillRule,
    mobileLengthRule,
    PhoneNumberRule,
    ...mapActions('register', ['loginUser', 'setUserLoginData']),
    async submitForm() {
      if (this.$refs.login.validate()) {
        const res = await this.loginUser();
        if (res) this.$router.push({ path: '/articles' });
      }
    },
  },
};
</script>
<style scoped>
.m {
  margin-top: 150px;
}
</style>
