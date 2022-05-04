<template>
  <div class="date-info">
    <div class="info-input-1" style="position: relative; margin-right: 15px">
      <input
        v-model="year"
        @change="$v.year.$touch()"
        @blur="$v.year.$touch()"
        class="st-upload t1"
        type="input"
        placeholder="西暦"
      />
      <p>年</p>
      <div class="" style="top: 97%;left: 4%;position: absolute;}">
        <span v-if="$v.year.$error" style="color: red; font-size: 12px"
          >1900 - 2020</span
        >
      </div>
    </div>
    <div class="info-input-1">
      <input
        class="st-upload t1"
        type="input"
        placeholder="半角"
        v-model="mon"
        @change="$v.mon.$touch()"
        @blur="$v.mon.$touch()"
      />
      <p>月</p>
      <div
        class=""
        style="top: 65%; width: 64px; left: -62%; position: relative"
      >
        <span v-if="$v.mon.$error" style="color: red; font-size: 12px"
          >1 - 30</span
        >
      </div>
    </div>
    <div class="info-input-1">
      <input
        class="st-upload t1"
        type="input"
        placeholder="半角"
        v-model="day"
        @change="$v.day.$touch()"
        @blur="$v.day.$touch()"
      />
      <p>日</p>
      <div
        class=""
        style="top: 65%; width: 45px; left: -62%; position: relative"
      >
        <span v-if="$v.day.$error" style="color: red; font-size: 12px"
          >2 - 7</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { required, between } from "vuelidate/lib/validators";
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
      year: "",
      mon: "",
      day: "",
    };
  },
  watch: {
    isSubmit() {
      let userBth = `${this.day} ${this.mon} ${this.year}`;
      if (this.isSubmit) {
        this.$v.year.$touch();
        this.$v.mon.$touch();
        this.$v.day.$touch();
        if (this.$v.year.$invalid && this.$v.mon.$invalid && this.$v.day.$invalid) {
          this.$emit("validateErr", true);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: userBth,
          });
        } else {
          this.$emit("validateErr", false);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: userBth,
          });
        }
      }
    },
  },
  validations: {
    year: {
      required,
      between: between(1900, 2020),
    },
    mon: {
      required,
      between: between(1, 30),
    },
    day: {
      required,
      between: between(2, 7),
    },
  },
  // handleTitle() {
  //     let value = this.titleChange;
  //     if (value != "" && this.titleChange.$error) {
  //         let newData = {
  //             ...this.data
  //         };
  //         newData.title = value;
  //         this.$emit("changeTitle", newData);
  //     }
  // }
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

.check-info {
  display: flex;
}

.info-input-1 {
  display: flex;
  max-width: 28%;
  padding-right: 10px;
  margin-bottom: 10px;
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
