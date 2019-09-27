<template>
  <div class="user">
    <el-popover
      placement="bottom"
      trigger="click">
      <div>
        <div style="height: 200px;width: 300px">
          <div class="touxiang">
            <img style="width: 100%;height: 100%" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          </div>
          <div class="userInfo">
            <el-form ref="form" :model="form" label-width="50px">
              <el-form-item label="昵称:">
                <span>{{form.username}}</span>
              </el-form-item>
              <el-form-item label="职业:">
                <span>{{form.profession}}</span>
              </el-form-item>
            </el-form>
          </div>
          <div style="float: bottom">
          </div>
        </div>
        <div style="float: right">
          <span style="cursor: pointer">退出</span>
        </div>
      </div>

      <el-avatar slot="reference" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar"></el-avatar>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      form: {
        username: 'yuz',
        profession: '学生'
      }
    }
  }
}
</script>

<style scoped>
  .el-form-item {
     margin-bottom: 0px;
  }
  .user {
    height: 60px;
    float: right;
    margin-right: 30%;
  }
  .avatar {
    cursor: pointer;
    margin: 10px 0px 0px 0px;
  }
 .touxiang {
   float: left;
   border: 1px solid #99a9bf;
   width: 80px;
   height: 80px;
 }
  .userInfo {
    margin-left: 20px;
    width: 190px;
    float: left;
  }
</style>
