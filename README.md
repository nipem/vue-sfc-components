# business-component

基于基础组件 [@femessage/element-ui](https://github.com/FEMessage/element) 二次开发业务组件

## 功能

- [x] 基于基础组件进行二次封装
- [x] 支持 ssr
- [x] 支持 esm 按需加载
- [x] 易写文档。在组件内编写相应注释，即可生成清晰的文档
- [x] storybook 支持 less、eslint（autofix）

## 安装及使用

**安装**

```sh
# 依赖基础组件库 @femessage/element-ui
yarn add --save-dev @femessage/element-ui business-component
```

**按需加载**

```js
import Vue from 'vue'
import { Header, TableCheckbox } from '@/components'

// import base component. which business component is dependent on
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Icon.name, Icon)

// import business component
Vue.component(StatisticCard.name, StatisticCard)
Vue.component(TableCheckbox.name, TableCheckbox)
```

## 组件开发

1. 新建与组件同名的文件夹 `src/components/componentName`。
2. 新建文件 `src/components/componentName/componentName.vue`。[编写组件](./docs/how-to-write-component.md)。
3. 新建文件 `src/components/componentName/componentName.story.js`。[编写 story ](./docs/how-to-write-story.md)。
4. 修改 `src/components/index.js`，导出组件。
5. 新建文件 `test/unit/componentName.spec.js`。[编写测试](./docs/how-to-write-test.md)。

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

- [rollup](https://rollupjs.org/guide/en/) 支持 esm 打包方式的打包工具。
- [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue) rollup vue 插件。打包 .vue 文件。
- [@vue/test-utils](https://vue-test-utils.vuejs.org/zh/) vue 测试框架。
- [storybook](https://storybook.js.org/) 最受欢迎的组件浏览器
  - [Doc Blocks](https://storybook.js.org/docs/vue/writing-docs/doc-blocks) 如何编写文档
  - [list of available controls](https://storybook.js.org/docs/vue/essentials/controls#annotation)
