<template>
    <div>
      <div class="top">
        <div class="topLeft">
          在线交流
          <Input icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
        </div>
        <div class="topRight">
          <Button class="mess"></Button>
          <Button class="mail"></Button>
          <Button class="friend"></Button>
        </div>
      </div>
      <div class="content">
        <div class="cOne">
          <p>聊天</p>
        </div>
        <div class="cTwo">
          <ul>
            <li v-for="(item,index) in talkList" :key="item.id"   @click="getIndex(index)" :class="{light:index==light}">
              <div class="pic"></div>
              <div class="converction">
                <div>
                  <p>{{item.name}}</p>
                  <p>{{item.time}}</p>
                </div>
                <div class="talk">
                  {{item.talk}}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cThree">
          <div class="name">
            昵称
          </div>
          <div class="over"></div>
          <div class="put">
            <Button class="send">发送</Button>
          </div>
        </div>
      </div>
      <div class="content2">
        <div class="cOne">
          <p>通讯录</p>
        </div>
        <div class="cTwo">
          <p>新朋友</p>
          <div class="new">
            <div class="mailIcon"><span></span></div>
          </div>
          <div class="newfriend">
            <ul>
              <li v-for="(item,index) in talkList" :key="item.id"   @click="getIndex(index)" :class="{light:index==light}">
                <div class="pic"></div>
                <div class="converction">
                    <p>{{item.name}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cThree">
          <div class="addfriend">
            <div class="addF">
              <span>新的朋友</span>
              <span>添加朋友</span>
            </div>
            <div class="addC">
              <ul>
                <li v-for="(item,index) in talkList" :key="item.id">
                  <div class="pic"></div>
                  <div class="converctions">
                    <div class="base">
                      <p class="spation">{{item.name}}</p>
                      <p>{{item.mess}}</p>
                    </div>
                    <div class="talk">
                      <Button class="pass">拒绝</Button>
                      <Button class="sub">接受</Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="delete">
            <div class="deleteF">
              <span>昵称</span>
              <span>删除该好友</span>
            </div>
            <div class="deleteC">
              <div class="details">
                <ul>
                  <li>
                    <div class="brow"></div>
                    <div class="nickname"><p>昵称</p></div>
                  </li>
                  <li>
                    <div>所属组织</div>
                    <div class="disc">土门村党委第一支部第一小组</div>
                  </li>
                  <li>
                    <div>手机号码</div>
                    <div class="disc">15700000000</div>
                  </li>
                  <li>
                    <div>家庭住址</div>
                    <div class="disc">土门村</div>
                  </li>
                  <li>
                    <Button class="sendding">发消息</Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content3">
        <div class="cOne">
          <p>添加好友</p>
        </div>
        <div class="cTwo">
          <div class="sea">
            <Input icon="ios-search"  placeholder="" style="width:100%;border:none; margin-top: 30px;" type="text" @on-click="read"></Input>
          </div>
          <div class="search">
            <ul>
              <li>
                <div class="tou"></div>
                <div class="xin">
                  <p>昵称</p>
                  <p>土门村</p>
                </div>
                <div class="adding">
                  <Button>添加好友</Button>
                </div>
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
        name: "perseven",
      data(){
          return{
            light:"-1",
            talkList:[
              {name:"飞翔的鸽子",time:"10:25",talk:"一会儿中午打算吃啥？",mess:"对方请求添加你为好友",suggest:''},
              {name:"飞翔的鸽子",time:"10:25",talk:"一会儿中午打算吃啥？",mess:"对方请求添加你为好友",suggest:"已添加"},
              {name:"飞翔的鸽子",time:"10:25",talk:"一会儿中午打算吃啥？",mess:"对方请求添加你为好友",suggest:"已拒绝"},
            ],
          }
      },
      methods:{
          clear(){
          },
        read(){

        },
        getIndex(index){
          this.click=index;
          this.light=index;
          console.dir(index);
          $('.delete').css("display",'block');
          $(".addfriend").css("display",'none');
        },

      },
      mounted(){
        $(".new").on('click',function(){
          $('.new span').css("display",'none');
          $('.delete').css("display",'none');
          $(".addfriend").css("display",'block');
        });
      },
    }
</script>

