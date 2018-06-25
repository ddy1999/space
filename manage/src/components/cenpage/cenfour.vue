<template>
  <div>
    <div class="top">
      <div class="topLeft">
        工作圈
        <Input v-model="value4" icon="ios-search"  placeholder="输入村或人名" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
      </div>
      <div class="topRight">
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            发布工作圈
          </div>
          <div class="cont">
            <ul>
              <li>
                <div>内容:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 385px"></Input>
                </div>
              </li>
              <li>
                <div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <div>上传附件：<Button type="ghost" style="margin: 0 20px 0 40px;border: 1px solid #ccc;" >上传文件</Button></div>
                    <div style="margin-left: 100px;margin-top: 20px;"><img src="../../../static/img/upload.png" alt=""></div>
                  </Upload>
                </div>
              </li>
            </ul>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="modal1 = false">取消</Button>
            <Button  size="large" class="admit" @click="modal1 = false">发布</Button>
          </div>
        </Modal>
        <Button class="add" @click="modal1=true" ></Button>
      </div>
    </div>
    <div class="content">
          <ul>
            <li>
              <div class="name">
                <div class="draw"></div>
                <div class="mess">
                  <p>昵称</p>
                  <p>所属组织</p>
                </div>
              </div>
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
                  <li>
                    <div class="plan"></div>
                    <div class="call">
                      <p><a href="#">昵称1</a>回复：<a href="#">昵称</a></p>
                      <p>{{time}}</p>
                    </div>
                    <div class="stance">you look like very happy!</div>
                  </li>
                </ul>
              </div>
              <div class="rest">
                <p><a href="#" class="good"><span>3</span></a><a href="#" class="judge"><span>4</span></a></p>
                <p><span>{{time}}</span><a href="#"></a></p>
              </div>
              <div>
                  <Input placeholder="评论"></Input>

              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "cenfour",
    data(){
      return{
        model:"",
        value4:"",
        value:"",
        time:"2018-05-04 15:32",
        modal1:false,
        city:'化工新村',
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
  .name{
    display: flex;
    justify-content: flex-start;
  }
  .draw{
    width: 60px;
    height: 60px;
    background: #ccc;
    margin-right: 20px;
  }
  .mess p{
    line-height: 30px;
  }
  .mess p:last-child{
    color:#ccc;
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
    padding: 0 80px;
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
    margin: 10px 0;
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
