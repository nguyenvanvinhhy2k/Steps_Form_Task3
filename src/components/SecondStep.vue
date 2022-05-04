<template>
  <div class="">
    <div class="st-1">
      <div class="st-title">
        <h3 style="margin: 10px">ご確認ください</h3>
        <p>
          システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。
        </p>
      </div>
      <div class="st-upload">
        <ComponentUpload />
      </div>
    </div>
    <div class="st-1">
      <div class="st-title">
        <h4 style="margin: 10px">ご確認ください</h4>
        <div class="st-title_p">
          <p class="p-1">必須</p>
          <p>運転免許証両面もしくは住民票を添付してください。</p>
        </div>
      </div>
      <div class="st-upload">
        <ComponentUpload />
      </div>
    </div>
    <!-- Form -->
    <FormInfo @validateError="validateErr" :isSubmit="isSubmit" />

    <FormEducation @validateError="validateErr" :isSubmit="isSubmit"/>

    <FormPension />

    <FormPayroll />

    <FormResidence />

    <FormAddres />

    <FormResident />

    <FormInformation />

    <FormConmution />

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
    <div class="form-3" style="height: 60px">
      
      <button @click="submit">入社手続きの入力に進む</button>
    </div>
  </div>
</template>

<script>
import ComponentCheck from "./ComponentCheck.vue";
import ComponentUpload from "./ComponentUpload.vue";
import FormConmution from "./FormConmution.vue";
import FormInfo from "./FormInfo.vue";
import FormEducation from "./FormEducation.vue";
import FormPension from "./FormPension.vue";
import FormPayroll from "./FormPayroll.vue";
import FormResidence from "./FormResidence.vue";
import FormResident from "./FormResident.vue";
import FormInformation from "./FormInformation.vue";
import FormAddres from "./FormAddres.vue";

export default {
  components: {
    FormAddres,
    FormConmution,
    FormInformation,
    FormResident,
    FormResidence,
    FormPayroll,
    FormPension,
    FormEducation,
    FormInfo,
    ComponentUpload,
    ComponentCheck,
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
.form-3 {
  width: 515px;
  margin: 6px auto;
  background-color: #dcdcdc;
}

.date-info {
  display: flex;
}

.plus {
  display: flex;
  align-items: center;
}

.info-input-1 {
  display: flex;
  max-width: 28%;
  padding-right: 10px;
  align-items: center;
}

.check-input {
  border-radius: 50%;
  margin: 10px;
}

.info-input-1 > p {
  margin-left: 10px;
}

.t1 {
  width: 20%;
}

.checkbox {
  max-width: 50%;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0.875rem;
  border-right: 1px solid #dcdcdc;
}

.st-1 {
  padding: 16px;
  max-width: 480px;
  width: 100%;
  background-color: #f1f2f7;
  margin: 20px auto;
}

.st-title_p {
  display: flex;
}

.info-input {
  margin-top: 15px;
}

.st-upload {
  background: #fff;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0.71rem;
}

.title-button {
  width: 515px;
  margin: 6px auto;
}

.p-1 {
  margin-right: 10px;
  background: red;
  color: white;
  padding: 2px;
  border-radius: 3px;
  font-weight: 700;
}

.p-2 {
  background: #b2b1ff;
}

.p-3 {
  display: none;
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

.st-title {
  margin-bottom: 25px;
}
</style>
