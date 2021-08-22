<template>
  <v-container>
    <v-row class="mt-16"> </v-row>
    <v-card class="px-16 pb-10 mx-auto rounded-xl" max-width="550px">
      <h1 class="pb-3 pt-10">กรอกข้อมูลเพื่อขอรับมรดก</h1>
      <form v-on:submit.prevent="create">
        <v-text-field
          v-model.trim="receiverAccount"
          placeholder="0x..."
          label="บัญชีผู้สร้างพินัยกรรม"
          required
        ></v-text-field>

        <v-btn block class="mb-3 mt-5" color="teal" type="submit">
          ขอรับเงินมรดกทั้งหมด
        </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import SmartContract from "@/util";

const smartContract = new SmartContract();

export default {
  name: "LegateeWithdraws",

  async created() {
    await smartContract.init();
    await this.getAccount();
  },

  data: () => ({
    ownAccount: "0x...",
    receiverAccount: "",
  }),

  methods: {
    async getAccount() {
      this.ownAccount = await smartContract.loadUserAddress();
    },
    async create() {
      await smartContract.legateeWithdrawsAll(
        this.ownAccount,
        this.receiverAccount
      );
    },
  },
};
</script>

<style scoped></style>
