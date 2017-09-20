<template>
  <div class="hello mid3">
    <el-breadcrumb separator=">" class="t-breadcrumb">
        <el-breadcrumb-item>您当前所在位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/store/open' }"> 开户信息</el-breadcrumb-item>
    </el-breadcrumb>
   <div class="">
        <div class="t-company clearfix">
            <span class="com-name">公司名称：</span>
            <span class="com-text">恒润集团有限公司</span>
        </div>
        <el-form  label-width="120px" :model="formLabelAlign" >
            <el-form-item label="开户银行：">
                <el-input v-model="formLabelAlign.bank" class="input-width"></el-input>
            </el-form-item>
            <el-form-item label="开户名称：">
                <el-input v-model="formLabelAlign.name"  class="input-width"></el-input>
            </el-form-item>
            <el-form-item label="开户帐号：">
                <el-input v-model="formLabelAlign.number"  class="input-width"></el-input>
            </el-form-item>
            <el-form-item label="开户许可证：">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="formLabelAlign.imageUrl" :src="formLabelAlign.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary el-button--danger" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')" class="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        <div class="t-warning">
           温馨提示：为了不影响平台与你结算，请正确上传对公帐号信息以及开户许可证！
        </div>
    </div> 
  </div>
  
</template>

<script>
export default {
  data () {
    return {
     formLabelAlign: {
          bank: '',
          name: '',
          number: '',
          imageUrl: ''
        }
    }
  },
  methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(file.raw)
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return  isLt2M;
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
    .input-width{
        width:300px;
    }
    .t-company{
        padding-top:20px;
        margin-bottom:20px;
    }
    .t-company .com-name{
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #48576a;
        line-height: 1;
        padding: 11px 12px 11px 0;
        box-sizing: border-box;
        width:120px;
    }
    .t-company .com-text{
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #48576a;
        line-height: 1;
        padding: 11px 12px 11px 0;
        box-sizing: border-box;
    }
    
    .avatar-uploader .el-upload {
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        border:1px dashed #ccc;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }  
    .t-warning{
        font-size:14px;
        padding-left:20px;
    }   
    .el-form-item{
        margin-bottom:0;
        padding-bottom:20px;
    } 
</style>