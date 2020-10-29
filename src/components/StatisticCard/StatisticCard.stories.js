import StatisticCard from './StatisticCard'

export default {
  title: 'Components/StatisticCard',
  component: StatisticCard,
  decorators: [
    () => ({
      template: '<div class="w-64 bg-white p-3 rounded"><story/></div>',
    }),
  ],
}

const templateCode = `<StatisticCard v-bind="$props" />`

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StatisticCard },
  template: templateCode,
})

export const main = Template.bind({})

main.parameters = {
  docs: {
    description: {
      component: '统计分析',
    },
    source: {
      code: templateCode,
    },
  },
}

main.args = {
  inline: true,
  num: 123456,
  name: '新增数量',
  rates: [
    {
      name: '同比',
      rate: 0.57,
    },
    {
      name: '环比',
      rate: -0.46,
    },
  ],
}
