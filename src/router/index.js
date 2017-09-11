import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example from '@/components/example'
import Table from '@/components/example/table'
import Layout from '@/components/main/Layout'
Vue.use(Router)

export default new Router({
 	mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello,
      children:[
        {
          path: '*',
          component: Example,
          children:[
            {
              path: '',
              component: Layout
            }
          ]
        }
      ]
    },
    { path: '/404', component: () => import('@/components/404.vue')}
  ]
})

