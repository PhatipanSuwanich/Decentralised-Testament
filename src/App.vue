<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        hidden
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      Test on rinkeby network
      <v-spacer></v-spacer>
      <v-btn @click="connectWallet()" v-if="account === undefined">
        Connect wallet
      </v-btn>
      <v-btn @click="connectWallet()" depressed v-else>
        {{ shortAccount() }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer class=".d-flex .d-sm-none" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> พินัยกรรม </v-list-item-title>
          <v-list-item-subtitle> แบบไร้ตัวกลาง </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.href"
        >
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
      { title: "ภาพรวม", href: "/" },
      { title: "สร้างพินัยกรรม", href: "/create" },
      { title: "ถอนเงินมรดก", href: "/CancelContract" },
      { title: "รับมรดก", href: "/inherit" },
    ],
    drawer: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  async created() {
    await this.connectWallet();
  },

  mounted() {},

  methods: {
    shortAccount() {
      return (
        this.account.substring(0, 4) +
        "..." +
        this.account.substring(this.account.length - 4, this.account.length)
      );
    },
    async connectWallet() {
      this.account = await smartContract.loadUserAddress();
    },
  },
};
</script>
