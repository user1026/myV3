<template>
  <div class="login">
    <h1>通用模板</h1>
    <div :class="`${loginClass}`">
      <el-form :model="FormDatas" ref="ruleForm">
        <el-form-item>
          <h2>登 录</h2>
        </el-form-item>
        <el-form-item>
          <div class="login-type">
            <p :class="`${UserNum}`" @click="loginType(1)">账号登陆</p>
            <p>/</p>
            <p :class="`${PhoneNum}`" @click="loginType(2)">手机号登陆</p>
          </div>
        </el-form-item>
        <template v-if="typeCode === 1">
          <el-form-item label="账号" prop="username">
            <el-input v-model="FormDatas.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="FormDatas.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="remember" label="记住账号密码"></el-checkbox>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="手机号" prop="userphone">
            <el-input v-model="FormDatas.userphone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="FormDatas.code" style="width: 55%"></el-input>
            <template v-if="!hascode">
              <el-button @click="getcode" type="primary" style="width: 45%">获取验证码</el-button>
            </template>
            <template v-else>
              <el-button :disabled="hascode" type="primary">还剩{{time}} 秒</el-button>
            </template>
          </el-form-item>
        </template>
        <el-form-item>
          <div class="button">
            <el-button type="success" @click="login">登 录</el-button>
            <el-button @click="rest">取 消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch,defineAsyncComponent } from "vue";
import userinfo from "./userinfo"
import sys from "@/router/sys.js"
import getCode from "./getcode";
import { useRouter } from "vue-router";
import { LeftMenuList } from "@/utils/routerUtils"
import { getMenuList } from "@/store/index.js"
const { submit, setUser, removeUser, getuserinfo } = userinfo();
const { hascode, time, getcode } = getCode();
const ruleForm = ref(null);
const MenuList = getMenuList();
const views=import.meta.glob("/src/view/*/*/*.vue");
const FormDatas = reactive({
  userphone: "",
  username: "",
  code: "",
  password: "",
});
const router = useRouter();
const typeCode = ref(1);
const remember = ref(false);
watch(remember, (newval, oldval) => {
  if (newval === true) {
    if (FormDatas.username && FormDatas.password) {
      //window.localStorage.setItem()
      setUser(FormDatas)
    }
  } else {
    removeUser();
  }
})
let width = ref(1400)
const loginClass = computed(() => {
  return width.value < 1400 ? "loginForm loginForm1400" : "loginForm"
})
onMounted(() => {
  width.value = document.documentElement.offsetWidth
  let bool = window.localStorage.getItem("isRemember");
  if (bool == "true") {
    console.log(bool, "bool")
    if (window.localStorage.getItem("user")) {
      let user = window.atob(window.localStorage.getItem("user"));
      FormDatas.username = user.split("-")[0];
      FormDatas.password = user.split("-")[1];
      remember.value = true;
    } else {
      window.localStorage.setItem("isRemember", false);
    }
  }
})
const UserNum = computed(() => {
  return typeCode.value == 1 ? "typeCss" : "";
});
const PhoneNum = computed(() => {
  const { value } = typeCode;
  return value == 1 ? "" : "typeCss";
});
const loginType = (code) => {
  typeCode.value = code;
};

const login = () => {
  let menulist = [{
    path: "/",
    icon: "HomeFilled",
    component: "/src/view/baseHtml/index/index.vue",
    meta: {
      title: "首页"
    },
    children: [{
      path: "home",
      icon: "List",
      component:"/src/view/baseHtml/home/index.vue",
      meta: {
        title: "图表"
      },
    }]
  }, {
    path: "/",
    component: "/src/view/baseHtml/index/index.vue",
    meta: {
      title: "系统管理"
    },
    icon: "HomeFilled",
    children: [
     ...sys,
    ]
  },]
  menulist.forEach(v => {
    v.component=views[v.component];
    if(v.children.length>0){
      v.children.forEach(vv=>{
        vv.component=views[vv.component];
      })
    }
    router.addRoute(v);
  })
  MenuList.setMenuList(LeftMenuList(menulist))
  let x=MenuList.getMenuList
  router.push({
    path: "/",
  })
  // submit(FormDatas)
}
const rest = () => {
  ruleForm.value.resetFields();
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url(../../../assets/images/ye.JPG) no-repeat;
  background-size: 100% 100%;

  h1 {
    font: bolder 28px/28px "微软雅黑";
    text-align: center;
    color: white;
    padding-top: 20px;
  }

  h2 {
    text-align: center;
    font: bolder 24px/24px "微软雅黑";
    color: white;
  }

  .loginForm {
    width: 25vw;
    height: 55vh;
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

    .login-type {
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

  .loginForm1400 {
    width: 35%;
    height: 70%;
    padding: 20px 50px;
  }
}

.typeCss {
  border-bottom: 2px solid greenyellow;
  color: greenyellow;
}
</style>