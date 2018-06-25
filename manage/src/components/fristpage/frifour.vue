<template>
  <div>
    <div class="top">
      <div class="topLeft">
        日常事务
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
        <Button class="add" ></Button>
      </div>
    </div>
    <div class="content">
      <div class="contTop">
        <div>
          <span class="fri">{{city}}</span>
        </div>
        <div>
          <Button class="date" ></Button>
          <Select v-model="model" style="width:100px;margin: 0;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="model" style="width:100px;margin:0;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="contCenter">
        <div class="datting"></div>
        <div class="atten">
          <div class="attentop">
            <div><h3>签到</h3></div>
            <div>
              <Button class="attend">签到</Button>
              <Button class="leave">请假</Button>
            </div>
          </div>
          <div class="attencen">
            <ul>
              <li>8:50</li>
              <li>签到成功</li>
              <li>签到地点</li>
              <li>9:00-10:00</li>
              <li>请假</li>
              <li>联系方式</li>
            </ul>
          </div>
        </div>
        <div class="atten">
          <div class="attentop">
            <div><h3>会议</h3></div>
            <div>
            </div>
          </div>
          <div class="attencen">
            <ul>
              <li>9:00-10:00</li>
              <li>已结束</li>
              <li>xxxxx会议</li>
              <li>15:00-16:00</li>
              <li>未开始</li>
              <li>xxxxx会议</li>
            </ul>
          </div>
        </div>
          <div class="attentop">
            <div><h3>申请</h3></div>
            <div>
              <Button class="attend apply">申请</Button>
            </div>
          </div>
        <div class="atten" style="border-bottom: none">
          <div class="attentop">
            <div><h3>日报</h3></div>
            <div>
              <Button class="save">保存</Button>
            </div>
          </div>
          <div class="diff">
            <ul>
              <li>
                <div>今日完成的工作：</div>
                <div><Input type="text"></Input></div>
              </li>
              <li>
                <div>今日未完成的工作：</div>
                <div><Input type="text"></Input></div>
              </li>
              <li>
                <div>需协调工作：</div>
                <div><Input type="text"></Input></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  /*import Simple from "../../../static/assets/lib/simple-calendar.js"
  import "../../../static/assets/lib/simple-calendar.css";*/
  export default {
    name: "frifour",
    data(){
      return{
        model: '',
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
        city:"成都市",
        total:"1000",

      }
    },
    mounted() {
      this.ready();
    },
    components:{

    },
    methods:{
      clear(){},
      ready(){
      /*  let myCalendar = new Simple ('#allmap');*/
      },
    }
  }
</script>

<style scoped>
  .diff ul li{
    display: flex;
    justify-content: space-between;
  }
  li{
    list-style: none
  }
  .attencen {
    width: 60%;
  }
  .attencen ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .attencen ul li{
     width: 240px;
    line-height:30px;
    text-align: left;
  }
  .atten{
    height: 115px;
    margin: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .attentop{
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .attentop h3{
     font-size: 14px;
    background: url("../../../static/img/shu.png") no-repeat left center;
    padding-left: 20px;
  }
  .leave{
    margin: 0 10px 0 30px;
    background: #fe2121;
    border:none;
    color:#Fff;
  }
  .attend{
    background: #1d81c4;
    border:none;
    color:#Fff;
  }
  .save{
    border:none;
    color:#Fff;
    background: #fbcf20;
  }
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    background:#fff;
    border-radius: 10px;

  }
  .contTop{
    height: 80px;
    line-height:80px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
  }
  .contCenter{
    height:580px;
    width: 95%;
    margin:0 auto;
    border-radius: 10px;
  }
  .contCenter img{
    width: 100%;
    height: 100%;
  }
  .datting{
    height: 150px;
    border-bottom: 1px solid #ccc;
  }
  .top{
    width: 100%;
    height: 90px;
    background:#fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
  }
  .topLeft{
    font-size: 22px;
    line-height: 90px;
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
  .date{
    width:30px;
    height: 30px;
    margin:0px 20px 0 20px;
    border:none;
    background: url("../../../static/img/date.png");
  }

  .fri{
    font-size: 20px;
    color:#666;
  }
  .sec{
    font-size: 14px;
    color:#666;
    margin-left: 100px;
  }
  #allmap{
    width: 100%;
    height: 500px;
  }
</style>
