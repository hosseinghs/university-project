<template>
  <v-container class="mt-15">
    <v-card class="px-8 py-8">
      <div v-if="userAddress.length > 0">
        <v-radio-group>
          <v-radio
            v-for="{ Address, ID } in userAddress"
            :key="ID"
            :label="Address"
            @change="setUserAddressId(ID)"
          ></v-radio>
        </v-radio-group>
        <v-btn @click.stop="submit()">تایید و ثبت ارسال سفارش</v-btn>
        <a
          class="pay"
          v-if="isSuccess"
          :href="bankUrl"
          target="_blank"
          color="success"
          >پرداخت</a
        >
      </div>
      <div v-else>
        <h2>برای ثبت سفارش آدرس خود را ثبت کنید.</h2>
        <v-row align="center">
          <v-col cols="6">
            <UserAddressAdd />
          </v-col>
          <v-col cols="6">
            <v-img
              width="300"
              class="mx-auto"
              contain
              :src="require('~/assets/img/address.svg')"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      isSuccess: false,
    };
  },
  computed: {
    ...mapGetters('address', ['userAddress']),
    ...mapState('address', ['paymentUrl']),
    ...mapGetters('payment', ['bankUrl']),
  },
  methods: {
    ...mapActions('payment', ['setUserAddressId', 'submitUserOrder']),
    ...mapActions('address', ['getUserAddresses']),
    async submit() {
      this.isSuccess = await this.submitUserOrder();
    },
  },
  created() {
    this.getUserAddresses();
  },
};
</script>

<style>
a.pay {
  padding: 8px 24px;
}
</style>
