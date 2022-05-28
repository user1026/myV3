<template>
    <div class="un404">
        <div class="fontmain">
            404<span style="font:bold 45px/45px '微软雅黑';text-shadow: none;color: black;">出错啦!!!!!</span>
        </div>
        <div class="txt">
            亲爱的用户，您访问的页面不存在
        </div>
        <div>
            <el-button @click="back" type="danger">返回首页</el-button>
        </div>
    </div>
</template>
    <script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter();
const back = () => {
    router.push("/")
}
</script>
<style lang='scss' scoped>
.un404 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60%;

    .fontmain {
        font: bold 100px/100px "微软雅黑";
        color: #fff;
        text-shadow: 0px 0px 10px black;
    }

    .txt {
        font: bold 40px/40px "微软雅黑";
    }
}
</style>