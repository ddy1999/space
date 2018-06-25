<template>
  <div>
    <div class="top">
      <div class="topLeft">
        党务公开
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
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button class="add" ></Button>
      </div>
    </div>
    <div class="content">
      <div class="tit">
        <div>{{tit}}</div>
        <div>
          <ul>
            <li v-for="(chose,index) in choses" :key="chose.id" @click="toggle(index)" :class="{light:index==light}">{{chose.text}}</li>
          </ul>
        </div>
      </div>
      <div class="conter">
        <ul>
          <li v-for="mess in melist" :key="mess.id">
            <span class="spone">{{mess.text}}</span>
            <span class="sptwo">{{mess.time}}</span>
          </li>
        </ul>
        <Page :total="100" show-sizer style="margin-left: 500px;margin-top:5px;"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "centwo",
    data(){
      return{
        model:"",
        light:0,
        value4:"",
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
        choses:[
          {text:"2018重大日常事务"},
          {text:"2018重大专项事项"},
          {text:"问题整改情况公示"},

        ],
        tit:"成都市",
        melist:[
          {text:"四川省人民政府关于印发进一步规范政府采购监管和执行若干规定的通知 ",time:"2018-4-25"},
          {text:"四川省人民政府关于推广第二批全面创新改革试验经验成果的通知",time:"2018-4-25"},
          {text:"四川省人民政府办公厅关于印发四川省公共服务事项目录（2018年版）的通知",time:"2018-4-25"},
          {text:"《四川省人民政府办公厅关于印发四川省公共服务事项目录（2018年版）的通知》解读三 ",time:"2018-4-25"},
          {text:"四川省人民政府关于中国（四川）自由贸易试验区片区管委会实施首批省级管理事项的决定",time:"2018-4-25"},
          {text:"四川省人民政府关于修改《四川省〈粮食流通管理条例〉实施办法》的决定 ",time:"2018-4-25"},
          {text:"四川省人民政府关于修改《四川省机动车驾驶员培训管理办法》的决定 ",time:"2018-4-25"},
          {text:"四川省人民政府关于印发进一步规范政府采购监管和执行若干规定的通知 ",time:"2018-4-25"},
          {text:"四川省人民政府关于印发进一步规范政府采购监管和执行若干规定的通知 ",time:"2018-4-25"},
          {text:"四川省人民政府关于印发进一步规范政府采购监管和执行若干规定的通知 ",time:"2018-4-25"},
          {text:"四川省人民政府关于印发进一步规范政府采购监管和执行若干规定的通知 ",time:"2018-4-25"},
        ],
      }
    },
    methods:{
      clear(){
      },
      toggle(index){
        this.light=index;
      }
    }
  }
</script>

<style scoped>
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
  .date{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/date.png");
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
    background: #fff;
  }
  .tit{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
  }
  .conter{
    height:590px;
    padding:0 50px;
  }
  .conter ul li{
    list-style: none;
    text-align: center;
    line-height: 40px;
    background: url("../../../static/img/triangle.png") no-repeat left center;
    padding-left: 20px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin:10px 0;
  }
  .conter ul li:hover{
    color:#027ed1;
  }
  .light{
    border-bottom: 1px solid #2db7f5;

  }
  .tit{
    display: flex;
    justify-content: space-between;
  }
  .tit ul{
    display: flex;
    justify-content: space-between;
  }
  .tit ul li{
    list-style: none;
    padding:0 20px;
    cursor: pointer;
  }
</style>
