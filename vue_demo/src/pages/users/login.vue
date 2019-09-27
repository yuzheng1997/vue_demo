<template>
  <div class="body">
  <div id="login" class="login">
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
            <button @click="login">登录</button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
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
        userId: ''
      }
    }
  },
  computed: {
    userApi () {
      return api.userApi
    }
  },
  methods: {
    login () {
      let $this = this
      this.$store.dispatch('login', this.loginFrom).then(() => {
        $this.$router.push({name: 'index'})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .body {
    width: 100%;
    height: 100%;
   position: absolute;
    background-image: url("../../assets/login.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    /*background-image: url("/src/assets/login.jpg");*/
  }
  #login {
    border-radius: 2%;
    text-align: center;
    background-color: white;
    border: azure 1px;
    position: absolute;
    width: 400px;
    opacity:0.5;
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
    color: white;
    font-size: 16px;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: #003399 1px solid;
    background-color: blue;
    cursor: pointer;
  }
  .el-input {
    width: 300px;
    opacity:0.8;
  }
</style>
