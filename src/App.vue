<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-btn @click="connectWallet()" v-if="this.account === ''">
        Connect wallet
      </v-btn>
      <v-btn depressed v-else>
        {{ shortAccount(this.account) }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> พินัยกรรม </v-list-item-title>
          <v-list-item-subtitle> แบบไร้ตัวกลาง </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SmartContract from "@/util";

const smartContract = new SmartContract();

export default {
  name: "App",

  data: () => ({
    account: "",
    items: [
      { title: "ภาพรวม" },
      { title: "สร้างพินัยกรรม" },
      { title: "ถอนเงินมรดก" },
      { title: "รับมรดก" },
    ],
    right: null,
  }),

  async created() {
    await this.connectWallet();
  },

  mounted() {},

  methods: {
    shortAccount(id) {
      return (
        id.substring(0, 4) + "..." + id.substring(id.length - 4, id.length)
      );
    },
    async connectWallet() {
      await smartContract.connectWallet();
      this.account = await smartContract.loadUserAddress();
    },
  },
};
</script>
