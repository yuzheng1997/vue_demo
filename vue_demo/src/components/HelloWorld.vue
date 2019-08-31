<template>
  <div class="hello">
    <div
      class="imgComp"
      @click="change(item)"
      v-for="item in 10" :key="'hello' + item"
      :style="{left: lefts[item], top: tops[item],transform: trans[item],margin: margins[item]}">
        <img-comp :imgUrl="imgUrl" :flag="flags[item]">
        </img-comp>
    </div>
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
      flags: [],
      lefts: [],
      tops: [],
      trans: [],
      margins: [],
      screenWidth: document.body.clientWidth,
      imgUrl: require('../assets/kankan.jpg')
    }
  },
  methods: {
    getLeft () {
      let maxHeight = 500
      let maxWidth = this.screenWidth
      for (let item = 1; item <= 10; item++) {
        if (item <= 5) {
          this.$set(this.lefts, item, Math.round(Math.random() * (maxWidth / 2 - 500) + 30) + 'px')
          this.$set(this.trans, item, 'rotate(' + Math.round(Math.random() * 360) + 'deg)')
          this.$set(this.tops, item, Math.round(Math.random() * maxHeight) + 90 + 'px')
          this.$set(this.margins, item, '')
          this.$set(this.flags, item, false)
        } else {
          let w = Math.round(Math.random() * (maxWidth / 2 - 500))
          this.$set(this.lefts, item, (maxWidth - 330 - w) + 'px')
          this.$set(this.trans, item, 'rotate(' + Math.round(Math.random() * 360) + 'deg)')
          this.$set(this.tops, item, Math.round(Math.random() * maxHeight) + 90 + 'px')
          this.$set(this.margins, item, '')
          this.$set(this.flags, item, false)
        }
        console.log(this.lefts)
        // this.lefts[item] = Math.round(Math.random() * (maxWidth / 2 - 500) + 30) + 'px'
      }
    },
    // getTop () {
    //   let maxHeight = 500
    //   for (let item = 1; item <= 5; item++) {
    //     this.$set(this.tops, item, Math.round(Math.random() * maxHeight) + 90 + 'px')
    //     // this.tops[item] = Math.round(Math.random() * maxHeight) + 90 + 'px'
    //   }
    // },
    // getRotate () {
    //   for (let item = 1; item <= 5; item++) {
    //     this.$set(this.trans, item, 'rotate(' + Math.round(Math.random() * 360) + 'deg)')
    //     console.log('rotate(' + Math.round(Math.random() * 360) + 'deg)')
    //   }
    // },
    change (val) {
      if (!this.flags[val]) {
        this.getLeft()
        this.setCentre(val)
      }
    },
    setCentre (val) {
      this.$set(this.tops, val, '50%')
      this.$set(this.lefts, val, '50%')
      this.$set(this.trans, val, 'rotate(0deg)')
      this.$set(this.margins, val, '-100px 0 0 -150px')
      this.$set(this.flags, val, true)
    }
  },
  created () {
    this.getLeft()
    this.setCentre(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
    height: 100%;
    background: #42b983;
  }
  .imgComp {
    position:absolute; /*绝对定位*/
    transition: 0.5s;
    /*top:50%; !*距顶部50%*!*/
    /*left:60%;*/
    /*margin: -150px 0 0 -240px;*/
  }
</style>
