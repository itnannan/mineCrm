<template>
	<li>
		<template v-if="haschildren">
			<h3>{{sidebar.cname}}</h3>
			<sidebar v-for="item in sidebar.children" :key="item.cname" :sidebar="item"></sidebar>
		</template>
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
	
</style>