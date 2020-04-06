// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'

import router from './router'
import VueMDCAdapter from 'vue-mdc-adapter'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueMDCAdapter)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
