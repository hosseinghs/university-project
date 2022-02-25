<template>
  <div class="mt-10"></div>
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
