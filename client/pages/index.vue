<template>
  <div class="mt-10">
    <div class="off-products mb-15">
      <HomePageSection :productsArr="offProducts">
        <v-img contain width="200" :src="require('./../assets/offer.svg')" />
      </HomePageSection>
    </div>
    <div class="high-sales mb-15">
      <HomePageSection :productsArr="highSalesProducts">
        highSales
      </HomePageSection>
    </div>
    <div class="special-sales mb-15">
      <HomePageSection :productsArr="specialSalesProducts">
        special sales
      </HomePageSection>
    </div>
    <div class="speacial">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('products', [
      'sideBarProducts',
      'offProducts',
      'highSalesProducts',
      'specialSalesProducts',
    ]),
  },
  methods: {
    ...mapActions('products', [
      'getSpecialProducts',
      'getOffProducts',
      'getNewProducts',
      'getHighSalesProducts',
    ]),
    async getProducts() {
      const promises = [
        this.getSpecialProducts(),
        this.getHighSalesProducts(),
        this.getOffProducts(),
        this.getNewProducts(),
      ];
      await Promise.all(promises);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.off-products {
  background-color: #b47ede;
}
.high-sales {
  background-color: #ff1694;
}

.special-sales {
  background-color: #311432;
}
</style>
