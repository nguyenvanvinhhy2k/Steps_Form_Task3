<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 10px">基本情報登録</h3>
      <div class="st-title_p">
        <p>
          外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。
        </p>
      </div>
    </div>
    <div class="">
      <div class="info-input" v-for="info in infos" :key="info.id">
        <div class="st-title_p">
          <p :class="{ 'p-2': !info.isActive, 'p-3': !info.none }" class="p-1">
            必須
          </p>
          <p>{{ info.detail }}</p>
        </div>
        <p style="margin: 5px">{{ info.desc }}</p>
        <!-- INPUT -->
        <div class="input-info">
          <ComponentInput
            v-if="info.type == 'text'"
            :data="info"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
        <!-- INPUT -->

        <!-- INPUT-CHECKBOX -->
        <div class="check-info">
          <ComponentCheck
            v-if="info.type == 'check'"
            @changeRadioChoose="changeRadioChoose"
            :data="info"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
        <!-- INPUT-CHECKBOX -->

        <!-- INPUT DATE -->
        <div class="date-info">
          <ComponentDate
            v-if="info.type == 'date'"
            :data="info"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
        <!-- INPUT DATE -->
      </div>
    </div>
  </div>
</template>

<script>
import ComponentDate from "./ComponentDate.vue";
import ComponentCheck from "./ComponentCheck.vue";
import ComponentInput from "./ComponentInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentCheck,
    ComponentDate,
  },
  data() {
    return {
      isError: [],
    };
  },
  props: {
    isSubmit: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isSubmit: {
      handler(val) {
        if (val) {
          this.isError = [];
        }
      },
    },
    isError: {
      handler(val) {
        if (val.length === this.infos.filter((data) => data.type).length) {
          console.log(val);
          console.log(val.some((data) => data));
          val.some((data) => data === true)
            ? this.$emit("validateError", true)
            : this.$emit("validateError", false);
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      infos: "getInfos",
    }),
  },
  methods: {
    changeTitle(value) {
      this.$store.dispatch("setInfos", value);
      this.$emit("submit", value);
    },
    changeRadioChoose(value) {
      this.$store.dispatch("setInfos", value);
      this.$emit("submit", value);
    },
    validateErr(isError) {
      this.isError.push(isError);
    },
  },
};
</script>

<style scoped></style>
