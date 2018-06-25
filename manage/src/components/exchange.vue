<template>
  <div>
    <div id="center">
      <div class="wel">
        <div class="left">
          <h3>{{leader}}领导，</h3>
          <p>欢迎来到中欣智慧党建云平台！</p>
        </div>
        <div class="right">
          <div>
            <p class="alone"><a href="#">{{number}}</a></p>
            <p>未读消息</p>
          </div>
          <div><router-link to="/" class="jump"></router-link></div>
        </div>
      </div>
      <div class="all">
        <ul>
          <li v-for="item in items" :key="item.id">
            <router-link to="">
              <div>{{item.text}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "exchange",
        data(){
          return{
            leader:'xx',
            number:'3',
            items:[
              {text:'组织管理',url:'org'},
              {text:'党员管理',url:'#'},
              {text:'便民服务',url:'#'},
              {text:'第一书记',url:'#'},
              {text:'村支两委',url:'#'},
              {text:'数据分析',url:'#'},
              {text:'个人中心',url:'#'},
              {text:'系统设置',url:'#'},
            ]
          }
        },
      components:{

      }
    }
</script>

<style scoped>
  #center{
    height: 860px;
    padding:0 50px;
  }
  .wel{
    width: 1820px;
    height:200px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .left{
    padding-left: 30px;
  }
  .left h3{
    margin-top: 60px;
    font-size: 40px;
  }
  .left p{
    line-height: 40px;
    font-size: 25px;
    color:#999;
  }
  .right p{
    color:#cd0507;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
  }
  .alone{
    margin-top: 60px;
  }
  .alone a{
    color:#cd0507;
  }
  a{
    text-decoration: none;
  }
  .all{
    width: 1820px;
    height: 660px;
  }
  .all ul{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .all ul li{
    list-style: none;
    width:400px;
    height: 300px;
    background: #00426e;
    margin-bottom: 30px;
    transform: scale(1);
    transition: 0.5s;
    border-radius:10px;
  }
  .all ul li:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
  .all ul li div{
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-align: center;
    line-height:300px ;
    color:#f5f5f5;
    font-size: 40px;

  }
  .right{
    width: 10%;
    display: flex;
    justify-content: space-between;
  }
  .jump{
    width: 30px;
    height: 30px;
    display: block;
    margin-top: 80px;
    background: url("../../static/img/ivew.png") left center no-repeat;
  }
</style>
