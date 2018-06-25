<template>
  <div>
    <div class="top">
      <div class="topLeft">
        党员信息
        <Input v-model="value4" icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
      </div>
      <div class="topRight">
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button class="import" @click="join=true">导入</Button>
        <Button class="export">导出</Button>
        <Modal v-model="join" >
          <div slot="header" class="head">
            导入党员信息
          </div>
          <div class="cont">
            <div>
              <div class="choseLocal">
                <div><span style="color:red">*</span>导入地方</div>
                <div>
                  <Select v-model="model" style="width:100px;margin:0;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="model" style="width:100px;margin:0;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <Select v-model="model" style="width:100px;margin:0;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </div>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <div><span style="color:red">*</span>批量导入：<Button type="ghost" style="margin-left: 40px;border: 1px solid #ccc;" >上传文件</Button></div>
              </Upload>
            </div>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="join = false">取消</Button>
            <Button  size="large" class="admit" @click="join = false">提交</Button>
          </div>
        </Modal>
      </div>
    </div>
    <div class="content">
      <div class="tab">
        <div class="lonely">
          <span>{{local}}</span><span>(共{{total}}人)</span>
        </div>
        <Table  stripe border :columns="columns7" :data="data6" style="text-align: center;border-radius: 10px;" id="table" width="1419" height="540"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "perone",
    data(){
      return{
        value4:"",
        model:"",
        join:false,
        total:"200",
        local:"经开区",
        cityList:[
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        columns7: [
          {
            title: '姓名',
            align:'center',
            fixed: "left",
            width: 100,
            key: 'name',
          },
          {
            title: '所在党支部',
            align:'center',
            width: 200,
            key: 'local'
          },
          {
            title: '身份证号',
            align:'center',
            width:200,
            key: 'idCard'
          },
          {
            title: '性别',
            align:'center',
            width: 100,
            key: 'sex'
          },
          {
            title: '名族',
            align:'center',
            width: 100,
            key: 'nation'
          },
          {
            title: '出生日期',
            align:'center',
            width: 200,
            key: 'birth'
          },
          {
            title: '学历',
            align:'center',
            width: 100,
            key: 'education'
          },
          {
            title: '人员类别',
            align:'center',
            width: 100,
            key: 'kind'
          },
          {
            title: '入党时间',
            align:'center',
            width: 150,
            key: 'joinTime'
          },
          {
            title: '转正时间',
            align:'center',
            width: 150,
            key: 'turnTime'
          },
          {
            title: '工作岗位',
            align:'center',
            width: 100,
            key: 'job'
          },
          {
            title: '联系方式',
            align:'center',
            width: 150,
            key: 'phone'
          },
          {
            title: '家庭住址',
            align:'center',
            width: 200,
            key: 'address'
          },
          {
            title: '党籍状态',
            align:'center',
            width: 100,
            key: 'motion'
          },
          {
            title: '是否为失联党员',
            align:'center',
            width: 150,
            key: 'lose'
          },
          {
            title: '失联日期',
            align:'center',
            width: 150,
            key: 'loseTime'
          },
          {
            title: '是否为流动人员',
            align:'center',
            width: 150,
            key: 'move'
          },
          {
            title: '外出流向',
            align:'center',
            width: 100,
            key: 'flow'
          },
          {
            title: '操作',
            key: 'file',
            width: 200,
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    backgroundColor:"#6cbafd",
                    color:"#fff",
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type:"ghost",
                    size: 'small'
                  },
                  style:{
                    marginRight: '5px',
                    backgroundColor:"#7a6cfd",
                    color:"#fff",
                  },
                  on: {
                    click: () => {
                      this.update(params.index)
                    }
                  }
                }, '上传'),
                h('Button', {
                  props: {
                    size: 'small'
                  },
                  style:{
                    backgroundColor:"#2baee9",
                    color:"#fff",
                  },
                  on: {
                    click: () => {
                      this.editor(params.index)
                    }
                  }
                }, '编辑')
              ]);
            }
          }
        ],
        data6: [
          {
            name: '杨震',
            local:"所在组织",
            idCard: 513433199305062556,
            sex:"男",
            nation:"汉",
            birth:"1975-08-21",
            education:"本科",
            kind:"技术人员",
            joinTime:"1995-06-30",
            turnTime:"1996-06-30",
            job:"工程师",
            phone:"15708084444",
            address:"经开区",
            motion:"正常",
            lose:"否",
            loseTime:"",
            move:"否",
            flow:"",
          },
        ]
      }
    },
    mounted() {

    },
    methods:{
      clear(){
      },
      changePage () {
      },
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        })
      },
    }
  }
</script>

<style scoped>
  .choseLocal{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-bottom: 20px;
  }
  #file ul{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  #file ul li{
    width:30%;
    height:100px;
    background: #ccc;
    border-radius: 10px;
  }
  .pop ul li{
    list-style: none;
    line-height: 25px;
  }
  .cont{
    padding:0 20px;
    width: 100%;
  }
  .conter{
    padding:0 20px;
    width: 100%;
    height: 650px;
  }
  .close{
    padding: 15px 40px;
    background: #ccc;
    position: absolute;
    top:0;
    left:20%;
  }
  .admit{
    padding: 15px 40px;
    background: #027ed1;
    color:#fff;
    position: absolute;
    top:0;
    left:60%;
  }
  .ivu-modal-header{
    background: #027ed1;
  }
  .head{
    background: #027ed1;
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  .ivu-table-header{
    background: #2baee9!important;
  }
  .top{
    width: 100%;
    height: 90px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
  .topLeft{
    font-size: 22px;
    line-height: 90px;
    padding-left:20px;
  }
  .ivu-select{
    margin-top: 30px;
  }
  .import,.export{
    width:60px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    color:#fff;
  }
  .import{
    background:#0197fb;
  }
  .export{
    background: #fd2704;
  }
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
  }
  .tit{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
  }
  .tab{
    height: 660px;
    margin-top: 20px;
  }
  #table{
    display: block;
    margin-top: 20px;
  }
.lonely{
  line-height: 40px;
  font-size: 16px;
  padding-left: 20px;
}

</style>
