<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <h1>Decentralized Testament</h1>
      <v-spacer></v-spacer>
      <v-btn depressed justify="space-around"> {{ account }} </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute permanent dark>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main dark>
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
    account: "Connect wallet",
    drawer: false,
    items: [
      { title: "ภาพรวม" },
      { title: "สร้างพินัยกรรม" },
      { title: "ถอนเงินมรดก" },
      { title: "รับมรดก" },
    ],
    right: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  async created() {
    this.account = await smartContract.loadUserAddress();
  },

  mounted() {},
};
</script>
