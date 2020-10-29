# how to write story

## 示例

```js
import MyButton from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
}

const templateCode = `<my-button @onClick="onClick" v-bind="$props" />`

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: templateCode,
})

export const Primary = Template.bind({})

Primary.parameters = {
  docs: {
    description: {
      component: 'some component _markdown_ for Primary',
    },
    source: {
      code: templateCode,
    },
  },
}

Primary.args = {
  primary: true,
  label: 'Button',
  arr: [
    {
      name: '创建',
      prop: 'add',
    },
    {
      name: '查看',
      prop: 'query',
    },
    {
      name: '编辑',
      prop: 'update',
    },
  ],
  obj: {
    foo: 'vue sfc',
    bar: 'storybook',
  },
  onClick(e) {
    action('onclick')('hello')
  }
}


export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
```

## doc

- [storybook](https://storybook.js.org/) 最受欢迎的组件浏览器
  - [writing-stories](https://storybook.js.org/docs/vue/writing-stories/introduction)
  - [list of available controls](https://storybook.js.org/docs/vue/essentials/controls#annotation)
  - [actions#ADVANCED](https://github.com/storybookjs/storybook/blob/master/addons/actions/ADVANCED.md)
- [vue-example](https://github.com/storybookjs/storybook/tree/next/examples/vue-kitchen-sink)
