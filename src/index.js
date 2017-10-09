import Vue from 'vue'
import App from './components/App.vue'
import store from './components/store.js'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './components/Routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
