<template>
  <div>
    <div class="top">
      <div class="topLeft">
        征文管理
        <Input v-model="value4" icon="ios-search"  placeholder="输入关键字" style="width: 400px;margin-left:50px" type="text" @on-click="clear"></Input>
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
        <Button class="date" @click="modal2 = true"></Button>
        <Button class="update" ></Button>
        <Button class="add" @click="modal1 = true"></Button>
        <Modal v-model="modal1"  class="layer">
          <div slot="header" class="head">
            上传征文
          </div>
          <div class="cont">
            <Form ref="upload" :model="upload" :rules="ruleupload" :label-width="80">
              <FormItem label="文章类型:" prop="tpye">
                <Select v-model="upload.tpye" placeholder="选择类型" style="margin:0">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="标题:" prop="title">
                <Input v-model="upload.title" type="text"  placeholder="请输入标题"></Input>
              </FormItem>
              <FormItem label="作者:" prop="author">
                <Input v-model="upload.author" type="text"  placeholder="请输入作者"></Input>
              </FormItem>
              <FormItem label="内容:" prop="cont">
                <Input v-model="upload.cont" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="内容"></Input>
              </FormItem>
              <FormItem label="上传封面：" prop="update" >
              <input type="file" ref="file" id="file">
              (只能上传小于2M的jpg,png格式的图片!)
              </FormItem>
            </Form>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="upReset('upload')">取消</Button>
            <Button  size="large" class="admit" @click="upSubmit('upload')">上传</Button>
          </div>
        </Modal>
        <Modal v-model="modal2"  class="layer">
          <div slot="header" class="head">
            发布征文通知
          </div>
          <div class="cont">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="文章类型:" prop="tpye">
                <Select v-model="formValidate.tpye" placeholder="选择类型" style="margin:0">
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="内容:" prop="cont">
                <Input v-model="formValidate.cont" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="内容"></Input>
              </FormItem>
              <FormItem label="时间:"prop="starTime endTime">
                <Row>
                  <Col span="11">
                  <FormItem prop="starTime">
                    <DatePicker v-model="formValidate.starTime" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="开始日期" style="width:150px;"></DatePicker>
              </FormItem>
                  </Col>
                  <Col span="2" style="text-align: center">-</Col>
                  <Col span="11">
                  <FormItem prop="endTime">
                    <DatePicker v-model="formValidate.endTime" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="结束日期" style="width:150px;"></DatePicker>
                  </FormItem>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="投稿至:" prop="adress">
                <Input v-model="formValidate.adress" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="投稿至"></Input>
              </FormItem>
            </Form>
          </div>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="handleReset('formValidate')">取消</Button>
            <Button  size="large" class="admit" @click="handleSubmit('formValidate')">发布</Button>
          </div>
        </Modal>
      </div>
    </div>
    <div class="content">
      <div class="contTop">
        <div class="ctLeft">
          <span class="fri">{{city}}</span>
        </div>
        <div class="ctRight">
          <ul>
            <li v-for="(chose,index) in choselist" :key="chose.id" @click="toggle(index)" :class="{active:index==active}">{{chose.text}}</li>
          </ul>
        </div>
    </div>
      <div id="store">
        <div class="conter">
          <ul>
            <li v-for="(mess,index) in melist" :key="mess.index" :id="mess.id" @click="open($event)">
              <div class="pic">
                <img :src="mess.imageUrl" alt="">
              </div>
              <div class="font">
                <h6>{{mess.title}}</h6>
                <p>{{mess.content}}</p>
                <p><span>{{mess.greatNum}}点赞</span><span>{{mess.replyNum}}评论</span><span>{{mess.readerNum}}已阅</span><span>时间:{{mess.createTime}}</span></p>
              </div>
            </li>
          </ul>

        </div>
        <div class="conter2">
          <ul>
            <li v-for="(mess,index) in learnlist" :key="mess.index" :id="mess.id" @click="open($event)">
              <div class="pic">
                <img :src="mess.imageUrl" alt="">
              </div>
              <div class="font">
                <h6>{{mess.title}}</h6>
                <p>{{mess.content}}</p>
                <p><span>{{mess.greatNum}}点赞</span><span>{{mess.replyNum}}评论</span><span>{{mess.readerNum}}已阅</span><span>时间:{{mess.createTime}}</span></p>
              </div>
            </li>
          </ul>

        </div>
        <div class="conter3">
          <ul>
            <li v-for="(mess,index) in orglist" :key="mess.index" :id="mess.id" @click="open($event)">
              <div class="pic">
                <img :src="mess.imageUrl" alt="">
              </div>
              <div class="font">
                <h6>{{mess.title}}</h6>
                <p>{{mess.content}}</p>
                <p><span>{{mess.greatNum}}点赞</span><span>{{mess.replyNum}}评论</span><span>{{mess.readerNum}}已阅</span><span>时间:{{mess.createTime}}</span></p>
              </div>
            </li>
          </ul>

        </div>
        <div class="conter4">
          <ul>
            <li v-for="(mess,index) in testlist" :key="mess.index" :id="mess.id" @click="open($event)">
              <div class="pic">
                <img :src="mess.imageUrl" alt="">
              </div>
              <div class="font">
                <h6>{{mess.title}}</h6>
                <p>{{mess.content}}</p>
                <p><span>{{mess.greatNum}}点赞</span><span>{{mess.replyNum}}评论</span><span>{{mess.readerNum}}已阅</span><span>时间:{{mess.createTime}}</span></p>
              </div>
            </li>
          </ul>

        </div>
        <div class="conter5">
          <ul>
            <li v-for="(mess,index) in edulist" :key="mess.index" :id="mess.id" @click="open($event)">
              <div class="pic">
                <img :src="mess.imageUrl" alt="">
              </div>
              <div class="font">
                <h6>{{mess.title}}</h6>
                <p>{{mess.content}}</p>
                <p><span>{{mess.greatNum}}点赞</span><span>{{mess.replyNum}}评论</span><span>{{mess.readerNum}}已阅</span><span>时间:{{mess.createTime}}</span></p>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div id="flow">
        <div class="flowTop">
          <img src="../../../static/img/scale.png" alt="" class="scale" @click="close">
        </div>
        <div class="flowCent">
          <div class="flowTit">
            <h3>{{title}}</h3>
            <h4>作者:{{author}}</h4>
          </div>
          <div class="flowCount">
            <p>{{content}}</p>
          </div>
          <div class="flowButtom">
            <ul class="alone">
              <li><a href="#" @click="grent">点赞</a>({{good}})</li>
              <li><a href="#" @click="showDiv">评论</a>({{juage}})</li>
              <li><a href="#" >阅读</a>（{{read}}）</li>
            </ul>
            <div class="put">
              <Input type="text" v-model="put" class="entry"></Input>
              <Button class="comfrom" @click="hideDiv">确定</Button>
            </div>
            <div class="juage">
              <ul>
                <li v-for="answer in ansList" :key="answer.id">
                  <a href="#">{{answer.name}}</a> :{{answer.text}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import qs from 'qs'
  export default {
    name: "persix",
    data(){
      return{
        model:"",
        value4:"",
        value:'',
        mode2:"",
        put:"",
        file: [], // 总文件List
        uploadFile: [], // 需要上传的文件List
        modal1:false,
        modal2:false,
        formValidate: {
          tpye: '',
          cont:'',
          starTime:"",
          endTime:"",
          adress:"",
        },
        ruleValidate: {
          tpye: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          name: [
            { required: true, message: '发起人不能为空', trigger: 'blur' }
          ],
          cont:[
            { required: true, message: '请输入内容', trigger: 'blur' },
            { type: 'string', min: 10, message: '不能少于10个字', trigger: 'blur' }
          ],
          starTime: [
            { required: true, type: 'date', message: '请选择开始时间', trigger: 'change' }
          ],
          endTime: [
            { required: true, type: 'date', message: '请选择结束时间', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'string', min: 10, message: '不能少于10个字', trigger: 'blur' }
          ]
        },
        upload:{
          tpye:'',
          title:"",
          author:"",
          cont:"",
        },
        ruleupload:{
          tpye: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur' }
          ],
          cont:[
            { required: true, message: '请输入内容', trigger: 'blur' },
            { type: 'string', min: 10, message: '不能少于10个字', trigger: 'blur' }
          ],
          author:[
            { required: true, message: '作者不能为空', trigger: 'blur'}
          ]
        },
        typeList:[
          {label:"学习专栏",value:"1"},
          {label:"组织工作",value:"2"},
          {label:"学习体会",value:"3"},
          {label:"党员教育",value:"4"},
        ],
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
        active:0,
        city:"成都市",
        choselist:[
          {text:"全部",type:0},
          {text:"学习专栏",type:1},
          {text:"组织工作",type:2},
          {text:"学习体会",type:3},
          {text:"党员教育",type:4},
        ],
        melist:[],
        learnlist:[],
        orglist:[],
        testlist:[],
        edulist:[],
        title:"标题",
        author:"张三",
        content:"内容",
        good:"",
        juage:"",
        read:"",
        ansList:[
          {text:"123456",name:"刘小二"},
          {text:"123456",name:"lisa"},
          {text:"123456",name:"sen"},
          {text:"123456",name:"legend"},
        ],
      }
    },
    methods:{
      clear(){
      },

      //关闭详情页
      close(){
        $("#flow").css("display","none");
      },
      //获取单击当前的信息回显
     open(event){
       var el=event.currentTarget;
       var data = new URLSearchParams();
       data.append("id",el.id);
       localStorage.setItem("artId",el.id)
       this.$api.post('/art/getOne',data,r=>{
         if(r!=null){
           this.title=r.title;
           this.author=r.author;
           this.content=r.content;
           this.good=r.greatNum;
           this.juage=r.replyNum;
           this.read=r.readerNum;
           $("#flow").css("display","block");
         }
        else{
           alert("暂无数据！");
         }
       });
       //传递进去然后阅读数+1
      /* this.$api.post('/art/artread',data,r=>{
          console.log(r)
       });*/

        //拿到全部回复
       this.$api.post('/artrpl/getByArtID',data,r=>{
         console.log(r)
       })
      },

      //点赞
     grent(){
        var artId =localStorage.getItem("artId");
        var data = new URLSearchParams();
        data.append("id",artId);
        this.$api.post('/art/great',data,r=>{
          console.log(r);
        })
      },



      //显示
      showDiv(){
        $(".put").css("display","block");
      },
      //确定按钮
      hideDiv(){
        //$(".put").css("display","none");
        var artId =localStorage.getItem("artId");
        var data = new URLSearchParams();
        data.append("artID",artId);
        data.append("replyText",this.put);
        this.$api.post('/artrpl/save',data,r=>{
          console.log(r);
        })
      },
      //点击切换
      toggle(index){
        this.active=index;
        let data= new URLSearchParams();
        data.append("type",index);
        if(index==0){
          $(".conter").css("display","block");
          $(".conter").show().siblings('div').hide();
        }else if(index==1){
          $(".conter2").css("display","block");
          $(".conter2").show().siblings('div').hide();
          this.$api.post("/art/getByType",data,r=>{
            console.log(r);
            this.learnlist=r;
          })
        }else if(index==2){
          $(".conter3").css("display","block");
          $(".conter3").show().siblings('div').hide();
          this.$api.post("/art/getByType",data,r=>{
            console.log(r);
            this.orglist=r;
          });
        }else if(index==3){
          $(".conter3").css("display","block");
          $(".conter3").show().siblings('div').hide();
          this.$api.post("/art/getByType",data,r=>{
            console.log(r);
            this.testlist=r;
          });
        }else{
          $(".conter4").css("display","block");
          $(".conter4").show().siblings('div').hide();
          this.$api.post("/art/getByType",data,r=>{
            console.log(r);
            this.edulist=r;
          });
        };
      },
      //发布征文
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let star = this.formValidate.starTime;
            let end = this.formValidate.endTime;
            //将date数据转换为年月日
            function getStartime() {
              let date = star;
              let seperator2 = ":";
              let space=" ";
              let month = date.getMonth() + 1;
              let strDate = date.getDate();
              if (month >= 1 && month <= 9) {
                month = "0" + month;
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
              }
              let currentdate = date.getFullYear() + '年' + month + '月' + strDate +
                "日" + space+ fnW(date.getHours()) + seperator2 + fnW(date.getMinutes());
              ;
              return currentdate;
            };
            function getEndtime() {
              let date = end;
              let seperator2 = ":";
              let space =" ";
              let month = date.getMonth() + 1;
              let strDate = date.getDate();
              if (month >= 1 && month <= 9) {
                month = "0" + month;
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
              }
              let currentdate = date.getFullYear() + '年' + month + '月' + strDate +
                "日" + space + fnW(date.getHours()) + seperator2 + fnW(date.getMinutes());
              return currentdate;
            };
            let starTime=getStartime();
            let endTime=getEndtime();
            //补0
            function fnW(str){
              let num;
              str>9?num=str:num="0"+str;
              return num;
            };
            console.log(starTime);
            console.log(endTime);
            let data={
              type:this.formValidate.tpye,
              mainContent:this.formValidate.cont,
              startTime:starTime,
              endTime:endTime,
              email:this.formValidate.adress,
            }
            console.log(data);
            this.$api.post("/essay/save",data,r=>{
              console.log(r);
            })
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      //重置
      handleReset (name) {
        this.$refs[name].resetFields();
        this.modal2=false;
      },
      //获取文章数据
      getList(){
        //获取全部文章信息
        this.$api.post("art/getAll",null,r=>{
          console.log(r);
          if(r!==null){
            this.melist=r;
          }else{
           alert("暂无数据!");
          }
        })
      },
      //上传
      getFile(){
        console.log(this.$refs.file.files[0]);
      },
      //上传文章
      upSubmit(name){
        let data= new FormData();
        data.append("tpye",this.upload.type);
        data.append("title",this.upload.title);
        data.append("author",this.upload.author);
        data.append("content",this.upload.cont);
        data.append("tag","456");
        data.append("file",this.$refs.file.files[0]);
        this.$api.post("/art/save",data,r=>{
          console.log(r);
        })
      },
      //上传文章取消
      upReset(name){
        this.$refs[name].resetFields();
        this.modal1=false;
      }
    },
    mounted(){
    },
    created:function () {
      this.getList();//这里定义这个方法，vue实例之后运行到这里就调用这个函数
    },
  }
