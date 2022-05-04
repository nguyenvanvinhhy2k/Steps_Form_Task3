<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0">最終学歴</h3>
      <div class="st-title_p">
        <p>
          最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。
        </p>
      </div>
      <p style="margin: 0; font-weight: 900">学歴1</p>
    </div>

    <div class="">
      <div class="info-input" v-for="final in finals" :key="final.id">
        <div class="st-title_p" style="margin: 5px">
          <p
            :class="{ 'p-2': !final.isActive, 'p-3': !final.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ final.detail }}</p>
        </div>

        <div class="input-info">
          <ComponentDateTime v-if="final.type == 'date'" />
        </div>
        <div class="input-info">
          <ComponentDrop
            v-if="final.type == 'drop'"
            style="position: relative"
          />
        </div>
        <div class="input-info">
          <ComponentInput v-if="final.type == 'text'" />
        </div>
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
      finals: "getFinals",
    }),
  },
};
</script>

<style scoped>
/*  */
</style>
