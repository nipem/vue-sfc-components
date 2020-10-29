# how to write component

## Cav

业务组件都依赖于基础组件，为了减少组件包大小，打包时会将基础组件作为外部扩展。

但在开发组件过程中，仍建议手动引入引用的基础组件库。

示例：

```vue
<template>
  <div>
    <!-- 使用了基础组件 Table, TableColumn, Checkbox -->
  </div>
</template>

<script>
import { Table, TableColumn, Checkbox } from '@femessage/element-ui'

export default {
  // ...
}
</script>
```

## Using JSDoc tags

You can use JSDoc tags when documenting components, props and methods.

### Props

```js
export default {
  props: {
    /**
     * Color of the button.
     */
    color: {
      type: String,
      default: '#FCC'
    },
    /**
     * initial value to be passed but undocumented
     * @ignore
     */
    initialvalue: {
      type: Number,
      default: 0
    },
    /**
     * The size of the button allows only some values
     * @values small, medium, large
     */
    size: {
      default: 'normal'
    }
  }
}
```

### Events

```js
export default {
  methods: {
    emitSuccess() {
      /**
       * Success event.
       *
       * @event success
       * @property {string} content content of the first prop passed to the event
       * @property {object} example the demo example
       */
      this.$emit('success', content, {
        demo: 'example'
      })
    }
  }
}
```

### Slots

```html
<template>
  <div>
    <!-- @slot Use this slot header -->
    <slot name="header"></slot>

    <!--
      @slot Modal footer
      @binding item an item passed to the footer
		-->
    <slot name="footer" :item="item" />
  </div>
</template>
```

### Full Example

For the following component

```vue
<template>
  <div>
    <!-- @slot Use this slot header -->
    <slot name="header"></slot>

    <table class="grid">
      <!-- -->
    </table>

    <!--
      @slot Modal footer
      @binding item an item passed to the footer
		-->
    <slot name="footer" :item="item" />
  </div>
</template>

<script>
import { text } from './utils'

/**
 * This is an example of creating a reusable grid component and using it with external data.
 * @version 1.0.5
 * @author [Rafael](https://github.com/rafaesc92)
 * @since Version 1.0.1
 */
export default {
  name: 'grid',
  props: {
    /**
     * object/array defaults should be returned from a factory function
     * @version 1.0.5
     * @since Version 1.0.1
     * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
     * @link See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
     */
    msg: {
      type: [String, Number],
      default: text
    },
    /**
     * Model example
     * @model
     */
    value: {
      type: String
    },
    /**
     * describe data
     * @version 1.0.5
     */
    data: [Array],
    /**
     * get columns list
     */
    columns: [Array],
    /**
     * filter key
     * @ignore
     */
    filterKey: {
      type: String,
      default: 'example'
    }
  },
  data() {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return (
              String(row[key]).toLowerCase().indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    /**
     * Sets the order
     *
     * @public
     * @version 1.0.5
     * @since Version 1.0.1
     * @param {string} key Key to order
     * @returns {string} Test
     */
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1

      /**
       * Success event.
       *
       * @event success
       * @type {object}
       */
      this.$emit('success', {
        demo: 'example'
      })
    },

    hiddenMethod: function () {}
  }
}
</script>
```

### docs

- [vue-docgen-api](https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/packages/vue-docgen-api) 官方文档
- [demos](https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/packages/vue-docgen-api/tests/components) 组件示例
