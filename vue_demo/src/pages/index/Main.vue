<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/pages/index/Header.vue'
export default {
  name: 'main.vue',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
