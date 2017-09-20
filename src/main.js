// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './styles/common.css';
//import 'assets/custom-theme/index.css'; // 换肤版本element-ui css

Vue.config.productionTip = false
Vue.use(ElementUI);
let isAdd = false
import anycRouter from '@/router/router' 

router.beforeEach((to, from, next) => {
	if (isAdd) { 
		next()
	} else {
		isAdd = true
		const routerArr = formatRouter(anycRouter.router,'', 0)
		routerArr.push({
			path: '/',
			redirect: anycRouter.router[0].$cpath
		})
		console.log(routerArr)
		router.addRoutes([
			{
				path:'/',
				component: () => import('@/components/layout.vue'),
				redirect: routerArr[0].path,
				children: routerArr
			}
		]) 
		next({...to})
	}
  });

//遍历 动态路由 
const res = []
let index = 0
const formatRouter = function (arr, path, map){
	map++
	for (let i = 0; i < arr.length; i++) {
		arr[i].$cpath = path + '/' + arr[i].path
		
		if ( arr[i].children && arr[i].children.length ) {
			res.push({
				path: arr[i].$cpath,
				redirect: arr[i].$cpath + '/' + arr[i].children[0].path
			})
			formatRouter(arr[i].children, arr[i].$cpath, map)
		}else{
			res.push({
				path: arr[i].$cpath,
				component: () => import('@/components' + arr[i].$cpath + '.vue')
			})
		}
		if(map == 1){
			arr[i].path = '/' + arr[i].path
			arr[i].index = index++
		}
	}
	return res
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})