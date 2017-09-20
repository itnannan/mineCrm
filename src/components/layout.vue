<template>
  <div class="layout">
    <yfc-header></yfc-header>
    <ul class="nav-menu">
      <li v-for="(item, index) in routers" @click="routerTo(index)" class="menu-item"  :class="{active:selected==index}">
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
  name: 'layout',
  data () {
    return {
      routers: routers.router,
      index: 0,
      selected:0
    }
  },
  computed:{
    items(){
      return this.routers[this.index]
    }
  },
  created(){
    const path = this.$route.path.split('/')[1]
    this.routers.forEach((item, index)=>{
      if(item.path.substring(1) == path){
        this.selected = index
        this.index = index
      }
    })
    console.log(this.selected)
  },
  components:{
    sidebar,
    yfcHeader
  },
  methods:{
    routerTo(index){
      this.$router.push({path: this.routers[index].path})
      this.index = index
      this.selected = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  width: 100%;
  height:100%;
  position:relative;
}
.nav-menu{
  width: 80px;
  overflow: hidden;
  height: 100%;
  float: left;
  background: #33363f;
  position: fixed;
  top:80px;
  left:0;
  overflow-x:hidden;
}
.nav-menu .menu-item{
  font-size: 14px;
  line-height:45px;
  color:#fff;
  cursor:pointer;
}
.nav-menu .menu-item.active{
  font-size: 14px;
  line-height:45px;
  color:#dc2828;
  cursor:pointer;
  background:#fff;
}
.nav-menu .active{
  background: #fff;
  color:#dc2828;
}
.mid{
 position:absolute;
 text-align: left;
 top:80px;
 right:0;
 width: auto;
 overflow: hidden;
 box-sizing: border-box;
 left:80px;
 bottom:20px;
}

.mid-ul{
  position:fixed;
  float: left;
  padding-left: 20px;
  width:120px;
  height:100%;
  background:#ffffff;
  border-right:20px solid #33363f;
}

.mid3{
  margin-left:160px;
  background:#fff;
  padding:20px 0 0 20px;
  height:100%;
  overflow:hidden;
  overflow-y:auto;
  box-sizing:border-box;
}
 .mine-form{
  width:500px;
  margin-top:20px;
}
.t-breadcrumb{
    border-bottom:2px solid #ccc;
    line-height:28px;
    padding-bottom:10px;
}
</style>
