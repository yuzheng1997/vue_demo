<template>
  <div>
    <el-form>
      <el-row v-for="(it, index) in formData" :key="it.id">
        <el-row>
          <el-form-item style="width: 100%">
            <div style="width: 100%">{{index + 1 + '、' +  it.desc}}</div>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item style="width: 100%">
            <div v-if="it.type === '单选题'">
              <div style="width: 100%" v-for="(item, index) in it.option" :key="index">
                <el-radio v-model="it.answer" :label="it.option[index]">{{item}}</el-radio>
              </div>
            </div>
            <div v-else-if="it.type === '多选题'">
              <div style="width: 100%" v-for="(item, index) in it.option" :key="index">
                <el-checkbox v-model="it.answer" :label="it.option[index]">{{item}}</el-checkbox>
              </div>
            </div>
            <div v-else>
              <div style="width: 100%" v-for="(item, index) in it.option" :key="index">
              </div>
            </div>
          </el-form-item>
        </el-row>
        <hr/>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'examItem',
  props: {
    formData: {
      type: Array,
      require: true
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
