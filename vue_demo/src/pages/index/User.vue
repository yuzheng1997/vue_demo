<template>
  <div class="user">
    <el-popover
      placement="bottom"
      trigger="click">
      <el-avatar slot="reference" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar"></el-avatar>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'user.vue'
}
</script>

<style scoped>
  .user {
    height: 60px;
    float: right;
    margin-right: 30%;
  }
  .avatar {
    margin: 10px 0px 0px 0px;
  }

</style>
