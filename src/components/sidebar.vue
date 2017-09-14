<template>
	<li>
		<template v-if="haschildren">
			<h3>{{sidebar.name}}</h3>
			<sidebar v-for="item in sidebar.children" :key="item.name" :sidebar="item"></sidebar>
		</template>
		<template v-else>
			<li>{{sidebar.name}}</li>
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
		}
	}
</script>
<style>
	
</style>