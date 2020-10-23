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

export default {
  name: 'TableCheckbox',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Checkbox.name]: Checkbox,
  },
  props: {
    head: {
      type: String,
      default: '表头',
    },
    colHeads: {
      type: Array,
      default: () => [],
      validator(items) {
        return items.every(item => item.name && item.prop)
      },
    },
    tableData: {
      type: Array,
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
  created() {},
  methods: {
    toggleCheckbox(row, index) {
      let isAllChecked = true
      for (let key in row) {
        const isRight = ['name', 'selected'].indexOf(key) === -1
        const checked = row[key]
        if (isRight && !checked) {
          isAllChecked = false
          break
        }
      }

      const newRow = this.colHeads.reduce(
        (acc, colHead) => {
          acc[colHead.prop] = row[colHead.prop]
          return acc
        },
        {
          name: row.name,
          selected: isAllChecked,
        }
      )

      this.$set(this.tableData, index, newRow)
    },
    toggleSelectRow(row, index) {
      const newRow = this.colHeads.reduce(
        (acc, colHead) => {
          acc[colHead.prop] = row.selected
          return acc
        },
        {
          name: row.name,
          selected: row.selected,
        }
      )

      this.$set(this.tableData, index, newRow)
    },
    updateHeader(isAllChecked) {
      this.selectedAll = isAllChecked

      if (this.$refs.table && this.$refs.table.$refs.tableHeader) {
        this.$refs.table.$refs.tableHeader.$forceUpdate()
        this.$emit('select', this.tableData)
      }
    },
    toggleSelectAll(selectedAll) {
      this.tableData.forEach((row, index) => {
        const newRow = this.colHeads.reduce(
          (acc, colHead) => {
            acc[colHead.prop] = selectedAll
            return acc
          },
          {
            name: row.name,
            selected: selectedAll,
          }
        )

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
