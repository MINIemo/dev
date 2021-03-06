import Vue from 'vue'
import App from './App'
import api from './utils/api'
import store from './store/store'
Vue.prototype.$api = api
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()
