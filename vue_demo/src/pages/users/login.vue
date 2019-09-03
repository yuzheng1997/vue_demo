<template>
  <div id="login">
    <div class="LoginForm">
      <el-form>
        <el-row>
          <el-form-item>
            <el-input
              v-model="loginFrom.username"
              prefix-icon="el-icon-user"
              placeholder="用户名"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item>
            <el-input
              v-model="loginFrom.password"
              prefix-icon="el-icon-lock"
              show-password
              placeholder="密码"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item>
            <button @click="fnLogin">登录</button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from '@/api/api.js'
export default {
  name: 'login',
  data () {
    return {
      loginFrom: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    userApi () {
      return api.userApi
    }
  },
  methods: {
    fnLogin () {
      this.userApi.login(this.loginFrom).then(res => {
        if (res && res.data) {
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style>
  body {
    background-color: black;
  }
  #login {
    border-radius: 2%;
    text-align: center;
    background-color: white;
    border: azure 1px;
    position: absolute;
    opacity:0.8;
    width: 400px;
    height: 500px;
    margin: -250px 0 0 -200px ;
    left: 50%;
    top: 50%;
  }
  .LoginForm {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: #003399 1px solid;
    background-color: #003399;
    opacity:0.8;
    cursor: pointer;
  }
  .el-input {
    width: 300px;
    opacity:0.8;
  }
</style>
