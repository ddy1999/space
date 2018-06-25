<template>
  <div>
      <div class="top">
        <div class="topLeft">
          应用魔方
        </div>
        <div class="topRight">
          <Select v-model="model" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Button class="write" ></Button>
          <Button class="add" ></Button>
        </div>
      </div>
    <div class="content">
      <div class="tit">
        {{tit}}
      </div>
      <div class="conter">
          <ul>
            <li v-for="adress in adlist" :key="adress.id">
              <figure>
                <img :src="adress.src" alt="">
                <p>{{adress.text}}</p>
              </figure>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sysone",
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
            adlist:[
              {text:'三会一课',src:"../static/img/sone1.png"},
              {text:'两学一做',src:"../static/img/sone2.png"},
              {text:'工作审批',src:"../static/img/sone3.png"},
              {text:'民主投票',src:"../static/img/sone4.png"},
              {text:'民主评议',src:"../static/img/sone5.png"},
              {text:'领导视图',src:"../static/img/sone6.png"},
              {text:'日常会议',src:"../static/img/sone7.png"},
              {text:'党费缴纳',src:"../static/img/sone8.png"},
              {text:'党员发展',src:"../static/img/sone9.png"},
              {text:'组织架构',src:"../static/img/sone10.png"},
              {text:'征文',src:"../static/img/sone11.png"},
              {text:'服务站点',src:"../static/img/sone12.png"},
              {text:'民情速递',src:"../static/img/sone13.png"},
              {text:'在线交流',src:"../static/img/sone14.png"},
              {text:'党政通知',src:"../static/img/sone15.png"},
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
  .write{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/editor.png");
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
    background: #fff;
  }
  .tit{
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
  }
  .conter{
    height:620px;
    padding:40px 150px;
  }
  .conter ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
  }
  .conter ul li{
    list-style: none;
    text-align: center;
    margin:0 40px 40px;
    cursor: pointer;
  }
</style>
