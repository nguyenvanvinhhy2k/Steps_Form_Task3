<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 0; font-weight: 100">
        在留カード（外国籍の方はご記入ください）
      </h3>
    </div>
    <div class="">
      <div class="info-input" v-for="residence in residences" :key="residence.id">
        <div class="st-title_p" style="display: block">
          <div class="" style="display: flex; margin-right: 0">
            <p
              :class="{ 'p-2': !residence.isActive, 'p-3': !residence.none }"
              style="margin-right: 10px"
              class="p-1"
            >
              必須
            </p>
            <p style="font-weight: 700">{{ residence.detail }}</p>
          </div>
          <p style="margin-right: 10px">{{ residence.desc }}</p>
        </div>
        <div class="check-info">
          <ComponentCheckInput v-if="residence.type == 'checkip'" />
        </div>
        <div class="check-info">
          <ComponentInput v-if="residence.type == 'text'" />
        </div>
        <div class="check-info">
          <ComponentDrop v-if="residence.type == 'drop'" />
        </div>
        <div class="check-info">
          <ComponentDateTime v-if="residence.type == 'date'" />
        </div>

        <div class="check-info">
          <ComponentUpload v-if="residence.type == 'upload'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentUpload from "./ComponentUpload.vue";
import ComponentDateTime from "./ComponentCheck.vue";
import ComponentInput from "./ComponentInput.vue";
import ComponentDrop from "./ComponentDrop.vue";
import ComponentCheckInput from "./ComponentCheckInput.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentCheckInput,
    ComponentDrop,
    ComponentInput,
    ComponentDateTime,
    ComponentUpload,
  },
  data() {
    return {
    
    };
  },
  computed: {
    ...mapGetters({
      residences: "getResidences",
    }),
  },
};
</script>

<style scoped></style>
