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