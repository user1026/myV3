
<script setup>
import {
    ref,
    reactive,
    onMounted
} from "vue";
import leftmenu from "./leftMenu/index.vue"
const left = ref(null);
const right = ref(null)
onMounted(() => {

})
</script>


<template>
    <div ref="left" id="leftMenu">
        <leftmenu></leftmenu>
    </div>

    <div ref="right" id="rightMain"></div>
</template>

<style lang='scss' scoped>
#leftMenu {
    width: 20%;
    background-color: red;
}
#rightMain {
    width: 80%;
    background-color: aqua;
}
</style>