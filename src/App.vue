<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="mx-auto my-5">
        <h2>StatisticCard</h2>
        <StatisticCard
          class="w-64 bg-blue-100 p-3 rounded"
          :inline="inline"
          :num="num"
          :name="name"
          :rates="rates"
        ></StatisticCard>
      </div>

      <div class="w-8/12 mx-auto">
        <h2>TableCheckbox</h2>
        <TableCheckbox
          :head="head"
          :colHeads="colHeads"
          :tableData="tableData"
          @select="onSelect"
        />
      </div>
    </div>
  </div>
</template>

<script>
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

export default {
  name: 'App',
  data() {
    return {
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

      head: '权限内容',
      colHeads: policies,
      tableData: tableDataDefault(),
    }
  },
  methods: {
    onSelect(data) {
      console.log(data)
    },
  },
}
</script>
