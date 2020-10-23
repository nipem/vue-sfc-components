<template>
  <div id="app">
    <!-- <my-page></my-page> -->
    <my-header></my-header>
    <table-checkbox
      :col-heads="colHeads"
      :table-data="tableData"
      head="权限内容"
      @select="onSelect"
    ></table-checkbox>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    const rights = [
      '数据源',
      '数据通道',
      '项目',
      '离线任务',
      '实时任务',
      '数据订阅',
      '运维大屏',
      '操作日志',
      '运行日志',
      '用户',
      '角色',
      '调度',
      '异常监控',
      '基线预警',
    ]
    return {
      formInline: {
        username: '',
        rights: '',
        desc: '',
      },
      colHeads: [
        {
          name: '创建',
          prop: 'create',
        },
        {
          name: '查看',
          prop: 'view',
        },
        {
          name: '编辑',
          prop: 'edit',
        },
        {
          name: '启动/启用',
          prop: 'enable',
        },
        {
          name: '停止/禁用',
          prop: 'disable',
        },
        {
          name: '删除',
          prop: 'delete',
        },
      ],
      tableData: rights.map(right => ({
        name: right,
        selected: false,
        create: false,
        view: false,
        edit: false,
        enable: false,
        disable: false,
        delete: false,
      })),
    }
  },
  methods: {
    onSelect() {
      console.log(this.tableData)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
