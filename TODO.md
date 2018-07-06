# TECH

> ANTD + UMI + DVA + IMMER

# CMD

```bash
yarn install # 安装
yarn dev # 开发
yarn build # 构建 
```

# DIR

```bash
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由 (唯一强制约定目录)
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── .umirc.js                      // umi 配置
└── package.json
```

# TODO

- `[V]` 初始化，脚手架，快速上手。参考 [dva-umi](https://github.com/xiaohuoni/dva-umi)
- `[V]` 验证基础路由、嵌套路由。
- `[V]` 使用antd组件。
- `[V]` 验证全局布局。
- `[V]` 验证自定义404路由。
- `[V]` 验证 dva 使用。

- [X] 验证动态路由、路由过滤、权限路由、配置式路由、路由动效、面包屑……
- [X] 验证不同的全局布局、布局嵌套……
- [X] 验证全局样式自定义


# GET

- `/pages`下除了`index.js`，`page.js` 也可以作为子目录的默认路由。