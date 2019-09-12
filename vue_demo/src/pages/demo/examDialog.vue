<template>
  <el-dialog title="预览" :visible.sync="dialogFormVisible" width="45%">
    <examItem :formData="form" style="height: 500px;overflow: hidden;overflow-y: scroll;"></examItem>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import examItem from '@/pages/demo/examItem.vue'
export default {
  name: 'examDialog',
  props: {
    form: {
      type: Array
    },
    visible: {
      type: Boolean,
      require: true
    }
  },
  components: {
    examItem
  },
  computed: {
    dialogFormVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    from: {
      handler (val) {
        console.log(val)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style>
  ::-webkit-scrollbar {
    width: 6px;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #99a9bf;
  }
</style>
