<template>
  <v-row>
    <v-col cols="11" md="10" lg="6" xl="4" class="mx-auto">
      <v-card class="px-4 py-4 mx-auto" max-width="700">
        <v-form ref="login" @submit.prevent="submitForm()">
          <h2>خوش آمدید!</h2>
          <h5>ثبت نام کنید!</h5>
          <v-divider class="mt-2 mb-5"></v-divider>
          <FormText
            label="نام"
            :rules="[mustFillRule]"
            @change="setUserRegisterData({ k: 'firstName', v: $event })"
          />
          <FormText
            label="نام خانوادگی"
            :rules="[mustFillRule]"
            @change="setUserRegisterData({ k: 'lastName', v: $event })"
          />
          <FormText
            label="ایمیل"
            :rules="[mustFillRule, emailFormatRule]"
            @change="setUserRegisterData({ k: 'email', v: $event })"
          />
          <FormText
            label="شماره تلفن"
            :rules="[mustFillRule, mobileLengthRule, PhoneNumberRule]"
            @change="setUserRegisterData({ k: 'phoneNumber', v: $event })"
          />
          <FormText label="تاریخ تولد" />
          <FormText
            label="رمزعبور"
            :rules="[mustFillRule]"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? icons.hide : icons.show"
            @click:append="showPassword = !showPassword"
            @change="setUserRegisterData({ k: 'password', v: $event })"
          />
          <FormBtnPrime block type="submit" class="mt-5">
            ثبت نام
          </FormBtnPrime>
        </v-form>
        <v-col class="text-center">
          <nuxt-link to="/login">ثبت نام کرده اید؟وارد شوید! </nuxt-link>
        </v-col>
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
  emailFormatRule,
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
    emailFormatRule,
    ...mapActions('register', ['signupUser', 'setUserRegisterData']),

    async submitForm() {
      if (this.$refs.login.validate()) {
        const res = await this.signupUser();
        if (res) this.$router.push({ path: '/Login' })
      }
    },
  },
};
</script>
