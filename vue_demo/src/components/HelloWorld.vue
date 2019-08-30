<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img-comp :imgUrl="imgUrl"></img-comp>
    <button @click="clickBtn1">点我点我</button>
    <transition name="demo1">
<!--      <div v-if="showDemo1">aaaa</div>-->
      <img v-if="showDemo1" :src="imgUrl"/>
    </transition>
  </div>
</template>

<script>
import imgComp from '@/components/imgComp.vue'
export default {
  name: 'HelloWorld',
  components: {
    imgComp
  },
  data () {
    return {
      showDemo1: true,
      imgUrl: require('../assets/kankan.jpg'),
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  methods: {
    clickBtn1 () {
      this.showDemo1 = !this.showDemo1
    }
  },
  created () {
    this.$store.commit('setName', '抗秃青年小鱼')
    this.name = this.$store.getters.getName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo1-enter-active,
  .demo1-leave-active {
    transform: rotateY(180deg);
  }
  .demo1-enter,
  .demo1-leave-to {
    opacity: 0;
  }
</style>
