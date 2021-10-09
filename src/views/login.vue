<template>
  <div class="login_box">
    <span class="title"> 登&nbsp;&nbsp;&nbsp;&nbsp;录 </span>
    <div class="form_box">
      <el-form
        label-width="80px"
        :model="param"
        class="form_table"
      >
        <el-form-item label="用户名:" style="">
          <el-input v-model="param.username" style="width:85%;float:left" placeholder="这里是用户名哦"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input type="password" v-model="param.password" style="width:85%;float:left"  placeholder="嘘...这里是密码"></el-input>
        </el-form-item>
        <el-button type="primary" round  @click="login()" >GO!</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        param:{
            username:"",
            password:"",

        }
    };
  },
  methods:{
    login(){
      let req = {
        "userName" : this.param.username,
        "password" : this.param.password
      }
      this.$axios.post('/teacher/system/login',
      req).then(res => {
             if(res.data.rspCode === '0000'){
               sessionStorage.setItem("token",res.data.rspData.token)
               sessionStorage.setItem("teacherInfo",JSON.stringify(res.data.rspData.teacherInfo))
               this.$router.push("welcome");
              this.$message.success("登录成功!");
            }else{
                this.$message.warning("登录失败！");
            }
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login_box {
  width: 100vw;
  height: 100vh;
//   background-color: #87cefa;
  background-image: url("../static/images/bk1.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @top_hight: 30vh;

  .title {
    font-size: 2.2em;
    font-weight: bold;
  }

  .form_box {
    width: 80vw;
    height: 30vh;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 5px;
    .form_table{
        margin-top:15%;
        font-weight: bold;
        /deep/ .el-form-item__label{
            font-size: 1.1em;
        }
    }

    input{
        width: 20px;
    }
  }
}
</style>

