<template>
  <el-main class="main">
    <h3>hello world</h3>
  </el-main>
</template>

<script>
import { Main } from 'element-ui'
export default {
  name: 'Index',
  components: {
    'el-main': Main
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
