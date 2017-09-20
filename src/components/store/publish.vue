<template>
  <div class="hello mid3">
   <el-breadcrumb separator=">" class="t-breadcrumb">
        <el-breadcrumb-item>您当前所在位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/store/publish' }"> 发货地址</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'publish'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .t-breadcrumb{
        border-bottom:2px solid #ccc;
        line-height:28px;
        padding-bottom:10px;
    }
</style>