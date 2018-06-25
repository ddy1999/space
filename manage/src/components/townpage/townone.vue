<template>
    <div>
      <div class="top">
        <div class="topLeft">
          信息查询
          <Input v-model="value4" icon="ios-search"  placeholder="输入村或人名" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
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

          <Button class="add" ></Button>
        </div>
      </div>
      <div class="content">
        <div class="contTop">
          <div class="ctLeft">
            <span class="fri">{{city}}</span>
            <span class="sec">(共{{total}}人)</span>
          </div>
          <div class="ctRight">
            <ul>
              <li v-for="(chose,index) in choselist" :key="chose.id" @click="toggle(index)" :class="{active:index==active}">{{chose.text}}</li>
            </ul>
          </div>
        </div>
        <div class="contCenter">
          <Table stripe :columns="columns1" :data="data2" class="default"></Table>
          <Page :total="100" show-sizer style="margin-left: 500px;margin-top:5px;"></Page>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "townone",
      data(){
          return{
            model:"",
            value4:"",
            city:'成都炭素有限责任公司',
            total:"300",
            active:"0",
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
            choselist:[
              {text:"全部"},
              {text:"党委"},
              {text:"村委会"},
            ],
            columns1: [
              {
                title: '姓名',
                align: 'center',
                key: 'name'
              },
              {
                title: '民族',
                align: 'center',
                key: 'nation'
              },
              {
                title: '性别',
                align: 'center',
                key: 'sex'
              },
              {
                title: '籍贯',
                align: 'center',
                key: 'local'
              },
              {
                title: '出生年月',
                align: 'center',
                key: 'birth'
              },
              {
                title: '手机号',
                align: 'center',
                key: 'phone'
              },
              {
                title: '身份证号',
                align: 'center',
                width: 250,
                key: 'idcard'
              },
              {
                title: '组织机构',
                align: 'center',
                key: 'org'
              },
              {
                title: '职务',
                align: 'center',
                key: 'job'
              },
              {
                title: '分工',
                align: 'center',
                key: 'work'
              }
            ],
            data2:[
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              }, {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              },
              {
                name:"程晨",
                nation:"汉",
                sex:"女",
                local:"四川成都",
                birth:"1975-03",
                phone:"15708000000",
                idcard:"513433197503024516",
                org:"党支部",
                job:"支书",
                work:"支持村支部工作"
              }
            ],
          }
      },
      mounted() {

      },
      methods:{
        clear(){

        },
        toggle(index){
          this.active=index
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
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/add.png");
  }
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .contTop{
    height: 80px;
    line-height:80px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    background:#fff;
    border-radius: 10px;
  }
  .ctLeft{
    width:20%;
    font-size: 16px;
   /* background:url("../../../static/img/shadow.png") no-repeat left bottom;*/
  }
  .ctRight{
    width: 60%;
  }
  .ctRight ul{
    display: flex;
    justify-content: flex-end;
  }
  .ctRight ul li{
    list-style: none;
    padding: 0 50px;
    cursor: pointer;
  }
.active{
  border-bottom: 1px solid #bedefe;
  color:#bedefe;
}
.contCenter{
  height: 560px;
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
