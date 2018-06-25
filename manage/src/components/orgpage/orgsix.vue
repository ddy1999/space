<template>
    <div>
      <div class="top">
        <div class="topLeft">
          民主投票
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
          <Modal v-model="modal1" width="940"  class="layer">
            <p slot="header" class="title">
              发布投票
            </p>
            <div class="all">
              <ul>
                <li><div class="far"><span>*</span>主题:</div> <div class="alone"><Input v-model="value" placeholder="请输入主题" style="width:700px;margin-left: 20px;"> </Input></div></li>
                <li><div class="far"><span>*</span>发布人：</div> <div class="alone"> <Input v-model="value" placeholder="请输入主题" style="width:700px;margin-left: 20px;"> </Input> <Button class="adding"></Button></div></li>
                <li>
                  <div class="far"><span>*</span>时间：</div>
                  <div class="alone">
                    <Row>
                      <Col span="12">
                      <DatePicker type="date" placeholder="开始日期" style="width:150px;margin:0 20px"></DatePicker>
                      <TimePicker type="time" placeholder="开始时间" style="width:150px"></TimePicker>
                      </Col>
                      <Col span="12">
                      <DatePicker type="date" placeholder="结束日期" style="width: 150px;margin:0 20px"></DatePicker>
                      <TimePicker type="time" placeholder="结束时间" style="width:150px"></TimePicker>
                      </Col>
                   </Row>
                  </div>
                </li>
                <li><div class="far"><span>*</span>投票选项：</div> <div class="alone"> <Input v-model="value" placeholder="选项" style="width:700px;margin-left: 20px;"> </Input> <Button class="adding"></Button></div></li>
                <li><div class="far"><span>*</span>投票人：</div> <div class="alone"> <Input v-model="value" placeholder="投票人" style="width:700px;margin-left: 20px;"> </Input> <Button class="adding"></Button></div></li>
                <li><div class="far">允许多选：</div>
                  <div class="alone">
                    <RadioGroup v-model="disabledGroup" style="margin-top:5px; padding-left: 600px" >
                      <Radio label="是" style="margin-right: 50px"></Radio>
                      <Radio label="否"></Radio>
                    </RadioGroup>
                  </div>
                </li>
                <li><div class="far">本人参与：</div>
                  <div class="alone">
                    <RadioGroup v-model="disabledGroup" style="margin-top:5px; padding-left: 600px" >
                      <Radio label="是" style="margin-right: 50px"></Radio>
                      <Radio label="否"></Radio>
                    </RadioGroup>
                  </div>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
      <div class="content">
        <div class="local">
          <span class="fri">{{city}}</span>
          <span class="sec">(共{{total}}次投票，已完成{{finish}}次投票)</span>
        </div>
        <div id="pic"></div>
      </div>
      <div class="bottom">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in items" :key="item.id">
            <div class="mode">
              <div class="tit">{{item.tit}}</div>
              <div class="cont">
                <ul>
                  <li>
                    <div class="liLelf time">时间：</div>
                    <div class="liRight">{{item.time}}</div>
                  </li>
                  <li>
                    <div class="liLelf person">发起人：</div>
                    <div class="liRight">{{item.person}}</div>
                  </li>
                  <li>
                    <div class="liLelf perpeo">投票人数：</div>
                    <div class="liRight">{{item.total}}个</div>
                  </li>
                </ul>
              </div>
              <div class="ck">
                <Button @click="check = true" class="check" >查看详情</Button>
                <Modal v-model="check" width="940" >
                  <p slot="header" class="title">
                    投票详情
                  </p>
                  <div class="all">
                    <ul>
                      <li><div class="far">主题:</div> <div class="alone"><p>关于缴纳党费的问题</p></div></li>
                      <li><div class="far">发布人：</div> <div class="alone"><p>程晨</p></div></li>
                      <li>
                        <div class="far">时间：</div>
                        <div class="alone">
                          <Row>
                            <Col span="12">
                              <p>开始时间:<span></span></p>
                            </Col>
                            <Col span="12">
                            <p>结束时间:<span></span></p>
                            </Col>
                          </Row>
                        </div>
                      </li>
                      <li><div class="far">投票人：</div> <div class="alone"><p>6/10确认参加投票（程晨、程晨、程晨、程晨、程晨、程晨）</p></div></li>
                      <li><div class="far">投票选项：</div>
                        <div class="alone">
                          <RadioGroup v-model="zoom">
                            <p class="diff"><Radio label="选项一" class="radio"></Radio> <Progress  class="pro" :percent="25" hide-info status="active" :stroke-width="5" style="width: 500px"></Progress></p>
                            <p class="diff"><Radio label="选项二" class="radio"></Radio> <Progress  class="pro" :percent="75" hide-info status="active" :stroke-width="5" style="width: 500px"></Progress></p>
                          </RadioGroup>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div slot="footer" style="position: relative;margin-top: 40px; padding-bottom:60px">
                    <Button  size="large"  class="close" @click="check = false">取消</Button>
                    <Button  size="large" class="admit" @click="check = false">投票</Button>
                  </div>
                </Modal>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
    export default {
      name: "orgsix",
        data(){
          return{
            model: '',
            modal1: false,
            check:false,
            biao:'*',
            value:"",
            disabledGroup: '是',
            zoom:"选项一",
            city:'成都市',
            total:"500",
            finish:"400",
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
            items:[
              {text:"1",tit:"主题1",time:"05.11 13:50:00 - 05.12 13:50:00",person:"程晨",total:"56"},
              {text:"2",tit:"主题2",time:"05.11 13:50:00 - 05.12 13:50:00",person:"程晨",total:"56"},
              {text:"3",tit:"主题3",time:"05.11 13:50:00 - 05.12 13:50:00",person:"程晨",total:"56"},
              {text:"2",tit:"主题4",time:"05.11 13:50:00 - 05.12 13:50:00",person:"程晨",total:"56"},
              {text:"3",tit:"主题5",time:"05.11 13:50:00 - 05.12 13:50:00",person:"程晨",total:"56"},
            ],
            swiperOption: {
              notNextTick: true,
              loop : true,
              autoplay:false,
              autoplayDisableOnInteraction:false,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
              },
              scrollbarHide:false,
              centeredSlides : true,
              keyboard : true,
              slidesPerView:5,
              observer:true,
              observeParents:true,
            },
          }
        },
      mounted() {
        this.drawLine();
      },
      methods: {
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
                name: '未完成',
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

      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style scoped>
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
  .diff{
    margin-bottom: 20px;
  }
  .radio{
    display: inline-block;
  }
  .pro{
    display: inline-block;
  }
  .alone p{
    line-height: 30px;
  }
  .ck{
    height:43px;
  }
  .check{
    width: 100%;
    height: 43px;
    background: #6797b8;
    color:#fff;
  }
  .mode{
    width:270px;
    margin-top: 10px;
    height:235px;
    border:1px solid #ccc;
    border-radius: 10px;
  }
  .cont{
    height:150px;
  }
  .cont ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
  .liLelf{
    padding-left: 40px;
  }
  .time{
    background: url("../../../static/img/little1.png")no-repeat 10px center;
  }
  .person{
    background: url("../../../static/img/little2.png")no-repeat 10px center;
  }
  .perpeo{
    background: url("../../../static/img/little3.png")no-repeat 10px center;
  }
  .liRight{
    padding-right: 10px;
  }
  .tit{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    padding: 0  20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  #pic{
    width:100%;
    height: 350px;
  }
  .all ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .bottom{
    width: 100%;
    height: 250px;
    background: #f1f1f1;
    border-radius: 10px;
  }
  .far{
    width:15%;
    line-height: 30px;
  }
  .alone{
    width:85%;
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
  .adding{
    width: 30px;
    height: 30px;
    border:none;
    background: url("../../../static/img/add.png") no-repeat center center;
    background-size:50% 50%;
  }
  .ivu-modal-header{
    background: #027ed1;
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
  .far{
   margin-bottom:50px;
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
</style>
