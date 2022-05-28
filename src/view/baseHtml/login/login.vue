<template>
  <div class="login">
    <h1>通用模板</h1>
    <div :class="`${loginclass}`">
      <el-form :model="FormDatas" ref="ruleForm">
        <el-form-item>
          <h2>登 录</h2>
        </el-form-item>
        <el-form-item>
          <div class="login-type">
            <p :class="`${type1}`" @click="logintype(1)">账号登陆</p>
            <p>/</p>
            <p :class="`${type2}`" @click="logintype(2)">手机号登陆</p>
          </div>
        </el-form-item>
        <template v-if="typecode === 1">
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
            <el-input v-model="FormDatas.code" style="width: 60%"></el-input>
            <template v-if="!hascode">
              <el-button @click="getcode" type="primary" style="width: 39%">获取验证码</el-button>
            </template>
            <template v-else>
              <el-button :disabled="hascode" type="primary">还剩[[time]] 秒</el-button>
            </template>
          </el-form-item>
        </template>
        <el-form-item>
          <div class="button">
            <el-button type="success" @click="login">登 录</el-button>
            <el-button @click="add">取 消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import userinfo from "./userinfo"
import getCode from "./getcode";
import { useRouter } from "vue-router";
import { LeftMenuList } from "@/utils/routerUtils"
import { getMenuList } from "@/store/index.js"
const { submit, add, setuserinfo, getuserinfo } = userinfo();
const { hascode, time, getcode } = getCode();
const ruleForm = ref(null);
const MenuList = getMenuList();
const FormDatas = reactive({
  userphone: "",
  username: "",
  code: "",
  password: "",
});
const router = useRouter();
const typecode = ref(1);
const remember = ref(false);
watch(remember, (newval, oldval) => {
  if (newval === true) {
    if (FormDatas.username && FormDatas.password) {
      //window.localStorage.setItem()
    }
  } else {

  }
})
let width = ref(1400)
const loginclass = computed(() => {
  return width.value < 1400 ? "loginform loginform1400" : "loginform"
})
onMounted(() => {
  width.value = document.documentElement.offsetWidth
  add();
})
const type1 = computed(() => {
  return typecode.value == 1 ? "typecss" : "";
});
const type2 = computed(() => {
  const { value } = typecode;
  return value == 1 ? "" : "typecss";
});
const logintype = (code) => {
  typecode.value = code;
};

const login = () => {
  let menulist = [{
    path: "/",
    component: () => import("@/view/baseHtml/index/index.vue"),
    meta: {
      title: "首页"
    },
    children: [{
      path: "home",
      component: () => import("@/view/home/index.vue"),
      meta: {
        title: "图表"
      },
    }]
  }, {
    path: "/",
    component: () => import("@/view/baseHtml/index/index.vue"),
    meta: {
      title: "系统管理"
    },
    children: [
      {
        path: "one",
        component: () => import("@/view/home/one.vue"),
        meta: {
          title: "one"
        }
      }, {
        path: "two",
        component: () => import("@/view/home/two.vue"),
        meta: {
          title: "two"
        }
      }
    ]
  },]

  menulist.forEach(v => {
    router.addRoute(v);
  })


  //menulist[0].children[0].children[0].path = "/home/three"
  MenuList.setMenuList(LeftMenuList(menulist))
  console.log(LeftMenuList(menulist))
  router.push({
    path: "/",
  })
  // FormDatas.id = 1234
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
  background: url(../../../assets/images/login.jpeg) no-repeat;
  background-size: 100% 100%;

  h1 {
    font: bolder 28px/28px "微软雅黑";
    text-align: center;
    color: white;
    margin-top: 20px;
  }

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