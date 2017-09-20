<template>
  <div class="hello mid3">
    <el-breadcrumb separator=">" class="t-breadcrumb">
        <el-breadcrumb-item>您当前所在位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">店铺管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/store/modify' }"> 修改密码</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm mine-form">
        <el-form-item label="原密码" prop="oldpass">
            <el-input v-model="ruleForm2.oldpass" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary el-button--danger" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')" class="cancel">取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
     
     var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }; 
        var validateoldPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      }; 
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          oldpass: ''
        },
        rules2: {
          oldpass: [
            { validator:validateoldPass, trigger: 'blur'}
          ],
          pass: [
            {  validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {  validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mine-form{
        width:500px;
        margin-top:20px;
    }
    .t-breadcrumb{
        border-bottom:2px solid #ccc;
        line-height:28px;
        padding-bottom:10px;
    }
    .el-button--danger{
        background-color: #dc2828;
        border-color: #dc2828;
    }
    .cancel{
        border-color: #dc2828;
        background-color:#fff;
        color:#dc2828;
    }
</style>