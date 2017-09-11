<template>
  <div class="rightMain">
    <div class="wrapper clearfix">
      <div class="rgLine">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightmain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rightMain{
  height: 100%;
  float: left;
  background:#fff;
}
.wrapper{
  height: 100%;
}
.rightMain .rgLine{
  width: 29px;
  float:left;
  height: 100%;
  background: #e8e8e8;
}
</style>
