<template>
  <div>
    <div class="top">
      <div class="topLeft">
        联系方式
        <Input v-model="value4" icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
      </div>
      <div class="topRight">
        <Button class="add" @click="modal1 = true" ></Button>
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            发布常见问题
          </div>
          <div class="cont">
            <ul>
              <li>
                <div><span style="color:red">*</span>问题:</div>
                <div>
                  <Input v-model="value" :rows="5" placeholder="Enter something..." style="width: 400px" type="textarea"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>职务:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 400px" type="textarea"></Input>
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

      <div class="produs">
        <Table  stripe border :columns="columns" :data="data"> </Table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "serone",
    data(){
      return{
        model:'',
        mode2:"",
        value:'',
        value4:"",
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
        typeList:[
          {label:"2018",value:"2018"},
          {label:"2017",value:"2017"},
          {label:"2016",value:"2016"},
        ],
        local:"洪安镇",
        columns: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '问题',
            align: 'center',
            key: 'problem',
          },
          {
            title: '答复',
            align: 'center',
            key: 'reply',
          }
        ],
        data: [
          {
            problem:"请问对哪些产品实行计量器具许可证制度？",
            reply:"您好，符合计量器具定义：“计量器具是指能用以直接或间接测出被测对象量值的装置量...",
          },
          {
            problem:"请问对哪些产品实行计量器具许可证制度？",
            reply:"您好，符合计量器具定义：“计量器具是指能用以直接或间接测出被测对象量值的装置量...",
          },
          {
            problem:"请问对哪些产品实行计量器具许可证制度？",
            reply:"您好，符合计量器具定义：“计量器具是指能用以直接或间接测出被测对象量值的装置量...",
          },
          {
            problem:"请问对哪些产品实行计量器具许可证制度？",
            reply:"您好，符合计量器具定义：“计量器具是指能用以直接或间接测出被测对象量值的装置量...",
          },
        ]
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
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
  }
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/add.png");
  }
  .local{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
    color:#666;
    display: flex;
    justify-content: space-between;
  }
  .produs{
    height: 620px;
  }
  .produs ul li{
    list-style: none;
    padding-left: 20px;
    margin:30px 0;
  }
  .produs ul li h3{
    background: url("../../../static/img/shu.png") no-repeat left center;
    font-size: 16px;
    font-weight: normal;
    line-height: 40px;
    padding-left: 25px;
  }
  .produs ul li p{
    padding-left: 40px;
    text-indent: 2em;
  }
</style>
