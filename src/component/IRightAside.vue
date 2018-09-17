<template>
  <el-aside width="112px" class="aside">
    <el-menu
        class="iright-aside"
        @open="handleOpen"
        @close="handleClose"
        @select="selectMainMenu"
        background-color="#30323A"
        text-color="#fff"
        active-text-color="#fff" >
        <el-menu-item index="1">
        <span slot="title">场景信息</span>
        </el-menu-item>
        <el-menu-item index="2">
        <span slot="title">服务配置</span>
        </el-menu-item>
        <el-menu-item index="3">
        <span slot="title">算法策略</span>
        </el-menu-item>
        <el-menu-item index="4">
        <span slot="title">测试流程</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { Aside, Menu, MenuItem } from 'element-ui'
export default {
  name: 'IRightAside',
  components: {
    'el-aside': Aside,
    'el-menu': Menu,
    'el-menu-item': MenuItem
  },
  props: {},
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectMainMenu (index) {
      this.$emit('itemChange', index)
    }
  }
}
</script>

<style scoped>
.el-menu-item:focus, .el-menu-item:hover {
    box-shadow: -3px 0px #4488FF inset;
}
.iright-aside {
  margin-top: 4px;
}
</style>
