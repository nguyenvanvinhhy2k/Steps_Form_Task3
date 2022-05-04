<template>
  <div class="">
    <input
      @click="showList"
      placeholder="入力してください"
      class="st-upload"
      type="text"
        @blur="$v.search.$touch()"
      @input="handleInput"
      :value="search"
    />
     <div class="">
      <span v-if="$v.search.$error" style="color: red; font-size: 12px"
        >Vui lòng điền thông tin</span
      >
    </div>
    <div class="input-search" style="position: relative">
      <img
        style="width: 26px; position: relative; top: -29px"
        src="../assets/search.svg"
        alt=""
      />
    </div>
    <div class="data" v-if="show">
      <ul
        style="margin: 0; padding: 10px"
        v-for="user in getFilterUser"
        :key="user.code"
      >
        <li @click="changeUser(user.name)">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      show: false,
      search: "",
    };
  },
  watch: {
    search: {
      handler(val) {
        let newFilterUsers = [];
        if (val !== "") {
          newFilterUsers = this.users.filter((user) =>
            user.name.toLowerCase().includes(val.toLowerCase())
          );
        } else {
          newFilterUsers = JSON.parse(JSON.stringify(this.users));
        }
        this.setFilterUsers(newFilterUsers);
      },
      immediate: true,
    },
     isSubmit() {
      if (this.isSubmit) {
        this.$v.search.$touch();
        if (this.$v.search.$invalid) {
          this.$emit("validateErr", true);
            this.$emit("changeTitle", {
            id: this.data.id,
            title: this.search,
          });
        } else {                                  
          this.$emit("validateErr", false);
          this.$emit("changeTitle", {
            id: this.data.id,
            title: this.search,
          });
        }
      }
    },
  },
  async created() {
    await this.getUsers;
  },
  computed: {
    ...mapGetters({
      users: "users",
      getFilterUser: "getFilterUser",
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers",
    }),
    ...mapMutations({
      setFilterUsers: "setFilterUsers",
    }),
    showList() {
      this.show = !this.show;
    },
    changeUser(user) {
      this.search = user;
      this.show = !this.show;
    },
    handleInput(e) {
      this.search = e.target.value;
    },
  },
   validations: {
    search: { required },
  },
};
</script>

<style scoped>
.input-search {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 0.14rem;
  transform: translateY(-50%);
}
.form-3 {
  width: 515px;
  margin: 6px auto;
  background-color: #dcdcdc;
}
.date-info {
  display: flex;
}
.check-info {
  display: flex;
}
.info-input-1 {
  display: flex;
  max-width: 28%;
  padding-right: 10px;
  align-items: center;
}
.check-input {
  border-radius: 50%;
  margin: 10px;
}
.info-input-1 > p {
  margin-left: 10px;
}
.t1 {
  width: 20%;
}
.checkbox {
  max-width: 50%;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0.875rem;
  border-right: 1px solid #dcdcdc;
}
.st-1 {
  padding: 16px;
  max-width: 480px;
  width: 100%;
  background-color: #f1f2f7;
  margin: 20px auto;
}
.st-title_p {
  display: flex;
}
.info-input {
  margin-top: 30px;
}
.st-upload {
  background: #fff;
  border: 1px solid #dcdcdc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 50px;
}
.p-1 {
  margin-right: 10px;
  background: red;
  color: white;
  padding: 2px;
  border-radius: 3px;
  font-weight: 700;
}

button {
  width: 100%;
  border: none;
  height: 60px;
  margin-bottom: 60px;
  cursor: pointer;
  background: #b2b1ff;
  color: white;
  font-size: 20px;
  font-weight: 700;
}

.st-title {
  margin-bottom: 25px;
}
.data {
  background: #fff;
  border: 1px solid #dcdcdc;
  overflow-y: auto;
  height: 200px;
}
ul:hover {
  background-color: #dcdcdc;
}
li {
  font-size: 18px;
}
input {
  font-size: 18px;
}
</style>
