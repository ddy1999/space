<template>
    <div id="all">
      <div class="center">
          <div class="wel">
            <div class="left">
              <h3>{{leader}}领导，</h3>
              <p>欢迎来到成都市经开区党建云平台！</p>
            </div>
            <div class="right">
              <div>
                <a href="#" class="message"></a>
              </div>
              <div><router-link to="/exchange" class="jump"></router-link></div>
            </div>
          </div>
          <div class="change">
            <swiper :options="swiperOption">
              <swiper-slide class="swiper-slide" >
                <router-link to="org">
                  <div class="one nice1">组织管理</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="person">
                  <div class="one nice2">党员管理</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="service">
                  <div class="one nice3">便民服务</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="frist">
                  <div class="one nice4">第一书记</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="town">
                  <div class="one nice5">村支两委</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="data">
                  <div class="one nice6">数据分析</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="center">
                  <div class="one nice7">个人中心</div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper-slide" >
                <router-link to="system">
                  <div class="one nice8">系统设置</div>
                </router-link>
              </swiper-slide>
              <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
          </div>
      </div>
    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  import $ from 'jquery'
  import cookie from '../../static/assets/lib/jquery.cookie'
    export default {
        name: "index",
        data(){
          return{
              leader:"xx",
              number:"3",
            swiperOption: {
              notNextTick: true,
              loop : true,
              autoplay:false,
              autoplayDisableOnInteraction:false,
              scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
              },
              scrollbarHide:false,
              centeredSlides : true,
              keyboard : true,
              slidesPerView:5,
              observer:true,
              observeParents:true,
            },
          }
        },
        components:{
          swiper,
          swiperSlide
        },
      methods:{//生命钩子函数

      },
      mounted(){
        let _this =this
        $("#header").css("display","flex");
        $("#footer").css("display","flex");
       let local=localStorage.getItem("id");
        if(local != null){
          _this.$router.push({path: '/'})
        }else{
          _this.$router.push({path: '/login'})
        };

      }
    }
</script>

<style scoped>
  #all{
    width: 1920px;
    height: 860px;
    margin:0 auto;

  }
  .center{
    width:1920px;
    height: 860px;
    padding:0 50px;
  }
  .wel{
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
  .right{
    width: 10%;
    display: flex;
    justify-content: space-between;
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
    text-decoration: none;
  }
  .change{
    height: 660px;
  }
  .swiper-container{
   padding:100px 0 100px 0;
  }
  .swiper-slide{
    height: 360px;
    width: 330px;
    margin: 0 auto;
    text-align: center;
    line-height: 360px;
    font-size: 40px;
    background: #dfebf3;
    border-radius: 30px;
    transform: scale(0.7);
  }
  a{
    text-decoration: none;
  }
  .swiper-slide a{
    color:red;
    cursor: pointer;
  }
  .swiper-slide-active{
    background:#62a8e9;
    -ms-transform:scale(1)!important;
    -webkit-transform:scale(1)!important;
    -o-transform:scale(1)!important;
    -moz-transform:scale(1)!important;
  }
  .one{
    border-radius: 10px;
    color:#00426e;
  }
  .jump{
    width: 30px;
    height: 30px;
    display: block;
    margin-top: 80px;
    background: url("../../static/img/ivew.png") left center no-repeat;
  }
  .message{
    width: 30px;
    height: 30px;
    background: url("../../static/img/message.png") left center no-repeat;
    margin-top: 80px;
    display: block;
  }
  .nice1{
    background: url("../../static/img/ni2.png") center center no-repeat;
  }
  .nice2{
    background: url("../../static/img/ni4.png") center center no-repeat;
  }
  .nice3{
    background: url("../../static/img/ni6.png") center center no-repeat;
  }
  .nice4{
    background: url("../../static/img/ni8.png") center center no-repeat;
  }
  .nice5{
    background: url("../../static/img/ni10.png") center center no-repeat;
  }
  .nice6{
    background: url("../../static/img/ni12.png") center center no-repeat;
  }
  .nice7{
    background: url("../../static/img/ni14.png") center center no-repeat;
  }
  .nice8{
    background: url("../../static/img/ni16.png") center center no-repeat;
  }
</style>
