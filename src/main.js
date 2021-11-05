import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import {routes} from './routes'
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
