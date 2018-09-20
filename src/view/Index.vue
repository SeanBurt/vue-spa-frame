<template>
  <el-container direction="vertical">
    <IHeader></IHeader>
    <el-container>
      <ILeftAside></ILeftAside>
      <el-container class="content">
        <el-main class="main">
          <el-row>
            <el-col class="ml-head">
              <label>功能及服务</label>
            </el-col>
          </el-row>
          <el-row :gutter="30" class="product">
            <el-col :span="8">
              <div class="product-item">
                <div class="product-icon" :style="'backgroundPositionY:' + product1Y + 'px'" @mouseover="expandProductIcon(1, $event)" @mouseout="shrinkProductIcon(1, $event)"></div>
                <p class="product-title">数据智能</p>
                <p class="product-desc">数据智能是指基于大数据智能引擎，通过大数据技术，大规模机器学习和深度学习技术，对海量数据进行处理，完成从原始数据中对有价值的信息和知识的整合提取，使繁杂的原始数据转化为知识，实现自动化的数据分析及挖掘，并进行可视化展示；基于信息和知识通过建立模型寻求现有问题，例如风控，营销，流量预测等的智能解决方案。</p>
                <div class="product-function">
                  <el-button class="animated bounce" type="primary" round size="small" @click="changeFunction(1)">智能建模</el-button>
                  <el-button class="animated bounce" type="primary" round size="small"  @click="changeFunction(2)">特征分析</el-button>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="product-item">
                <div class="product-icon" :style="'backgroundPositionY:' + product2Y + 'px'" @mouseover="expandProductIcon(2, $event)" @mouseout="shrinkProductIcon(2, $event)"></div>
                <p class="product-title">视觉智能</p>
                <p class="product-desc">视觉智能是指基于计算机视觉技术，建立能够从图像或者多维数据中获取信息，并由计算机来代替人类的大脑完成信息处理，解释和决策的人工智能系统，其通过深度学习等技术实现图像分类，人脸检测，视频鉴黄，物体检测等解决方案。</p>
                <div class="product-function">
                  <el-button class="animated bounce" type="primary" round size="small" @click="changeFunction(3)">图像分类</el-button>
                  <el-tooltip effect="dark" content="敬请期待" placement="top">
                    <el-button class="animated bounce" type="primary" round size="small">物体检测</el-button>
                  </el-tooltip>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="product-item">
                <div class="product-icon" :style="'backgroundPositionY:' + product3Y + 'px'" @mouseover="expandProductIcon(3, $event)" @mouseout="shrinkProductIcon(3, $event)"></div>
                <p class="product-title">Prophet Pro</p>
                <p class="product-desc">Prophet Pro基于Jupyter，集合项目管理、开发环境、基础算法、计算资源和数据集的线上一站式模型开发和部署平台。平台提供P40 GPU资源进行模型开发，支持分布式计算，并灵活的支持自定义模型研发，兼容主流机器学习开源框架（Caffe，Tensorflow等）。</p>
                <div class="product-function">
                  <el-button class="animated bounce" type="primary" round size="small" @click="changeFunction(5)">开始体验</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
        <IFooter></IFooter>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { common } from '../util'
import IHeader from '../component/IHeader'
import IFooter from '../component/IFooter'
import ILeftAside from '../component/ILeftAside'
import { Container, Main, Row, Col, Button, Tooltip } from 'element-ui'
export default {
  name: 'BusinessList',
  components: {
    'el-container': Container,
    'el-main': Main,
    'el-row': Row,
    'el-col': Col,
    'el-button': Button,
    'el-tooltip': Tooltip,
    'IHeader': IHeader,
    'IFooter': IFooter,
    'ILeftAside': ILeftAside
  },
  data () {
    return {
      product1Y: 0,
      product2Y: 0,
      product3Y: 0,
      expandTimer: null,
      shrinkTimer: null
    }
  },
  methods: {
    init () {
    },
    expandProductIcon (index, event) {
      let self = this
      if (this.expandTimer || this.shrinkTimer) {
        return
      }
      this.expandTimer = window.setInterval(() => {
        self[`product${index}Y`] -= 100
        if (self[`product${index}Y`] <= -1400) {
          self[`product${index}Y`] = -1400
          window.clearInterval(self.expandTimer)
          self.expandTimer = null
        }
      }, 20)
    },
    shrinkProductIcon (index, event) {
      let self = this
      if (this.shrinkTimer || this.expandTimer) {
        return
      }
      this.shrinkTimer = window.setInterval(() => {
        self[`product${index}Y`] += 100
        if (self[`product${index}Y`] >= 0) {
          self[`product${index}Y`] = 0
          window.clearInterval(self.shrinkTimer)
          self.shrinkTimer = null
        }
      }, 10)
    },
    changeFunction (type) {
      common.clearExpirementParams()
      let path = '/DataProcess'
      switch (type) {
        case 1:
          path = '/DataProcess'
          break
        case 2:
          path = '/AnalysisConfig'
          break
        case 3:
          path = '/ImageDataProcess'
          break
        default:
          break
      }
      if (type === 5) {
        window.open('//hyejoeng.top')
      } else {
        this.$router.push({ path: path })
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  overflow: hidden;
}
.ml-exp {
  margin-top: 10px;
  margin-bottom: 30px;
}
.ml-exp-item {
  height: 220px;
  min-width: 300px;
  margin: 0 auto;
  background-color: #2b303a;
}
.product {
  margin-top: 10px
}
.product-item {
  height: 382px;
  min-width: 300px;
  margin: 0 auto;
  padding: 30px 0 0;
  background-color: #2b303a;
}
.ml-head {
  margin: 10px 0;
  border-left: 4px solid #136ACC;
  text-indent: 6px;
}
.product > div:nth-child(1) .product-icon {
  background-image: url("../img/product_icon.png");
  background-position-x: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.product > div:nth-child(2) .product-icon {
  background-image: url("../img/product_icon_01.png");
  background-position-x: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.product > div:nth-child(3) .product-icon {
  background-image: url("../img/product_icon_02.png");
  background-position-x: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.product-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.product-title {
  font-size: 18px;
  text-align: center;
}
.product-desc {
  height: 162px;
  padding: 0 20px;
  line-height: 20px;
  text-indent: 28px;
}
.product-function {
  text-align: center;
}
</style>
