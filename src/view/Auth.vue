<template>
  <div class="auth">
    <div class="box">
      <p>您还未有平台项目权限</p>
      <p>请发送邮件申请项目权限</p>
      <a href="mailto:g-prophet@360.cn">g-prophet@360.cn</a>
    </div>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui'
export default {
  name: 'Auth',
  components: {
    'el-button': Button,
    'el-input': Input
  },
  data () {
    return {
      account: '',
      pwd: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(../img/bk.png)
}
.box {
  width: 200px;
  margin: 350px auto;
  font-size: 16px;
  color: #fff;
  text-align: left;
}
.box > a {
  text-decoration: underline;
}
</style>
