<template>
  <div class="hello">
    <ul class="nav-menu">
      <li v-for="item in routers" class="menu-item" @click="routerTo(item)">{{item.name}}</li>
      <!-- <li class="menu-item active">商品</li>
      <li class="menu-item">施工</li>
      <li class="menu-item">财务</li>
      <li class="menu-item">用户</li> -->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      menu: ''
    }
  },
  created(){
  },
  methods:{
    routerTo(obj){
      
      this.$router.push({path:obj.path})
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
