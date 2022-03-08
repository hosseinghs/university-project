<template>
  <v-container>
    <v-card class="px-4 py-4 mx-auto" width="500">
      <v-form ref="login" @submit.prevent="submitForm()">
        <v-row>
          <v-col class="py-0" cols="12">
            <FormText
              label="شماره تلفن"
              dense
              @change="setUserLoginData({ k: 'phoneNumber', v: $event })"
            />
          </v-col>
          <v-col class="py-0" cols="12">
            <FormText
              label="رمزعبور"
              dense
              :rules="[mustFillRule]"
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
import {
  mustFillRule,
  mobileLengthRule,
  PhoneNumberRule,
} from '~/utils/validations'
export default {
  name: 'LoginPage',
  layout: 'login',
  computed: {
    ...mapState('login', ['isLoggedIn']),
  },
  methods: {
    mustFillRule,
    mobileLengthRule,
    PhoneNumberRule,
    ...mapActions('login', ['loginUser', 'setUserLoginData']),
    submitForm() {
      if (this.$refs.login.validate()) this.loginUser()
    },
  },
}
</script>
