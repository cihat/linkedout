import { createApp } from 'vue'
import App from './App.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import 'normalize.css'
import AuthLayout from './layouts/AuthLayout.vue'
import FeedLayout from './layouts/FeedLayout.vue'
import './assets/styles/index.scss'
// import 'ant-design-vue/dist/antd.css'

import {
  Layout,
  Button,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Input,
  Alert,
  Tag,
} from 'ant-design-vue'

const components = [
  Layout,
  Button,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Input,
  Alert,
  Tag,
]

const app = createApp(App)

app.directive('click-outside', {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: el => {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})

app.config.productionTip = false
components.map(c => app.use(c))

app.component('auth-layout', AuthLayout)
app.component('feed-layout', FeedLayout)
app.use(store)
app.use(router)
app.mount('#app')
