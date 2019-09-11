<template>
  <div>
    <el-form :model="formData" label-width="100px">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="title" name="1">
          <el-form-item label="单选题个数">
            <el-input type="Number" v-model.number="formData.singleCNum" size="mini" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="多选题个数">
            <el-input type="Number" v-model.number="formData.multipleCNum" size="mini" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="简答题个数">
            <el-input type="Number" v-model.number="formData.essayNum" size="mini" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="试卷有效期">
            <el-date-picker
              size="mini"
              style="width: 200px"
              v-model="formData.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" size="mini" @click="begin">开始出题</el-button>
            <el-button type="primary" size="mini" @click="cancel">取消出题</el-button>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'exam',
  props: {
    show: {
      type: Boolean,
      require: true
    },
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
      activeNames: '1',
      title: '出题个数'
    }
  },
  methods: {
    begin () {
      if (!this.flag) {
        this.$emit('update:flag', !this.flag)
        this.$emit('getForm', this.formData)
      }
    },
    cancel () {
      this.$emit('update:show', !this.show)
      this.$emit('update:flag', !this.flag)
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.formData = {
          singleCNum: '',
          multipleCNum: '',
          essayNum: '',
          date: ''
        }
      }
    }
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
