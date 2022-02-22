<template>
  <div>
    <v-menu
      v-for="sidebar in sideBarProducts"
      :key="sidebar.CategoryID"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <span class="px-5" dark v-bind="attrs" v-on="on">
          {{ sidebar.CategoryName }}
        </span>
      </template>
      <v-list width="200">
        <v-list-item
          v-for="subCategory in JSON.parse(sidebar.SubCategories)"
          :key="subCategory.SubCategoryID"
          @click="goToSearchPage(subCategory.SubCategoryID)"
        >
          <v-list-item-title>{{
            subCategory.SubCategoryName
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', ['sideBarProducts']),
  },

  methods: {
    ...mapActions('search', ['getSubCategoryProducts']),
    goToSearchPage(id) {
      this.getSubCategoryProducts(id);
      this.$router.push({ path: '/search' });
    },
  },
};
</script>

<style></style>
