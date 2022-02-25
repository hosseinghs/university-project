<template>
  <v-card>
    <v-container>
      <v-form ref="login" @submit.prevent="submitForm()">
        <v-row>
          <v-col>
            <FormText
              label="نام کاربری"
              @change="setUserLoginData({ k: 'userName', v: $event })"
            />
          </v-col>
          <v-col>
            <FormText
              label="رمزعبور"
              @change="setUserLoginData({ k: 'password', v: $event })"
            />
          </v-col>
        </v-row>
        <button type="submit">ok</button>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  computed: {
    ...mapState('register', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('register', ['loginUser', 'setUserLoginData']),
    submitForm() {
      if (this.$refs.login.validate()) this.loginUser()
    },
  },
}
</script>
