<template>
  <div class="hello">
    <yfc-header></yfc-header>
    <ul class="nav-menu">
      <li v-for="(item, index) in routers" @click="routerTo(index)" class="menu-item">
      {{item.cname}}
      </li>
    </ul>
    <div class="mid clearfix">
      <ul class="mid-ul">
        <sidebar :sidebar="routers[index]">
        </sidebar>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routers from '@/router/router'
import sidebar from './sidebar'
import yfcHeader from './main/header'
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
   console.log(this.$router)
  },
  components:{
    sidebar,
    yfcHeader
  },
  methods:{
    routerTo(index){
      
      this.$router.push({path: this.routers[index].path})
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
.mid{
  margin-left: 80px;
  height:100%;
  text-align: left;
  
}

.mid-ul{
   float: left;
   padding-left: 20px;
  width:120px;
  height:100%;
  background:#ffffff;
}
.item-level .leavl-h{
  font-size:14px;
  color:#333;
  font-weight: bold;
  padding:30px 0 16px 0;
}
.mid-ul2 .item-level2{
  font-size: 14px;
  color:#666666;
  padding-bottom: 20px;
}
.mid-ul2 .item-level2:last-child{
  padding-bottom: 0px;
}
</style>
