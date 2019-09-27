<template>
  <div>
    <el-form>
      <el-row v-for="(it, index) in formData" :key="it.id" type="flex" justify="center">
        <el-col :span="16">
          <el-row>
            <el-form-item >
              <div >{{index + 1 + '、' +  it.choiceInfo}}</div>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item >
              <div v-if="it.questionId === 1">
                <div  v-for="(item, index) in it.option" :key="index">
                  <el-radio v-model="it.answer" :label="it.option[index]">{{item}}</el-radio>
                </div>
              </div>
              <div v-else-if="it.questionId === 2">
                <div  v-for="(item, index) in it.option" :key="index">
                  <el-checkbox v-model="it.answer" :label="it.option[index]">{{item}}</el-checkbox>
                </div>
              </div>
              <div v-else>
                <div >
                  <el-input v-model="it.answer" type="textarea" min="2" max="4"></el-input>
                </div>
              </div>
            </el-form-item>
          </el-row>
          <hr/>
        </el-col>
      </el-row>
      <el-row style="text-align: center">
        <el-button style="margin-top: 20px" type="primary" @click="commit">提交</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  name: 'examItem',
  props: {
    formData: {
      type: Array,
      require: true
    }
  },
  computed: {
    testApi () {
      return api.testApi
    }
  },
  mounted () {
    let params = this.$route.query
    console.log(params.paperId)
    this.testApi.showPaper(params).then(res => {
      this.formData = res
    })
  },
  methods: {
    commit () {
      this.testApi.commit(this.formData).then(res => {
        if (res) {
          this.$router.push({name: 'search'})
        }
      })
    }
  },
  watch: {
    formData: {
      handler (val) {
        console.log(val)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
