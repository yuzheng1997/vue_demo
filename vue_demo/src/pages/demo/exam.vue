<template>
  <div>
    <el-form :model="formData" label-width="100px">
          <el-form-item label="单选题个数">
            <el-input type="Number" v-model.number="formData.singleCNum" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="多选题个数">
            <el-input type="Number" v-model.number="formData.multipleCNum" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="简答题个数">
            <el-input type="Number" v-model.number="formData.essayNum" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="试卷有效期">
            <el-date-picker
              v-model="formData.date"
              type="daterange"
              style="width: 300px"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'exam',
  props: {
    // show: {
    //   type: Boolean,
    //   require: true
    // },
    flag: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      formData: {
        singleCNum: '',
        multipleCNum: '',
        essayNum: '',
        date: ''
      },
      title: '出题'
    }
  },
  methods: {
    // begin () {
    //   if (!this.flag) {
    //     this.$emit('update:flag', !this.flag)
    //     this.$emit('getForm', this.formData)
    //   }
    // },
    // cancel () {
    //   this.$emit('update:show', !this.show)
    //   this.$emit('update:flag', !this.flag)
    // }
  }
}
</script>

<style>
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-form-item__label {
    font-size: 12px;
  }
</style>
