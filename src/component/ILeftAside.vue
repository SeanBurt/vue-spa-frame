<template>
  <section class="ileft-aside" :style="isCollapse ? 'width:64px;' : 'width:200px;'">
    <div class="ileft-aside-logo" id="logo"><a href="/"><img :style="isCollapse ? 'transform: rotate(360deg);' : 'transform: rotate(0deg);'" src="data:img/jpg;base64,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
    " alt="logo"><h1>Transfomers</h1></a></div>
    <el-menu
      class="ileft-aside-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :default-active="currentMenuIndex"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title" v-text="$t('message.dashboard')"></span>
        </template>
        <el-menu-item index="1-1" route="/" v-text="$t('message.analysis')"></el-menu-item>
        <el-menu-item index="1-2" v-text="$t('message.monitor')"></el-menu-item>
        <el-menu-item index="1-3" v-text="$t('message.workplace')"></el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span slot="title" v-text="$t('message.list')"></span>
        </template>
        <el-menu-item index="2-1" v-text="$t('message.basic')"></el-menu-item>
        <el-menu-item index="2-2" v-text="$t('message.card')"></el-menu-item>
        <el-submenu index="2-3">
          <span slot="title" v-text="$t('message.search')"></span>
          <el-menu-item index="2-4-1" v-text="$t('message.article')"></el-menu-item>
          <el-menu-item index="2-4-2" v-text="$t('message.project')"></el-menu-item>
          <el-menu-item index="2-4-3" v-text="$t('message.application')"></el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
import { Menu, MenuItem, Submenu, Tooltip } from 'element-ui'
export default {
  name: 'ILeftAside',
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu,
    'el-tooltip': Tooltip
  },
  props: {},
  data () {
    return {
      currentMenuIndex: '1'
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style>
.ileft-aside {
  height: 100vh;
  background: #001529;
  transition: all 0.3s;
}
.ileft-aside-menu {
  border-right: none;
}
.ileft-aside-logo {
  height: 60px;
  position: relative;
  line-height: 60px;
  padding-left: 16px;
  background: #002140;
  overflow: hidden;
}
.ileft-aside-logo img {
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  transition: all 0.6s;
}
.ileft-aside-logo h1 {
  color: white;
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  margin: 0 0 0 12px;
  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
}
</style>
