<template>
  <el-header class="header">
    <i @click="collapse" class="header-trigger" :style="isCollapse ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'">
      <svg viewBox="64 64 896 896" class="" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path></svg>
    </i>
    <el-menu :default-active="activeIndex" class="nav-menu header-setting" mode="horizontal" @select="handleSelectRight">
      <el-submenu index="1">
        <template slot="title">
          <span class="avatar-image"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar"></span>
          <span>{{userName}}</span>
        </template>
        <el-menu-item index="1-1">注销登录</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-button @click="switchLanguage" class="btn-lang" plain size="mini">{{language}}</el-button>
  </el-header>
</template>

<script>
import { Header, Menu, MenuItem, Submenu, Button } from 'element-ui'
export default {
  name: 'IHeader',
  components: {
    'el-header': Header,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu,
    'el-button': Button
  },
  props: {},
  data () {
    return {
      activeIndex: '1',
      userName: '未来',
      language: 'English'
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
    },
    // shrink menu
    collapse () {
      this.$store.dispatch('COLLAPSE_MUTATION')
    },
    // switch language
    switchLanguage () {
      this.language = this.language === 'English' ? '中　文' : 'English'
    }
  }
}
</script>

<style>
.header {
  position: relative;
  background: #fff;
}
.header-trigger {
  display: inline-block;
  padding: 20px 0;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.header-setting{
  position: absolute;
  top: 0;
  right: 80px;
}
.avatar-image {
  display: inline-block;
  margin-right: 6px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
}
.avatar-image > img {
  width: 100%;
  height: 100%;
  display: block;
}
.btn-lang {
  position: absolute;
  top: 16px;
  right: 20px;
}
</style>
