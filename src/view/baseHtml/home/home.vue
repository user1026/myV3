<script setup>
    import {
        ref,
        reactive,
        onMounted,
        watch
    } from "vue";

    import leftmenu from "./leftMenu/index.vue";
    import rightmain from "./rightMain/index.vue"
    const left = ref(null);
    const right = ref(null);
    const leftWidth = ref(0);
    const addtabs = (path) => {
        right.value.addtabs(path)
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
    <div id="leftMenu">
        <leftmenu ref="left" @chaddtabs="addtabs"></leftmenu>
    </div>

    <div id="rightMain">
        <rightmain ref="right"></rightmain>
    </div>
</template>

<style lang='scss' scoped>
    #leftMenu {

        height: 100%;
        background-color: red;
    }

    #rightMain {

        height: 100%;

    }
</style>