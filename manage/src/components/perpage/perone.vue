<template>
    <div>
      <div class="top">
        <div class="topLeft">
          党员发展
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
          <Button class="add" @click="upload=true"></Button>
          <Modal v-model="upload" >
              <div slot="header" class="head">
                  入党申请书
              </div>
              <div class="cont">
                  <div>
                      <Upload action="//jsonplaceholder.typicode.com/posts/">
                          <div><span style="color:red">*</span>上传申请书：<Button type="ghost" style="margin-left: 40px;border: 1px solid #ccc;" >上传文件</Button></div>
                     </Upload>
                      <div style="margin:20px 0;width:100%;height: 164px;" >
                        <img src="../../../static/img/upload.png" alt="" style="width:164px;height:164px; margin-left: 75px;">
                      </div>
                    <div class="pop">
                      <p>基本格式</p>
                      <ul>
                        <li>1.标题：居中写“入党申请书”。</li>
                        <li>2.称谓：即申请人对党组织的称呼，一般写“敬爱的党组织”。顶格书写在标题的下一行，后面加冒号</li>
                        <li>3.正文：主要内容包括：①对党的认识、入党动机和对待入党的态度。写这部分时应表明自己的入党愿望。②个人在政治、思想、学习、工作等方面的主要表现情况。③今后努力方向以及如何以实际行动争取入党。</li>
                        <li>4.结尾：申请书的结尾主要表达清党组织考察的心情和愿望，一般用“请党组织在实践中考验我”或“请党组织看我的实际行动”等作为结束语。全文的结尾一般用“此致，敬礼”。</li>
                        <li>5.署名：在申请书的最后，要署名和注明申请日期。一般居右书写“申请人×××”，下一行写上“××××年×月×日”。</li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
                <Button  size="large"  class="close" @click="upload = false">取消</Button>
                <Button  size="large" class="admit" @click="upload = false">提交</Button>
              </div>
          </Modal>
        </div>
      </div>
      <div class="content">
        <div class="tit">
          {{tit}}
        </div>
        <div class="echart" id="pic"></div>
        <div class="tab">
          <div class="lonely">
              <div><span>{{local}}</span><span>(共{{total}}人)</span></div>
              <div>
                <ul>
                  <li v-for="(chose,index) in choses" :key="chose.id" @click="toggle(index)" :class="{light:index==light}">{{chose.text}}</li>
                </ul>
              </div>
          </div>
          <Table  stripe border :columns="columns7" :data="data6" style="text-align: center;border-radius: 10px;" id="table"></Table>
        </div>
        <Modal v-model="look" >
          <div slot="header" class="head">
            查看档案信息
          </div>
          <div class="cont">
            <ul>
              <li>
                <div>所处阶段：</div>
                <div>{{level}}</div>
              </li>
              <li>
                <div>待上传资料:</div>
                <div>{{file}}</div>
              </li>
              <li>
                <div>档案类型:</div>
                <div>
                  <Select v-model="mode2" style="width:100px;margin:0;">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </li>
              <li>
                <div>附件{{num}}个</div>
                <div>
                </div>
              </li>
            </ul>
            <div id="file">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </Modal>
        <Modal v-model="up" >
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
                  <div><span style="color:red">*</span>上传附件：<Button type="ghost" style="margin: 0 20px 0 40px;border: 1px solid #ccc;" >上传文件</Button> (只支持2M以内的jpg、png文件)</div>
                </Upload>
                </div>
              </li>
              <li>
                <div style="height: 164px;" >
                  <img src="../../../static/img/upload.png" alt="" style="width:164px;height:164px; margin-left: 110px;">
                </div>
              </li>
            </ul>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="up = false">取消</Button>
            <Button  size="large" class="admit" @click="up = false">上传</Button>
          </div>
        </Modal>
        <Modal v-model="edit" >
          <div slot="header" class="head">
            修改信息
          </div>
          <div class="conter">
            <ul>
              <li>
                <div>姓名：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="杨震"></Input></div>
              </li>
              <li>
                <div>身份证号：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="513433199305062556"></Input></div>
              </li>
              <li>
                <div>联系方式：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="15708084444"></Input></div>
              </li>
              <li>
                <div>政治面貌:</div>
                <div>
                  <Select v-model="mode2" style="width:200px;margin:0;">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </li>
              <li>
                <div>所属组织/地方：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="所在组织"></Input></div>
              </li>
              <li>
                <div>培养联系人：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="李平"></Input></div>
              </li>
              <li>
                <div>入党介绍人：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="李平"></Input></div>
              </li>
              <li>
                <div>入党介绍人所属组织/地方：</div>
                <div><Input  placeholder="输入关键字" style="width:200px;" type="text" value="所在组织"></Input></div>
              </li>
              <li>
                <div>资料档案：</div>
              </li>
            </ul>
            <div id="file">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="edit = false">取消</Button>
            <Button  size="large" class="admit" @click="edit = false">保存</Button>
          </div>
        </Modal>

      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "perone",
      data(){
          return{
            value4:"",
            model:"",
            mode2:'',
            light:0,
            num:'5',
            look:false,
            up:false,
            upload:false,
            edit:false,
            level:"入党积极分子",
            file:"2018一月到三月思想报告",
            tit:"成都市",
            total:"200",
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
            typeList:[
              {label:"思想报告",value:"思想报告"},
              {label:"其他报告",value:"其他报告"},
            ],
            choses:[
              {text:'全部'},
              {text:'入党积极分子'},
              {text:'预备党员'},
              {text:'正式党员'},
            ],
            columns7: [
              {
                title: '姓名',
                align:'center',
                key: 'name',
              },
              {
                title: '身份证号',
                align:'center',
                width:200,
                key: 'idCard'
              },
              {
                title: '联系方式',
                align:'center',
                key: 'phone'
              },
              {
                title: '政治面貌',
                align:'center',
                key: 'face'
              },
              {
                title: '所在组织/地方',
                align:'center',
                key: 'local'
              },
              {
                title: '培养联系人',
                align:'center',
                key: 'group'
              },
              {
                title: '入党介绍人',
                align:'center',
                key: 'joinPoser'
              },
              {
                title: '入党介绍人所属组织',
                align:'center',
                key: 'joinLocal'
              },
              {
                title: '档案',
                key: 'file',
                width: 180,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px',
                        backgroundColor:"#6cbafd",
                        color:"#fff",
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    }, '查看'),
                    h('Button', {
                      props: {
                        type:"ghost",
                        size: 'small'
                      },
                      style:{
                        marginRight: '5px',
                        backgroundColor:"#7a6cfd",
                        color:"#fff",
                      },
                      on: {
                        click: () => {
                          this.update(params.index)
                        }
                      }
                    }, '上传'),
                    h('Button', {
                      props: {
                        size: 'small'
                      },
                      style:{
                        backgroundColor:"#2baee9",
                        color:"#fff",
                      },
                      on: {
                        click: () => {
                          this.editor(params.index)
                        }
                      }
                    }, '编辑')
                  ]);
                }
              }
            ],
            data6: [
              {
                name: '杨震',
                idCard: 513433199305062556,
                phone:"15708084444",
                face:"入党积极分子",
                local:"所在组织",
                group:"李平",
                joinPoser:"李平",
                joinLocal:"所属组织",
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
              data:['入党积极分子','预备党员','正式党员']
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
                name: '入党积极分子',
                type: 'bar',
                barWidth:15,
                itemStyle:{
                  normal:{
                    color:'#638af9'
                  }
                },
                stack:"党员",
                data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
              },
              {
                name: '预备党员',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"党员",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              },
              {
                name: '正式党员',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#fd6c6c'
                  }
                },
                stack:"党员",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              }
            ]
          });
          myChart.on('click', function (param) {
            let index = param.dataIndex;
            //alert(index);
          });
        },
        show (index){
          this.look = true
        },
        update (index) {
          this.up = true;
        },
        editor(index){
          this.edit = true;
        },
        toggle(index){
          this.light=index
        }
      },
    }
