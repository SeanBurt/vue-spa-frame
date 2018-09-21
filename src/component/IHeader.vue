<template>
  <el-header class="header">
    <el-menu :default-active="activeIndex" class="nav-menu nav-right" mode="horizontal" @select="handleSelectRight">
      <el-submenu index="1">
        <template slot="title">{{userName}}</template>
        <el-menu-item index="1-1">注销登录</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">{{currentProjectName}}</template>
        <el-menu-item v-for="(item, index) in projects" :key="item.id" :index="`2-${index}`" v-text="item.name"></el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
import { Header, Menu, MenuItem, Submenu } from 'element-ui'
export default {
  name: 'IHeader',
  components: {
    'el-header': Header,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu
  },
  props: {},
  data () {
    return {
      activeIndex: '1',
      projects: [{
        id: '1',
        name: 'Transformers'
      }, {
        id: '2',
        name: 'Shrek'
      }, {
        id: '3',
        name: 'Astro Boy'
      }],
      userName: 'Lie',
      currentProjectName: 'Transformers'
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    handleSelectRight (key, keyPath) {
      if (key === '1-1') {
        this.$confirm('您确认要注销登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/User' })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      } else {
        this.$router.go(0)
      }
    }
  }
}
</script>

<style>
.header {
  position: relative;
  background: #fff;
}
.nav-right{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
