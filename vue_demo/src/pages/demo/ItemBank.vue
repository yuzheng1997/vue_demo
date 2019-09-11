<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="12" :offset="4">
        <div>
          <div style="margin-top: 20px; float: right" v-show="!flag">
            <el-button type="danger">删除</el-button>
            <el-button type="primary" @click="theme">出题</el-button>
          </div>
          <div style="margin-top: 20px; float: right" v-show="flag">
            <el-button type="primary" @click="commit">预览</el-button>
            <el-button>取消</el-button>
          </div>
          <el-table
            :data="tableData"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
              type="selection"
              :selectable="selectable"
              width="55">
            </el-table-column>
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
                      <div style="width: 600px" v-show="!props.row.edit">{{ props.row.desc }}</div>
                      <div style="width: 600px" v-show="props.row.edit">
                        <el-input  type="textarea" v-model="props.row.desc" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                      </div>
                    </el-form-item>
                  </el-row>
                  <el-row v-if="props.row.type !== '简答题'">
                    <el-form-item label="选项" style="width: 100%">
                      <div style="width: 800px" v-for="(item, index) in props.row.option" :key="index">
                        <el-radio :disabled="!props.row.edit" v-model="props.row.answer" :label="item">{{item}}</el-radio>
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
              prop="type">
            </el-table-column>
            <el-table-column
              label="题目名"
              prop="name">
            </el-table-column>
            <el-table-column
              label="分值"
              prop="score">
            </el-table-column>
            <el-table-column
              label="描述"
              prop="desc" :show-overflow-tooltip="true">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="6">
        <transition name="fade">
          <exam v-show="flag"
                :flag.sync="formFlag"
                :show.sync="flag"
                :form="from"
                @getForm="getForm" style="margin-top: 108px"></exam>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import ItemDemo from '@/components/demo/ItemDemo.vue'
import exam from '@/pages/demo/exam.vue'
export default {
  name: 'ItemBank',
  components: {
    exam
  },
  data () {
    return {
      tableData: [{
        id: '12987122',
        name: '第一题',
        type: '选择',
        score: '10',
        edit: false,
        option: ['aaa', 'bbb'],
        desc: '窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个',
        answer: 'aaa'
      },
      {
        id: '12987122',
        name: '第一题',
        type: '简答题',
        score: '10',
        option: [],
        edit: false,
        desc: '窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个窝窝头一块钱4个',
        answer: 'abc'
      }],
      flag: false,
      formFlag: false,
      from: {
        singleCNum: '',
        multipleCNum: '',
        essayNum: '',
        date: ''
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
    },
    selectable () {
      if (!this.flag) {
        return true
      } else if (this.formFlag && this.flag) {
        return true
      } else {
        return false
      }
    },
    getForm (val) {
      this.form = val
    }
  }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-form-item {
    margin-top: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
