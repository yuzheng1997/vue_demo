<template>
  <div id="login">
    <el-form>
      <el-row style="text-align: center">
        <h3>登录</h3>
      </el-row>
      <el-row>
            <el-form-item>
              <el-input placeholder="用户名"></el-input>
            </el-form-item>
      </el-row>
      <el-row>
          <el-form-item>
            <el-input show-password placeholder="密码"></el-input>
          </el-form-item>
      </el-row>
      <el-row>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>

<style>
  #login {
    border-radius: 2%;
    text-align: center;
    background-color: #FFFFCC;
    border: azure 1px;
    position: absolute;
    width: 400px;
    height: 500px;
    margin: -250px 0 0 -200px ;
    left: 50%;
    top: 50%;
  }
  .el-button {
    width: 300px;
    background-color: #CCFFFF;
  }
  .el-button:hover {
    background-color: #99CCFF;
  }
  .el-input {
    width: 300px;
  }
</style>
