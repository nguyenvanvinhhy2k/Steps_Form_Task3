<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">通勤ルート</h3>
      <div class="st-title_p" style="display: block">
        <p>一経路が２つ以上ある場合は、運賃の安い方を選択してください。</p>
        <p>片道料金はICカード料金ではなく現金（切符）料金となります。</p>
      </div>
      <p style="margin: 0; font-weight: 900">緊急連絡先1</p>
    </div>

    <div class="">
      <div class="info-input" v-for="work in works" :key="work.id">
        <div class="st-title_p">
          <p
            style="font-weight: 900"
            :class="{ 'p-2': !work.isActive, 'p-3': !work.none }"
            class="p-1"
          >
            必須
          </p>
          <p style="font-weight: 900">{{ work.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ work.desc }}</p>
        <div class="input-info">
          <ComponentInput v-if="work.type == 'text'" />
        </div>

        <div class="input-info">
          <ComponentInputMax v-if="work.type == 'textmax'" />
        </div>

        <div class="input-info">
          <ComponentInputMin v-if="work.type == 'textmin'" />
        </div>

        <div class="input-info">
          <ComponentCheckInput v-if="work.type == 'checkip'" />
        </div>
        <div class="input-info">
          <ComponenTextarea v-if="work.type == 'textarea'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentInputMax from "./ComponentInputMax.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponentCheckInput from "./ComponentCheckInput.vue";
import ComponenTextarea from "./ComponenTextarea.vue";
import ComponentInputMin from "./ComponentInputMin.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ComponentInputMin,
    ComponentInputMax,
    ComponenTextarea,
    ComponentCheckInput,
    ComponentInput,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      works: "getWorks",
    }),
  },
};
</script>

<style scoped></style>
