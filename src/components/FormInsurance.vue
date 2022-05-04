<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">保険年金</h3>
      <div class="st-title_p" style="display: block">
        <p>
          最終学歴が大学院の方は、｢+学歴を追加する｣から大学を登録後に大学院を登録してください。
        </p>
      </div>
    </div>

    <div class="">
      <div class="info-input" v-for="insurance in insurances" :key="insurance.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !insurance.isActive, 'p-3': !insurance.none }"
            class="p-1"
          >
            必須
          </p>
          <p style="font-weight: 600">{{ insurance.detail }}</p>
        </div>
        <p style="margin-right: 10px">{{ insurance.desc }}</p>
        <div class="input-info">
          <ComponentInput
            v-if="insurance.type == 'text'"
            style="position: relative"
          />
        </div>

        <div class="input-info">
          <ComponentInputMax v-if="insurance.type == 'box'" />
        </div>

        <div class="input-info">
          <ComponentCheck v-if="insurance.type == 'check'" />
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
import ComponentInputMax from "./ComponentInputMax.vue";
import ComponentCheck from "./ComponentCheck.vue";
import ComponentInput from "./ComponentInput.vue";
import {mapGetters} from "vuex"

export default {
  components: {
    ComponentInput,
    ComponentCheck,
    ComponentInputMax,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      insurances:"getInsurances"
    })
  }
};
</script>

<style scoped></style>
