// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import TokenInterceptor from '../src/interceptor/TokenInterceptor';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

axios.defaults.baseURL = '/website/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
/* eslint-disable no-new */
Vue.prototype.$axios = axios;

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
