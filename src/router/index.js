import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
   mode: 'history',
   linkActiveClass: 't-active',
    routes: [
      {path: '/login',component:  () => import('@/components/404.vue')},
      { path: '/404', component: () => import('@/components/404.vue')}
    ]
})

