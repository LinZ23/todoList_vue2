<template>
  <div>
      <textarea class="textBox"></textarea>
  </div>
</template>

<script>
export default {
  name: "DetailText",
  mounted() {
    console.log(11111);
  },
};
</script>

<style scoped>
.textBox {
  position: absolute;
  right: 100px;
  width: 300px;
  background-color: rgb(246, 244, 244);
  width: 300px;
  height: 300px;
}
</style>