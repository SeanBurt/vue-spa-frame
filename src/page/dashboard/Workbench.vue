<template>
  <el-main>
    <h1>Workbench</h1>
  </el-main>
</template>

<script>
import { Main } from 'element-ui'
export default {
  name: 'Workbench',
  components: {
    'el-main': Main
  },
  data () {
    return {
      color: '#409EFF'
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
