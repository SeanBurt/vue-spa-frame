<template>
  <section class="ileft-aside">
    <el-menu
      class="ileft-aside-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :default-active="currentMenuIndex"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true" >
      <el-menu-item class="el-menu-item" index="1" route="/Transfomer">
        <i class="el-icon-setting"></i>
        <span slot="title">Data Transfomer</span>
      </el-menu-item>
      <el-menu-item class="el-menu-item" index="1" route="/Train">
        <i class="el-icon-share"></i>
        <span slot="title">Model Train</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { Menu, MenuItem, Submenu } from 'element-ui'
export default {
  name: 'ILeftAside',
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu
  },
  props: {},
  data () {
    return {
      isCollapse: false,
      collapseClass: 'el-icon-menu'
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentProject',
      'currentMenuIndex'
    ])
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
}
.ileft-aside-menu {
  border-right: none;
}
</style>
