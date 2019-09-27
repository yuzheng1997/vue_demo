<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          router
          class="el-menu-vertical-demo">
          <el-menu-item v-for="(it, index) in router" :index="it.path" :key="index">
            <span slot="title">{{it.label}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
    let ls = window.localStorage
    let status = parseInt(ls.getItem('status'))
    if (status === 0) {
      this.router = [
        {path: 'search', label: '搜索'},
        {path: 'userSearch', label: '已参加'}
      ]
    } else {
      this.router = [
        {path: 'search', label: '搜索'},
        {path: 'itembank', label: '试题库'}
      ]
    }
  },
  data () {
    return {
      router: ['search']
    }
  },
  methods: {
  }
}
</script>

<style>
  .el-menu-vertical-demo {
    height: 700px;
  }
</style>
