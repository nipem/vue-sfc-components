# how to write test

## 单元测试

使用官方单元测试工具库 [@vue/test-utils](https://vue-test-utils.vuejs.org/zh/) 编写单元测试

示例：

```js
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
```

>更多测试内容请参阅文档

## 集成测试

使用测试工具库 [cypress](https://github.com/cypress-io/cypress) 编写集成测试

<!-- Todo -->
