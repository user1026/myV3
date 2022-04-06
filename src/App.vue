<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  // document.getElementById("app").style.height = window.innerHeight + "px"
  // console.log(document.getElementById("app").style.height, window.innerHeight)
})
</script>

<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>