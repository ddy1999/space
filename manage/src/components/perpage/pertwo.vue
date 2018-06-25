<template>
  <div>
    <div class="top">
      <div class="topLeft">
        党员教育
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
        <Button class="add" @click="modal1 = true" ></Button>
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            上传资料
          </div>
          <div class="cont">
            <ul>
              <li>
                <div><span style="color:red">*</span>档案类型:</div>
                <div>
                  <Select v-model="mode2" style="width:100px;margin:0;">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
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
        <Modal v-model="moda"  class="layer">
          <div slot="header" class="head">
           知识竞答
          </div>
          <div class="cont">

          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="moda = false">取消</Button>
            <Button  size="large" class="admit" @click="moda = false">提交</Button>
          </div>
        </Modal>
      </div>
      <div style=" line-height: 90px;">
        <Button style="background: #0197fb;color:#fff;border:none;" @click="moda = true" >开始知识竞答</Button>
        <Button style="background: #fd2704;color:#fff;border:none;">开始在线直播</Button>
      </div>
    </div>
    <div class="content">
      <div class="local">
        <div>
          {{city}}
        </div>
        <div>
          <ul>
            <li v-for="(chose,index) in choses" :key="chose.id" @click="toggle(index)" :class="{light:index==light}">{{chose.text}}</li>
          </ul>
        </div>
      </div>
      <div class="contaner">
        <ul>
          <li>
            <div class="liTop">
              <p class="titl">{{que}}</p>
              <p><Button class="question">提问</Button></p>
            </div>
            <div class="liCent">
              {{center}}
            </div>
            <div id="kind">
            <div class="liBoot">
              <div class="ask">
                <div class="img"></div>
                <div>
                  <span>{{name}}</span>
                  <p>{{date}}</p>
                </div>
                <div>{{quest}}</div>
              </div>
              <div><Button class="anser">回答</Button></div>
            </div>
            <div class="back">
              <div>
                <a href="#">{{autor}}</a>回答 <a href="#">{{name}}</a>
              </div>
              <div class="ansen">
                <div class="hidden">{{anser}}</div>
                <div class="ico">
                  <div>
                    <span>{{count}}</span>
                    <a href="#" class="zan"></a>
                  </div>
                  <div>
                    <span>{{coun}}</span>
                    <a href="#" class="jug"></a>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="last">
              <div>共{{total}}个问题</div>
              <div><a href="#" class="up">收起</a></div>
            </div>
          </li>
          <li>
            <div class="liTop">
              <p class="titl">{{que}}</p>
              <p><Button class="question">提问</Button></p>
            </div>
            <div class="liCent">
              {{center}}
            </div>
            <div class="liBoot" style="display: none">
              <div class="ask">
                <div class="img"></div>
                <div>
                  <span>{{name}}</span>
                  <p>{{date}}</p>
                </div>
                <div>{{quest}}</div>
              </div>
              <div><Button class="anser">回答</Button></div>
            </div>
            <div class="back" style="display: none">
              <div>
                <a href="#">{{autor}}</a>回答 <a href="#">{{name}}</a>
              </div>
              <div class="ansen">
                <div class="hidden">{{anser}}</div>
                <div class="ico">
                  <div>
                    <span>{{count}}</span>
                    <a href="#" class="zan"></a>
                  </div>
                  <div>
                    <span>{{coun}}</span>
                    <a href="#" class="jug"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="last">
              <div>共{{total}}个问题</div>
              <div><a href="#" class="down">阅读全文</a></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="contaner2">
        <div style="text-align: right">
          <Select v-model="model" style="width:100px;margin: 0;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <div id="pic"></div>
          <div class="tab">
            <div class="lonely">
              <div><span>{{local}}</span><span>(共{{totaly}}人，{{final}}人已完成)</span></div>
              <div>
                <Select v-model="model" style="width:100px;margin: 0;">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
            <Table  stripe border :columns="columns1" :data="data1" style="text-align: center;border-radius: 10px;" id="table"></Table>
          </div>
        </div>
      </div>
      <div class="contaner3"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import $ from 'jquery'
  export default {
    name: "pertwo",
    data(){
      return{
        model:"",
        moda:false,
        que:"问题标题",
        center:"问题主体内容",
        name:"昵称",
        date:"2018-04-21",
        quest:"问题到底是什么呢？",
        anser:"打哪ask解放啦福建省开了房间阿拉山口解放路卡建设路口发了顺丰卡设计费了卡几十块了房间埃里克森就赶快来静安寺昆仑决管理会计dasasdasfasfasfassssssssssssssssssssssss",
        autor:"作者",
        count:"3",
        coun:"0",
        total:"1",
        value4:"",
        light:1,
        modal1:false,
        mode2:"",
        value:"",
        city:"成都市",
        local:"洪安镇",
        totaly:"4",
        final:"2",
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
          {text:"基本知识"},
          {text:"知识竞答"},
          {text:"在线直播"},
        ],
        typeList:[
          {label:"知识竞答",value:"知识竞答"},
          {label:"基本资料",value:"基本资料"},
        ],
        columns1: [
          {
            title: '姓名',
            align: 'center',
            key: 'name',
          },
          {
            title: '身份证号',
            align: 'center',
            key: 'idCard'
          },
          {
            title: '所属组织',
            align: 'center',
            key: 'org'
          },
          {
            title: '完成状态',
            align: 'center',
            key: 'motion'
          },
          {
            title: '得分情况',
            align: 'center',
            key: 'count'
          },
          {
            title: '答题时间',
            align: 'center',
            key: 'time'
          },
        ],
        data1: [
          {
            name: '王丽',
            idCard: 513433198905064854,
            org: '所属组织',
            motion:'已完成',
            count:"95",
            time:"2017-12-09",
          },
          {
            name: '杨震',
            idCard: 513433198905064854,
            org: '所属组织',
            motion:'已完成',
            count:"93",
            time:"2017-12-25",
          },
        ]
      }
    },
    mounted(){
      this.drawLine();
      $(".local ul li").on('click',function(){
        let index = $(this).index();
        if(index==0){
          $(".contaner2").css("display",'none');
          $(".contaner3").css("display",'none');
          $(".contaner").css("display",'block');
        }else if(index==1){
          $(".contaner").css("display",'none');
          $(".contaner3").css("display",'none');
          $(".contaner2").css("display",'block');
        }else{
          $(".contaner").css("display",'none');
          $(".contaner2").css("display",'none');
          $(".contaner3").css("display",'block');
        }
      });
      /*$(".up").on('click',function(){
        $('#kind').css("display",'none');
        $(this).removeClass('up').addClass('down');
        $(this).html('阅读全文');
      });
      $(".down").on('click',function(){
        $('#kind').css("display",'block');
        $(this).removeClass('down').addClass('up');
        $(this).html('收起');
      })*/
    },
    methods:{
      clear(){
      },
      toggle(index){
        this.light=index;
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('pic'))
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['已完成','待完成']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type : 'category',
            splitLine:{show: false},
            data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
            axisLine:{ lineStyle:{ color:'transparent' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#333'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'transparent' }},
            axisLabel: {
              textStyle: {
                color: '#333'
              }
            },
          },
          series: [
            {
              name: '已完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#638af9'
                }
              },
              stack:"总数",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '待完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#f9b663'
                }
              },
              stack:"总数",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            }
          ]
        });
        myChart.on('click', function (param) {
          let index = param.dataIndex;
          //alert(index);
        });
      },

    }

  }
