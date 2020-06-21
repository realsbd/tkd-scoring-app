import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import referee from './components/referee'
import option from './components/option'
import score from './components/score'
import players from './components/players'
import server from './components/server'
import sudden from './components/sudden'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: score },
    {path: '/referee', component: referee },
    {path: '/option', component: option },
    {path: '/players', component: players },
    {path: '/server', component: server },
    {path: '/sudden', component: sudden },
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
