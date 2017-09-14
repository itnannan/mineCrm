<template>
  <div class="mid clearfix">
    <ul class="mid-ul">
      <sidebar :sidebar="items">
      </sidebar>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './sidebar'
export default {
  data () {
    return {
    }
  },
  props:{
    items: Object
  },
  created(){
  },
  components:{
    sidebar
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
