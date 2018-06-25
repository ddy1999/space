<template>
  <div>
    <div class="top">
      <div class="topLeft">
        民主评议
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
      </div>
      <div style=" line-height: 90px;">
        <Button style="background: #02c788;color:#fff;border:none;" @click="moda = true" >评价</Button>
        <Modal v-model="moda"  class="layer">
          <div slot="header" class="head">
            评价
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
            <div class="jugeone">
              <ul>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>政治方面:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>纪律方面:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>品德方面:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>作用方面:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>个人存在的问题:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>今后努力的方向:
                  </div>
                  <div>
                    <Input  type="textarea"   placeholder="Enter something..." style="resize:none;width: 300px;"></Input>
                  </div>
                </li>
              </ul>
            </div>
            <div class="jugetwo">
              <ul>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>评议党员:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>政治素养（是否立场坚定、对党忠诚、在大是大非面前头脑清醒）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>四个意识（是否具有政治意识、大局意识、核心意识、看齐意识）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>四个自信（是否具有道路自信、理论自信、制度自信、文化自信）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>工作作风（是否敢于负责、勇于担当、坚持原则、作风正派、团结协作、维护大局）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>发挥作用（是否勇挑重担、关键时刻挺身而出、敢于碰硬、积极为群众办实事好事）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>自我要求（是否遵纪守法、品行端正、带头参加组织生活、按时足额缴纳党费）:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>综合评定:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    评定为不及格情况说明：
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="width: 250px;"></Input>
                  </div>
                </li>
              </ul>
            </div>
            <div class="jugethree">
              <ul>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>总体评价:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>执行上级党组织决定:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>严格党组织生活制度:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>直接教育、管理、监督党员:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>直接组织、宣传、凝聚和服务群众:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>强班子自身建设:
                  </div>
                  <div>
                    <Select v-model="mode2" style="width:100px;margin:0;"  >
                      <Option v-for="item in choses" :value="item.value" :key="item.value">{{ item.text }}</Option>
                    </Select>
                  </div>
                </li>
                <li>
                  <div class="far">
                    <span style="color:red">*</span>对支部班子的意见建议:
                  </div>
                  <div>
                    <Input  type="text"   placeholder="Enter something..." style="width: 250px;"></Input>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="moda = false">取消</Button>
            <Button  size="large" class="admit" @click="moda = false">提交</Button>
          </div>
        </Modal>
      </div>
    </div>
    <div class="content">
      <div id="twon">
        <div class="local">
          <div>
            <span class="fri">{{part}}</span>
          </div>
          <div>
            <ul>
              <li v-for="(chose,index) in choses" :key="chose.id" @click="toggle(index)" :class="{light:index==light}">{{chose.text}}</li>
            </ul>
          </div>
        </div>
        <div class="ones">
          <Table border :columns="columns1" :data="data1"></Table>
        </div>
        <div class="twos">
          <div id="each"></div>
          <h3 style="text-align: center">被评价人：{{peson}}</h3>
          <Table border :columns="columns" :data="data"></Table>
        </div>
      </div>
      <div id="county">
        <div class="local">
          <div>
            {{city}}
          </div>
          <div>
            <Select v-model="model" style="width:100px;margin:0;">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model" style="width:100px;margin:0;">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div id="pic"></div>
        <div class="table">
          <h3 style="text-align: center">{{branch}}</h3>
          <Table border :columns="columns" :data="data"></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import $ from 'jquery'
  export default {
    name: "perthree",
    data(){
      return{
        model:"",
        branch:"第二支部",
        part:"第一支部",
        moda:false,
        total:"1",
        peson:"刘成",
        value4:"",
        light:0,
        modal1:false,
        mode2:"",
        value:"",
        city:"成都市",
        local:"洪安镇",
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
          {text:"党员互评",value:'党员互评'},
          {text:"自我评价",value:'自我评价'},
        ],
        typeList:[
          {label:"党员互评",value:"党员互评"},
          {label:"自我评价",value:"自我评价"},
          {label:"支部评议",value:"支部评议"},
        ],
        columns1: [
          {
            title: '姓名',
            align: 'center',
            key: 'name',
          },
          {
            title: '评价状态',
            align: 'center',
            key: 'motion'
          },
          {
            title: '表彰/处理',
            align: 'center',
            key: 'dell'
          },
          {
            title: '查看评议',
            align: 'center',
            key: 'look',
            render: (h, params) => {
              return h('div', [
                h('a', {
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
                }, '查看详情评议'),
              ]);
            }
          }
        ],
        data1: [
          {
            name: '王丽',
            motion:'已评价',
            dell:'优秀党员',
          },
          {
            name: '杨震',
            motion:'已评价',
            dell:'合格党员',
          },
        ],
        columns: [
          {
            title: '姓名',
            align: 'center',
            key: 'name',
          },
          {
            title: '总体评价',
            align: 'center',
            key: 'motion'
          },
          {
            title: '查看评议',
            align: 'center',
            key: 'look',
            render: (h, params) => {
              return h('div', [
                h('a', {
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
                }, '查看详情评议'),
              ]);
            }
          }
        ],
        data: [
          {
            name: '王丽',
            motion:'优秀',
          },
          {
            name: '杨震',
            motion:'合格',
          },
        ]
      }
    },
    mounted(){
      this.drawLine();
      this.drawPic();
      $('.local ul li').on('click',function(){
        let index =$(this).index();
        if(index==0){
          $('.twos').css('display','block');
          $('.ones').css('display','none');
        }else{
          $('.ones').css('display','block');
          $('.twos').css('display','none');
        }
      });
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
            data:['好','较好','一般','差']
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
              name: '好',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#fc020e'
                }
              },
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '较好',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#f90199'
                }
              },
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '一般',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#0499fc'
                }
              },
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '差',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#866603'
                }
              },
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
          ]
        });
        myChart.on('click', function (param) {
          let index = param.dataIndex;
          //alert(index);
        });
        window.onresize = function(){
          myChart.resize();
        };
      },
      drawPic(){
        // 基于准备好的dom，初始化echarts实例
        let myCharts = echarts.init(document.getElementById('each'))
        // 绘制图表
        myCharts.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['好','较好','一般','差']
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
            data : ['张三','李四','杨震','何欢','刘成','徐峰','王钊'],
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

          },
          series: [
            {
              name: '好',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#fc020e'
                }
              },
              data: ['','40','','','35','','']
            },
            {
              name: '较好',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#f90199'
                }
              },
              data: ['50','','42','','','33','',]
            },
            {
              name: '一般',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#0499fc'
                }
              },
              data: ['','','','55','','','']
            },
            {
              name: '差',
              type: 'bar',
              barWidth:10,
              itemStyle:{
                normal:{
                  color:'#866603'
                }
              },
              data: ['','','','','','','48']
            },
          ]
        });
        myCharts.on('click', function (param) {
          let index = param.dataIndex;
          let name = param.name;
          console.dir(param);
          alert(name);
        });
        window.onresize = function(){
          myCharts.resize();
        };
      },
      show(index){
        alert(index);
      },
      selectChange(){
        if(this.mode2=='自我评价'){
          $('.jugeone').css('display','block');
          $('.jugetwo').css('display','none');
          $('.jugethree').css('display','none');
        }else if(this.mode2=='党员互评'){
          $('.jugeone').css('display','none');
          $('.jugetwo').css('display','block');
          $('.jugethree').css('display','none');
        }else{
          $('.jugeone').css('display','none');
          $('.jugetwo').css('display','none');
          $('.jugethree').css('display','block');
        }
      }

    }

  }
</script>

<style scoped>
  .jugethree{
    display: none;
  }
  .jugetwo{
    display: none;
  }
  .jugeone{
    display: block;
  }
  .access{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .table{
    display: none;
  }
  #twon{
    display: none;
  }
  #county{
    -display: none;
  }
  .ones{
    margin-top: 20px;
    display: none;
  }
  .far{
    line-height: 32px;
  }
  #pic{
    width:100%;
    height: 350px;
  }
  #each{
    width:100%;
    height: 350px;
  }
  .cont{
    padding:0 20px;
  }
  .cont ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .jugeone ul li{
    margin-bottom: 10px;
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
