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
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
    </div>
    <div class="content">
      <div class="local">{{local}}</div>
      <div class="produs">
        <Table border :columns="columns" :data="data"></Table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fritwo",
    data(){
      return{
        model:'',
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
        local:"经开区",
        columns: [
          {
            title: '姓名',
            align: 'center',
            key: 'name',
          },
          {
            title: '驻村名称',
            align: 'center',
            key: 'local'
          },
          {
            title: '职务',
            align: 'center',
            key: 'job',
          }
          ,
          {
            title: '联系方式',
            align: 'center',
            key: 'phone',
          }
        ],
        data: [
          {
            name: '王丽',
            local:"土门村",
            job:'书记',
            phone:'15000000000',
          },
          {
            name: '杨震',
            local:"土门村",
            job:'书记',
            phone:'13888888888',
          },
        ]
      }
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
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
  }
  .local{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
    color:#666;
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