</script>

<style scoped>
  .lonely{
    line-height: 40px;
    display: flex;
    justify-content: space-between;
  }
  #pic{
    width:100%;
    height: 350px;
  }
  .cont{
    padding:0 20px;
    height: 600px;
  }
  .cont ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
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
  .title{
    line-height:50px;
    height: 50px;
    font-size: 18px;
    color:#fff;
    text-align: center;
    background: #027ed1;
  }
  .layer span{
    color:red;
    font-size: 14px;
  }
  .last{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
  .up{
    background: url("../../../static/img/up.png") right center no-repeat;
    padding-right: 20px;
  }
  .down{
    background: url("../../../static/img/down.png") right center no-repeat;
    padding-right: 20px;
  }
  .zan{
    height: 18px;
    display: inline-block;
    width:16px;
    background: url("../../../static/img/zan.png") left 2px no-repeat;
    margin-left: 10px;
  }
  .jug{
    height: 18px;
    width:16px;
    display: inline-block;
    background: url("../../../static/img/jug.png") left 2px no-repeat;
    margin-left: 10px;
  }
  .ico{
    display: flex;
    justify-content: flex-start;
    line-height: 25px;
  }
  .ico>div{
    margin-right: 20px;
  }
  .ansen{
    width: 800px;
    margin-left: 20px;
  }
  .back{
    display: flex;
    justify-content: flex-start;
    height: 50px;
    margin-top: 20px;
  }
  .back a{
    margin-right: 10px;
  }
  .ask{
    display: flex;
    justify-content: flex-start;
  }
  .ask>div{
    margin-right: 10px;
  }
  .img{
    width: 36px;
    height: 36px;
    background: #ccc;
  }
  .question{
    background: #0197fb;
    color:#fff;
    border: none;
  }
  .anser{
    background: #f7bc07;
    color:#fff;
    border: none;
  }
  .hidden{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .liCent{
    height:70px;
    font-size: 14px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .liTop{
    line-height: 40px;
  }
  .liBoot{
    display: flex;
    justify-content: space-between;
  }
  .titl{
    font-size: 18px;
    font-weight: normal;
  }
  .contaner {
    height:610px;
    padding:30px 0 0 100px;
    display: none;
  }
  .contaner ul li{
    list-style: none;
    border-bottom: 1px solid #ccc;
  }
  .liTop{
    display: flex;
    justify-content: space-between;
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
  .content{
    height: 660px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
    margin-top: 20px;
  }
  .local{
    line-height: 40px;
    padding-left:20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/add.png");
  }
  .light{
    border-bottom:1px solid #2db7f5;
  }
  .local ul{
    display: flex;
    justify-content: space-between;
  }
  .local ul li{
    list-style: none;
    padding: 0 20px;
    font-size: 14px;
    cursor: pointer;
  }
</style>
