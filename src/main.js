import Vue from 'vue'
import App from './App.vue'
import { Header, TableCheckbox } from '@/components'

Vue.config.productionTip = false

Vue.component(Header.name, Header)
Vue.component(TableCheckbox.name, TableCheckbox)

new Vue({
  render: h => h(App),
}).$mount('#app')
