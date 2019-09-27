<template>
  <el-dialog title="参考信息" :visible.sync="dialogFormVisible" width="45%">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="250">
      <el-table-column
        prop="name"
        label="试卷">
      </el-table-column>
      <el-table-column
        prop="city"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="分数">
      </el-table-column>
    </el-table>
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
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
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
