<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">通勤ルート</h3>
      <div class="st-title_p" style="display: block">
        <p>自家用車の業務使用許可について</p>
      </div>
    
    </div>

    <div class="">
      <div class="info-input" v-for="busines in business" :key="busines.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !busines.isActive, 'p-3': !busines.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ busines.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ busines.desc }}</p>
        <div class="input-info">
          <ComponentCheckInput
            v-if="busines.type == 'check'"
            style="position: relative"
          />
        </div>
        <div class="input-info">
          <ComponentInput
            v-if="busines.type == 'text'"
            style="position: relative"
          />
        </div>
         <div class="input-info">
          <ComponenTextarea
            v-if="busines.type == 'textarea'"
            style="position: relative"
          />
        </div>
          <div class="input-info">
          <ComponentInputMax
            v-if="busines.type == 'box'"
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
import ComponentCheckInput from "./ComponentCheckInput.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponenTextarea from "./ComponenTextarea.vue";
import ComponentInputMax from "./ComponentInputMax.vue";
import { mapGetters} from "vuex"

export default {
  components: {
    ComponentCheckInput,
    ComponentInput,
    ComponentInputMax,
    ComponenTextarea
  },
  data() {
    return {
   
    };
  },
  computed: {
    ...mapGetters({
      business:"getBusiness"
    })
  }
};
</script>

<style scoped></style>
