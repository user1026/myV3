<script setup>
import { ref, reactive, defineExpose, defineEmits, onMounted } from "vue"
import {
    rightTabName
} from "@/store/index.js"
const tabname = rightTabName();
const emit = defineEmits(["backRouterName"])
onMounted(() => {

})
</script>
<template>
    <div>1</div>
</template>
<style lang="scss" scoped>
</style>