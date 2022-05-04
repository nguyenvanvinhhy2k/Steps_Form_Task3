<template>
  <div class="step-icon__bg">
    <div class="step-icon__inner">
      <img
        src="../assets/Vector.svg"
        class="img-icon"
        :class="{
          active: steps == steps,
        }"
      />
      <img
        src="../assets/PencilLineColor.svg"
        class="img-icon"
        :class="{
          active: steps === 2 || steps === 3,
        }"
      />
      <img
        src="../assets/Vector.svg"
        class="img-icon"
        :class="{
          active: steps === 3,
        }"
      />
      <img
        src="../assets/PencilLineColor.svg"
        class="img-icon"
        :class="{
          active: steps === 4,
        }"
      />
      <img
        src="../assets/Vector.svg"
        class="img-icon"
        :class="{
          active: steps === 5,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps", "totalSteps"],
};
</script>

<style scoped>
.step-icon__bg {
  display: flex;
}

.step-icon__inner {
  z-index: 999;
}
.img-icon {
  z-index: 999;
  border-radius: 50%;
  background-color: #dcdcdc;
}
.active {
  background-color: #b2b1ff;
}
</style>
