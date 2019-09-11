<template>
  <div class="header">
    <div class="log">这是一个log</div>
    <div class="link">首页</div>
    <User></User>
  </div>
</template>

<script>
import User from '@/pages/index/User.vue'
export default {
  name: 'header.vue',
  components: {
    User
  }
}
</script>

<style scoped>
  font {
    font-size: 3em;
  }
  div {
    float: left;
  }
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #DDF0ED;
  }
  .link {
    text-align: center;
    width: 60px;
    cursor: pointer;
    float: right;
  }
</style>
