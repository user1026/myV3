<script setup>
import { ref, reactive, onMounted } from "vue"
import {
    RouterInfo
} from "@/store/index.js"
import {
    useRoute,
    useRouter
} from 'vue-router';
const tabname = RouterInfo();
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