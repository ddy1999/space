<template>
  <div>
    <div class="top">
      <div class="topLeft">
       驻村概括
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
          <ul>
            <li v-for="talk in talks " :key="talk.id">
              <h3>{{talk.title}}</h3>
              <p>{{talk.cont}}</p>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "frione",
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
            talks:[
              {title:"简介",cont:'四川省成都市龙泉驿区洪安镇化工新村位于龙泉北大门，与青白江接界，境内有成南高速公路、成渝铁路(洪安火车站也在境内)、成环路、洪黄路等，另外有村道20公里，东风渠、谢家河越境而过，农业用水十分方便。化工新村处于我镇的腹心地带，面积8.67平方公里，辖33个村民小组、6792人、现党小组12个、党员144人，组干部30人、村干部7人，大学生志愿者2名，帮扶队员一名，人民调解员一名。'},
              {title:"地理位置",cont:"洪安镇化工新村位于龙泉驿区的北大门，与青白江区和黄土镇接壤，成南高速、成渝铁路、城环路穿境而过，交通发达。"},
              {title:"社区建设",cont:"辖区内有中石油、陕西延长集团、西部化工市场、呈祥物流、天华科技、曙光化工、再生资源等大型企业16个；化工新村幅员面积8.67平方公里，现有村干部8人，组干部33人，党小组12个，党员153人，辖33个村民小组，2398户，6511人。现全村的主要经济收入是外出务工(现外出务工人数有2330人)和蔬菜种植(主要集中在18、19、20和原三合村)。村内有蔬菜加工厂4个，其它企业近20个。"},

              ],
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
