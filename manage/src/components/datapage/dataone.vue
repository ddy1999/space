<template>
  <div>
    <div class="top">
      <div class="topLeft">
        数据中心
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
      </div>
    </div>
    <div class="content">
      <div class="tit">
        {{tit}}
      </div>
      <div class="conter">
        <iframe src="../../../static/data.html"  frameborder="0" scrolling="no" style="width:100%;height:100%;border:0;" id="myiframe"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  global.$ = global.jQuery = $
  require('../../../static/assets/lib/jquery.marquee.js')
  import move from '../../../static/assets/lib/move'
  import echarts from 'echarts'
  require('../../../static/assets/lib/chengdu')
  export default {
    name: "persix",
    data(){
      return{
        model:"",
        screenWidth: document.body.clientWidth,
        value4:"",
        style:"",
        perNum:"200",
        branchNum:"12",
        motion:"正常",
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
        welList:[
          {text:"欢迎经开区领导！"},
          {text:"欢迎经开区领导！"},
          {text:"欢迎经开区领导！"}
        ],
        active:0,
        tit:"经开区",
        columns1:[
          {
            type:'index',
            width:60,
            align: 'center'
          },
          {
            title:'姓名',
            key:'name',
            align: 'center'
          },
          {
            title:'积分',
            key:'code',
            align: 'center'
          },
          {
            title:'所属地区',
            key:'local',
            align: 'center'
          },
        ],
        data1:[
          {
            name:"张三",
            code:"123",
            local:"经开区",
          },
          {
            name:"张三",
            code:"123",
            local:"经开区",
          },

        ],
      }
    },
    methods:{
      clear(){
      },
      fullScreen(id){
        let element = document.getElementById(id);
        if (element.requestFullScreen)
          return element.requestFullScreen();
        if (element.webkitRequestFullScreen)
          return element.webkitRequestFullScreen();
        if (element.mozRequestFullScreen)
          return element.mozRequestFullScreen();
        if (element.msRequestFullScreen)
          return element.msRequestFullScreen();
        if (element.oRequestFullScreen)
          return element.oRequestFullScreen();
      },
      edu(){
        let edu = echarts.init(document.getElementById('edu'));
      /*  this.$http({
          method: 'post',
          url: '/api/ds/edu',
          data:{
            "orgID":0,
          },
        })
          .then(function(res){
            console.log(res);
          })
          .catch(function(error){
            console.log(error);
          })*/
        edu.setOption({
          title: { text: '学历分布' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            splitLine:{show: false},
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            splitLine:{show: false},
          },
          series: [{
            type: 'bar',
            barWidth:20,
            itemStyle:{
              normal:{
                color:'#638af9'
              }
            },
            data: [120, 200, 150, 80, 70, 110, 130],
          }]
        });
      },
      old() {
        let old = echarts.init(document.getElementById('old'));
        old.setOption({
          title: {text: '年龄分布'},
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            splitLine: {show: false},
          },
          series: [{
            type: 'line',
            itemStyle: {
              normal: {
                color: '#638af9'
              }
            },
            data: [120, 200, 150, 80, 70, 110, 130],
          }]
        });
      },
      lesson(){
        let lesson = echarts.init(document.getElementById('lesson'));
        lesson.setOption({
          title: {
            text: '三会一课',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        })
      },
      company(){
        let company = echarts.init(document.getElementById('company'));
        company.setOption({
          title: {
            text: '企业类型',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        })
      },
      pay(){
        let pay = echarts.init(document.getElementById('pay'));
        pay.setOption({
          title: {
            text: '党费缴纳',
            left: 'center',
            top: 0,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        })
      },
      action(){
        let action = echarts.init(document.getElementById('action'));
        action.setOption({
          title: { text: '主题活动' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            splitLine:{show: false},
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            splitLine:{show: false},
          },
          series: [{
            type: 'bar',
            barWidth:20,
            itemStyle:{
              normal:{
                color:'#638af9'
              }
            },
            data: [120, 200, 150, 80, 70, 110, 130],
          }]
        });
      },
      map(){
        let map = echarts.init(document.getElementById('map'));
        let data=[
          {name:'经开区',value:'600'},
        ];
        let geoCoordMap = {
          '经开区':[104.3360,30.700],
        };
        let convertData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        map.setOption({
          backgroundColor: 'transparent',
          title: {
            text: '',
            left: 'center',
            textStyle: {
              color: '#ADD8E6'
            }
          },
          tooltip : {
            trigger: 'item'
          },
          geo: {
            map: '成都',
            label: {
              emphasis: {
                show: false
                //color: '#fff'
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'rgba(53,96,155,0.7)',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#24417b'
              }
            }
          },
          series : [
            {
              name: '位置',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(data),
              symbolSize: function (val) {
                return val[2] / 20;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ddb926',

                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 6)),
              symbolSize: function (val) {
                return val[2] / 20;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            }
          ]
        });
      },
      changeEchart(){
        window.onresize=function(){
          this.education = echarts.init(document.getElementById('edu'));
          this.education.resize();
          this.age =echarts.init(document.getElementById('old'));
          this.age.resize();
          this.lession =echarts.init(document.getElementById('lesson'));
          this.lession.resize();
          this.com =echarts.init(document.getElementById('company'));
          this.com.resize();
          this.money =echarts.init(document.getElementById('pay'));
          this.money.resize();
          this.actor =echarts.init(document.getElementById('action'));
          this.actor.resize();
          this.mapping =echarts.init(document.getElementById('map'));
          this.mapping.resize();



        }
      },
  },
    mounted:function(){
      window.onresize=function(){
        let ifm= document.getElementById("myiframe");
        ifm.height=window.screen.height;
      },
      window.onresize=function(){
        let ifm = document.getElementById("myiframe");
        ifm.height=document.documentElement.clientHeight;
      }
      //点击全屏
      let widths = window.screen.width;
      let heights = window.screen.height;
      $("#full").click(function (){
        let status = $(this).attr('data');
        if(status == 'off'){
          $(this).css('position','fixed');
          move("#full").set('width',widths+'px').set('height',heights+'px').end();
          $(this).attr('data','on');
        }else{
          move("#full").set('width','1402.59px').set('height','620px').end();
          $(this).attr('data','off');
          $(this).css('position','');
        }
      });

      //echarts绘制图形
      this.edu();
      this.old();
      this.lesson();
      this.company();
      this.pay();
      this.action();
      this.map();
     //窗口自适应
      this.changeEchart();

      //走马灯插件
      $(function(){
        $("#marquee").marquee({
          yScroll: "top",
          showSpeed: 850,        // 初始下拉速度         ,
          scrollSpeed: 12,       // 滚动速度         ,
          pauseSpeed: 500,      // 滚动完到下一条的间隔时间         ,
          pauseOnHover: true,    // 鼠标滑向文字时是否停止滚动         ,
          loop: -1 ,             // 设置循环滚动次数 （-1为无限循环）         ,
          fxEasingShow: "swing" , // 缓冲效果         ,
          fxEasingScroll: "linear",  // 缓冲效果         ,
          cssShowing: "marquee-showing"  //定义class
        });
        $("#marquee1").marquee();
      });
      //显示当前的时间
      window.onload=function(){
        //定时器每秒调用一次fnDate()
        setInterval(function(){
          fnDate();
        },1000);
      };
      function fnDate(){
        let oDiv= document.getElementById("time");
        let date= new Date();
        let year=date.getFullYear();//当前年份
        let month=date.getMonth();//当前月份
        let data=date.getDate();//天
        let hours=date.getHours();//小时
        let minute=date.getMinutes();//分
        let second=date.getSeconds();//秒
        let time=year+"-"+fnW((month+1))+"-"+fnW(data)+" "+fnW(hours)+":"+fnW(minute)+":"+fnW(second);
        oDiv.innerHTML = time;
      };
      //补位 当某个字段不是两位数时补0
      function fnW(str){
        let num;
        str>10?num=str:num="0"+str;
        return num;
      };

    }
  }

</script>

<style scoped>
  ul.marquee {
    display: block;
    line-height: 1;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 40px;
  }
  ul.marquee li {
    position: absolute;
    top: -999em;
    left: 0;
    display: block;
    white-space: nowrap;
    padding: 3px 5px;
    text-indent:0.8em;
    cursor: pointer;
    line-height: 40px;
  }
  .marquee1{
    display: block;
    line-height: 1;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 18px;
  }
  .marquee1 li{
    position: absolute;
    top: -999em;
    left: 0;
    display: block;
    white-space: nowrap;
    padding: 0px 5px;
    text-indent:0.8em;
    cursor: pointer;
    line-height: 18px;
  }
  html::-webkit-scrollbar{
    display:none;
  }
  #company,#pay,#action{
    height: 28%;
    background: #0572d1;
    border-radius: 10px;
    margin:1% 0;
  }
  .time,.branch{
    height: 5%;
    font-size: 20px;
    background: #0572d1;
    border-radius: 10px;
    color:#fff;
    padding-left: 30px;
  }
  .brith{
    height: 3%;
    background: #0572d1;
    border-radius: 10px;
    margin-bottom: 1%;
    color:#Fff;
  }
  .code{
    height: 20%;
    background: #0572d1;
    border-radius: 10px;
  }
  #map{
    height: 55%;
    background: #0572d1;
    border-radius: 10px;
    margin:1% 0;
  }
  .carousel{
    height: 7%;
    background: #0572d1;
    border-radius: 10px;
    color:#Fff;
  }
  .title{
    line-height: 60px;
    font-size: 30px;
    text-align: center;
    background: #0572d1;
    border-radius: 10px;
    height: 10%;
    margin-bottom: 1%;
    color:#fff;
  }
  .perNum{
   height: 5%;
   font-size: 20px;
    background: #0572d1;
    border-radius: 10px;
    color:#fff;
    padding-left: 30px;

  }
  #lesson{
    height: 29%;
    margin-bottom: 1%;
    background: #0572d1;
    border-radius: 10px;

  }
  #old{
    height: 30%;
    background: #0572d1;
    border-radius: 10px;
  }
  #edu{
    height:28%;
    background: #0572d1;
    border-radius: 10px;
    margin: 1% 0;
  }
  .motion{
    height:5%;
    font-size: 20px;
    background: #0572d1;
    border-radius: 10px;
    color:#fff;
    padding-left: 30px;
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
    height:620px;
    position: relative;
    display: flex;
    justify-content: space-between;
    background: #065fc7;
    border-radius: 10px;
  }
  .Left{
    width: 24%;
  }
  .Center{
    width: 48%;
  }
  .Right{
    width: 24%;
  }
  .scale{
    position: absolute;
    top:0;
    right:50px;
    width: 30px;
    height: 30px;
    background: url("../../../static/img/scale.png") left center no-repeat;
    border:none;
  }
.conter img{
  width: 100%;
  height: 100%;
}
</style>
