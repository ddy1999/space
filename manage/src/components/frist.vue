<template>
  <div id="center">
    <div class="laeder">
      <p> <router-link to="/">首页</router-link>/<router-link to="#">第一书记</router-link></p>
    </div>
    <div class="list">
      <div class="left">
        <ul>
          <li class="active">
            <router-link to="/frist/frione">
              <div class="one">驻村概况</div>
            </router-link>
          </li>
          <li>
            <router-link to="/frist/fritwo">
              <div class="two">联系方式</div>
            </router-link>
          </li>
          <li>
            <router-link to="/frist/frithree">
              <div class="three">成果展示</div>
            </router-link>
          </li>
          <li>
            <router-link to="/frist/frifour">
              <div class="four">日常事务</div>
            </router-link>
          </li>
          <li>
            <router-link to="/frist/frifive">
              <div class="five">群众评分</div>
            </router-link>
          </li>
          <li>
            <router-link to="/frist/frisix">
              <div class="six">精准扶贫</div>
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
        name: "frist",
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
  .active a{
    color:#fff!important;
  }
  .one{
    background:url('../../static/img/fri1.png') 50px center no-repeat;
  }
  .two{
    background:url('../../static/img/fri2.png') 50px center no-repeat;
  }
  .three{
    background:url('../../static/img/fri3.png') 50px center no-repeat;
  }
  .four{
    background:url('../../static/img/fri4.png') 50px center no-repeat;
  }
  .five{
    background:url('../../static/img/fri5.png') 50px center no-repeat;
  }
  .six{
    background:url('../../static/img/fri6.png') 50px center no-repeat;
  }

</style>
