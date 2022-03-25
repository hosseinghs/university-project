<template>
  <v-container>
    <v-card class="px-4 py-4 mx-auto">
      <v-form ref="login" @submit.prevent="submitForm()">
        <h2>خوش آمدید!</h2>
        <h5>ثبت نام کنید!</h5>
        <v-divider class="mt-2 mb-5"></v-divider>
        <v-row>
          <v-col cols="12">
            <FormText
              label="نام"
              :rules="[mustFillRule]"
              @change="setUserRegisterData({ k: 'firstName', v: $event })"
            />
          </v-col>
          <v-col cols="12">
            <FormText
              label="نام خانوادگی"
              :rules="[mustFillRule]"
              @change="setUserRegisterData({ k: 'lastName', v: $event })"
            />
          </v-col>
          <v-col cols="12">
            <FormText
              label="ایمیل"
              :rules="[mustFillRule, emailFormatRule]"
              @change="setUserRegisterData({ k: 'email', v: $event })"
            />
          </v-col>
          <v-col cols="12">
            <FormText
              label="شماره تلفن"
              :rules="[mustFillRule, mobileLengthRule, PhoneNumberRule]"
              @change="setUserRegisterData({ k: 'phoneNumber', v: $event })"
            />
          </v-col>
          <v-col cols="12">
            <FormText label="تاریخ تولد" />
          </v-col>
          <v-col cols="12">
            <FormText
              label="رمزعبور"
              :rules="[mustFillRule]"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? icons.hide : icons.show"
              @click:append="showPassword = !showPassword"
              @change="setUserRegisterData({ k: 'password', v: $event })"
            />
          </v-col>
        </v-row>
        <v-btn block type="submit" class="primary mt-5">ورود</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { mdiEye, mdiEyeOff, mdiReload } from '@mdi/js';
import {
  mustFillRule,
  mobileLengthRule,
  emailFormatRule,
  PhoneNumberRule,
} from '~/utils/validations';

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
    };
  },
  computed: {
    ...mapState('register', ['isLoggedIn']),
  },
  methods: {
    mustFillRule,
    mobileLengthRule,
    PhoneNumberRule,
    emailFormatRule,
    ...mapActions('register', ['loginUser', 'setUserRegisterData']),
    async submitForm() {
      if (this.$refs.login.validate()) {
        const res = await this.loginUser();
        // if (res) this.$router.push({ path: '/admin/articles' })
      }
    },
  },
};
</script>
