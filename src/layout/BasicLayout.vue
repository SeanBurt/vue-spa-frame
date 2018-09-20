<template>
  <el-container direction="vertical">
    <IHeader></IHeader>
    <el-container>
      <ILeftAside></ILeftAside>
      <el-container class="content">
        <router-view/>
        <IFooter></IFooter>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import IHeader from '../component/IHeader'
import IFooter from '../component/IFooter'
import ILeftAside from '../component/ILeftAside'
import { Container, Main } from 'element-ui'
export default {
  name: 'BasicLayout',
  components: {
    'el-container': Container,
    'el-main': Main,
    'IHeader': IHeader,
    'IFooter': IFooter,
    'ILeftAside': ILeftAside
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
