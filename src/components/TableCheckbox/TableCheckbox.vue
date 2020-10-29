<template>
  <el-table ref="table" :data="tableData" class="table-border">
    <el-table-column :label="head" prop="name"></el-table-column>
    <el-table-column>
      <template slot="header">
        <el-checkbox
          :value="selectedAll"
          @change="toggleSelectAll"
        ></el-checkbox>
      </template>
      <template slot-scope="scope">
        <el-checkbox
          v-model="scope.row.selected"
          @change="toggleSelectRow(scope.row, scope.$index)"
        ></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column
      v-for="(colHead, index) of colHeads"
      :key="index"
      :label="colHead.name"
    >
      <template slot-scope="scope">
        <el-checkbox
          v-model="scope.row[colHead.prop]"
          @change="toggleCheckbox(scope.row, scope.$index)"
        ></el-checkbox>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn, Checkbox } from '@femessage/element-ui'
/**
 * 深拷贝 vue 对象
 */
function deepClone(row, data = {}) {
  return {
    ...JSON.parse(JSON.stringify(row)),
    ...data,
  }
}

/**
 * 设置 colHeads 的 prop 值为 selected，返回新的对象
 *
 * @param colHeads Object 表头数组，包含 prop 和 name 属性
 * @param selected Boolean 是否选中
 * @return Object
 */
function generateRow(colHeads, selected) {
  return colHeads.reduce((acc, colHead) => {
    acc[colHead.prop] = selected
    return acc
  }, {})
}

export default {
  name: 'TableCheckbox',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Checkbox.name]: Checkbox,
  },
  props: {
    /**
     * 表头名称
     */
    head: {
      type: String,
      default: '-',
    },
    /**
     * 可设置权限类型
     *
     * 数组每项都包含 name 和 prop 属性
     */
    colHeads: {
      type: Array,
      required: true,
      default: () => [],
      validator(items) {
        return items.every(item => item.name && item.prop)
      },
    },
    /**
     * 菜单权限列表
     *
     * 数组每项都包含 name 和 selected 属性。同时需要包含 `colHeads` 每项中的 prop 属性，值为 boolean
     */
    tableData: {
      type: Array,
      required: true,
      default: () => [],
      validator(items) {
        return items.every(
          item => item.name && typeof item.selected === 'boolean'
        )
      },
    },
  },
  data() {
    return {
      selectedAll: false,
    }
  },
  watch: {
    tableData() {
      const isAllChecked = this.tableData.every(row => {
        return this.colHeads.every(colHead => row[colHead.prop] === true)
      })
      this.updateHeader(isAllChecked)
    },
  },
  methods: {
    toggleCheckbox(row, index) {
      // check if is all checked
      let isAllChecked = true
      const rightPropMap = generateRow(this.colHeads, true)

      for (let key in row) {
        if (rightPropMap[key] && !row[key]) {
          isAllChecked = false
          break
        }
      }

      const newRow = deepClone(row, {
        selected: isAllChecked,
      })

      this.$set(this.tableData, index, newRow)
    },
    toggleSelectRow(row, index) {
      const newRow = deepClone(row, {
        ...generateRow(this.colHeads, row.selected),
        selected: row.selected,
      })

      this.$set(this.tableData, index, newRow)
    },
    updateHeader(isAllChecked) {
      this.selectedAll = isAllChecked

      if (this.$refs.table && this.$refs.table.$refs.tableHeader) {
        this.$refs.table.$refs.tableHeader.$forceUpdate()
        /**
         * 点选任何 checkbox 都会触发。会返回更新后的 `tableData` 对象
         *
         * @event select
         * @type {object}
         */
        this.$emit('select', this.tableData)
      }
    },
    toggleSelectAll(selectedAll) {
      this.tableData.forEach((row, index) => {
        const newRow = deepClone(row, {
          ...generateRow(this.colHeads, selectedAll),
          selected: selectedAll,
        })

        this.$set(this.tableData, index, newRow)
      })
    },
  },
}
</script>

<style scoped>
.table-border {
  border: 1px solid #ebeef5;
}
</style>
