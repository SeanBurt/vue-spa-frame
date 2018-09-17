<template>
  <div class="login">
    <div class="login-box">
      <h3 class="login-title">登录Prophet平台</h3>
      <div class="login-form">
        <el-input class="login-item" placeholder="请输入用户名" v-model="account" clearable prefix-icon="el-icon-mobile-phone"></el-input>
        <el-input type="password" class="login-item" placeholder="请输入密码" v-model="pwd" clearable prefix-icon="el-icon-view"></el-input>
        <el-button class="login-item" type="primary">立即登录</el-button>
        <div class="login-item login-domain"><a href="javascript:;" @click="uuapLogin">域账户登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../utils'
import { Input, Button } from 'element-ui'
export default {
  name: 'Login',
  components: {
    'el-button': Button,
    'el-input': Input
  },
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  methods: {
    uuapLogin () {
      auth.uuapLogin()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(../img/bk.png)
}
.login-box {
  position: absolute;
  left: calc(50% - 250px);
  top: calc(40% - 150px);
  width: 500px;
  height: 370px;
  background: rgba(12,19,32,.3);
  text-align: center;
}
.login-title {
  padding: 35px 0 15px 0;
  color: #fff;
}
.login-item {
  display: inline-block;
  width: 320px;
  margin-bottom: 15px;
}
.login-domain {
  text-align: right;
}
.login-domain > a {
   color: #409EFF;
}
</style>
