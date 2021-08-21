<template>
  <v-container>
    <v-row class="center">
      <v-card class="d-flex ma-6">
        <v-card class="pl-10 pr-10 pb-10 pt-5 flex-column">
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="บัญชีผู้รับมรดก"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="ระยะเวลาหน่วยนาที"
              type="number"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="ยอดเงินมรดก"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>

            <v-btn class="mr-4" color="pink" @click="submit"> ยืนยัน </v-btn>
          </form>
        </v-card>
        <v-card class="pt-4 pl-6 pr-6 pb-10 flex-column" max-width="344px">
          เจตจำนงและพินัยกรรมฉลับสุดท้ายของบัญชี {{ account }} <br />ณ วันที่ 1
          มกราค 9999 ข้าพเจ้าขอแต่งตั้งให้
          0xaF9feB20E57c140471c92f1b84814810EBAa3A0A ( Smart Contract )
          นี้เป็นผู้จัดการมรดก <br />
          เพื่อดำเนินการต่างๆให้เป็นไปตามเจตจำนงของข้าพเจ้า
          ขอยกทรัพย์สินของข้าพเจ้าจำนวน 100 ETH ให้แก่
          0xaF9feB20E57c140471c92f1b84814810EBAa3A0A ในฐานะผู้รับพินัยกรรม
          <br />
          แล้วจะสามารถรับกองมรดกได้ในวันที่ 2 มกราคม 9999
        </v-card>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import SmartContract from "@/util";
const smartContract = new SmartContract();

export default {
  name: "Create",

  async created() {
    await smartContract.init();
    await this.getAccount();
  },

  data: () => ({
    account: "0x...",
  }),

  methods: {
    async getAccount() {
      this.account = await smartContract.loadUserAddress();
    },
  },
};
</script>

<style scoped>
.textCenter {
  text-align: center;
  align-self: center;
}
.center {
  justify-content: center;
}
</style>
