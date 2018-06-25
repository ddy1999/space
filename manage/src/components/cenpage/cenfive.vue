<template>
  <div>
    <div class="top">
      <div class="topLeft">
       个人信息
        <Input v-model="value4" icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
      </div>
      <div class="topRight">
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
        <ul>
          <li><span>姓名：</span><span>{{name}}</span></li>
          <li><span>头像：</span><span>{{img}}</span></li>
          <li><span>活跃度：</span><span>{{level}}</span></li>
          <li><span>出生日期：</span><span >{{birthday}}</span></li>
          <li><span>名族：</span><span >{{nation}}</span></li>
          <li><span>籍贯：</span><span >{{native}}</span></li>
          <li><span>性别：</span><span >{{sex}}</span></li>
          <li><span>学历：</span><span >{{education}}</span></li>
          <li style="width: 100%"><span>所属组织：</span><span>{{local}}</span></li>
          <li><span>入党时间：</span><span >{{joinTime}}</span></li>
          <li><span>转正时间：</span><span >{{turnTime}}</span></li>
          <li><span>增加时间：</span><span>{{addTime}}</span></li>
          <li><span>党员增加：</span><span >{{addPer}}</span></li>
          <li style="width: 100%"><span>手机号码：</span><span>{{phone}}</span></li>
          <li style="width: 100%"><span>家庭住址：</span><span>{{home}}</span></li>
      </ul>
  </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "cenfive",
    data(){
      return{
        model:"",
        value4:"",
        value:"",
        modal1:false,
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
        name:"张三",
        img:"这个",
        level:"30",
        birthday:"1975-08-21",
        nation:"",
        native:"",
        sex:"",
        education:"",
        local:"",
        joinTime:"",
        turnTime:"",
        addTime:"",
        addPer:"",
        phone:"",
        home:"",





      }
    },
    mounted() {

    },
    methods:{
      clear(){

      },
      toggle(index){
        this.active=index;
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
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/write.png");
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
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 0 50px;
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
  .content ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .content ul li{
    width: 50%;
    line-height: 50px;
  }
  .content ul li span{
    display: inline-block;
    width: 35%;
    margin-right: 20px;
  }
  </style>
