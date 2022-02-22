<template>
  <v-container class="mt-15">
    <v-card class="mx-14">
      <v-row class="px-10 py-8">
        <v-col cols="12" md="3" style="position: relative">
          <div class="position:relative">
            <v-img
              class="rounded-xl"
              cover
              height="400"
              :src="selectedProduct.image"
            ></v-img>
            <div v-if="selectedProduct.OffPercent > 0" class="my-badge">
              {{ selectedProduct.OffPercent }}%
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <h3>{{ selectedProduct.ProductName }}</h3>
          <v-divider class="mt-1" />
          <div class="my-5">
            <div
              :class="
                selectedProduct.OffPercent > 0 || selectedProduct.OffPercent
                  ? 'disable-price'
                  : ''
              "
            >
              قیمت کالا : {{ faMoney(selectedProduct.Price) }} تومان
            </div>
            <div v-if="selectedProduct.OffPercent > 0" class="my-3">
              قیمت نهایی:{{ faMoney(selectedProduct.OffPrice) }} تومان
            </div>
            <p>تعداد موجود : {{ selectedProduct.Number }} عدد</p>
            <v-col class="px-0" cols="12" sm="6" md="4">
              <FormAutoComplete
                label="رنگ های موجود"
                item-value="ColorID"
                item-text="ColorName"
                :items="colors"
                :disabled="!colors.length"
                @change="setNewProduct({ k: 'ColorID', v: $event })"
              />
              <FormAutoComplete
                label="سایز های موجود"
                item-value="SizeID"
                item-text="SizeName"
                :items="sizes"
                :disabled="!sizes.length"
                @change="setNewProduct({ k: 'SizeID', v: $event })"
              />
              <FormAutoComplete
                label="جنس"
                item-value="MaterialID"
                item-text="MaterialName"
                :disabled="!materials.length"
                :items="materials"
                @change="setNewProduct({ k: 'MaterialID', v: $event })"
              />
            </v-col>
            <Tooltip text="افزودن به علاقه مندی ها">
              <v-btn
                icon
                @click.stop="addProductToFavoritList(selectedProduct.ID)"
              >
                <v-icon> mdi-heart </v-icon>
              </v-btn>
            </Tooltip>
          </div>
        </v-col>
        <v-col class="text-end" md="4" cols="12">
          <v-btn @click.stop="$router.back()">
            بازگشت
            <v-icon class="mr-2"> mdi-arrow-left </v-icon>
          </v-btn>
          <div class="text-center mt-10">
            <div>
              <v-img
                contain
                class="mx-auto"
                width="200"
                :src="require('~/assets/img/cart.svg')"
              />
            </div>
            <v-btn
              large
              rounded
              color="indigo darken-2 white--text mt-16"
              @click.stop="
                setNewProduct({ k: 'ProductID', v: selectedProduct.ID });
                setNewProduct({ k: 'OrderedNumber', v: 1 });
                addProductToBasket(selectedProduct);
              "
              >افزودن به سبد خرید</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { faMoney } from './../../utils/general';
import Cookies from 'js-cookie';
export default {
  computed: {
    selectedProduct() {
      return JSON.parse(Cookies.get('product'));
    },
    colors() {
      const obj = JSON.parse(Cookies.get('product'));
      return JSON.parse(obj.Colors);
    },
    sizes() {
      const obj = JSON.parse(Cookies.get('product'));
      return JSON.parse(obj.Sizes);
    },
    materials() {
      const obj = JSON.parse(Cookies.get('product'));
      return JSON.parse(obj.Materials);
    },
  },
  methods: {
    faMoney,
    ...mapActions('profile', ['addProductToFavoritList']),
    ...mapActions('basket', [
      'addProductToBasket',
      'setNewProduct',
      'clearProductState',
    ]),
  },
  beforeDestroy() {
    this.clearProductState();
  },
};
</script>

<style scoped>
.my-badge {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  transform: rotate(-40deg);
  padding: 0.25rem 0.5rem;
  top: 10px;
}
.disable-price {
  text-decoration: line-through;
  color: #979797;
}
</style>
