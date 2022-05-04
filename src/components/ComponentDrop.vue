<template>
  <div class="" style="position: relative">
    <input
      @click="showUsers"
      class="st-upload"
      type="text"
      :value="userName"
      placeholder="選択してください"
      @blur="$v.userName.$touch()"
      @change="handleChange"
    />
    <div class="">
      <span v-if="$v.userName.$error" style="color: red; font-size: 12px"
        >Vui lòng thêm thông tin</span
      >
    </div>
    <div class="drop-img">
      <span @click="showUsers">
        <img style="width: 10px" src="../assets/select.png" alt="" />
      </span>
    </div>

    <div class="data" v-if="show">
      <ul v-for="user in users" :key="user.code">
        <li @click="changeUser(user.name)">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  props: {
    data: Object,
    isSubmit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      userName: "",
    };
  },
  watch: {
    isSubmit() {
      if (this.isSubmit) {
        this.$v.userName.$touch();
        if (this.$v.userName.$invalid) {
          this.$emit("validateErr", true);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: this.userName,
          });
        } else {
          this.$emit("validateErr", false);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: this.userName,
          });
        }
      }
    },
  },
  validations: {
    userName: { required },
  },
  computed: {
    ...mapGetters({
      users: "users",
    }),
  },
  async created() {
    await this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers",
    }),
    showUsers() {
      this.show = !this.show;
    },
    changeUser(user) {
      this.userName = user;
      this.show = !this.show;
    },
    handleChange(e) {
      this.userName = e.target.value;
    },
  },
};
</script>

<style scoped>
.st-upload {
  background: #fff;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0.71rem;
}

.data {
  background: #fff;
  border: 1px solid #dcdcdc;
  overflow-y: auto;
  height: 200px;
}

.drop-img {
  position: absolute;
  top: 27%;

  right: 12px;
}

.select-icon {
  display: block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid #666;
  position: absolute;
  top: 50%;
  right: 1.5rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

ul:hover {
  background: #dcdcdc;
}

ul {
  margin: 0;
  padding: 0 4px;
}
input {
  font-size: 18px;
}
li {
  padding: 4px 4px;
  font-size: 18px;
}
</style>
