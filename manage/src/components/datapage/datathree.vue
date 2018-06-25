<template>
  <div>
    <div class="top">
      <div class="topLeft">
        联系方式
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
        <Button class="add" @click="modal1 = true" >生成报告</Button>
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
                <div><span style="color:red">*</span>姓名:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>职务:</div>
                <div>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
              </li>
              <li>
                <div><span style="color:red">*</span>考核结果:</div>
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
    </div>
    <div class="content">
      <div class="local">
        <div>{{local}}</div>
        <div>
          <Select v-model="model" style="width:100px;margin: 0;">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="produs">
          <div class="book">
            <h2>蓝皮书</h2>
            <h3>2017年度</h3>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "datathree",
    data(){
      return{
        model:'',
        mode2:"",
        value:'',
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
        local:"经开区",
        columns: [
          {
            title: '姓名',
            align: 'center',
            key: 'name',
          },
          {
            title: '职务',
            align: 'center',
            key: 'job',
          }
          ,
          {
            title: '考核情况',
            align: 'center',
            key: 'motion',
          }
        ],
        data: [
          {
            name: '王丽',
            job:'书记',
            motion:'优秀',
          },
          {
            name: '杨震',
            job:'书记',
            motion:'合格',
          },
        ]
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
    width:60px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
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
  .book{
    width: 510px;
    height: 100%;
    margin: 0 auto;
    background: -webkit-linear-gradient(#135eb5,#3788ec); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#135eb5, #3788ec); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#135eb5, #3788ec); /* Firefox 3.6 - 15 */
    background: linear-gradient(#135eb5, #3788ec); /* 标准的语法（必须放在最后） */
  }
  .book h2{
    color:#fff;
    font-size: 40px;
    text-align: center;
    padding-top: 200px;
  }
  .book h3{
    color:#fff;
    font-size: 26px;
    text-align: center;
  }
</style>
