<template>
  <div class="hello">
    <ul class="nav-menu">
      <li v-for="(item, index) in routers" @click="routerTo(index)" class="menu-item">
      {{item.name}}
      </li>
    </ul>
    <example :items="routers[index]"></example>
  </div>
</template>

<script>
import routers from '@/router/router'
import example from './example'
export default {
  name: 'hello',
  data () {
    return {
      routers: routers.router,
      index: 0
    }
  },
  computed:{
    items(){
      return this.routers[this.index]
    }
  },
  created(){
   
  },
  components:{
    example
  },
  methods:{
    routerTo(index){
      this.index = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  width: 100%;
}
.nav-menu{
  width: 80px;
  overflow: hidden;
  height: 100%;
  float: left;
  background: #33363f;
  position: fixed;
  top:0;
  left:0;
}
.nav-menu .menu-item{
  font-size: 14px;
  line-height: 80px;
  color:#fff;
}
.nav-menu .active{
  background: #fff;
  color:#dc2828;
}

</style>
