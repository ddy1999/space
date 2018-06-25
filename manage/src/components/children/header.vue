<template>
    <div id="header" ref="other">
      <div class="otherLeft">
        中欣智慧党建云平台
      </div>
      <div class="otherRight">
        <div class="list">
          <ul>
            <li>
              <router-link to="/org" >
                <div>组织管理</div>
              </router-link>
            </li>
            <li>
              <router-link to="/person" >
                <div>党员管理</div>
              </router-link>
            </li>
            <li>
              <router-link to="/service" >
                <div>便民服务</div>
              </router-link>
            </li>
            <li>
              <router-link to="/frist" >
                <div>第一书记</div>
              </router-link>
            </li>
            <li>
              <router-link to="/town" >
               <div>村支两委</div>
              </router-link>
            </li>
            <li>
              <router-link to="/data" >
               <div>数据分析</div>
              </router-link>
            </li>
            <li>
              <router-link to="/center" >
               <div>个人中心</div>
              </router-link>
            </li><li>
            <router-link to="/system" >
              <div>系统设置</div>
            </router-link>
          </li>

          </ul>
        </div>
        <div class="person">
          <div class="pic"></div>
          <div class="name">{{message}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
      name: "vue",
      data(){
          return{
          message:"admin",
          }
      },
      mounted:function(){
        $('.list ul li').on('click',function(){
          $(this).addClass('active').siblings().removeClass('active')
        })

      },
     watch: {
        $route: function (to, from) {
            if(to.name === 'index'){
              $('.list ul li').siblings().removeClass('active');
            } else if(to.name === 'org'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'person'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'service'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'frist'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'town'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'data'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'center'){
              $(this).addClass('active').siblings().removeClass('active');
            }else if(to.name === 'system'){
              $(this).addClass('active').siblings().removeClass('active');
            }


        }
      }
    }
</script>

<style scoped>
#header{
  width: 1920px;
  height: 110px;
  padding:0 50px;
  border-bottom:1px solid #ccc;
  display: flex;
  justify-content: space-between;
  background: #00426e;
}

  .left,.otherLeft{
    width: 25%;
    height: 100%;
    background:url("../../../static/img/logo.png") no-repeat left center;
    font-size: 30px;
    line-height: 110px;
    padding-left: 100px;
    cursor: pointer;
    color:#fff;

  }
  .right{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content:flex-end;

  }
  .pic{
    width: 64px;
    height: 64px;
    border:1px solid #fff;
    border-radius: 100%;
    margin-top: 22px;
    margin-right: 25px;
    cursor: pointer;
    background: url("../../../static/img/default.jpg") left center no-repeat;
    background-size:100%;
  }
  .name{
    line-height: 110px;
    color:#fff;
  }
  .otherRight{
    width:65%;
    height: 100%;
    float:right;
    display: flex;
    justify-content:flex-start;
  }
  .list{
    width:75%;
    height: 100%;
  }
  .person{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content:flex-end;
  }
.list ul{
  display: flex;
  justify-content: space-between;
  flex-wrap:nowrap;
}
.list ul li{
  list-style: none;
  line-height: 110px;
  padding: 0 20px;
}
.list ul li:hover{
  background-color: #0162a3;
}
.active{
  background: #0162a3;
}
.list ul li a{
  color:#fff;
  font-size: 14px;
}

 a{
   text-decoration: none;
 }
</style>
