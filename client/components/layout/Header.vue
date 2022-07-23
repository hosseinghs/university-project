<template>
  <v-app-bar
    style="background-color: #fff !important; height: 90px"
    elevation="1"
    app
  >
    <hr class="__red__divider" />
    <v-row align="center">
      <v-col cols="2">
        <nuxt-link to="/">
          <v-img contain width="223" :src="require('~/assets/logo.jpg')" />
        </nuxt-link>
      </v-col>
      <v-col cols="8">
        <v-btn-toggle @change="getCategoryArticles($event)">
          <v-btn v-for="{ name, id } in categories" :key="id" :value="id">
            <span class="hidden-sm-and-down">{{ name }}</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col>
        <span>
          {{ userName }}
        </span>
        <v-btn @click.stop="logout()" color="#9e2558" outlined>خروج</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('client/articles', ['categories']),
    userName() {
      const user = JSON.parse(window.localStorage.getItem('user'));
      return user.fullName;
    },
  },

  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions('client/articles', ['getCategories']),

    getCategoryArticles(id) {
      if (!id) return;
      const category = this.categories.find((category) => category.id === id);
      if (!category) return;
      this.$router.push({
        name: 'articles-category-slug',
        params: { slug: category.name, id: category.id },
      });
    },

    logout() {
      window.localStorage.removeItem('authorization');
      window.localStorage.removeItem('user');
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style scoped>
.__red__divider {
  position: absolute;
  width: 100%;
  height: 4px;
  padding: 0;
  background-color: #9e2558;
  top: 0;
  left: 0;
  z-index: 10 !important;
}
</style>
