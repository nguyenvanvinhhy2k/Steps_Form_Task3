<template>
  <div class="" style="display: flex">
    <input placeholder="入力してください" class="st-upload" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.form-3 {
  width: 467px;
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
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 4px;
  width: 36%;
  padding: 1.3rem 1.71rem;
  margin: 0 auto;
  cursor: pointer;
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
</style>
