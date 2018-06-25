<template>
  <div>
    <div class="top">
      <div class="topLeft">
        服务站点
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
        <Button class="add" ></Button>
      </div>
    </div>
    <div class="content">
      <div class="contTop">
        <span class="fri">{{city}}</span>
        <span class="sec">(共{{total}}个服务站点)</span>
      </div>
      <div class="contCenter" id="allmap">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sertwo",
      data(){
          return{
            model: '',
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
            city:"成都市",
            total:"1000",
          }
      },
     mounted() {
        this.ready()
      },
      methods:{
        ready(){
          // 百度地图API功能
          let map = new BMap.Map("allmap");
          let point = new BMap.Point(104.3347264334,30.7017673466);
          let marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);              // 将标注添加到地图中
          map.centerAndZoom(point, 15);
          let opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : "" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
          }
          let sContent="<div>"
            +"<p style=margin:0;line-height:1.5''>地点：洪安镇车站社区</p>"
            + "<p style='margin:0;line-height:1.5;font-size:14px;'>姓名：钟远书</p>"
            + "<p style='margin:0;line-height:1.5;font-size:14px;'>联系电话：028-84898135</p>"
            + "</div>";
          let infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
          marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          });
        }
      }
    }
</script>

<style scoped>
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    background:#fff;
    border-radius: 10px;

  }
  .contTop{
    height: 80px;
    line-height:80px;
    padding-left: 20px;
  }
  .contCenter{
    height:580px;
    width: 90%;
    margin:0 auto;
    border-radius: 10px;
  }
  .contCenter img{
    width: 100%;
    height: 100%;
  }
  .top{
    width: 100%;
    height: 90px;
    background:#fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
  }
  .topLeft{
    font-size: 22px;
    line-height: 90px;
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
