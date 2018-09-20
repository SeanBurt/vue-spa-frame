<template>
  <el-header class="header">
    <a href="javascript:;" @click="goHomePage" class="logo"><img src="../img/logo.png" alt="logo"></a>
    <el-menu :default-active="activeIndex" class="nav-menu nav-left" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">{{getCurrentProject.name}}</template>
        <el-menu-item v-for="(item, index) in projects" :key="item.id" :index="`1-${index}`" v-text="item.name"></el-menu-item>
      </el-submenu>
    </el-menu>
    <el-menu :default-active="activeIndex" class="nav-menu nav-right" mode="horizontal" @select="handleSelectRight">
      <el-submenu index="1">
        <template slot="title">{{userName}}</template>
        <el-menu-item index="1-1">注销登录</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">帮助</template>
        <el-menu-item index="2-1">使用手册</el-menu-item>
        <el-menu-item index="2-2">SDK手册</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">版本切换</template>
        <el-menu-item index="3-1">向导版</el-menu-item>
        <el-menu-item index="3-2">专业版</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
import { GetProject } from '../service'
import { storage, auth, constant } from '../util'
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
      projects: [],
      userName: null
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentProject'
    ])
  },
  created () {},
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      this.userName = storage.readCookie('user_name')
      GetProject(null, (res) => {
        let authProject = storage.readCookie('auth') && storage.readCookie('auth').split(',')
        let authProjects = res
        for (let i = 0; i < authProjects.length; i++) {
          if (authProject.indexOf(authProjects[i].id) === -1) {
            authProjects.splice(i, 1)
            i--
          }
        }
        if (authProjects.length) {
          this.projects = authProjects
          if (!this.getCurrentProject.id) {
            this.$store.commit('SET_PROJECT_MUTATION', {
              name: authProjects[0].name,
              id: authProjects[0].id
            })
          }
        }
      }, (err) => {
        this.$message.error(err)
      })
    },
    handleSelect (key, keyPath) {
      let index = key.split('-')[1]
      // 在一级页面切换项目时直接切换，否则提示用户
      if (!constant.MAIN_MENU[this.$route.name]) {
        this.$confirm('切换项目后您当前操作将丢失，确认要切换吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('SET_PROJECT_MUTATION', {
            name: this.projects[index].name,
            id: this.projects[index].id
          })
          this.$router.push({ path: '/' })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      } else {
        this.$store.commit('SET_PROJECT_MUTATION', {
          name: this.projects[index].name,
          id: this.projects[index].id
        })
      }
    },
    handleSelectRight (key, keyPath) {
      if (key === '1-1') {
        this.$confirm('您确认要注销登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          auth.logout()
          this.$router.push({ path: '/Login' })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      }
    },
    goHomePage () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
.header {
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
.logo {
  width: 160px;
  margin-top: 12px;
  margin-left: -12px;
  float: left;
}
.logo > img {
  width: 100%;
}
.nav-right,
.nav-left {
  position: absolute !important;
  top: 0;
}
.nav-right {
  right: 0;
}
.nav-left {
  left: 180px;
}
</style>
