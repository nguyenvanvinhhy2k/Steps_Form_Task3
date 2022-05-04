<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">最終学歴</h3>
      <div class="st-title_p">
        <p>
          最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。
        </p>
      </div>
      <p style="margin: 0; font-weight: 900">学歴1</p>
    </div>

    <div class="">
      <div
        class="info-input"
        v-for="education in educations"
        :key="education.id"
      >
        <div class="st-title_p" style="margin: 5px">
          <p
            :class="{ 'p-2': !education.isActive, 'p-3': !education.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ education.detail }}</p>
        </div>

        <div class="input-info">
          <ComponentDateTime
            v-if="education.type == 'date'"
            :data="education"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
        <div class="input-info">
          <ComponentDrop
            v-if="education.type == 'drop'"
            style="position: relative"
            :data="education"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
        <div class="input-info">
          <ComponentInput
            v-if="education.type == 'text'"
            :data="education"
            :isSubmit="isSubmit"
            @changeTitle="changeTitle"
            @validateErr="validateErr"
          />
        </div>
      </div>
      <div class="plus">
        <img
          style="
            width: 18px;
            height: 18px;
            margin-right: 10px;
            margin-left: 5px;
          "
          src="../assets/plus.png"
          alt=""
        />
        <p style="color: #007bc3; font-size: 18px">学歴を追加する</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentDateTime from "./ComponentDateTime.vue";
import ComponentDrop from "./ComponentDrop.vue";
import ComponentInput from "./ComponentInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentDrop,
    ComponentDateTime,
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
        if (val.length === this.educations.filter((data) => data.type).length) {
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
      educations: "getEducations",
    }),
  },
  methods: {
    changeTitle(value) {
      this.$store.dispatch("setEducations", value);
      this.$emit("submit", value);
    },
    validateErr(isError) {
      this.isError.push(isError);
    },
  },
};
</script>

<style scoped></style>
