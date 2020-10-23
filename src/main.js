import Vue from 'vue'
import App from './App.vue'
import {
  Header,
} from '@/components'

Vue.config.productionTip = true

Vue.use(Header)
// Vue.use(Page)

new Vue({
  render: h => h(App),
}).$mount('#app')
