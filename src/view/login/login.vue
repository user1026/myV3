<template>
  <div class="login">
    <div :class="`${loginclass}`">
      <el-form :data="FormData">
        <el-form-item>
          <h2>登 录</h2>
        </el-form-item>
        <el-form-item>
          <div class="logintype">
            <p :class="`${type1}`" @click="logintype(1)">账号登陆</p>
            <p>/</p>
            <p :class="`${type2}`" @click="logintype(2)">手机号登陆</p>
          </div>
        </el-form-item>
        <template v-if="typecode == 1">
          <el-form-item label="账号">
            <el-input v-model="FormData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="FormData.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="remember" label="记住账号密码"></el-checkbox>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="手机号">
            <el-input v-model="FormData.username"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="FormData.password" type="password" style="width: 60%"></el-input>
            <template v-if="!hascode">
              <el-button @click="getcode" type="primary" style="width: 39%">获取验证码</el-button>
            </template>
            <template v-else>
              <el-button :disabled="hascode" type="primary">还剩{{ time }}秒</el-button>
            </template>
          </el-form-item>
        </template>
        <el-form-item>
          <div class="button">
            <el-button type="success" @click="submit">登 录</el-button>
            <el-button @click="rest">取 消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
  import {
    ref,
    reactive,
    onMounted,
    computed,
    watch
  } from "vue";
  import {
    post
  } from "@/utils/http.js"
  const FormData = reactive({});
  const time = ref(10);
  const typecode = ref(1);
  const remember = ref(false);
  watch(remember, (newval, oldval) => {
    if (newval === true) {
      if (FormData.username && FormData.password) {
        //window.localStorage.setItem()
      }
    } else {

    }
  })
  let width=ref(1400)
  const loginclass=computed(()=>{
    return width.value<1400?"loginform loginform1400":"loginform"
  })
  onMounted(()=>{
    width.value=document.documentElement.offsetWidth
  })
  const type1 = computed(() => {
    return typecode.value == 1 ? "typecss" : "";
  });
  const type2 = computed(() => {
    return typecode.value == 1 ? "" : "typecss";
  });
  const hascode = ref(false);
  const logintype = (code) => {
    typecode.value = code;
  };
  const getcode = () => {
    hascode.value = true;
    let timer = setInterval(() => {
      time.value--;
      if (time.value == 0) {
        hascode.value = false;
        clearInterval(timer);
        time.value = 60;
      }
    }, 1000);
  };
  const submit = () => {
    post("http://localhost:5000/a").then(res => {
      console.log(res)
    })
  };
  const rest = () => {};
</script>
<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("@/assets/images/login.jpeg") no-repeat;
    background-size: 100% 100%;
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
      :deep(.el-form-item__label),
      :deep(.el-checkbox__label) {
        color: white;
      }
      .logintype {
        display: flex;
        justify-content: space-around;
        font: bolder 18px/18px "微软雅黑";
        color: white;
        margin: 20px 0;
      }

      .button {
        display: flex;
        justify-content: center;
      }
    }
 .loginform1400 {
      width: 35%;
      height: 70%;
      padding: 20px 50px;
   }
  }
  

  .typecss {
    border-bottom: 2px solid greenyellow;
    color: greenyellow;
  }
</style>