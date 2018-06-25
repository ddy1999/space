<template>
  <div id="center">
    <div class="laeder">
      <p> <router-link to="/">首页</router-link>/<router-link to="#">组织管理</router-link></p>
    </div>
    <div class="list">
      <div class="left">
        <ul>
          <li>
            <router-link to="/org/orgone">
              <div class="one">支部建设</div>
            </router-link>
          </li>
          <li>
            <router-link to="/org/orgtwo">
              <div class="two">督查考核</div>
            </router-link>
          </li>
          <li>
            <router-link to="/org/orgthree">
              <div class="three">工作审批</div>
            </router-link>
          </li>
          <li>
            <router-link to="/org/orgfour">
              <div class="four">党务公开</div>
            </router-link>
          </li>
          <li class="active">
            <router-link to="/org/orgfive">
              <div class="five">三会一课</div>
            </router-link>
          </li>
          <li >
            <router-link to="/org/orgsix">
              <div class="six">民主投票</div>
            </router-link>
          </li>
          <li>
            <router-link to="/org/orgseven">
              <div class="seven">主题活动</div>
            </router-link>
          </li>
          <li>
            <router-link to="/org/orgeight">
              <div class="eight">组织机构</div>
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
        name: "orgnaztion",
      data(){
          return{

          }
      },
      mounted(){
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
  .active a{
    color:#fff!important;
  }
  .one{
    background:url('../../static/img/org1.png') 50px center no-repeat;
  }
  .two{
    background:url('../../static/img/org2.png') 50px center no-repeat;
  }
  .three{
    background:url('../../static/img/org3.png') 50px center no-repeat;
  }
  .four{
    background:url('../../static/img/org4.png') 50px center no-repeat;
  }
  .five{
    background:url('../../static/img/org5.png') 50px center no-repeat;
  }
  .six{
    background:url('../../static/img/org6.png') 50px center no-repeat;
  }
  .seven{
    background:url('../../static/img/org7.png') 50px center no-repeat;
  }
  .eight{
    background:url('../../static/img/org8.png') 50px center no-repeat;
  }
</style>
