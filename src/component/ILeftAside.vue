<template>
  <section class="ileft-aside">
    <div class="aside-expand" @click="expand"><i :class="collapseClass"></i></div>
    <el-menu
        class="el-menu-vertical-i"
        @open="handleOpen"
        @close="handleClose"
        background-color="#272A33"
        text-color="#fff"
        active-text-color="#fff"
        :collapse="isCollapse"
        :default-active="currentMenuIndex"
        :router="true" >
        <el-menu-item class="el-menu-item" index="1" route="/ExperimentList" >
          <i class="el-icon-setting"></i>
          <span slot="title">实验管理</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="2" route="/DataList" >
          <i class="el-icon-tickets"></i>
          <span slot="title">数据管理</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="3" route="/AnalysisList" >
          <i class="el-icon-news"></i>
          <span slot="title">特征分析</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="4" route="/FeatureEngineModules" >
          <i class="el-icon-date"></i>
          <span slot="title">特征工程</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="5" route="/ModelTrainModules" >
          <i class="el-icon-share"></i>
          <span slot="title">模型训练</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="6" route="/ModelPredictModules" >
          <i class="el-icon-edit-outline"></i>
          <span slot="title">模型预测</span>
        </el-menu-item>
        <el-menu-item class="el-menu-item" index="7" route="/ServiceList" >
          <i class="el-icon-upload"></i>
          <span slot="title">服务部署</span>
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
    },
    expand () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.collapseClass = 'el-icon-rank'
      } else {
        this.collapseClass = 'el-icon-menu'
      }
    }
  }
}
</script>

<style scoped>
.aside-expand {
  height: 30px;
  line-height: 30px;
  background-color: #303133;
  color: #fff;
  cursor: pointer;
  text-align: center;
}
.ileft-aside {
  height: calc(100vh - 64px);
  margin-top: 4px;
  background-color: #30323A;
}
.el-menu-vertical-i:not(.el-menu--collapse) {
  width: 160px;
  text-align: left;
}
.el-menu-item:hover {
    box-shadow: 3px 0px #4488FF inset;
}
</style>
