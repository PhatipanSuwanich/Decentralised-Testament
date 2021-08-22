<template>
  <v-container>
    <v-row class="mt-16"> </v-row>
    <v-card class="px-16 pb-10 mx-auto rounded-xl" max-width="550px">
      <h1 class="pb-3 pt-10">กรอกข้อมูลเพื่อสร้างหนังสือพินัยกรรม</h1>
      <form v-on:submit.prevent="openTestament">
        <v-text-field
          v-model.trim="receiverAccount"
          placeholder="0x..."
          label="บัญชีผู้รับมรดก"
          required
        ></v-text-field>
        <v-text-field
          v-model="timeMinutes"
          placeholder="5"
          suffix="นาที"
          label="ระยะเวลา"
          required
        ></v-text-field>
        <v-text-field
          v-model="estate"
          placeholder="0"
          suffix="ETH"
          label="ยอดเงินมรดก"
          required
        ></v-text-field>

        <template>
          <v-btn block class="mb-3 mt-5" color="pink" type="submit">
            สร้างพินัยกรรม
          </v-btn>
        </template>
      </form>
    </v-card>
    <v-dialog persistent v-model="dialog" max-width="70vh">
      <v-card>
        <v-card-title>
          <span class="text-h5">หนังสือพินัยกรรม </span>
        </v-card-title>
        <v-card-text>
          เจตจำนงและพินัยกรรมฉลับสุดท้ายของบัญชี {{ ownAccount }} ณ วันที่
          {{ now }}
          ข้าพเจ้าขอแต่งตั้งให้ 0xaF9feB20E57c140471c92f1b84814810EBAa3A0A (
          Smart Contract ) นี้เป็นผู้จัดการมรดก
          เพื่อดำเนินการต่างๆให้เป็นไปตามเจตจำนงของข้าพเจ้า
          ขอยกทรัพย์สินของข้าพเจ้าจำนวน {{ estate }} ETH ให้แก่
          0xaF9feB20E57c140471c92f1b84814810EBAa3A0A ในฐานะผู้รับพินัยกรรม
          แล้วจะสามารถรับมรดกได้ในวันที่ {{ completeDate }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="submitTestament">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import SmartContract from "@/util";
import moment from "moment";
moment.locale("TH");

const smartContract = new SmartContract();

export default {
  name: "Create",

  async created() {
    await smartContract.init();
    await this.getAccount();
  },

  data: () => ({
    ownAccount: "0x...",
    receiverAccount: "",
    estate: null,
    timeMinutes: null,
    dialog: false,
    now: moment().format("Do MMMM YYYY เวลา h:mm:ss"),
    completeDate: moment().format("Do MMMM YYYY เวลา h:mm:ss"),
  }),

  methods: {
    async getAccount() {
      this.ownAccount = await smartContract.loadUserAddress();
    },
    openTestament() {
      this.now = moment().format("Do MMMM YYYY เวลา h:mm:ss");
      this.completeDate = moment()
        .add(this.timeMinutes, "minutes")
        .format("Do MMMM YYYY เวลา h:mm:ss");
      this.dialog = true;
    },
    async submitTestament() {
      this.dialog = false;
      await smartContract.setMyLastWill(
        this.ownAccount,
        this.estate,
        this.timeMinutes,
        this.receiverAccount
      );
    },
  },
};
</script>

<style scoped></style>
