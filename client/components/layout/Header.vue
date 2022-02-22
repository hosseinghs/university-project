<template>
  <v-app-bar app elevation="2" class="w-100">
    <v-container>
      <v-row align-content="center" class="align-items-center">
        <v-col cols="7" align-self="center">
          <v-row>
            <v-btn
              class="d-md-none"
              icon
              fab
              @click="setResponsiveMenuState(!showResponsiveMenu)"
            >
              <v-icon> {{ $vuetify.icons.values.menuBar }} </v-icon>
            </v-btn>
            <NuxtLink to="/">
              <div>
                <v-img width="50" :src="require('~/assets/logo.jpg')"></v-img>
              </div>
            </NuxtLink>
            <v-col cols="7" class="d-none d-md-block">
              <LayoutMenu />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5" class="ml-0">
          <v-row>
            <v-col
              cols="12"
              md="4"
              align-self="center"
              justify="center"
              class="d-flex justify-end"
            >
              <v-icon v-show="!search" @click.stop="search = true">
                {{ $vuetify.icons.values.search }}
              </v-icon>
              <v-text-field
                v-show="search"
                hide-details
                label="جستجو"
                class="ml-2"
                append-icon="mdi-window-close"
                @click:append="search = false"
                @change="searchProduct($event)"
              />
              <Basket v-if="isLoggedIn && basket.length > 0" />
              <v-icon v-else>
                {{ $vuetify.icons.values.basket }}
              </v-icon>
            </v-col>
            <v-col class="d-none d-md-block" cols="6" md="8">
              <div v-if="!isLoggedIn">
                <v-btn
                  :disabled="$route.name === 'register-sign-in' ? true : false"
                  @click="$router.push({ path: '/register/sign-in' })"
                  >ورود</v-btn
                >
                <v-btn
                  :disabled="$route.name === 'register-sign-up' ? true : false"
                  @click="$router.push({ path: '/register/sign-up' })"
                  >ثبت نام</v-btn
                >
              </div>
              <div v-else style="width: 200px">
                <LayoutProfileMenu />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      search: false,
    };
  },
  computed: {
    ...mapGetters(['showResponsiveMenu']),
    ...mapGetters('register', ['isLoggedIn']),
    ...mapGetters('products', ['sideBarProducts']),
    ...mapGetters('basket', ['basket']),
  },
  created() {
    this.getSidebarProducts();
  },
  methods: {
    ...mapActions(['setResponsiveMenuState', 'setOverlayState']),
    ...mapActions('products', ['getSidebarProducts', 'getUserBasket']),
    ...mapActions('search', ['updateFilters']),
    searchProduct(searchedWord) {
      this.updateFilters({ k: 'SearchWord', v: searchedWord });
      setTimeout(() => {
        this.$router.push({ path: '/search' });
      }, 1000);
    },
  },
  watch: {
    isLoggedIn(v) {
      if (v) this.getUserBasket();
    },
  },
};
</script>
