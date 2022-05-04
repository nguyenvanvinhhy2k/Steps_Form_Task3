<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">家族情報を登録</h3>
      <div class="st-title_p" style="display: block">
        <p>一等親以内は同居/別居に関わらず記入</p>
        <p>二親等以上は同居、もしくは扶養義務がある場合に限り記載</p>
      </div>
      <p style="margin: 0; font-weight: 900">緊急連絡先1</p>
    </div>

    <div class="">
      <div
        class="info-input"
        v-for="information in informations"
        :key="information.id"
      >
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !information.isActive, 'p-3': !information.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ information.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ information.desc }}</p>
        <div class="input-info">
          <ComponentDrop
            v-if="information.type == 'drop'"
            style="position: relative"
          />
        </div>

        <div class="input-info">
          <ComponentInput v-if="information.type == 'text'" />
        </div>

        <div class="input-info">
          <ComponentCheck v-if="information.type == 'check'" />
        </div>

        <div class="input-info">
          <ComponentDate v-if="information.type == 'date'" />
        </div>

        <div class="input-info">
          <ComponentDateCode v-if="information.type == 'date1'" />
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
import ComponentCheck from "./ComponentCheck.vue";
import ComponentDrop from "./ComponentDrop.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponentDate from "./ComponentDate.vue";
import ComponentDateCode from "./ComponentDateCode.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentDrop,
    ComponentCheck,
    ComponentDate,
    ComponentDateCode,
  },
  data() {
    return {
   
    };
  },
  computed: {
    ...mapGetters({
      informations: "getInformations",
    }),
  },
};
</script>

<style scoped></style>
