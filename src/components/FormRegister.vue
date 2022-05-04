<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0; font-weight: 100">住民票記載の住所を登録</h3>
    </div>

    <div class="">
      <div class="info-input" v-for="register in registers" :key="register.id">
        <div class="st-title_p" style="display: block">
          <div class="" style="display: flex; margin: 0">
            <p
              :class="{ 'p-2': !register.isActive, 'p-3': !register.none }"
              class="p-1"
            >
              必須
            </p>

            <p style="font-weight: 700">{{ register.detail }}</p>
          </div>
          <p style="margin-top: 0">{{ register.desc }}</p>
        </div>

        <div class="check-info">
          <ComponentCheckInput v-if="register.type == 'check'" />
        </div>

        <div class="check-info">
          <ComponentDate v-if="register.type == 'date'" />
        </div>
        <div class="check-info">
          <ComponentInput v-if="register.type == 'text'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentCheckInput from "./ComponentCheckInput.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponentDate from "./ComponentDate.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentDate,
    ComponentCheckInput,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      registers: "getRegisters",
    }),
  },
};
</script>

<style scoped></style>
