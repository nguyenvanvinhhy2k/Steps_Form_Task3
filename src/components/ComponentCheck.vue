<template>
  <div class="date-info" style="position: relative">
    <div class="checkbox">
      <input
        class="check-input"
        type="radio"
        id="no"
        v-model="check"
        name="fav_language"
        value="no"
        @blur="$v.check.$touch()"
      />
      <label for="no">男性</label><br />
    </div>
    <div class="checkbox">
      <input
        class="check-input"
        type="radio"
        id="yes"
        v-model="check"
        name="fav_language"
        value="yes"
        @blur="$v.check.$touch()"
      />
      <label for="yes">女性</label><br />
    </div>
    <div class="" style="bottom: -29%; position: absolute; left: 36% ;">
      <span v-if="$v.check.$error" style="color: red; font-size: 12px"
        >Vui lòng chọn thông tin</span
      >
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  props: {
    data: Object,
    isSubmit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      check: null,
    };
  },

  watch: {
    isSubmit() {
      if (this.isSubmit) {
        this.$v.check.$touch();
        if (this.$v.check.$invalid) {
          this.$emit("validateErr", true);
          this.$emit("changeRadioChoose", {
            id: this.data.id,
            title: this.check,
          });
        } else {
          this.$emit("validateErr", false);
          this.$emit("changeRadioChoose", {
            id: this.data.id,
            title: this.check,
          });
        }
      }
    },
  },
  validations: {
    check: { required },
  },
};
</script>

<style scoped>
.date-info {
  display: flex;
}
.form-3 {
  width: 515px;
  margin: 6px auto;
  background-color: #dcdcdc;
}
.date-info {
  display: flex;
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
  margin-top: 30px;
}
.st-upload {
  background: #fff;
  border: 1px solid #dcdcdc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0.71rem;
}
.p-1 {
  margin-right: 10px;
  background: red;
  color: white;
  padding: 2px;
  border-radius: 3px;
  font-weight: 700;
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
