import TableCheckbox from './TableCheckbox'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/TableCheckbox',
  component: TableCheckbox,
  decorators: [
    () => ({
      template: '<div class="w-6/12 mx-auto"><story/></div>',
    }),
  ],
}
const templateCode = `<TableCheckbox v-bind="$props" @select="select" />`
const policies = [
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
  {
    name: '删除',
    prop: 'delete',
  },
]

const menus = [
  { name: '项目管理', path: 'project' },
  { name: '数据源管理', path: 'dataSource' },
  { name: '数据通道', path: 'dataChannel' },
  { name: '离线任务', path: 'offlineSynchronization' },
  { name: '实时任务', path: 'realTimeSynchronization' },
  { name: '数据订阅', path: 'dataSubscribe' },
  { name: '运维管理', path: 'opManager' },
  { name: '操作日志', path: 'opManager-opLog' },
  { name: '运行日志', path: 'opManager-runLog' },
  { name: '用户', path: 'authority-user' },
  { name: '角色', path: 'authority-role' },
  {
    name: '调度',
    path: 'dispatch', // 任务模块内部配置
  },
  {
    name: '异常监控',
    path: 'monitor', // 任务模块内部配置
  },
  {
    name: '基线预警',
    path: 'baseline', // 任务模块内部配置
  },
]

const policyProps = policies.map(policy => policy.prop)

const tableDataDefault = () =>
  menus.map(menu => ({
    selected: false,
    ...menu,
    ...policyProps.reduce((acc, prop) => {
      acc[prop] = false
      return acc
    }, {}),
  }))

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableCheckbox },
  template: templateCode,
})

export const main = Template.bind({})

main.parameters = {
  docs: {
    description: {
      component: '菜单列表权限管理',
    },
    source: {
      code: templateCode,
    },
  },
}

main.args = {
  head: '权限内容',
  colHeads: policies,
  tableData: tableDataDefault(),
  select(...args) {
    action('select')(args)
  },
}
