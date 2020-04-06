import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import LoggInn from '@/pages/LoggInn'
import Registrer from '@/pages/Registrer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/logginn', name: 'LoggInn', component: LoggInn },
    { path: '/registrer', name: 'Registrer', component: Registrer }
  ]
})
