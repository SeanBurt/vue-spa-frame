# vue-spa-frame

## Project setup
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

## project structure
```

├── build                                       // webpack配置文件（开发过程中无需关心）
├── config                                      // 项目打包相关配置
│   └── index.js                                // 项目打包主要配置方件（针对不同应用场景，配置不同）
├── dist                                        // 上线项目文件，放在服务器即可正常访问（运行 npm run build 时自动生成）
├── src                                         // 源码目录
│   ├── component                               // 组件
│   ├── directive                               // 自定义vue指令
│   ├── filter                                  // 自定义vue过滤器
│   ├── img                                     // 图片
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
│   ├── style                                   // 样式文件
│   │   ├── common.scss                         // 公共样式
│   │   └── element-ui.scss                     // 覆盖element ui 样式
│   │   └── element-variable.scss               // element theme 样式
│   │   ├── mixin.scss                          // 模块化样式
│   │   ├── variable.scss                       // 公共样式变量
│   ├── utils                                   // 工具配置
│   │   ├── axios.js                            // 网络请求库
│   │   └── common.js                           // 公共方法
│   │   └── env.js                              // 环境
│   │   ├── index.js                            // 工具库
│   │   ├── auth.js                             // 身份权限校验库
│   │   ├── storage.js                          // 本地存储库
│   ├── App.vue                                 // 单页页面入口文件
│   ├── main.js                                 // 单页程序入口文件，加载各种公共组件
├── static                                      // 静态文件
│   ├── img                                     // 图片
│   ├── js                                      // 脚本
├── .babelrc                                    // babel配置文件
├── .eslintignore                               // eslint配置文件
├── .eslintrc.js                                // eslint配置文件
├── .gitignore                                  // git配置文件
├── .postcssrc.js                               // 通过js转换css配置文件
├── index.html                                  // 单页入口html文件
├── package-lock.json                           // 框架运行及编译依赖包关系树
├── package.json                                // 框架运行及编译依赖文件配置
├── README.md                                   // 框架说明方档

```
