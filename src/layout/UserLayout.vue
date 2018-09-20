<template>
  <div class="login">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(../img/bk.png)
}
</style>
