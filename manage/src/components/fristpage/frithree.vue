<template>
  <div>
    <div class="top">
      <div class="topLeft">
        信息查询
        <Input v-model="value4" icon="ios-search"  placeholder="输入村或人名" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
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
            上传成果
          </div>
          <div class="cont">
            <ul>
              <li>
                <div><span style="color:red">*</span>标题:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>内容:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px" type="textarea" :rows="5"></Input>
                </div>
              </li>
              <li>
                <div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <div><span style="color:red">*</span>上传附件：<Button type="ghost" style="margin: 0 20px 0 40px;border: 1px solid #ccc;" >上传文件</Button></div>
                  </Upload>
                </div>
              </li>
            </ul>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="modal1 = false">取消</Button>
            <Button  size="large" class="admit" @click="modal1 = false">上传</Button>
          </div>
        </Modal>
        <Button class="add" @click="modal1=true" ></Button>
      </div>
    </div>
    <div class="content">
      <div class="contTop">
        <div class="ctLeft">
          <span class="fri">{{city}}</span>
          <span class="sec">(共{{total}}个成果)</span>
        </div>
        <div class="ctRight">
          <ul>
            <li v-for="(chose,index) in choselist" :key="chose.id" @click="toggle(index)" :class="{active:index==active}">{{chose.text}}</li>
          </ul>
        </div>
      </div>
      <div class="contCenter">
        <ul>
          <li v-for="gain in gainList" :key="gain.id">
              <div class="gainTit">{{gain.title}}</div>
              <div class="gainCont"><p>{{gain.cont}}</p></div>
          </li>
        </ul>
      </div>
      <div class="contCenter1">
        <div class="news">
            <ul>
              <li>
                <div class="motive">内容就在这里展示这个东西我真的不知道</div>
                <div class="rest">
                  <p><a href="#" class="good"><span>3</span></a><a href="#" class="judge"><span>4</span></a></p>
                  <p><span>{{time}}</span><a href="#">阅读全文</a></p>
                </div>
              </li>
              <li>
                <div class="motive">
                  <p>内容就在这里展示这个东西我真的不知道1545679877987987989879898789</p>
                  <p id="pucture">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                  </p>
                </div>
                <div class="alread">
                  昵称1、昵称2、昵称3、昵称4
                </div>
                <div id="detail">
                  <ul>
                    <li>
                      <div class="plan"></div>
                      <div class="call">
                        <p><a href="#">昵称1:</a></p>
                        <p>{{time}}</p>
                      </div>
                      <div class="stance">you look like very happy!</div>
                    </li>
                  </ul>
                </div>
                <div class="rest">
                  <p><a href="#" class="good"><span>3</span></a><a href="#" class="judge"><span>4</span></a></p>
                  <p><span>{{time}}</span><a href="#">收起</a></p>
                </div>

              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "frithree",
    data(){
      return{
        model:"",
        value4:"",
        value:"",
        time:"2018-05-04 15:32",
        modal1:false,
        city:'经开区',
        total:"6",
        active:"0",
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
        choselist:[
          {text:"成果"},
          {text:"动态"},
        ],
        gainList:[
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"},
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"},
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"},
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"},
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"},
          {title:"成果标题1",cont:"拿手机宽带连接阿喀琉斯建档立卡就是扣了发了看时间风口浪尖奥斯卡金佛我安静搜if骄傲数据库了房间阿卡丽是看得见阿喀琉斯建档立卡几十块了房间埃里克森进口量将开了房间阿喀琉斯"}
        ],
      }
    },
    mounted() {

    },
    methods:{
      clear(){

      },
      toggle(index){
        this.active=index;
        if(index==0){
          $(".contCenter").css("display","block");
          $(".contCenter1").css("display","none");
        }else{
          $(".contCenter1").css("display","block");
          $(".contCenter").css("display","none");
        }
      }
    }
  }
</script>

<style scoped>
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
  .gainTit{
    width: 30%;
  }
  .gainCont{
    width: 70%;

  }
  .gainCont p{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .contCenter{
    display: block;
  }
  .contCenter ul li{
    display: flex;
    justify-content: flex-start;
    line-height:60px;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
  }
  .contCenter1{
    height:580px;
    display: none;
  }
  .news{
    width: 1200px;
    margin: 0 auto;
    background:#fff;
    height: 100%;
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
    padding-left:200px;
  }
  .news ul li{
    margin:20px 0;
    border-bottom: 1px solid #ccc;
  }
  .motive{
    font-size: 14px;
    line-height: 40px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .rest{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .rest p{
    line-height: 30px;
  }
  .rest a{
    display: inline-block;
    width: 120px;
    height: 30px;
    font-size: 16px;
  }
  .rest span{
    display: inline-block;
    font-size: 14px;
    margin: 0 20px;
    color:#333;

  }
  .good{
    background: url("../../../static/img/zan1.png")center center no-repeat;

  }
  .judge{
    background: url("../../../static/img/juage1.png")center center no-repeat;
  }
  #pucture ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #pucture ul li{
    width: 240px;
    height: 140px;
    background: #ccc;
  }
  .alread{
    background: url("../../../static/img/already.png")left center no-repeat;
    line-height: 30px;
    padding-left: 40px;
    margin: 10px 0;
    font-size: 14px;
  }
  #detail ul li{
    display: flex;
    justify-content: flex-start;
    border:none;
  }
  .plan{
    width: 50px;
    height: 50px;
    background-color: #ccc;
    margin-right: 10px;
  }
  .call{
    margin-right: 30px;
  }
  .call p{
    line-height: 25px;
  }
  .call p a{
    color:#2b85e4;
  }
  .stance{
    line-height:50px;
  }
</style>
