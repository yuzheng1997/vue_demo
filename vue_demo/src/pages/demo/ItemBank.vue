<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="18" >
        <div>
          <div style="margin-top: 20px; float: right">
<!--            <el-button type="danger">删除</el-button>-->
            <el-button type="primary" @click="theme">出题</el-button>
          </div>
          <el-table
            :data="tableData"
            @selection-change="handleSelectionChange"
            style="width: 100%">
<!--            <el-table-column-->
<!--              type="selection"-->
<!--              width="55">-->
<!--            </el-table-column>-->
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <!--                <el-row>-->
                  <!--                  <el-form-item label="题目类型" style="width: 100%">-->
                  <!--                    <div style="width: 800px">{{ props.row.type }}</div>-->
                  <!--                  </el-form-item>-->
                  <!--                </el-row>-->
                  <!--                <el-row>-->
                  <!--                  <el-form-item label="题目名" style="width: 100%">-->
                  <!--                    <div style="width: 800px">{{ props.row.name }}</div>-->
                  <!--                  </el-form-item>-->
                  <!--                </el-row>-->
                  <el-row>
                    <el-form-item style="width: 100%">
                      <el-button type="primary" icon="el-icon-edit" circle @click="edit(props.row)"></el-button>
                      <el-button type="danger" icon="el-icon-delete" circle @click="del(props.row)"></el-button>
                      <el-button v-show="props.row.edit" type="success" icon="el-icon-check" circle @click="save(props.row)"></el-button>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item label="描述" style="width: 100%">
                      <div style="width: 600px" v-show="!props.row.edit">{{ props.row.choiceInfo }}</div>
                      <div style="width: 600px" v-show="props.row.edit">
                        <el-input  type="textarea" v-model="props.row.choiceInfo" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                      </div>
                    </el-form-item>
                  </el-row>
                  <el-row v-if="props.row.questionId !== 3">
                    <el-form-item label="选项" style="width: 100%">
                      <div v-if="props.row.questionId === 1">
                        <div style="width: 800px" v-for="(item, index) in props.row.option" :key="index">
                          <el-radio :disabled="!props.row.edit" v-model="props.row.choiceAnswer" :label="item">{{item}}</el-radio>
                        </div>
                      </div>
                      <div v-else>
                        <div style="width: 800px" v-for="(item, index) in props.row.option" :key="index">
                          <el-checkbox :disabled="!props.row.edit" v-model="props.row.choiceAnswer" :label="item">{{item}}</el-checkbox>
                        </div>
                      </div>
                    </el-form-item>
                  </el-row>
                  <!--                <el-row v-if="props.row.type !== '简答题'">-->
                  <!--                  <el-form-item label="答案" style="width: 100%">-->
                  <!--                    <div style="width: 800px">{{ props.row.answer }}</div>-->
                  <!--                  </el-form-item>-->
                  <!--                </el-row>-->
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="题目类型"
              >
              <template slot-scope="scope">
                {{scope.row.questionId | questionFilter}}
              </template>
            </el-table-column>
            <el-table-column
              label="题目名"
              prop="choiceId">
            </el-table-column>
            <el-table-column
              label="分值"
              prop="choiceScore">
            </el-table-column>
            <el-table-column
              label="描述"
              prop="choiceInfo" :show-overflow-tooltip="true">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <exam-dialog :visible.sync="showEdit" :form="tableData"></exam-dialog>
    <exam :visible.sync="flag"></exam>
  </div>
</template>

<script>
import examDialog from '@/pages/demo/examDialog.vue'
import exam from '@/pages/demo/exportExam.vue'
import api from '@/api/api.js'
export default {
  name: 'ItemBank',
  components: {
    exam,
    examDialog
  },
  computed: {
    testApi () {
      return api.testApi
    }
  },
  data () {
    return {
      showEdit: false,
      tableData: [{
        choiceId: '',
        choiceInfo: '',
        choiceOp1: '',
        choiceAnswer: '',
        choiceScore: '',
        teacherId: ''
      }
      ],
      flag: false,
      from: {
        singleCNum: '',
        multipleCNum: '',
        essayNum: '',
        date: ''
      }
    }
  },
  mounted () {
    this.loadData()
  },
  filters: {
    questionFilter (val) {
      if (val === 1) {
        return '单选题'
      } else if (val === 2) {
        return '多选题'
      } else {
        return '简答题'
      }
    }
  },
  methods: {
    handleSelectionChange (rows) {
      console.log(rows)
    },
    edit (data) {
      data.edit = true
    },
    del (data) {
      let keyId = data.id
      delete data.options
      this.testApi.delQuestion(data).then(res => {
        console.log(res)
      })
      console.log('调用删除接口,删除' + keyId + '!')
    },
    save (data) {
      data.edit = false
      console.log('调用保存接口,保存' + data + '!')
    },
    theme () {
      this.flag = true
    },
    commit () {
      this.showEdit = true
      console.log(this.showEdit)
    },
    // selectable () {
    //   if (!this.flag) {
    //     return true
    //   } else if (this.formFlag && this.flag) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    getForm (val) {
      this.form = val
    },
    loadData () {
      let $this = this
      this.testApi.getQuestion().then(res => {
        if (res) {
          $this.tableData = res
        }
        this.tableData.forEach(item => {
          if (item.questionId === 2) {
            item.choiceAnswer = item.choiceAnswer.split(',')
          }
          $this.$set(item, 'edit', false)
        })
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%
  }
  .el-form-item {
    margin-top: 10px
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