<style scoped>
  .search ul li{
    display: flex;
    justify-content: flex-start;
    height: 80px;
    padding:0 10px;
    margin-top: 10px;
  }
  .xin{
    width:50%;
    height: 80px;
  }
  .xin p{
    line-height: 40px;
  }
  .adding button{
    width:90px;
    height: 45px;
    background: #fc020e;
    border:none;
    color:#fff;
    margin-top: 15px;
  }
  .tou{
    width: 70px;
    height:70px;
    background: #ccc;
  }
  .search{
    height: 579px;
    overflow-y: auto;
  }
  .sea{
    height: 80px;
    border-bottom:1px solid #ccc;
  }
  .sendding{
    width: 100px;
    height: 45px;
    border: none;
    background: #2b85e4;
    margin-top: 20px;
    margin-left: 100px;
    color: #fff;
  }
  .disc{
    margin-left: 50px;
  }
  .nickname{
    line-height: 70px;
    padding-left: 20px;
    font-size: 16px ;
  }
  .nickname p{
    background: url("../../../static/img/boy.png")left center no-repeat;
    padding-left: 20px;
  }
  .brow{
    width: 70px;
    height: 70px;
    background: #ccc;
  }
  .details{
    width: 300px;
    height: 400px;
    margin: 0 auto;
    border:1px solid #ccc;
    margin-top: 40px;
  }
  .details ul li{
    display: flex;
    justify-content: flex-start;
    height: 70px;
    line-height: 70px;
    padding: 0 5px;
  }
  .pass{
    width: 85px;
    height: 40px;
    background: #ccc;
    color: #fff;
    margin-top: 20px;
    border:none;

  }
  .sub{
    width: 85px;
    height: 40px;
    background: #049afe;
    margin-top: 20px;
    color: #fff;
    border:none;
   margin-left: 30px;
  }
  .converctions{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }
  .talk{
    padding-right:20px;
  }

  li{
    list-style: none;
  }
  .spation{
    line-height:40px!important;
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
  .mess{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/mess.png");
  }
  .mail{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/mail.png");
  }
  .friend{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/friend.png");
  }
  .content{
    height: 660px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    display: none;
  }
  .content2{
    height: 660px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    display: none;
  }
  .content3{
    height: 660px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .cOne{
    width:10%;
    -background: #f5a623;
  }
  .cOne p{
    font-size: 16px;
    padding-left: 20px;
    padding-top: 30px;
  }
  .cTwo{
    width: 25%;
    background: #eeeeee;
    overflow-y: auto;
  }
  .cTwo p{
    padding-left: 10px;
  }
  .mailIcon{
    width: 75px;
    height: 75px;
    position: relative;
    background: url("../../../static/img/mailadd.png")20px 20px no-repeat;
  }
  .mailIcon span{
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 100%;
    position: absolute;
    top:15px;
    right:10px;
  }
  .addfriend{
    display: none;
  }
  .addC{
    height: 590px;
    overflow-y: auto;
    padding-left: 20px;
  }
  .deleteC{
    height: 550px;
  }
  .addC ul li{
    display: flex;
    justify-content: flex-start;
    margin:10px 0;
  }
  .new{
    height: 75px;
    -background: #a2a2a2;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .newfriend ul li{
    display: flex;
    justify-content: flex-start;
  }
  .cTwo ul li{
    list-style: none;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
  }
  .converction{
    display:flex;
    flex-wrap: wrap;
    width:77%;
  }
  .converction p{
    line-height: 80px;
  }
  .converction>div{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin:0 10px;
  }
  .talk{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pic{
    background: #ccc;
    width: 70px;
    height: 70px;
  }
  .cThree{
    width: 65%;
  }
  .name{
    height: 70px;
    border-bottom: 1px solid #ccc;
    line-height: 70px;
    font-size: 16px;
    padding-left: 15px;
  }
  .addF,.deleteF{
    height: 70px;
    border-bottom: 1px solid #ccc;
    line-height: 70px;
    font-size: 16px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
  }
  .addF span,.deleteF span{
    padding: 0 20px;
  }
  .over{
    height: 450px;
    overflow-y: auto;
  }
  .put{
    height: 138px;
    border-top:1px solid #ccc;
    position: relative;
  }
  .send{
    position: absolute;
    bottom:0;
    right:10px;
    border:none;
    color:#fff;
    width: 100px;
    height: 40px;
    background: #2b85e4;
  }
  .light{
    background: #a2a2a2;
  }
</style>
