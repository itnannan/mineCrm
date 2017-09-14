import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example from '@/components/example'

Vue.use(Router)

export default new Router({
 	mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    { path: '/404', component: () => import('@/components/404.vue')}
  ]
})

