# business-component

基于基础组件 [@femessage/element-ui](https://github.com/FEMessage/element) 二次开发业务组件

## 功能

- [x] 基于基础组件进行二次封装
- [x] 支持 ssr
- [x] 支持 esm 按需加载
- [x] 易写文档。在组件内编写相应注释，即可生成清晰的文档

## 安装及使用

**安装**

```sh
yarn add --save-dev @femessage/element-ui business-component
```

**按需使用**

```js
import Vue from 'vue'
import { Header, TableCheckbox } from '@/components'

Vue.component(Header.name, Header)
Vue.component(TableCheckbox.name, TableCheckbox)
```

## 组件开发

1. 在 `src/components` 目录下创建组件文件夹，使用大写驼峰命名文件（比如：`MyComponent`）。
2. 创建和开发业务组件（`MyComponent.vue`）。
3. 创建 storybook 文档文件（`MyComponent.stories.js`），编写组件文档及示例。
4. 在 `tests` 目录下，创建单元测试文件（`MyComponent.spec.js`），编写测试用例。

## Commands

```sh
# 安装依赖
yarn install

# 运行示例，本地开发
yarn serve

# 打包组件库和示例项目
yarn build

# 本地开启 storybook
yarn storybook

# 单元测试
yarn test:unit
```

## 开发依赖

- [rollup]() 支持 esm 打包方式的打包工具。
- [rollup-plugin-vue]() rollup vue 插件。打包 .vue 文件。
- [@vue/test-utils]() vue 测试框架。
- [storybook]() 组件文档工具
