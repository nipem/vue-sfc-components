import { shallowMount } from '@vue/test-utils'
import StatisticCard from '@/components/StatisticCard.vue'

describe('StatisticCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(StatisticCard, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
