<h1 align="center">Vue SPA Frame</h1>

<div align="center">

开箱即用的中台前端/设计解决方案。

[![CircleCI Status](https://circleci.com/gh/ant-design/ant-design-pro.svg?style=svg)](https://circleci.com/gh/ant-design/ant-design-pro/)
[![Build status](https://ci.appveyor.com/api/projects/status/67fxu2by3ibvqtat/branch/master?svg=true)](https://ci.appveyor.com/project/afc163/ant-design-pro/branch/master)
[![Dependencies](https://img.shields.io/david/ant-design/ant-design-pro.svg)](https://david-dm.org/ant-design/ant-design-pro)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design-pro.svg)](https://david-dm.org/ant-design/ant-design-pro?type=dev)
[![Gitter](https://badges.gitter.im/ant-design/ant-design-pro.svg)](https://gitter.im/ant-design/ant-design-pro?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

![](https://user-images.githubusercontent.com/8186664/44953195-581e3d80-aec4-11e8-8dcb-54b9db38ec11.png)

</div>

## 特性

- :gem: **优雅美观**：基于 Ant Design 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 React/umi/dva/antd 等前端前沿技术开发
- :iphone: **响应式**：针对不同屏幕大小设计
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :globe_with_meridians: **国际化**：内建业界通用的国际化方案
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码
- :1234: **Mock 数据**：实用的本地数据调试方案
- :white_check_mark: **UI 测试**：自动化测试保障前端产品质量

## 模板

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 用户
  - 用户中心页
  - 用户设置页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 帐户
  - 登录
  - 注册
  - 注册成功
```

## 使用

### clone project
```bash
$ git clone https://github.com/SeanBurt/vue-spa-frame.git --depth=1
$ cd vue-spa-frame
```

### install packages
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### analyze compile and pack
```
npm run analyze
```

## project structure
```

├── dist                                        // 上线项目文件，放在服务器即可正常访问（运行 npm run build 时自动生成）
├── public                                      // 单页入口文件
├── node_modules                                // 运行时和编译时所需的第三方安装包
├── src                                         // 源码目录
│   ├── component                               // 组件
│   ├── directive                               // 自定义vue指令
│   ├── filter                                  // 自定义vue过滤器
│   ├── img                                     // 图片
│   ├── plugin                                  // 自定义vue插件
│   ├── router
│   │   └── index.js                            // 单面应用路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── config.js                           // 接口地址的配置文件，对接口进行统一管理
│   │   └── index.js                            // 获取数据的统一调配文件，对请求进行统一管理
│   ├── store                                   // vuex的状态管理
│   │   ├── modules                             // 模块状态
│   │   └── action.js                           // 公共action
│   │   └── getters.js                          // 公共getter
│   │   ├── mutation-types.js                   // 公共mutation type
│   │   └── mutations.js                        // 公共mutation
│   │   └── index.js                            // store入口文件：初始化
│   ├── style                                   // 样式文件
│   │   ├── common.scss                         // 公共样式
│   │   └── element-ui.scss                     // 覆盖element ui 样式
│   │   └── element-variable.scss               // element theme 样式
│   │   ├── mixin.scss                          // 模块化样式
│   │   ├── variable.scss                       // 公共样式变量
│   │   ├── index.scss                          // 公共样式入口文件
│   ├── util                                    // 工具配置
│   │   ├── axios.js                            // 网络请求库
│   │   └── common.js                           // 公共方法
│   │   └── env.js                              // 环境
│   │   ├── auth.js                             // 身份权限校验库
│   │   ├── storage.js                          // 本地存储库
│   │   ├── log.js                              // 日志记录
│   │   └── constant.js                         // 常量
│   │   ├── index.js                            // 工具库
│   ├── view                                    // 页面
│   ├── App.vue                                 // 单页页面入口文件
│   ├── main.js                                 // 单页程序入口文件，加载各种公共组件
├── static                                      // 静态文件
│   ├── img                                     // 图片
│   ├── js                                      // 脚本
│   ├── file                                    // 文件
├── .babel.config                               // babel配置文件
├── .gitignore                                  // git配置文件
├── package-lock.json                           // 框架运行及编译依赖包关系树
├── package.json                                // 框架运行及编译依赖文件配置
├── README.md                                   // 框架说明方档
├── vue.config.js                               // 框架编译配置文件

```

## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 在你的公司或个人项目中使用 Vue SPA Frame。
- 通过 [Issue](https://github.com/SeanBurt/vue-spa-frame/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/SeanBurt/vue-spa-frame/pulls) 改进 Pro 的代码。

