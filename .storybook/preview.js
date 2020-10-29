import Vue from 'vue'
import ElementUI from '@femessage/element-ui'
import '@femessage/element-ui/lib/theme-chalk/index.css'
// for preview
import 'tailwindcss/dist/tailwind.min.css'

Vue.use(ElementUI)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'rgba(63, 131, 249, 0.05)' },
      { name: 'black', value: '#081528' },
    ],
  },
}
