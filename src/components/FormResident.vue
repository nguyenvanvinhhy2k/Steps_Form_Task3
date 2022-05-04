<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">緊急連絡先を登録</h3>
      <div class="st-title_p" style="display: block">
        <p>記入優先順位</p>
        <p>①一親等：実父母、義父母、別居の兄弟姉妹、配偶者、子</p>
        <p>②一親等の者の勤務先</p>
        <p>③二親等：別居の実祖父母、義祖父母</p>
        <p>④三親等：別居の叔父叔母、甥、姪。配偶者の兄弟姉妹</p>
        <p>⑤知人、友人等</p>
      </div>
      <p style="margin: 0; font-weight: 900">緊急連絡先1</p>
    </div>
    <div class="">
      <div class="info-input" v-for="resident in residents" :key="resident.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !resident.isActive, 'p-3': !resident.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ resident.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ resident.desc }}</p>
        <div class="input-info">
          <ComponentDrop
            v-if="resident.type == 'drop'"
            style="position: relative"
          />
        </div>

        <div class="input-info">
          <ComponentInput v-if="resident.type == 'text'" />
        </div>

        <div class="input-info">
          <ComponentDateTime v-if="resident.type == 'date'" />
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
    
    };
  },
  computed: {
    ...mapGetters({
      residents: "getResidents",
    }),
  },
};
</script>

<style scoped></style>
