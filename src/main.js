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
router.beforeEach((to, from, next) => {
	Vue.prototype.routers = [
		{
			"path": "example",
			"name": "综合实例",
			"children": [
			{
				"path": "table",
				"name": "Table",
				"children": [
				{ "path": "dynamictable",  "name": "动态table" },
				{ "path": "dragtable",  "name": "拖拽table" },
				{ "path": "inline_edit_table",  "name": "table内编辑" }
				]
			},
			
			{ "path": "index",   "name": "Tab" }
			]
		},
		{
			"path": "table",
			"name": "综合111实例",
			"children": [
			{
				"path": "table",
				"name": "Table",
				"children": [
				{ "path": "dynamictable",  "name": "动态table" },
				{ "path": "dragtable",  "name": "拖拽table" },
				{ "path": "inline_edit_table",  "name": "table内编辑" }
				]
			},
			
			{ "path": "index",   "name": "Tab" }
			]
		}]
	next()
	/* if(isAdd){
		next()
	}else{
		if(to.path === '/login'){  //如果进入 login 页面 不需要 请求路由
			next({ path: '/' })
		}else{
			//请求路由
			axios.get('/api/router/router')
				.then( (res) => {
					isAdd = true
					let data = res.data.router
					formatRouter(data)
					data.push({path:'*', redirect: '/404'})
					console.log(data)
					
					router.addRoutes(data)
					console.log(router)
						
					next({...to})
				})
				.catch( (err) => {
					console.log(err)
				})
		}
	} */
})


//遍历 动态路由 
const formatRouter = function (arr, path){
	for (let i = 0; i < arr.length; i++) {
		//arr[i].component =  (() => import('@/components/Hello'))
		if ( arr[i].children && arr[i].children.length ) {
			formatRouter(arr[i].children)
		}else{
			arr[i].component = () => import('@/components/' + arr[i].path + '.vue')
		}
	}
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})