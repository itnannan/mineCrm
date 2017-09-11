<template>
  <div class="mid clearfix">
    <ul class="mid-ul">
      <li class="item-level">
        <h3 class="leavl-h" @click="routeTo">交易管理</h3>
        <ul class="mid-ul2">
          <li class="item-level2">商城订单</li>
          <li class="item-level2">订单查询与跟踪</li>
          <li class="item-level2">订单查询与跟踪</li>
          <li class="item-level2">订单查询</li>
        </ul>
      </li>
      <li class="item-level">
        <h3 class="leavl-h">交易管理2</h3>
        <ul class="mid-ul2">
          <li class="item-level2">商城订单</li>
          <li class="item-level2">订单查询与跟踪</li>
        </ul>
      </li>
      <li class="item-level">
        <h3 class="leavl-h">交易管理3</h3>
        <ul class="mid-ul2">
          <li class="item-level2">订单查询与跟踪</li>
          <li class="item-level2">订单查询</li>
        </ul>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path:'',
      children:{}
    }
  },
  beforeRouteEnter(to, from, next){
    //this.path = to.path.substring(1)
    next()
  },
  created(){
    console.log(this.path)
  },
  methods:{
    routeTo(){
      this.$router.push({path:'aaa'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
