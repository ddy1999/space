<template>
    <div>
      <div class="top">
      <div class="topLeft">
        党费缴纳
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
      </div>
     </div>
      <div class="content">
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
      </div>
      <div class="bottom">
        <div class="local">
          <div>
            {{local}}
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
        <Table border :columns="columns7" :data="data6"></Table>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "perfour",
      data(){
          return{
            model:"",
            value4:"",
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
            columns7: [
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
                title: '缴费金额',
                align: 'center',
                key: 'money'
              },
              {
                title: '缴费状态',
                align: 'center',
                key: 'motion'
              },
              {
                title: '缴费处理',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginLight: '5px'
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    }, '立即缴费'),
                  ]);
                }
              },
              {
                title: '支付方式',
                align: 'center',
                key: 'way'
              },
              {
                title: '缴费时间',
                align: 'center',
                key: 'time'
              }
            ],
            data6: [
              {
                name: '张三',
                idCard:'501248198905033321',
                org: '所属组织',
                money:"￥15.00",
                motion:"未交费",
                action:"",
                way:"",
                time:"",
              },
              {
                name: 'Lisa',
                idCard:'501248198905033321',
                org: '所属组织',
                money:"￥15.00",
                motion:"已缴费（迟交）",
                way:"支付宝",
                time:"2018-01-12",
              },
            ]
          }
      },
      mounted() {
        this.drawLine();
      },
      methods:{
        clear(){
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
              data:['已完成','未完成']
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
                },
                formatter:'{value} %',
                max:100,
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
                data: ['75','80','85','75','90','80','88','90','91','93','87','86',]
              },
              {
                name: '未完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"总数",
                data: ['25','20','15','25','10','20','12','10','9','7','13','16',]
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
    height: 390px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
    margin: 20px 0;
  }
  .local{
    line-height: 40px;
    padding-left:20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  #pic{
    width:100%;
    height: 350px;
  }
  .bottom{
    width: 100%;
    height: 250px;
    background: #fff;
    border-radius: 10px;
  }
</style>
