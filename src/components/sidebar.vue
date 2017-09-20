<template>
	<li class="sidebar-item">
		<ul v-if="haschildren">
			<h3 class="sidebar-itemH">{{sidebar.cname}}</h3>
			<sidebar v-for="item in sidebar.children" :key="item.cname" :sidebar="item"></sidebar>
		</ul>
		<template v-else>
			<router-link :to="sidebar.$cpath">{{sidebar.cname}}</router-link>
		</template>
	</li>
</template>
<script>
	export default {
		name: 'sidebar',
		data(){
			return {
			}
		},
		computed:{
			haschildren(){
				return this.sidebar && this.sidebar.children && this.sidebar.children.length > 0
			}
		},
		props:{
			sidebar:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		created(){
		},
		methods:{
			routeTo(sidebar){
				this.$router.push({path:sidebar.path})
			}
		}
	}
</script>
<style>
	.sidebar-item{
		font-size:14px;
		color:#333;
	}
	.sidebar-item .sidebar-itemH{
		font-size: 16px;
		color:#666666;
		font-weight: bold;
		padding-top:20px;
	}
	.sidebar-item .sidebar-item {
		width:110px;
		padding:5px 0;
	}
	.sidebar-item .sidebar-item a{
		display:block;
		height:32px;
		line-height:32px;
		padding-left:10px;
	}
	.sidebar-item .sidebar-item .sidebar-itemH{
		color:#666;
		font-size:14px;
		padding-top:10px;
	}
	.sidebar-item .sidebar-item .sidebar-item{
		padding-left:10px;
		line-height:24px;
	}
	.t-active{
		color:#fff;
		background:#dc2828;
	}
</style>