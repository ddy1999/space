<template>
  <div id="center">
    <div class="laeder">
      <p> <router-link to="/">首页</router-link>/<router-link to="#">党员管理</router-link></p>
    </div>
    <div class="list">
      <div class="left">
        <ul>
          <li>
            <router-link to="/person/perone">
              <div class="one" >党员发展</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/pertwo">
              <div class="two">党员教育</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/perthree">
              <div class="three">民主评议</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/perfour">
              <div class="four">党费缴纳</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/perfive">
              <div class="five">关系结转</div>
            </router-link>
          </li>
          <li class="active">
            <router-link to="/person/persix">
              <div class="six">征文管理</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/perseven">
              <div class="seven">在线交流</div>
            </router-link>
          </li>
          <li>
            <router-link to="/person/pereight">
              <div class="eight">党员信息</div>
            </router-link>
          </li>

        </ul>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "person",
      data(){
          return{
          }
      },
      mounted:function(){
        $('.left ul li').on('click',function(){
          $(this).addClass('active').siblings().removeClass('active')
        })
      }
    }
</script>

<style scoped>
  #center{
    width: 1820px;
    height: 860px;
    background: #f1f1f1;
  }
  .laeder{
    height:80px;
  }
  .laeder a{
    color:#999;
    padding:0 10px;
  }
  .laeder p{
    color:#999;
    font-size: 14px;
    margin-left: 50px;
    line-height: 80px;
  }
  .list{
    height: 770px;
    display: flex;
    justify-content: space-between;
  }
  .left{
    width:20%;
    border:1px solid #999;
    height:100%;
    background: #00426e;
  }
  .right{
    width: 78%;
    height:100%;
    overflow:auto;
  }
  .left ul li{
    height: 70px;
    margin:20px 0;
  }
  .left ul li a{
    color:#fff;
  }
  .left ul li div{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 70px;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .active{
    background: #22597e;
  }
  a{
    text-decoration: none;
  }
  .active a{
    color:#fff!important;
  }
  .one{
    background:url('../../static/img/per1.png') 50px center no-repeat;
  }
  .two{
    background:url('../../static/img/per2.png') 50px center no-repeat;
  }
  .three{
    background:url('../../static/img/per3.png') 50px center no-repeat;
  }
  .four{
    background:url('../../static/img/per4.png') 50px center no-repeat;
  }
  .five{
    background:url('../../static/img/per5.png') 50px center no-repeat;
  }
  .six{
    background:url('../../static/img/per6.png') 50px center no-repeat;
  }
  .seven{
    background:url('../../static/img/per7.png') 50px center no-repeat;
  }
  .eight{
    background:url('../../static/img/per8.png') 50px center no-repeat;
  }
</style>
