<template>
  <el-dialog title="预览" :visible.sync="dialogFormVisible" width="30%">
    <el-form :model="formData" label-width="100px">
      <el-form-item label="单选题个数">
        <el-input type="Number" v-model.number="formData.choiceNum" min="0" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="多选题个数">
        <el-input type="Number" v-model.number="formData.mulChoiceNum" min="0" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="简答题个数">
        <el-input type="Number" v-model.number="formData.shortAnswerNum" min="0" style="width: 300px"></el-input>
      </el-form-item>
<!--      <el-form-item label="试卷有效期">-->
<!--        <el-date-picker-->
<!--          v-model="formData.date"-->
<!--          type="daterange"-->
<!--          value-format="timestamp"-->
<!--          style="width: 300px"-->
<!--          range-separator="至"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="exportExam">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import exam from '@/pages/demo/exam.vue'
import api from '@/api/api.js'
export default {
  name: 'exportExam',
  components: {
    exam
  },
  props: {
    visible: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      formData: {
        choiceNum: '',
        mulChoiceNum: '',
        shortAnswerNum: '',
        date: ''
      }
    }
  },
  computed: {
    dialogFormVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    },
    testApi () {
      return api.testApi
    }
  },
  methods: {
    exportExam () {
      let $this = this
      // this.formData.paperMadetime = this.formData.date[0]
      // this.formData.paperExpirationtime = this.formData.date[1]
      // delete this.formData.date
      this.testApi.exportEaxm(this.formData).then(res => {
        if (res === 'success') {
          console.log(res)
          $this.dialogFormVisible = false
          $this.$message({
            message: '成功生成试卷',
            type: 'success'
          })
        } else {
          $this.$message({
            message: '生成试卷失败',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
