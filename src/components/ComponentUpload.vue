<template>
  <div class="">
    <div class="st-upload">
      <div class="st-img" v-if="!image">
        <img
          style="position: relative; left: 32%; width: 35px"
          src="../assets/uploadI.png"
          alt=""
        />
        <input style="opacity: 0" type="file" @change="onFileChange" />
      </div>
      <div class="img-bt" v-else>
        <img
          style="width: 100%; height: 250px; margin-left: 0"
          :src="image"
          alt=""
        />
        <button @click="removeImage">X</button>
      </div>
      <div class="st-p">
        <p style="font-weight: 900">ファイルをドラッグ&プするか、</p>
        <p>ドロップ ファイルをドロッ</p>
        <p>ファイルを参照する</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
    },
  },
};
</script>

<style scoped>
.st-img {
  text-align: center;
}
.st-p {
  text-align: center;
}
p {
  margin: 0;
}
.st-upload {
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0.71rem;
}
.img-bt {
  text-align: center;
  position: relative;
}
button {
  position: absolute;
  left: 94.4%;
  border: none;
  background: crimson;
  color: white;
  margin: 0 auto;
  width: 25px;
  height: 25px;
}
</style>