</script>

<style scoped>
  .juage ul li{
    line-height: 30px;
  }
  .entry{
    width:90%;
  }
  .alone{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 15px;
  }
  .put{
    display: none;
    margin-bottom: 20px;
  }
  .alone li{
   margin-right: 100px;
  }
  .alone li a{
    padding-right: 15px;
  }
  .flowCount{
    text-indent: 2em;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .flowTit{
    height:80px;
    line-height: 40px;
    text-align: center;
  }
  .flowTit h3{
    font-size: 20px;
  }
  .flowTop{
    position: relative;
    height: 30px;
  }
  .flowCent{
    padding:0 50px;
  }
  .scale{
    position: absolute;
    top:0;
    right:0;
    display:block;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  #flow{
    width: 100%;
    height:660px;
    top:0;
    left:0;
    position:absolute;
    background: #c1c1cc;
    overflow-y: auto;
    display: none;
  }
  #file{
    width: 150px;
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
  .cont ul li{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin:10px 0;
  }
  li{
    list-style: none;
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
  .update{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/update.png");
  }
  .date{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/date.png");
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
    position: relative;
  }
  .conter{
     height:580px;
     padding:0 50px;
    overflow-y: auto;
   }
  .conter2,.conter3,.conter4,.conter5{
    height:580px;
    padding:0 50px;
    overflow-y: auto;
    display: none;
  }
  .conter ul li,.conter2 ul li,.conter3 ul li,.conter4 ul li,.conter5 ul li{
    list-style: none;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 65px;
  }
  .conter ul li:hover,.conter2 ul li:hover,.conter3 ul li:hover,.conter4 ul li:hover,.conter5 ul li:hover{
    color:#027ed1;
  }
  .contTop{
    height: 80px;
    line-height:80px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    background:#fff;
    border-radius: 10px;
  }
  .ctLeft{
    width:20%;
    font-size: 16px;
    /* background:url("../../../static/img/shadow.png") no-repeat left bottom;*/
  }
  .ctRight{
    width: 60%;
  }
  .ctRight ul{
    display: flex;
    justify-content: flex-end;
  }
  .ctRight ul li{
    list-style: none;
    padding: 0 50px;
    cursor: pointer;
  }
  .active{
    border-bottom: 1px solid #bedefe;
    color:#bedefe;
  }
  .pic{
   width: 15%;
    height: 135px;
    border-radius: 10px;
    margin-right: 30px;
  }
  .pic img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .font{
    width: 80%;
  }
  .font h6{
    font-size: 18px;
    line-height: 40px;
    font-weight: normal;
  }
  .font p{
    margin-top:25px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .font p span{
    margin-right: 30px;
  }
</style>
