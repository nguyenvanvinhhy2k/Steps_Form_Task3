<template>
  <div class="st-1">
    <div class="st-title">
      <h3 style="margin: 10px">基本情報登録</h3>
      <div class="st-title_p">
        <p>
          外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。
        </p>
      </div>
    </div>
    <div class="">
      <div class="info-input" v-for="addres in address" :key="addres.id">
        <div class="st-title_p">
          <p
            :class="{ 'p-2': !addres.isActive, 'p-3': !addres.none }"
            class="p-1"
          >
            必須
          </p>
          <p>{{ addres.detail }}</p>
        </div>
        <p style="margin: 5px">{{ addres.desc }}</p>
        <!-- INPUT -->
        <div class="input-info">
          <ComponentDrop v-if="addres.type == 'drop'" />
        </div>
        <div class="date-info">
          <ComponentDateCode v-if="addres.type == 'date'" />
        </div>
        <div class="input-info">
          <ComponentInput v-if="addres.type == 'text'" />
        </div>
        <!-- INPUT -->

        <!-- INPUT DATE -->
      </div>
    </div>
  </div>
</template>

<script>
import ComponentInput from "./ComponentInput.vue";
import ComponentDrop from "./ComponentDrop.vue";
import ComponentDateCode from "./ComponentDateCode.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ComponentDateCode,
    ComponentDrop,
    ComponentInput,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      address: "getAddress",
    }),
  },
};
</script>

<style scoped>

</style>
