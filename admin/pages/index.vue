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
              @change="setUserLoginData({ k: 'password', v: $event })"
            />
          </v-col>
        </v-row>
        <v-btn block class="primary mt-5">ورود</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mustFillRule } from '~/utils/general'
export default {
  name: 'LoginPage',
  computed: {
    ...mapState('register', ['isLoggedIn']),
  },
  methods: {
    mustFillRule,
    ...mapActions('register', ['loginUser', 'setUserLoginData']),
    submitForm() {
      if (this.$refs.login.validate()) this.loginUser()
    },
  },
}
</script>
