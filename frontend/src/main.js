import { createApp } from 'vue'
import App from './App.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import 'normalize.css'
import Antd from 'ant-design-vue'

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

components.map(c => app.use(c))
app.config.productionTip = false

app.use(store)
app.use(router)
app.mount('#app')
