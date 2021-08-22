<template>
  <v-container>
    <v-row class="align-content-center justify-center" style="height: 30vh">
      <h1 class="textCenter">ยอดกองมรดกทั้งหมด<br />{{ tvl }} ETH</h1>
    </v-row>
    <v-row class="justify-center">
      <v-card>
        <v-card-title>
          ธุรกรรมที่สร้างพินัยกรรมทั้งหมด
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="logs"
          :search="search"
          :items-per-page="5"
          :loading="loadData"
          loading-text="Loading... Please wait"
        ></v-data-table>
      </v-card>
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
    await this.getContractLogs();
  },

  data: () => ({
    tvl: 0,
    loadData: true,
    search: "",
    headers: [
      { text: "วันสร้างพินัยกรรม", value: "startDate" },
      {
        text: "บัญชีผู้สร้างพินัยกรรม",
        align: "start",
        sortable: false,
        value: "owner",
      },
      { text: "บัญชีผู้รับมรดก", value: "legatee" },
      { text: "ยอดมรดก (ETH)", value: "estate" },
      { text: "วันเปิดพินัยกรรม", value: "completeDate" },
    ],
    logs: [],
  }),

  methods: {
    async getContractBalance() {
      this.tvl = await smartContract.getContractBalance();
    },
    async getContractLogs() {
      this.logs = await smartContract.getContractLogs();
      this.loadData = false;
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
