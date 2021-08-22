<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn @click="connectWallet()" v-if="this.account === ''">
        Connect wallet
      </v-btn>
      <v-btn depressed v-else>
        {{ shortAccount(this.account) }}
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

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },

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
      this.account = await smartContract.loadUserAddress();
    },
  },
};
</script>
