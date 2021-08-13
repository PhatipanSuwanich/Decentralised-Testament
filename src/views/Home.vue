<template>
  <v-container fluid>
    <v-row style="height: 50vh">
      <v-col class="textCenter" justify="center">
        <h1>ยอดกองมรดกทั้งหมด<br />{{ tvl }} ETH</h1></v-col
      >
    </v-row>
    <v-row>
      <h1>ยอดกองมรดกทั้งหมด</h1>
    </v-row>
  </v-container>
</template>

<script>
import SmartContract from "@/util";
const smartContract = new SmartContract();

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },

  async created() {
    await smartContract.init();
    await this.getContractBalance();
  },

  data: () => ({
    tvl: 0,
  }),

  methods: {
    async getContractBalance() {
      this.tvl = await smartContract.getContractBalance();
      console.log("getContractBalance: ", this.tvl);
    },
  },
};
</script>

<style scoped>
.textCenter {
  text-align: center;
  align-self: center;
}
</style>
