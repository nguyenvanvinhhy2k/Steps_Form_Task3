<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">緊急連絡先を登録</h3>
      <div class="st-title_p" style="display: block">
        <p>一等親以内は同居/別居に関わらず記入</p>
        <p>二親等以上は同居、もしくは扶養義務がある場合に限り記載</p>
      </div>
      <p style="margin: 0; font-weight: 900">緊急連絡先1</p>
    </div>
    <div class="">
      <div class="info-input" v-for="family in familys" :key="family.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !family.isActive, 'p-3': !family.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ family.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ family.desc }}</p>
        <div class="input-info">
          <ComponentDrop
            v-if="family.type == 'drop'"
            style="position: relative"
          />
        </div>

        <div class="input-info">
          <ComponentInput v-if="family.type == 'text'" />
        </div>

        <div class="input-info">
          <ComponentCheck v-if="family.type == 'check'" />
        </div>
        <div class="input-info">
          <ComponentDate v-if="family.type == 'date'" />
        </div>
        <div class="input-info">
          <ComponentDateCode v-if="family.type == 'date1'" />
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
import ComponentDateCode from "./ComponentDateCode.vue";
import ComponentDrop from "./ComponentDrop.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponentCheck from "./ComponentCheck.vue";
import ComponentDate from "./ComponentDate.vue";
import {mapGetters} from "vuex"

export default {
  components: {
    ComponentDate,
    ComponentCheck,
    ComponentInput,
    ComponentDrop,
    ComponentDateCode,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters({
     familys:"getFamilys"
    })
  }
};
</script>

<style scoped></style>
