<template>
  <div class="container" @click="flip">
      <div class="front" ref="front" :style="{transform: frontRotateY}">
        <img :src="imgUrl">
      </div>
      <div class="back" ref="back" :style="{transform: backRotateY}">
        哈皮
      </div>
  </div>
</template>

<script>
export default {
  name: 'imgComp.vue',
  props: {
    imgUrl: {
      type: String,
      require: true
    },
    flag: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      frontRotateY: '',
      backRotateY: ''
    }
  },
  methods: {
    flip () {
      if (this.flag) {
        if (this.frontRotateY === '' || this.frontRotateY === 'rotateY(0deg)') {
          this.frontRotateY = 'rotateY(180deg)'
          this.backRotateY = 'rotateY(0deg)'
        } else {
          this.frontRotateY = 'rotateY(0deg)'
          this.backRotateY = 'rotateY(-180deg)'
        }
      }
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
    transition: transform 1s;
    backface-visibility: hidden;
    box-shadow: 0px 0px 5px #42b983;
    height: 200px;
    width: 300px;
  }
  .back {
    transform: rotateY(-180deg);
    background-color: aqua;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .container {
    height: 200px;
    width: 300px;
    perspective: 2500px;
  }
</style>
