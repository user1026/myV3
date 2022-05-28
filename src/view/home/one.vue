<script setup>
import { ref, reactive, onMounted } from "vue"
import {
    rightTabName
} from "@/store/index.js"
import {
    useRoute,
    useRouter
} from 'vue-router';
const tabname = rightTabName();
const router = useRouter();
const routes = useRoute();
const emit = defineEmits(["backRouterName"])
onMounted(() => {
    //console.log(tabname.getRouterName)
})
</script>
<template>
    <div>1</div>
</template>
<style lang="scss" scoped>
</style>