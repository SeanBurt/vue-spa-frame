<template>
  <div class="login-main">
    <el-form
      :model="loginForm"
      ref="loginForm">
      <el-tabs v-model="activeLoginType" :stretch=true>
        <el-tab-pane label="账号密码登录" name="first">
          <el-form-item>
            <el-input v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="second">
          <el-form-item>
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.verificationCode"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-form-item>
          <el-button @click="login" class="btn-login" type="primary">登 录</el-button>
        </el-form-item>
        <div class="login-other">其他登录方式<i class="login-icon"><svg viewBox="64 64 896 896" class="" data-icon="alipay-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"></path></svg></i><i class="login-icon"><svg viewBox="64 64 896 896" class="" data-icon="taobao-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z"></path></svg></i><i class="login-icon"><svg viewBox="64 64 896 896" class="" data-icon="weibo-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z"></path></svg></i><a class="login-register" href="/User/Register">注册账户</a></div>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
import { Form, FormItem, Tabs, TabPane, Input, Button } from 'element-ui'
export default {
  name: 'Login',
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-tabs': Tabs,
    'el-tab-pane': TabPane,
    'el-button': Button,
    'el-input': Input
  },
  data () {
    return {
      loginForm: {
        name: '',
        password: '',
        mobile: '',
        verificationCode: ''
      },
      activeLoginType: 'first'
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-main {
  width: 368px;
  margin: 0 auto;
}
.btn-login {
  width: 100%;
}
.login-other {
  text-align: left;
  margin-top: 24px;
  line-height: 22px;
  font-size: 14px;
}
.login-icon {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
  margin-left: 16px;
  vertical-align: middle;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.login-register {
  float: right;
}
</style>
