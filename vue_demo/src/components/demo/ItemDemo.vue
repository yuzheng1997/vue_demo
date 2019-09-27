<template>
  <div>
    <div class="item" style="height:50px;line-height: 50px;margin-right: 10px">
      <el-checkbox v-model="checked" @change="changed"></el-checkbox>
    </div>
    <div class="item" style="width: 90%">
      <el-collapse>
        <el-collapse-item title="a" name="name">
          <div class="title">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div calss="body">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          <div class="answer">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemDemo',
  props: {
    item: {
      type: Array
    },
    name: {
      type: [String, Number]
    }
  },
  data () {
    return {
      checked: false
    }
  },
  computed: {
    getTitle () {
      return ''
    }
  },
  methods: {
    changed (val) {
    }
  }
}
</script>

<style lang="css">
  .item {
    float: left;
  }
</style>
