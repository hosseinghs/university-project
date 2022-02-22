<template>
  <v-container class="mt-5">
    <v-col cols="12" class="d-sm-none">
      <v-btn @click="setModalState(true)">
        جستجو پیشرفته
        <v-icon> mdi-filter-variant-plus </v-icon>
      </v-btn>
    </v-col>
    <v-row>
      <v-col sm="4" lg="3" class="px-6">
        <div class="d-none d-sm-block">
          <Filters />
        </div>
        <LayoutModal title="فیلتر های خود را اعمال کنید" fullScreen>
          <v-container>
            <Filters />
          </v-container>
        </LayoutModal>
      </v-col>
      <v-col sm="8" lg="9">
        <v-container>
          <v-row v-if="searchedProducts.length > 0">
            <v-col
              v-for="(product, i) in searchedProducts"
              :key="i"
              xs="12"
              md="6"
              lg="4"
            >
              <ProductCard :product="product" />
            </v-col>
          </v-row>
          <v-col class="text-center" v-else>
            <v-img
              contain
              width="300"
              class="mx-auto mb-5"
              :src="require('~/assets/img/sad.svg')"
            />
            <span
              >هیچ کالایی موجود
              <span class="text-h5" style="color: rgb(251, 52, 73)">نیست</span>
              !</span
            >
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('search', ['searchedProducts']),
  },
  methods: {
    ...mapActions(['setModalState']),
  },
};
</script>