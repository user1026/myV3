<script setup>
    import {
        ref,
        reactive,
        onMounted,
        watch
    } from "vue";

    import leftmenu from "./leftMenu/index.vue"
    const left = ref(null);
    const right = ref(null);
    const leftWidth = ref(0);
    const addtabs = () => {
        console.log(123)
    }
    onMounted(() => {
        leftWidth.value = document.getElementById("leftMenu").clientWidth;
    })
    watch(leftWidth, (newVal, oldVal) => {

        document.getElementById("rightMain").style.width = (document.body.clientWidth - oldVal) + "px";
        console.log(document.getElementById("rightMain").style.width, document.body.clientWidth, newVal, oldVal)
    })
</script>


<template>
    <div ref="left" id="leftMenu">
        <leftmenu @chaddtabs="addtabs"></leftmenu>
    </div>

    <div ref="right" id="rightMain"></div>
</template>

<style lang='scss' scoped>
    #leftMenu {

        height: 100%;
        background-color: red;
    }

    #rightMain {

        height: 100%;
        background-color: aqua;
    }
</style>