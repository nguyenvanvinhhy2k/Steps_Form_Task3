<template>
  <div class="">
    <div class="input-date">
      <input type="date" v-model="dateTime" @blur="$v.dateTime.$touch()" />
    </div>
    <div class="">
      <span v-if="$v.dateTime.$error" style="color: red; font-size: 12px"
        >Vui lòng điền thông tin</span
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
      dateTime: "",
    };
  },
  watch: {
    isSubmit() {
      if (this.isSubmit) {
        this.$v.dateTime.$touch();
        if (this.$v.dateTime.$invalid) {
          this.$emit("validateErr", true);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: this.dateTime,
          });
        } else {
          this.$emit("validateErr", false);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: this.dateTime,
          });
        }
      }
    },
  },
  validations: {
    dateTime: { required },
  },
};
</script>

<style scoped>
.input-date > input {
  font-size: 15px;
  height: 38px;
}
</style>
