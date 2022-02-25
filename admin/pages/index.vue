<template>
  <v-card>
    <v-container>
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
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  computed: {
    ...mapState('register', ['loginUserData', 'isLoggedIn']),
  },
  methods: {
    ...mapActions('register', ['loginUser']),
  },
}
</script>
