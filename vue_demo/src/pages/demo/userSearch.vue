<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-form :inline="true" :model="queryParams" class="demo-form-inline">
          <el-form-item label="身份证号">
            <el-input v-model="queryParams.userId" style="width: 200px">
            </el-input>
          </el-form-item>
          <el-form-item label="试卷名称">
            <el-input v-model="queryParams.paperId" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="float: right" type="primary" @click="search">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="paperId"
            align="center"
            label="名称"
          >
          </el-table-column>
          <el-table-column
            align="center"
            label="开始时间"
          >
            <template slot-scope="scope">
              <span>{{scope.row.paperMadetime | timeFilter}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="结束时间">
            <template slot-scope="scope">
              <span>{{scope.row.paperExpirationtime | timeFilter}}</span>
            </template>
          </el-table-column>
          <!--          <el-table-column-->
          <!--            prop="testNum"-->
          <!--            align="center"-->
          <!--            label="参考人数">-->
          <!--          </el-table-column>-->
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
<!--              <el-button type="primary" size="mini" @click="joinExam(scope.row)">参加考试</el-button>-->
              <el-button size="mini" type="primary" @click="showDialog(scope.row, 'showEdit')">查看参考信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <reference-dialog :visible.sync="showEdit"></reference-dialog>
    <exam-dialog :visible.sync="showExam"></exam-dialog>
  </div>
</template>

<script>
import examDialog from '@/pages/demo/examDialog.vue'
import referenceDialog from '@/pages/demo/referenceDialog.vue'
import api from '@/api/api.js'
export default {
  name: 'search',
  components: {
    referenceDialog,
    examDialog
  },
  computed: {
    testApi () {
      return api.testApi
    }
  },
  data () {
    return {
      queryParams: {
        userId: '',
        paperId: ''
      },
      showExam: false,
      showEdit: false,
      tableData: []
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    joinExam (data) {
      this.$router.push({name: 'examItem', query: { paperId: data.paperId }})
    },
    showDialog (data, flag) {
      if (flag === 'showExam') {
        this.showExam = true
      } else {
        this.showEdit = true
      }
    },
    search () {
      // this.testApi.selectAllPapers().then(res => {
      //   this.tableData = res
      // })
      this.testApi.fuzzyQuery().then(res => {
        this.tableData = res
      })
    }
  },
  filters: {
    timeFilter (data) {
      if (data) {
        var time = new Date(data)
        var y = time.getFullYear() // getFullYear方法以四位数字返回年份
        var M = time.getMonth() + 1 // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
        var d = time.getDate() // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
        var h = time.getHours() // getHours方法返回 Date 对象的小时 (0 ~ 23)
        var m = time.getMinutes() // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
        var s = time.getSeconds() // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
        return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
