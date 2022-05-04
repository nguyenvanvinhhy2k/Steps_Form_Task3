<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0; font-weight: 100">給与振込口座</h3>
    </div>

    <div class="">
      <div class="info-input" v-for="payroll in payrolls" :key="payroll.id">
        <div class="st-title_p" style="display: block">
          <div class="" style="display: flex; margin: 0">
            <p
              :class="{ 'p-2': !payroll.isActive, 'p-3': !payroll.none }"
              class="p-1"
            >
              必須
            </p>

            <p style="font-weight: 700">{{ payroll.detail }}</p>
          </div>
          <p style="margin-top: 0">{{ payroll.desc }}</p>
        </div>

        <div class="check-info">
          <ComponentSearch v-if="payroll.type == 'search'" />
        </div>
        <div class="check-info">
          <ComponentInput v-if="payroll.type == 'text'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSearch from "./ComponentSearch.vue";
import ComponentInput from "./ComponentInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentInput,
    ComponentSearch,
  },
  data() {
    return {
    
    };
  },
  computed: {
    ...mapGetters({
      payrolls: "getPayrolls",
    }),
  },
};
</script>

<style scoped></style>
