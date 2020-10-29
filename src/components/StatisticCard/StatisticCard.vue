<template>
  <div>
    <div class="name">{{ name }}</div>
    <div class="num">{{ formateNum }}</div>
    <div :class="['rate', inline ? 'inline' : '']">
      <div class="item item1" v-for="(rate, index) of rates" :key="index">
        {{ rate.name }}
        <span :class="rate.rate > 0 ? 'red' : 'green'">
          <i
            :class="
              rate.rate > 0 ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
            "
          ></i>
          {{ rate.rate }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@femessage/element-ui'

export default {
  name: 'StatisticCard',
  components: {
    [Icon.name]: Icon,
  },
  props: {
    /**
     * 标题
     */
    name: {
      type: String,
      default: '-',
    },
    /**
     * 统计数值
     */
    num: {
      type: [Number, String],
    },
    /**
     * 对比值数组
     *
     * 数组每项都包含 name 和 prop 属性
     *
     * @param name string 对比名称
     * @param rate string | number 数值。大于 0 则表示上涨，小于 0 表示下跌
     */
    rates: {
      type: Array,
      default: () => [],
      validator(rates) {
        const props = ['name', 'rate']
        return rates.every(rate => props.every(prop => prop in rate))
      },
    },
    /**
     * 是否同一行展示
     */
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formateNum() {
      const { num } = this
      if (typeof num === 'number') {
        return num.toLocaleString()
      }
      return num
    },
  },
}
</script>

<style lang="less" scoped>
.name {
  color: #9ca6c7;
  line-height: 1.5;
  margin-bottom: 10px;
}

.num {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
}

.green {
  color: #67c23a;
}

.red {
  color: #eb5757;
}

.item {
  color: #9ca6c7;
}

.item1 {
  margin-bottom: 10px;
}

.inline {
  display: flex;

  .item {
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
