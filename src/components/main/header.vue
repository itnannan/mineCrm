<template>
  <div class="header clearfix">
    <div class="logo">
      <i class="logo_bg"></i>
      <span class="logo_text">后台管理</span>
    </div>
    <div class="head-right">
      <img src="">
      <a href="javascript:;" class="head_name">呵呵哒</a>
      <a href="javascript:;" class="head_resign">修改密码</a>
      <a href="javascript:;" class="logout">退出</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height:80px;
  background:#dc2828;
}
.logo{
  float:left;
}
.logo_bg{
  width:160px;
  height:50px;
  float:left;
  background:#fff;
  margin-left:20px;
  margin-top:10px;
}
.logo .logo_text{
  float:left;
  font-size:22px;
  line-height:80px;
  margin-left:10px;
  color:#fff;
}
.head-right{
  float:right;
  line-height:80px;
  font-size:14px;
}
.head-right .head_name{
  float:left;
  margin-right:40px;
  color:#fff;
}
.head-right .head_resign{
  float:left;
  margin-right:20px;
  color:#fff;
}
.head-right .logout{
  float:left;
  margin-right:20px;
  color:#fff;
}


</style>
