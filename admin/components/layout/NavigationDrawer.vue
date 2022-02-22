<template>
  <div id="nd">
    <v-navigation-drawer v-model="showMenu" app right temporary>
      <v-row class="text-center py-6">
        <v-col v-if="!isLoggedIn" cols="12">
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
        </v-col>
        <v-col v-else cols="12">
          <LayoutProfileMenu />
        </v-col>
      </v-row>

      <v-expansion-panels active-class hover flat accordion>
        <v-expansion-panel v-for="sideBar in items" :key="sideBar.CategoryID">
          <v-expansion-panel-header>{{
            sideBar.CategoryName
          }}</v-expansion-panel-header>
          <v-expansion-panel-content
            class="ndc"
            hover
            nuxt
            v-for="subcategory in JSON.parse(sideBar.SubCategories)"
            :key="subcategory.SubCategoryID"
          >
            <div @click.self="goToSearchPage(subcategory.SubCategoryID)">
              {{ subcategory.SubCategoryName }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['showResponsiveMenu']),
    ...mapGetters('register', ['isLoggedIn']),
    showMenu: {
      get() {
        return this.showResponsiveMenu;
      },
      set(val) {
        this.setResponsiveMenuState(val);
      },
    },
  },
  methods: {
    ...mapActions(['setResponsiveMenuState']),
    ...mapActions('search', ['getSubCategoryProducts']),
    goToSearchPage(id) {
      this.getSubCategoryProducts(id);
      this.$router.push({ path: '/search' });
    },
  },
};
</script>

<style>
#nd .ndc {
  width: 100%;
  cursor: pointer;
  transition: 0.2 ease-in-out;
  padding-top: 16px;
}
#nd .ndc:hover {
  background-color: #f6f6f6;
}
</style>
