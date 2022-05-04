<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 10px">在留カード（外国籍の方はご記入ください）</h3>
      <div class="st-title_p"></div>
    </div>
    <div class="">
      <div class="info-input" v-for="card in cards" :key="card.id">
        <div class="st-title_p">
          <p :class="{ 'p-2': !card.isActive, 'p-3': !card.none }" class="p-1">
            必須
          </p>
          <p>{{ card.detail }}</p>
        </div>
        <p style="margin: 5px">{{ card.desc }}</p>
        <!-- INPUT -->
        <div class="input-info">
          <ComponentCheckInput v-if="card.type == 'check'" />
        </div>

        <div class="input-info">
          <ComponentInput v-if="card.type == 'text'" />
        </div>
        <div class="date-info">
          <ComponentDateTime v-if="card.type == 'date'" />
        </div>
        <!-- INPUT -->

        <!-- INPUT DATE -->
      </div>
    </div>
  </div>
</template>

<script>
import ComponentInput from "./ComponentInput.vue";
import ComponentCheckInput from "./ComponentCheckInput.vue";
import ComponentDateTime from "./ComponentDateTime.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentDateTime,
    ComponentCheckInput,
    ComponentInput,
  },
  data() {
    return {
   
    };
  },
  computed: {
    ...mapGetters({
      cards: "getCards",
    }),
  },
};
</script>

<style scoped>

</style>
