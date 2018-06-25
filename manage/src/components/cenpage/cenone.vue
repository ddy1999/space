<template>
  <div>
    <div class="top">
      <div class="topLeft">
        消息
        <Input v-model="value4" icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
      </div>
      <div class="topRight">
        <Button class="date" ></Button>
      </div>
    </div>
    <div class="content">
      <div class="contLeft">
        <ul>
          <h3>组织消息</h3>
          <li class="active">党员发展</li>
          <li>民情速递</li>
          <h3>个人消息</h3>
          <li>党员发展</li>
          <li>民情速递</li>
          <li>三会一课</li>
          <li>民主投票</li>
          <li>征文</li>
          <li>民主评议</li>
          <li>党费缴纳</li>
          <li>基本知识</li>
          <li>工作圈</li>
        </ul>
      </div>
      <div class="contRight">
        <div class="orgpro show">
          <h3>党员发展 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx提交了入党申请书，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx提交了入党申请书，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx提交了入党申请书，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="orgspeed hide">
          <h3>民情速递 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
            </ul>
        </div>
        <div class="perpro hide">
          <h3>党员发展 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="perspeed hide">
          <h3>民情速递 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="perclass hide">
          <h3>三会一课 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="perchose hide">
          <h3>民主投票 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="perart hide">
          <h3>征文 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="perjug hide">
          <h3>民主评议 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="permoney hide">
          <h3>党费缴纳 <span>共2条</span></h3>
          <ul>
            <li>
              <div>中欣智慧党建提醒您，缴纳2018-03期的党费</div>
              <div>2018-03-25</div>
            </li>
            <li>
              <div>中欣智慧党建提醒您，缴纳2018-02期的党费</div>
              <div>2018-02-25</div>
            </li>
          </ul>
        </div>
        <div class="perbase hide">
          <h3>基本知识 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx发布了咨询，请您及时处理。</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
        <div class="percir hide">
          <h3>工作圈 <span>共3条</span></h3>
          <ul>
            <li>
              <div>xx点赞了你的工作态度！</div>
              <div>2018-04-25</div>
            </li>
            <li>
              <div>xx点赞了你的工作态度！</div>
              <div>2018-04-26</div>
            </li>
            <li>
              <div>xx点赞了你的工作态度！</div>
              <div>2018-04-27</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "cenone",
    data(){
      return{
        value4:"",
      }
    },
    methods:{
      clear(){

      }
    },
    mounted:function(){
      $('.contLeft ul li').on('click',function(){
        let index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active')
        if(index==1){
         $(".orgpro").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==2){
          $(".orgspeed").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==4){
          $(".perpro").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==5){
          $(".perspeed").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==6){
          $(".perclass").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==7){
          $(".perchose").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==8){
          $(".perart").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==9){
          $(".perjug").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==10){
          $(".permoney").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==11){
          $(".perbase").removeClass('hide').addClass('show').siblings().addClass('hide');
        }else if(index==12){
          $(".percir").removeClass('hide').addClass('show').siblings().addClass('hide');
        }
      })
    }
  }
</script>

<style scoped>

  .show{
    display: block;
  }
  .hide{
    display: none;
  }
  .head{
    background: #027ed1;
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
  .foot{
    position: relative;
    margin-top: 40px;
    padding-bottom:60px;
  }
  .close{
    padding: 15px 40px;
    background: #ccc;
    position: absolute;
    top:0;
    left:20%;
  }
  .admit{
    padding: 15px 40px;
    background: #027ed1;
    color:#fff;
    position: absolute;
    top:0;
    left:60%;
  }


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
  .date{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/date.png");
  }
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .contLeft{
    width: 14%;
    border-right: 1px solid #ccc;
  }
  .contRight{
    width: 85%;
  }
  .contLeft h3{
    line-height: 40px;
    font-size: 16px;
  }
  .contLeft ul li{
    font-size: 14px;
    line-height: 45px;
    padding-left: 20px;
    cursor: pointer;
  }
  .active{
    background: url("../../../static/img/shu.png")left center no-repeat;
    color:#2b85e4;
  }
  .contRight h3{
    font-size: 22px;
    line-height: 40px;
  }
  .contRight h3 span{
    font-size: 16px;
    color:#999;
    font-weight: normal;
    margin-left: 20px;
  }
  .contRight ul li{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    line-height: 40px;
    cursor: pointer;
  }
  .contRight ul li:hover{
    color:#2b85e4;
  }
</style>
