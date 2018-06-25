<template>
  <div>
    <div class="top">
      <div class="topLeft">
        民情速递
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
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            民情
          </div>
          <div class="cont">
            <div class="access">
              <div class="far">
                <span style="color:red">*</span>会议类型:
              </div>
              <Select v-model="mode2" style="width:100px;margin:0;" id="choose" @on-change="selectChange(mode2)">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
            <div class="asking">
              <ul>
                <li>
                  <div class="far">
                   姓名:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                   所属组织:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>联系方式:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>咨询内容:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;" rows="5"></Input>
                  </div>
                </li>
              </ul>
            </div>
            <div class="asking2">
              <ul>
                <li>
                  <div class="far">
                   姓名:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                   所属组织:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>联系方式:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>意见内容:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;" rows="5"></Input>
                  </div>
                </li>
              </ul>
            </div>
            <div class="asking3">
              <ul>
                <li>
                  <div class="far">
                   姓名:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                   所属组织:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>联系方式:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>投诉对象:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>投诉内容:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;" rows="5"></Input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="modal1 = false">取消</Button>
            <Button  size="large" class="admit" @click="modal1 = false">提交</Button>
          </div>
        </Modal>
        <Button class="add" @click="modal1=true"></Button>
      </div>
    </div>
    <div class="content">
      <div class="contTop">
        <div class="ctLeft">
          <span class="fri">{{city}}</span>
          <span class="sec">(共{{total}}个咨询)</span>
        </div>
        <div class="ctRight">
          <ul>
            <li v-for="(chose,index) in choselist" :key="chose.id" @click="toggle(index)" :class="{active:index==active}">{{chose.text}}</li>
          </ul>
        </div>
      </div>
      <div class="contCenter">
        <Table stripe :columns="columns1" :data="data2" class="default"></Table>
        <Page :total="100" show-sizer style="margin-left: 500px;margin-top:5px;"></Page>
      </div>
      <div class="contCenter2">
        <Table stripe :columns="columns1" :data="data2" class="default"></Table>
        <Page :total="100" show-sizer style="margin-left: 500px;margin-top:5px;"></Page>
      </div>
      <div class="contCenter3">
        <Table stripe :columns="columns1" :data="data2" class="default"></Table>
        <Page :total="100" show-sizer style="margin-left: 500px;margin-top:5px;"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "serthree",
    data: function () {
      return {
        model: "",
        value4: "",
        mode2:"",
        modal1:false,
        city: '成都市',
        total: "100",
        active: "0",
        cityList: [
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
        choselist: [
          {text: "咨询"},
          {text: "意见"},
          {text: "投诉"},
        ],
        typeList:[
          {label:"咨询",value:"咨询"},
          {label:"意见",value:"意见"},
          {label:"投诉",value:"投诉"},
        ],
        columns1: [
          {
            title: '姓名',
            align: 'center',
            key: 'name'
          },
          {
            title: '所属组织',
            align: 'center',
            key: 'localOrg'
          },
          {
            title: '联系方式',
            align: 'center',
            key: 'phone'
          },
          {
            title: '咨询内容',
            align: 'center',
            key: 'asking'
          },
          {
            title: '处理结果',
            align: 'center',
            key: 'dell'
          },
          {
            title: '负责人',
            align: 'center',
            key: 'charge'
          },
          {
            title: '负责人组织',
            align: 'center',
            key: 'chargeOrg'
          },
          {
            title: '状态',
            align: 'center',
            key: 'motion',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '接受'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '指派')
              ]);
            }
          },
        ],
        data2:[
          {
            name:"程晨",
            localOrg:"所属组织",
            phone:"15708000000",
            asking:"咨询问题",
            dell:"未处理",
            charge:"张晓彤",
            chargeOrg:"土门村党委",
            motion:""
          },
        ],
      }
    },
    mounted() {

    },
    methods:{
      toggle(index){
        this.active=index;
       if(index==0){
        $(".contCenter").css("display",'block');
        $(".contCenter2").css("display",'none');
        $(".contCenter3").css("display",'none');
       }else if(index==1){
         $(".contCenter").css("display",'none');
         $(".contCenter2").css("display",'block');
         $(".contCenter3").css("display",'none');
        }else{
         $(".contCenter").css("display",'none');
         $(".contCenter2").css("display",'none');
         $(".contCenter3").css("display",'block');
       }
      },
      selectChange(){
        if(this.mode2=='咨询'){
          $('.asking').css('display','block');
          $('.asking2').css('display','none');
          $('.asking3').css('display','none');
        }else if(this.mode2=='意见'){
          $('.asking').css('display','none');
          $('.asking2').css('display','block');
          $('.asking3').css('display','none');
        }else{
          $('.asking').css('display','none');
          $('.asking2').css('display','none');
          $('.asking3').css('display','block');
        }
    }
    }
  }
</script>

<style scoped>
  .access{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .head{
    background: #027ed1;
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  .foot{
    position: relative;
    margin-top: 40px;
    padding-bottom:60px;
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
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/add.png");
  }
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .contTop{
    height: 80px;
    line-height:80px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    background:#fff;
    border-radius: 10px;
  }
  .ctLeft{
    width:20%;
    font-size: 16px;
    /* background:url("../../../static/img/shadow.png") no-repeat left bottom;*/
  }
  .ctRight{
    width: 60%;
  }
  .ctRight ul{
    display: flex;
    justify-content: flex-end;
  }
  .ctRight ul li{
    list-style: none;
    padding: 0 50px;
    cursor: pointer;
  }
  .active{
    border-bottom: 1px solid #bedefe;
    color:#bedefe;
  }
  .contCenter{
    height: 560px;
    background: #fff;
    border-radius: 10px;
    margin-top: 20px;
  }
  .contCenter2{
    height: 560px;
    background: #fff;
    border-radius: 10px;
    margin-top: 20px;
    display: none;
  }
  .contCenter3{
    height: 560px;
    background: #fff;
    border-radius: 10px;
    margin-top: 20px;
    display: none;
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
  .cont ul li{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin:10px 0;
  }
  li{
    list-style: none;
  }
  .asking{
    display: block;
  }
  .asking3,.asking2{
    display: none;
  }

</style>
