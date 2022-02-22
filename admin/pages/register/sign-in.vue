<template>
  <v-container class="mt-15">
    <v-card class="px-7 py-7">
      <h2>به بو شاپ خوش آمدید !</h2>
      <v-row align="center">
        <v-col xs="12" md="8">
          <v-form ref="loginForm" @submit.prevent="submitForm">
            <FormText
              label="ایمیل"
              textFieldClasses="my-2"
              outlined
              required
              :rules="[emailFormatRule, mustFillRule]"
              :input-value="user.email"
              :append-icon="$vuetify.icons.values.email"
              @input="updateUser({ k: 'Email', v: $event })"
            />
            <FormText
              label="رمزعبور"
              type="password"
              textFieldClasses="my-2"
              outlined
              required
              :rules="[mustFillRule]"
              :input-value="user.password"
              :append-icon="$vuetify.icons.values.password"
              @input="updateUser({ k: 'Password', v: $event })"
            />
            <v-btn type="action"> ورود </v-btn>
          </v-form>
        </v-col>
        <v-col xs="12" md="4">
          <v-img :src="require('~/assets/img/login.svg')" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { emailFormatRule, mustFillRule } from '../../utils/validations';
export default {
  computed: {
    ...mapGetters('register', ['user']),
  },
  methods: {
    emailFormatRule,
    mustFillRule,
    ...mapActions('register', ['updateUser', 'loginUser', 'clearUserState']),
    ...mapActions('basket', ['getUserBasket']),

    async submitForm() {
      let res;
      if (this.$refs.loginForm.validate()) res = await this.loginUser();
      if (res) {
        this.getUserBasket();
        setTimeout(() => {
          this.$router.push({ path: '/' });
        }, 200);
      }
    },
  },
  beforeDestroy() {
    this.clearUserState();
  },
};
</script>
