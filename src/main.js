import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn, Checkbox, Icon } from '@femessage/element-ui'
import '@femessage/element-ui/lib/theme-chalk/index.css'
// for preview
import 'tailwindcss/dist/tailwind.min.css'

import { StatisticCard, TableCheckbox } from '@/components'

Vue.config.productionTip = false

// import base component
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Icon.name, Icon)

// import business component
Vue.component(StatisticCard.name, StatisticCard)
Vue.component(TableCheckbox.name, TableCheckbox)

new Vue({
  render: h => h(App),
}).$mount('#app')
