<template>
  <div class="background" @click="flip">
    <transition>
      <div class="front">
        <img :src="imgUrl">
      </div>
      <div class="back">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'imgComp.vue',
  props: {
    imgUrl: {
      type: String,
      require: true
    }
  },
  methods: {
    flip (el) {
      console.log(el)
      this.overturn(el)
    },
    overturn (el) {

    }
  }
}
</script>

<style scoped>
  .front,
  .back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    box-shadow: 0px 0px 5px #42b983;
    height: 300px;
    width: 480px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .background {
    transition: transform 2s;
    transform-style: preserve-3d;
    cursor: pointer;
  }
</style>
