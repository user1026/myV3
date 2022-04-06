
<script setup>
import {
    ref,
    reactive,
    onMounted,
    defineExpose
} from 'vue'
const username = ref("123");

</script>
<template>
    <div>
        <span>{{ username }}</span>
        <el-button type="info">退出</el-button>
    </div>
</template>
<style lang='scss' scoped>
</style>