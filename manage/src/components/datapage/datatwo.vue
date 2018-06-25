<template>
  <div>
    <div class="top">
      <div class="topLeft">
        领导视图
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
        <ul>
          <li v-for="item in itemList" :key="item.id">
              <figure>
                <img :src="item.src">
                <p>{{item.text}}</p>
              </figure>
          </li>
        </ul>
      </div>
      <div class="box">
        <div class="layer" :class="gernerateClass(index)" v-for="(item,index) in items" :key="item.index">
          <img src="../../../static/img/back.png" alt="">
          <h3>{{item.text}}</h3>
          <div class="pic" :id="gernerateId(index)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import echarts from 'echarts'
  export default {
    name: "datatwo",
    data(){
      return{
        model:"",
        tit:"全部",
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
        itemList:[
          {text:'政治生日',src:"../static/img/d1.png"},
          {text:'组织简介',src:"../static/img/d2.png"},
          {text:'历史进程',src:"../static/img/d3.png"},
          {text:'三会一课',src:"../static/img/d4.png"},
          {text:'党员发展',src:"../static/img/d5.png"},
          {text:'积分排名',src:"../static/img/d6.png"},
          {text:'系统运维',src:"../static/img/d7.png"},
          {text:'学习教育',src:"../static/img/d8.png"},
          {text:'入驻单位',src:"../static/img/d9.png"},
          {text:'支部数量',src:"../static/img/d10.png"},
          {text:'党员数量',src:"../static/img/d11.png"},
          {text:'学历分布',src:"../static/img/d12.png"},
          {text:'企业类型',src:"../static/img/d13.png"},
          {text:'年龄分布',src:"../static/img/d14.png"},
          {text:'党费缴纳',src:"../static/img/d15.png"},
          {text:'主题活动',src:"../static/img/d16.png"},
          {text:'民主评议',src:"../static/img/d17.png"},
        ],
        items:[
          {text:'政治生日'},
          {text:'组织简介'},
          {text:'历史进程'},
          {text:'三会一课'},
          {text:'党员发展'},
          {text:'积分排名'},
          {text:'系统运维'},
          {text:'学习教育'},
          {text:'入驻单位'},
          {text:'支部数量'},
          {text:'党员数量'},
          {text:'学历分布'},
          {text:'企业类型'},
          {text:'年龄分布'},
          {text:'党费缴纳'},
          {text:'主题活动'},
          {text:'民主评议'},
        ],
      }
    },
    methods: {
      gernerateId: function (index) {
        return "pic" + index
      },
      gernerateClass: function (index) {
        return "con" + index
      },
      //echart绘制东西
      //政治生日
      birth() {
        let birth = echarts.init(document.getElementById('pic0'));
        birth.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            name: '人数/人',
            splitLine: {show: false},
            nameTextStyle: {
              color: ['#fff']
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 20,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a07604'
              }
            },
          }]
        })
      },
      //学历分布
      edu() {
        let education = echarts.init(document.getElementById('pic11'));
        education.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Step Start', 'Step Middle', 'Step End'],
            textStyle: {
              color: '#fff'
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            splitLine: {show: false},
          },
          series: [
            {
              name: 'Step Start',
              type: 'line',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Step Middle',
              type: 'line',
              data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
              name: 'Step End',
              type: 'line',
              data: [450, 432, 401, 454, 590, 530, 510]
            }
          ]
        })
      },
      //三会一课
      sanhui(){
        let sanhui = echarts.init(document.getElementById('pic3'));
        sanhui.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            name: '',
            splitLine: {show: false},
            nameTextStyle: {
              color: ['#fff']
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 20,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a07604'
              }
            },
          }]
        })
      },
      //入驻企业
      com() {
        let company = echarts.init(document.getElementById('pic8'));
        company.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        })
      },
      //年龄分布
      age(){
        let old = echarts.init(document.getElementById('pic13'));
        old.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Step Start', 'Step Middle', 'Step End'],
            textStyle: {
              color: '#fff'
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            splitLine: {show: false},
          },
          series: [
            {
              name: 'Step Start',
              type: 'line',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Step Middle',
              type: 'line',
              data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
              name: 'Step End',
              type: 'line',
              data: [450, 432, 401, 454, 590, 530, 510]
            }
          ]
        })
      },
      //党员发展
      progress(){
        let progress = echarts.init(document.getElementById('pic4'));
        progress.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line',
            // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data:['入党积极分子','预备党员','正式党员'],
            textStyle: {
              color: '#fff'
            },
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
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
          },
          series: [
            {
              name: '入党积极分子',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#46a5b0'
                }
              },
              stack:"总数",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '预备党员',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#e3694b'
                }
              },
              stack:"总数",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            },
            {
              name: '正式党员',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#ecbd68'
                }
              },
              stack:"总数",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            }
          ]
        })
      },
      //党员数量
      partymember(){
        let party = echarts.init(document.getElementById('pic10'));
        party.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            name: '人数/人',
            splitLine: {show: false},
            nameTextStyle: {
              color: ['#fff']
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 20,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a07604'
              }
            },
          }]
        })
      },
      //党支部数量
      branch(){
        let branch = echarts.init(document.getElementById('pic9'));
        branch.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            splitLine: {show: false},
            nameTextStyle: {
              color: ['#fff']
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 20,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a07604'
              }
            },
          }]
        })
      },
      //企业类型分布
      type(){
        let type = echarts.init(document.getElementById('pic12'));
        type.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line',           // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data:['企业类型一','企业类型二','企业类型三'],
            textStyle: {
              color: '#fff'
            },
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
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
          },
          series: [
            {
              name: '企业类型一',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#46a5b0'
                }
              },
              stack:"企业",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '企业类型二',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#e3694b'
                }
              },
              stack:"企业",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            },
            {
              name: '企业类型三',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#ecbd68'
                }
              },
              stack:"企业",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            }
          ]
        })
      },
      //民主评议
      review(){
        let review = echarts.init(document.getElementById('pic16'));
        review.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line',           // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data:['已完成','未完成',],
            textStyle: {
              color: '#fff'
            },
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
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              textStyle: {
                color: '#fff'
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
                  color:'#46a5b0'
                }
              },
              stack:"情况",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '未完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#e3694b'
                }
              },
              stack:"情况",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            },
          ]
        })
      },
      //党费缴纳
      pay(){
        let pay = echarts.init(document.getElementById('pic14'));
        pay.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line',           // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data:['已完成','未完成',],
            textStyle: {
              color: '#fff'
            },
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
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              textStyle: {
                color: '#fff'
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
                  color:'#46a5b0'
                }
              },
              stack:"情况",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '未完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#e3694b'
                }
              },
              stack:"情况",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            },
          ]
        })
      },
      //主题活动
      act(){
        let act = echarts.init(document.getElementById('pic15'));
        act.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line',           // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data:['已完成','未完成',],
            textStyle: {
              color: '#fff'
            },
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
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'#fff' }},
            axisLabel: {
              textStyle: {
                color: '#fff'
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
                  color:'#46a5b0'
                }
              },
              stack:"情况",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '未完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#e3694b'
                }
              },
              stack:"情况",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            },
          ]
        })
      },
      //积分排名
      code(){
        let code = echarts.init(document.getElementById('pic5'));
        code.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            splitLine: {show: false},
            axisLabel: {
              interval: 0,//横轴信息全部显示
              rotate: -30,//-30度角倾斜显示
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            name: '',
            splitLine: {show: false},
            nameTextStyle: {
              color: ['#fff']
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: 1,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 20,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a07604'
              }
            },
          }]
        })
      }
    },
    mounted:function(){
      $(".layer img").on("click",function(){
        $(this).parent().css("display","none");
      });

      $(".conter ul li").on('click',function(){
        let order = $(".conter ul li").index(this);//获取点击之后返回当前li标签index的值
       $(".con" + order).show().siblings(".layer").hide();//显示class中con加上返回值所对应的DIV*
      });
      //自动构建
      this.birth();
      this.edu();
      this.com();
      this.age();
      this.progress();
      this.partymember();
      this.branch();
      this.type();
      this.review();
      this.pay();
      this.code();
      this.sanhui();
      this.act();
      //自适应窗口大小
      window.onresize = function(){
        this.birth.resize();
        this.edu.resize();
        this.com.resize();
        this.age.resize();
        this.progress.resize();
        this.partymember.resize();
        this.branch.resize();
        this.type.resize();
        this.review.resize();
        this.pay.resize();
        this.code.resize();
      };
      //给其中添加DOM元素
      document.getElementById('pic2').innerHTML ="<h3 style='color:#fff;font-size: 24px;line-height: 40px;text-align: center'>成都经济开发区</h3>"
        +"<h4 style='color:#fff;font-size: 20px;line-height: 35px; text-align: center;padding-left:400px;font-weight: normal'>-----成都市一张响亮的名片</h4>"
        +"<p style='color:#fff;font-size:14px;text-indent:2em;'>成都经济技术开发区地处龙泉驿区，创立于1990年7月，2000年2月获批为国家级经济技术开发区，规划管理面积356.34km2（南部片区56.34km2已基本建成，北部拓展区77km2，委托管理的简州新城223km2）。成都经开区是国家新型工业化汽车产业示范基地，国别合作园区成都中法生态园、中德汽车及智能制造产业园的主承载区，四川省重点培育的“特色成长型千亿产业园区”，天府新区高端制造产业功能区，成都市实施“东进”“中优”战略主体区域。</p>"
        +"<p style='color:#fff;font-size:14px;text-indent:2em;'>2017年，成都经开区汽车整车产量达125万辆、增长12%，整车产值1390亿元、增长12%。完成工业投资300亿元、增长51%。新签约引进重大项目21个，其中百亿级项目4个，实际到位省外内资252亿元、增长11.8%，利用外资实际到位7.6亿美元、增长14.6%。工业总产值首次突破2000亿元大关、达到2178亿元，规上工业增加值增长8.6%。综合实力位列全国汽车产业基地第六位，获评全国工业百强区30强（位列第28名），成功创建国家生态工业示范园区。</p>"
        +"<p style='color:#fff;font-size:14px;text-indent:2em;margin-bottom: 20px;'>历经28年的砥砺奋进，成都经开区实现了历史性转变，成为成都经济最具活力、发展速度最快的地区之一，是成都发展外向型经济的重要窗口，在推进成都市乃至四川省的改革进程和现代化建设中起到了示范和引领作用，成为成都市一张响亮的“城市名片”。 </p>"
        +"<p style='color:#fff;font-size:14px;text-indent:2em;'>自1990年建立工业区以来，成都经开区由小到大、由弱变强，逐步建设成为国家重要的汽车产业基地。大致经历了三个重要发展时期：1990年至1999年，为创建起步和探索期；2000年至2006年，为稳步发展期；2007年至今，为突破壮大期。</p>"
        +"<div style='width: 100%;height: 350px;'> <img style='width:100%;height:100%' src='../../../static/img/fazhan.png'></div>"
    }
  }
</script>

<style scoped>
  #pic2{
    width: 100%;
    height: 100%;
    padding: 0 50px;
    background: #084772;
  }
  .con2 h3{
    display: none;
  }
  .table{
    width: 100%;
    height: 500px;
  }
  .con{
    display: block;
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
    position: relative;

  }
  .tit{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
  }
  .conter{
    height:620px;
    padding:40px 50px;

  }
  .conter ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
  }
  .conter ul li{
    list-style: none;
    text-align: center;
    margin:20px 70px 40px;
    cursor: pointer;
  }
  .conter ul li a{
    color:#333;
    cursor: pointer;
  }
  .layer{
    width: 100%;
    height: 100%;
    background: #00426e;
    position: absolute;
    top: 0;
    left:0;
    display: none;
  }
  .layer img{
    position: absolute;
    top: 20px;
    right:20px;
    cursor: pointer;
  }
  .layer h3{
    font-size: 20px;
    color:#fff;
    margin-left: 150px;
    margin-top: 50px;
  }
  .pic{
    width: 1140px;
    height: 540px;
    background: #07568b;
    margin: 0 auto 0;
    border-radius: 10px;
  }
</style>
