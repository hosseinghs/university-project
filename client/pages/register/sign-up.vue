<template>
  <v-container class="mt-15">
    <v-card class="px-7 py-7">
      <h2>همین حالا ثبت نام کنید !</h2>
      <v-row align="center">
        <v-col xs="12" md="8">
          <v-form @submit.prevent="submitForm" ref="createUserForm">
            <FormText
              @input="lazyCaller(() => updateUser({ k: 'Name', v: $event }))"
              :value="user.name"
              :rules="[mustFillRule]"
              :append-icon="$vuetify.icons.values.user"
              textFieldClasses="my-2"
              label="نام"
              required
              outlined
              name="text"
            />
            <FormText
              @input="lazyCaller(() => updateUser({ k: 'Family', v: $event }))"
              :value="user.family"
              :rules="[mustFillRule]"
              :append-icon="$vuetify.icons.values.user"
              textFieldClasses="my-2"
              label="نام خانوادگی"
              outlined
              required
              name="text"
            />
            <FormText
              @input="lazyCaller(() => updateUser({ k: 'Email', v: $event }))"
              :value="user.email"
              :rules="[emailFormatRule, mustFillRule]"
              :append-icon="$vuetify.icons.values.email"
              textFieldClasses="my-2"
              label="ایمیل"
              required
              outlined
              type="email"
            />
            <FormText
              :type="passwordInputType"
              :value="user.password"
              label="رمزعبور"
              textFieldClasses="my-2"
              required
              outlined
              @copy.prevent
              @cut.prevent
              @paste.prevent
              :rules="[mustFillRule]"
              @input="updateUser({ k: 'Password', v: $event })"
              :append-icon="
                showPassword
                  ? $vuetify.icons.values.eyeClose
                  : $vuetify.icons.values.eye
              "
              @click:append="showPassword = !showPassword"
            />
            <!-- <FormText
          :type="confirmPasswordInputType"
          :value="user.confirmPassword"
          label="تکرار رمزعبور"
          textFieldClasses="my-2"
          :rules="[mustFillRule, matchPassword]"
          required
          outlined
          @copy.prevent
          @cut.prevent
          @paste.prevent
          @input="updateUser({ k: 'confirmPassword', v: $event })"
          :append-icon="
            showConfirmPassword
              ? $vuetify.icons.values.eyeClose
              : $vuetify.icons.values.eye
          "
          @click:append="showConfirmPassword = !showConfirmPassword"
        /> -->
            <v-btn type="action">ثبت نام</v-btn>
          </v-form>
        </v-col>
        <v-col xs="12" md="4">
          <v-img :src="require('~/assets/img/auth.svg')" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { emailFormatRule, mustFillRule } from '../../utils/validations';
import lazyCaller from '~/mixins/lazyCaller';
export default {
  mixins: [lazyCaller],
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  computed: {
    ...mapGetters('register', ['user']),
    passwordInputType() {
      if (this.showPassword) return 'text';
      else return 'password';
    },
    confirmPasswordInputType() {
      if (this.showConfirmPassword) return 'text';
      else return 'password';
    },
  },
  methods: {
    mustFillRule,
    emailFormatRule,
    ...mapActions('register', [
      'updateUser',
      'createNewUser',
      'clearUserState',
    ]),
    matchPassword() {
      if (this.user.password === this.user.confirmPassword) return true;
      else return 'رمزعبور وارد شده با تکرار آن مطابقت ندارد!';
    },
    async submitForm() {
      if (this.$refs.createUserForm.validate()) {
        const res = await this.createNewUser();
        if (res) this.$router.push({ path: '/register/sign-in' });
      }
    },
  },
  beforeDestroy() {
    this.clearUserState();
  },
};
</script>
