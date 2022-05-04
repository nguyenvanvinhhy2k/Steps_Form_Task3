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
      <div class="info-input" v-for="commuting in commutings" :key="commuting.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !commuting.isActive, 'p-3': !commuting.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ commuting.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ commuting.desc }}</p>
        <div class="input-info">
          <ComponentDrop
            v-if="commuting.type == 'drop'"
            style="position: relative"
            
          />
        </div>
        <div class="input-info">
          <ComponentInput
            v-if="commuting.type == 'text'"
            style="position: relative"
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

      <div class="">
        <p>備考</p>
        <input
          style="height: 152px; padding-bottom: 112px"
          placeholder="入力してください"
          class="st-upload"
          type="textarea"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentDrop from "./ComponentDrop.vue";
import ComponentInput from "./ComponentInput.vue";
import { mapGetters} from "vuex"

export default {
  components: {
    ComponentInput,
    ComponentDrop,
  },
  data() {
    return {
   
    };
  },
  computed: {
    ...mapGetters({
      commutings:"getCommutings"
    })
  }
};
</script>

<style scoped></style>
