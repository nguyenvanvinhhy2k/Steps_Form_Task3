<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0; font-weight: 100">保険年金</h3>
    </div>

    <div class="">
      <div class="info-input" v-for="pension in pensions" :key="pension.id">
        <div class="st-title_p" style="display: block">
          <div class="" style="display: flex">
            <p
              :class="{ 'p-2': !pension.isActive, 'p-3': !pension.none }"
              class="p-1"
              v-if="pension.isReq"
            >
              必須
            </p>

            <p style="font-weight: 700; margin-bottom: 5px">
              {{ pension.detail }}
            </p>
          </div>
          <p style="margin-top: 0">{{ pension.desc }}</p>
        </div>
        <div class="check-info">
          <ComponentInput v-if="pension.type == 'text'" />
        </div>

        <div class="check-info">
          <ComponentUpload v-if="pension.type == 'upload'" />
        </div>

        <div class="check-info">
          <ComponentCheck v-if="pension.type == 'check'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentUpload from "./ComponentUpload.vue";
import ComponentCheck from "./ComponentCheck.vue";
import ComponentInput from "./ComponentInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentCheck,
    ComponentUpload,
  },
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters({
      pensions: "getPensions",
    }),
  },
};
</script>

<style scoped></style>
