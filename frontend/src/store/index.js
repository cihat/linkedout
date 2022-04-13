import { createStore } from 'vuex'
import axios from 'axios'
import account from './account'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async fetchUsers() {
      return (await axios.get('/api/account')).data
    },
  },
  modules: {
    account,
  },
})
