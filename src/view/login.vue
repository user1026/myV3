<template>
  <div class="login">
    <div class="loginform">
      <el-form :data="FormData">
        <el-form-item>
          <h2>登 录</h2>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="FormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="FormData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="button">
            <el-button type="success" @click="submit">登录</el-button>
            <el-button @click="rest">取消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
    <script setup>
import { ref, reactive, onMounted } from "vue";
const FormData = reactive({});
const submit = () => {};
const rest = () => {};
</script>
<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("@/assets/images/ye.jpg") no-repeat;
  h2 {
    text-align: center;
    font: bolder 24px/24px "微软雅黑";
    color: white;
  }
  .loginform {
    width: 25%;
    height: 45%;
    position: absolute;
    left: 80%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: white, $alpha: 0.1);
    padding: 50px;
    border-radius: 20px;
    .button {
      display: flex;
      justify-content: center;
    }
  }
}
</style>