</script>

<style scoped>
  #file ul{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  #file ul li{
    width:30%;
    height:100px;
    background: #ccc;
    border-radius: 10px;
  }
  .pop ul li{
    list-style: none;
    line-height: 25px;
  }
  .cont{
    padding:0 20px;
    width: 100%;
    height: 600px;
  }
  .conter{
    padding:0 20px;
    width: 100%;
    height: 650px;
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
  .ivu-modal-header{
    background: #027ed1;
  }
  .head{
    background: #027ed1;
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  .ivu-table-header{
    background: #2baee9!important;
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
    background: url("../../../static/img/update.png");
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
  .echart{
    width: 100%;
    height: 300px;
  }
  .tab{
    height: 300px;
    margin-top: 20px;
   -display: none;
  }
  #table{
    display: block;
    margin-top: 20px;
  }
  .lonely{
    line-height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .lonely span{
    margin-right: 20px;
    font-size: 16px;
    padding-left: 20px;
  }
  .lonely ul{
    display: flex;
    justify-content: space-between;
  }
  .lonely ul li{
    padding:0 20px;
    list-style: none;
    cursor: pointer;
  }
  .light{
    border-bottom:1px solid #2baee9;
  }
.cont ul li{
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 20px;
}
  .conter ul li{
    list-style: none;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>
