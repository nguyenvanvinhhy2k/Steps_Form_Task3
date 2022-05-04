<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 10px">給与振込口座</h3>
      <div class="st-title_p"></div>
    </div>
    <div class="">
      <div class="info-input" v-for="account in accounts" :key="account.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !account.isActive, 'p-3': !account.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ account.detail }}</p>
        </div>
        <p style="margin: 5px">{{ account.desc }}</p>
        <!-- INPUT -->
        <div class="date-info">
          <ComponentBox v-if="account.type == 'border'" />
        </div>
        <div class="input-info">
          <ComponentInput v-if="account.type == 'text'" />
        </div>
        <!-- INPUT -->

        <!-- INPUT DATE -->
      </div>
    </div>
  </div>
</template>

<script>
import ComponentInput from "./ComponentInput.vue";
import { mapGetters } from "vuex";
import ComponentBox from "./ComponentBox.vue";

export default {
  components: {
    ComponentBox,
    ComponentInput,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      accounts: "getAccounts",
    }),
  },
};
</script>

<style scoped></style>
