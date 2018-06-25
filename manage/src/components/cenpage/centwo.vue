<template>
  <div>
    <div class="top">
      <div class="topLeft">
        通知公告
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
        <Button class="date" ></Button>
        <Button class="add" @click="modal1 = true"  ></Button>
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            发布通知公告
          </div>
          <div class="cont">
            <ul>
              <li>
                <div><span style="color:red">*</span>发布组织:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>接受对象:</div>
                <div>
                  <Select v-model="mode2" style="width:100px;margin:0;">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>标题:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>内容:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px" type="textarea"></Input>
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
      </div>
    </div>
    <div class="content">
      <div class="tit">
        {{tit}}
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
            value:"",
            mode2:"",
            modal1:false,
            typeList:[
              {label:"2018",value:"2018"},
              {label:"2017",value:"2017"},
              {label:"2016",value:"2016"},
            ],
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
</style>
