<template>
  <v-card width="900" class="mt-10 mx-auto">
    <v-toolbar dark flat>
      <v-tabs v-model="tab" slider-color="yellow">
        <v-tab v-for="({ title, icon }, i) in userProfileData" :key="i">
          <v-icon> {{ icon }}</v-icon>
          {{ title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="({}, i) in userProfileData"
        :key="i"
        class="px-12 py-9"
      >
        <UserProfile v-if="tab === 0" />
        <UserFav v-if="tab === 1" />
        <UserAddress v-if="tab === 2" />
        <UserOrders v-if="tab === 3" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      tab: null,
      userProfileData: [
        {
          id: 1,
          title: 'مشخصات من',
          icon: 'mdi-account',
        },
        {
          id: 2,
          title: 'مورد علاقه های من',
          icon: 'mdi-heart',
        },
        {
          id: 3,
          title: 'آدرس ها من',
          icon: 'mdi-map-marker',
        },
        {
          id: 4,
          title: 'خرید های من',
          icon: 'mdi-shopping',
        },
      ],
    };
  },
  watch: {
    tab(newIndex, oldIndex) {
      if (newIndex !== oldIndex) {
        if (newIndex === 0) this.setUserProfileData();
        else if (newIndex === 1) this.getUserFavoritList();
        else if (newIndex === 2) this.getUserAddresses();
        else if (newIndex === 3) this.getUserOrders();
      }
    },
  },
  methods: {
    ...mapActions('profile', ['getUserFavoritList']),
    ...mapActions('register', ['setUserProfileData']),
    ...mapActions('payment', ['getUserOrders']),
    ...mapActions('address', ['getUserAddresses']),
  },
};
</script>
