<template>
  <div class="">
    <FormInfo @validateError="validateErr" :isSubmit="isSubmit" />

    <FormFinal />

    <FormInsurance />

    <FormAccount />

    <FormCart />

    <FormAddres />

    <FormRegister />

    <FormContact />

    <FormFamily />

    <FormConmution />
    
    <FormWorks />

    <FormBusiness />
    <div class="st-1">
      <div class="st-title">
        <h4 style="margin: 0; font-weight: 100">自家用車通勤について</h4>
      </div>
      <div class="">
        <div class="info-input" v-for="check in 2" :key="check">
          <div class="st-title_p" style="display: block">
            <div class="" style="display: flex; margin: 0">
              <p class="p-1">必須</p>

              <p style="font-weight: 700">自家用車の通勤許可を申請しますか？</p>
            </div>
          </div>
          <div class="check-info">
            <ComponentCheck />
          </div>
        </div>
      </div>
    </div>

    <div class="title-button">
      <p>入力ありがとうございました。</p>
      <p>続けて扶養控除申告の入力をお願いいたします。</p>
    </div>
    <div class="form-2" style="height: 60px">
      <button @click="submit">入社手続きの入力に進む</button>
    </div>
  </div>
</template>

<script>
import FormWorks from "./FormWorks.vue";
import FormFamily from "./FormFamily.vue";
import FormAddres from "./FormAddres.vue";
import FormInfo from "./FormInfo.vue";
import FormFinal from "./FormFinal.vue";
import FormInsurance from "./FormInsurance.vue";
import FormAccount from "./FormAccount.vue";
import FormCart from "./FormCart.vue";
import FormRegister from "./FormRegister.vue";
import FormContact from "./FormContact.vue";
import FormConmution from "./FormConmution.vue";
import ComponentCheck from "./ComponentCheck.vue";
import FormBusiness from "./FormBusiness.vue";

export default {
  components: {
    FormBusiness,
    FormWorks,
    ComponentCheck,
    FormConmution,
    FormFamily,
    FormContact,
    FormRegister,
    FormAddres,
    FormFinal,
    FormInfo,
    FormInsurance,
    FormAccount,
    FormCart,
  },
  data() {
    return {
      error: false,
      isSubmit: false,
    };
  },
  watch: {
    error() {
      if (!this.error) {
        this.$emit("nextStep");
      } else {
        alert("nhap thong tin");
      }
    },
  },
  methods: {
    submit() {
      this.isSubmit = true;
     
    },
    validateErr(isError) {
      console.log(isError)
        this.isSubmit = false;
        this.error = isError;
    },
  },
};
</script>

<style scoped>
.form-2 {
  width: 500px;
  margin: 6px auto;
  background-color: #dcdcdc;
}
button {
  width: 100%;
  border: none;
  height: 60px;
  margin-bottom: 60px;
  cursor: pointer;
  background: #b2b1ff;
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.title-button {
  width: 515px;
  margin: 6px auto;
}
.title-button {
  width: 500px;
  margin: 6px auto;
}
</style>
