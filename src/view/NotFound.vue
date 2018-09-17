<template>
  <div>
      <div class="notfound">
          <h1>404</h1>
          <blockquote>您访问到外太空链接~</blockquote>
          <router-link class="router-link-active" to="/">回到首页</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notfound {
    max-width: 740px;
    margin: 150px auto 0;
    text-align: left;
}
.notfound>h1 {
    color: #fff;
}
.notfound>blockquote {
    font-size: 18px;
    color: #999;
    border-left: 4px solid #dfe2e5;
    margin-left: 0;
    padding-left: 15px;
}
.notfound>a {
    color: #3eaf7c;
    text-decoration: none;
}
</style>
