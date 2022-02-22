<template>
  <v-container>
    <v-card width="1200" class="mx-auto px-8 py-8">
      <h1>
        سبد خرید
        <span class="count" v-if="basket.length > 0">{{ basket.length }}</span>
      </h1>
      <v-row align="start">
        <v-col md="8" class="mt-5">
          <v-row v-for="product in basket" :key="product" align="start">
            <v-col md="4">
              <v-img width="150" :src="product.image" contain />
            </v-col>
            <v-col md="8">
              <h5>{{ product.ProductName }}</h5>
              <span>موجود در انبار</span>
              <v-row justify="between" align="center" class="mt-4">
                <v-col md="6">
                  <div class="change-count">
                    <v-btn small icon>
                      <v-icon> mdi-plus </v-icon>
                    </v-btn>
                    <span class="mx-2">{{ product.OrderedNumber }}</span>
                    <v-btn small icon>
                      <v-icon> mdi-minus </v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="4">
                  <span> {{ faMoney(product.Price) }} تومان</span></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4" class="text-left mt-5">
          <v-btn @click.stop="$router.push({ path: 'address' })"
            >تایید و انتخاب آدرس
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { faMoney } from '~/utils/general';
export default {
  computed: {
    ...mapGetters('basket', ['basket']),
  },
  created() {
    this.getUserBasket();
  },
  methods: {
    faMoney,
    ...mapActions('basket', ['getUserBasket', 'deleteProductFromUserBasket']),
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #e1e1e1;
}
.count {
  display: inline-block;
  text-align: center;
  background-color: #e3122a;
  color: #fff;
  font-size: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.change-count {
  display: inline-block;
  padding: 8px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
}
</style>
