<template>
  <div>
    <div class="top">
      <div class="topLeft">
        三会一课
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
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button class="add" @click="meetting = true" ></Button>
        <Modal v-model="meetting" width="940"  class="layer">
          <p slot="header" class="title">
            发布会议
          </p>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
            <FormItem label="会议类型:" prop="type">
              <Select v-model="formValidate.type" style="width:700px" id="diff" >
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="主题:" prop="title">
              <Input v-model="formValidate.title" placeholder="请输入主题" style="width:700px"></Input>
            </FormItem>
            <FormItem label="发布人:" prop="publish">
              <Input v-model="formValidate.publish" placeholder="请输入发布人" style="width:700px" ></Input>
              <Button class="adding"></Button>
            </FormItem>
            <FormItem label="时间:" prop="starTime endTime">
              <Row>
                <Col span="11">
                <DatePicker v-model="formValidate.starDate" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="开始日期" style="width:250px;margin:0 20px"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                <DatePicker v-model="formValidate.endDate" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="结束日期" style="width: 250px;margin:0 20px"></DatePicker>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="会议地点：" prop="space">
              <Input v-model="formValidate.space" placeholder="请输入会议地点" style="width:700px"></Input>
              <Button class="adding"></Button>
            </FormItem>
            <FormItem label="会议记录人：" prop="record">
              <Input v-model="formValidate.record" placeholder="请输入会议记录人" style="width:700px"></Input>
              <Button class="adding"></Button>
            </FormItem>
            <FormItem label="参会人：" prop="attendee">
              <Input v-model="formValidate.attendee" placeholder="请输入参会人" style="width:700px"></Input>
              <Button class="adding"></Button>
            </FormItem>
            <FormItem label="上传文件：" prop="update" >
              <Upload
                multiple
                ref="upload"
                :before-upload="handleUpload"
                :show-upload-list="false"
                action="/api/mt/save"
                name="files" style="margin-right: 20px;"
                :format="['jpg','png']"
                :max-size="2048">
                <Button  icon="ios-cloud-upload-outline">浏览文件</Button>
                （只支持2M以内的jpg，png文件）
              </Upload>
              <div v-for="item in file" :key="item.index">Upload file: {{ item.name }}
                <a href="javascript:;"  @click="delectFile(item.keyID)">X</a>
              </div>
            </FormItem>
          </Form>
          <div slot="footer" class="foot"  style="position: relative;margin-top: 40px; padding-bottom:60px">
            <Button  size="large"  class="close" @click="handleReset('formValidate')">取消</Button>
            <Button  size="large" class="admit" @click="handleSubmit('formValidate')">发布</Button>
          </div>
        </Modal>
      </div>
    </div>
    <div class="local">
      <div>
        <span class="fri">{{city}}</span>
        <span class="sec">(共{{total}}次会议，已完成{{finish}}次会议)</span>
      </div>
      <div>
        <ul>
          <li v-for="(chose,index) in choses" :key="chose.type" @click="toggle(index)" :class="{light:index==light}">{{chose.text}}</li>
        </ul>
      </div>
    </div>
    <div id="including">
      <div class="box1">
        <div class="content">
          <div id="pic"></div>
        </div>
        <div class="bottom">
          <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in items" :key="item.index" :id="item.id" style="width:270px;height:250px;">
                  <div class="mode">
                    <div class="tit">主题：{{item.content}}</div>
                    <div class="cont">
                      <ul>
                        <li>
                          <div class="liLelf time">开始时间：</div>
                          <div class="liRight">{{item.startTime}}</div>
                        </li>
                        <li>
                          <div class="liLelf person">发布人：</div>
                          <div class="liRight">{{item.creatorName}}</div>
                        </li>
                        <li>
                          <div class="liLelf perpeo">人数：</div>
                          <div class="liRight">{{item.totalNum}}个</div>
                        </li>
                      </ul>
                    </div>
                    <div class="ck">
                      <Button @click="getId($event)" class="check" :id="item.id">查看详情</Button>
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="box2">
        <div class="content">
          <div id="pic1"></div>
        </div>
        <div class="bottom">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in items1" :key="item.index" :id="item.id" style="width:270px;height:250px;">
              <div class="mode">
                <div class="tit">主题：{{item.content}}</div>
                <div class="cont">
                  <ul>
                    <li>
                      <div class="liLelf time">开始时间：</div>
                      <div class="liRight">{{item.startTime}}</div>
                    </li>
                    <li>
                      <div class="liLelf person">发布人：</div>
                      <div class="liRight">{{item.creatorName}}</div>
                    </li>
                    <li>
                      <div class="liLelf perpeo">人数：</div>
                      <div class="liRight">{{item.totalNum}}个</div>
                    </li>
                  </ul>
                </div>
                <div class="ck">
                  <Button @click="getId($event)" class="check" :id="item.id">查看详情</Button>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="box3">
        <div class="content">
          <div id="pic2"></div>
        </div>
        <div class="bottom">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in items1" :key="item.index" :id="item.id" style="width:270px;height:250px;">
              <div class="mode">
                <div class="tit">主题：{{item.content}}</div>
                <div class="cont">
                  <ul>
                    <li>
                      <div class="liLelf time">开始时间：</div>
                      <div class="liRight">{{item.startTime}}</div>
                    </li>
                    <li>
                      <div class="liLelf person">发布人：</div>
                      <div class="liRight">{{item.creatorName}}</div>
                    </li>
                    <li>
                      <div class="liLelf perpeo">人数：</div>
                      <div class="liRight">{{item.totalNum}}个</div>
                    </li>
                  </ul>
                </div>
                <div class="ck">
                  <Button @click="getId($event)" class="check" :id="item.id">查看详情</Button>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="box4">
        <div class="content">
          <div id="pic3"></div>
        </div>
        <div class="bottom">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in items1" :key="item.index" :id="item.id" style="width:270px;height:250px;">
              <div class="mode">
                <div class="tit">主题：{{item.content}}</div>
                <div class="cont">
                  <ul>
                    <li>
                      <div class="liLelf time">开始时间：</div>
                      <div class="liRight">{{item.startTime}}</div>
                    </li>
                    <li>
                      <div class="liLelf person">发布人：</div>
                      <div class="liRight">{{item.creatorName}}</div>
                    </li>
                    <li>
                      <div class="liLelf perpeo">人数：</div>
                      <div class="liRight">{{item.totalNum}}个</div>
                    </li>
                  </ul>
                </div>
                <div class="ck">
                  <Button @click="getId($event)" class="check" :id="item.id">查看详情</Button>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="box5">
        <div class="content">
          <div id="pic4"></div>
        </div>
        <div class="bottom">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in items1" :key="item.index" :id="item.id" style="width:270px;height:250px;">
              <div class="mode">
                <div class="tit">主题：{{item.content}}</div>
                <div class="cont">
                  <ul>
                    <li>
                      <div class="liLelf time">开始时间：</div>
                      <div class="liRight">{{item.startTime}}</div>
                    </li>
                    <li>
                      <div class="liLelf person">发布人：</div>
                      <div class="liRight">{{item.creatorName}}</div>
                    </li>
                    <li>
                      <div class="liLelf perpeo">人数：</div>
                      <div class="liRight">{{item.totalNum}}个</div>
                    </li>
                  </ul>
                </div>
                <div class="ck">
                  <Button @click="getId($event)" class="check" :id="item.id">查看详情</Button>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <Modal v-model="art" width="600" >
        <div slot="header" class="title">
          会议详情
        </div>
        <div class="all">
          <Form ref="artmode" :model="artmode"  :label-width="80">
            <FormItem label="会议类型:" prop="kind">
              <Input v-model="artmode.kind" type="text" readonly="readonly" placeholder="类型"></Input>
            </FormItem>
            <FormItem label="会议状态:" prop="motion">
              <Input v-model="artmode.motion" type="text" readonly="readonly"  placeholder="状态"></Input>
            </FormItem>
            <FormItem label="主题:" prop="cont">
              <Input v-model="artmode.cont" type="textarea" readonly="readonly" :autosize="{minRows: 2,maxRows: 5}" placeholder="主题"></Input>
            </FormItem>
            <FormItem label="发布人:" prop="creatorName">
              <Input v-model="artmode.creatorName" type="text" readonly="readonly"  placeholder="发布人"></Input>
            </FormItem>
            <FormItem label="时间:"prop="starTime endTime">
              <Row>
                <Col span="11">
                <FormItem prop="starTime">
                  <Input v-model="artmode.starTime" type="text" readonly="readonly" placeholder="开始时间"></Input>
                </FormItem>
                </Col>
                <Col span="2" style="text-align: center">至</Col>
                <Col span="11">
                <FormItem prop="endTime">
                  <Input v-model="artmode.endTime" type="text" readonly="readonly"  placeholder="结束时间"></Input>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="会议地点:" prop="adress">
              <Input v-model="artmode.adress" type="text" readonly="readonly" placeholder="会议地点"></Input>
            </FormItem>
            <FormItem label="会议记录人:" prop="cord">
              <Input v-model="artmode.cord" type="text"readonly="readonly"  placeholder="记录人"></Input>
            </FormItem>
            <FormItem label="参会人:" prop="join">
              <Input v-model="artmode.join" type="text" readonly="readonly" placeholder="参会人"></Input>
            </FormItem>
            <FormItem >
              <Button  size="large"   @click="add=true" style="background:#027ed1;color:#fff;">添加会议记录</Button>
              <Button  size="large"  @click="getCord" style="background:#027ed1;color:#fff;margin-left: 150px;">修改会议记录</Button>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" style="position: relative;margin-top: 40px; padding-bottom:60px">
          <Button  size="large"  class="close" @click="Reset('artmode')">取消</Button>
          <Button  size="large" class="admit" @click="Submit('artmode')">参加</Button>
        </div>
      </Modal>
      <Modal v-model="add" width="600" >
        <div slot="header" class="title">
          添加会议记录
        </div>
        <div class="all">
          <Form ref="addmode" :model="addmode" :rule="addrule" :label-width="80">
            <FormItem label="记录内容:" prop="cordcent">
              <Input v-model="addmode.cordcent" type="textarea"  :autosize="{minRows: 2,maxRows: 5}" placeholder="主题"></Input>
            </FormItem>
            <FormItem label="上传文件：" prop="update" >
              <Upload
                multiple
                ref="upload"
                :before-upload="handleUpload0"
                :show-upload-list="false"
                action="/api/mtrcd/save"
                name="files" style="margin-right: 20px;"
                :format="['jpg','png']"
                :max-size="2048">
                <Button  icon="ios-cloud-upload-outline">浏览文件</Button>
                （只支持2M以内的jpg，png文件）
              </Upload>
              <div v-for="item in files" :key="item.index">Upload file: {{ item.name }}
                <a href="javascript:;"  @click="delectFile0(item.keyID)">X</a>
              </div>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" style="position: relative;margin-top: 40px; padding-bottom:60px">
          <Button  size="large"  class="close" @click="addReset('addmode')">取消</Button>
          <Button  size="large" class="admit" @click="addSubmit('addmode')">保存</Button>
        </div>
      </Modal>
      <Modal v-model="fix" width="600" >
        <div slot="header" class="title">
          修改会议记录
        </div>
        <div class="all">
          <Form ref="fixmode" :model="fixmode"  :label-width="80">
            <FormItem label="记录内容:" prop="cordcent">
              <Input v-model="fixmode.cordcent" type="textarea"  :autosize="{minRows: 2,maxRows: 5}" placeholder="主题"></Input>
            </FormItem>
            <FormItem label="上传文件：" prop="update"  class="temporary">
              <Upload
                multiple
                ref="upload"
                :before-upload="handleUpload1"
                :show-upload-list="false"
                action="/api/mtrcd/save"
                name="files" style="margin-right: 20px;"
                :format="['jpg','png']"
                :max-size="2048">
                <Button  icon="ios-cloud-upload-outline">浏览文件</Button>
                （只支持2M以内的jpg，png文件）
              </Upload>
              <div v-for="item in filess" :key="item.index">Upload file: {{ item.name }}
                <a href="javascript:;"  @click="delectFile1(item.keyID)">X</a>
              </div>
            </FormItem>
            <div class="pics">
              <ul>
                <li>
                  <img :src="picList.images" alt="">
                </li>
              </ul>
            </div>
          </Form>
        </div>
        <div slot="footer" style="position: relative;margin-top: 40px; padding-bottom:60px">
          <Button  size="large"  class="close" @click="fixReset('fixmode')">取消</Button>
          <Button  size="large" class="admit" @click="fixSubmit('fixmode')">修改</Button>
        </div>
      </Modal>
    </div>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  import $ from 'jquery'
  import qs from 'qs'
  export default {
    name: "orgfive",
    data(){
      return{
        model: '',
        add:false,
        fix:false,
        meetting:false,
        file: [], // 总文件List
        uploadFile: [], // 需要上传的文件List
        files:[],
        uploadFiles: [],
        filess:[],
        uploadFiless: [],
        formValidate: {
          type: '',
          title: '',
          publish: '',
          starDate: '',
          starTime:'',
          endDate:'',
          endTime:'',
          space: '',
          record: '',
          attendee:'',
          update:'',
        },
        ruleValidate: {
          type: [
            { required: true, message: '请选择会议类型', trigger: 'change',}
          ],
          title: [
            { required: true, message: '主题不能为空', trigger: 'blur' },

          ],
          publish: [
            { required: true, message: '发布人不能为空', trigger: 'blur' }
          ],
          starDate: [
            { required: true,type: 'date', message: '请选择开始日期', trigger: 'change' }
          ],
          starTime: [
            { required: true,type: 'date', message: '请选择开始时间', trigger: 'change' }
          ],
          endDate: [
            { required: true,type: 'date', message: '请选择结束日期', trigger: 'change' }
          ],
          endTime: [
            { required: true,type: 'date', message: '请选择结束时间', trigger: 'change' }
          ],
          space: [
            { required: true, message: '会议地点不能为空', trigger: 'blur' },
          ],
          record: [
            { required: true,  message: '记录人不能为空', trigger: 'blur' }
          ],
          attendee: [
            { required: true, message: '参会人不能为空', trigger: 'blur' },
          ],
          update: [
            { required: false, message: '请选择上传文件', trigger: 'change' },
          ]
        },
        artmode:{
          kind:"",
          motion:"",
          cont:"",
          creatorName:"",
          starTime:"",
          endTime:"",
          adress:"",
          cord:"",
          join:"",
        },
        addmode:{
          cordcent:"",
        },
        fixmode:{
          cordcent:"",
        },
        addrule:{
          cordcent: [
            { required: true, message: '请输入内容', trigger: 'blur' },
            { type: 'string', min: 10, message: '不能少于10个字', trigger: 'blur' }
          ],
        },
        light:0,
        art:false,
        value:"",
        disabledGroup: '是',
        city:'成都市',
        total:"500",
        finish:"400",
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
        items:[],
        items1:[],
        typeList:[
          {value:"1",label:"党支部大会"},
          {value:"2",label:"党小组大会"},
          {value:"3",label:"党员大会"},
          {value:"4",label:"党课"},
        ],
        choses:[
          {text:"全部",type:"1"},
          {text:"党支部大会",type:"2"},
          {text:"党小组大会",type:"3"},
          {text:"党员大会",type:"4"},
          {text:"党课",type:"5"},
        ],
        swiperOption: {
          notNextTick: true,
          loop : true,
          autoplay:false,
          autoplayDisableOnInteraction:false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
          },
          keyboard : true,
          slidesPerView:5,
          slidesPerGroup:5,
        },
        picList:[],
      }
    },
    mounted() {
      this.drawLine();
      this.getAll();
    },
    methods: {
      //点击获取当前信息的详情
      getId(event){
         /* ;*/
        var el=event.currentTarget;
        var data = new URLSearchParams();
        data.append("id",el.id);
        localStorage.setItem("meetId",el.id);
        this.$api.post("/mt/getOne",data,r=>{
          if(r!=null){
            console.log(r);
            localStorage.setItem("state",r.state);
            if(r.type=="1"){
              this.artmode.kind="党支部大会";
            }else if(r.type=="2"){
              this.artmode.kind="党小组大会";
            }else if(r.type=="3"){
              this.artmode.kind="党员大会";
            }else if(r.type=="4"){
              this.artmode.kind="党课";
            };
            if(r.state=="1"){
              this.artmode.motion="未开始";
            }else if(r.state=="2"){
              this.artmode.motion="进行中";
            }else if(r.state=="3"){
              this.artmode.motion="已结束";
            }else if(r.state=="0"){
              this.artmode.motion="已取消";
            }
            this.artmode.cont=r.content;
            this.artmode.creatorName=r.creatorName;
            this.artmode.starTime=r.startTime;
            this.artmode.endTime=r.endTime;
            this.artmode.adress=r.address;
            this.artmode.cord=r.writerNames;
            this.artmode.join=r.totalNum;
            this.art=true;
          }
        });
      },

      //点击取消关闭当前
      Reset(){
        this.art = false;
      },

      //参加会议
      Submit(){
        var meetId =localStorage.getItem("meetId");
        var state=localStorage.getItem("state");
        var data = new URLSearchParams();
        data.append("id",meetId);
        data.append("state",state);
        if(state=="0"){
          alert("会议已经取消！")
        }else if(state=="3"){
          alert("会议已经结束！")
        }else{
          this.$api.post("/mt/sign",data,r=>{
            console.log(r);
          })
        }

      },

      //获取全部消息
      getAll(){
        //获取全部会议记录
        this.$api.post("/mt/getAll",null,r=>{
          if(r!=null){
            this.items=r;
          }else{
            alert("暂无数据！");
          }
          console.log(r);
        })
      },

      //上传图片（发布）
      handleUpload (file) {
        let keyID = Math.random().toString().substr(2);
        file['keyID'] = keyID;
        this.file.push(file);
        this.uploadFile.push(file)
        return false;
      },

      //删除图片（发布）
      delectFile (keyID) { // 删除文件
        this.file = this.file.filter(item => {
          return item.keyID != keyID;
        })
        this.uploadFile = this.uploadFile.filter(item => {
          return item.keyID != keyID;
        })
      },

      //添加会议记录
      handleUpload0 (files) {
        let keyID = Math.random().toString().substr(2);
        files['keyID'] = keyID;
        this.files.push(files);
        this.uploadFiles.push(files)
        console.log(this.files);
        return false;
      },

      //删除图片（发布）
      delectFile0 (keyID) { // 删除文件
        this.files = this.files.filter(item => {
          return item.keyID != keyID;
        })
        this.uploadFiles = this.uploadFiles.filter(item => {
          return item.keyID != keyID;
        })
      },

      //重置
      addReset(name){
        this.$refs[name].resetFields();
        this.files="";
        console.log(this.files);
        this.add=false;
      },

      //保存
      addSubmit(){
        let data= new FormData();
        var meetId =localStorage.getItem("meetId");
        data.append("id",meetId);
        data.append("files",this.files);
        data.append("mainContent",this.addmode.cordcent);
        this.$api.post("/mtrcd/save",data,r=>{
          console.log(r);
          if(r.success==true){
            alert("添加成功");
            this.add=false;
          }else{
            alert("添加失败，请重试！");
          }
        })
      },

      //修改会议记录
      handleUpload1 (filess) {
        let keyID = Math.random().toString().substr(2);
        filess['keyID'] = keyID;
        this.filess.push(filess);
        this.uploadFiless.push(filess)
        console.log(this.filess);
        return false;
      },

      //删除图片（发布）
      delectFile1 (keyID) { // 删除文件
        this.filess = this.filess.filter(item => {
          return item.keyID != keyID;
        })
        this.uploadFiless = this.uploadFiless.filter(item => {
          return item.keyID != keyID;
        })
      },

      //获取信息修改
      getCord(){
        var data = new URLSearchParams();
        var meetId =localStorage.getItem("meetId");
        data.append("meetingID",meetId);
        this.$api.post("/mtrcd/getMtrcd",data,r=>{
          console.log(r);
          if(r.mainContent!=null){
            this.fixmode.cordcent=r.mainContent;
            this.picList=r;
            console.log(this.picList.images);
            this.fix=true;
            console.log(this.picList.images); 
           /* for(var i=0;i<this.picList.images.length;i++){
              var cont ='<img src="'+this.picList.images+'">';
              $(".pics ul li").append(cont);
            }*/
          }else{
            alert("暂无会议记录！请添加！");
          }
        })
      },

      //关闭fixmode
      fixReset(){
        this.fix=false;
      },

      //echart
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('pic'))
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['已完成','未完成']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type : 'category',
            splitLine:{show: false},
            data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
            axisLine:{ lineStyle:{ color:'transparent' }},
            axisLabel: {
              interval:0,
              rotate:40,
              textStyle: {
                color: '#333'
              }
            },
          },
          yAxis: {
            splitLine:{show: false},
            axisLine:{ lineStyle:{ color:'transparent' }},
            axisLabel: {
              textStyle: {
                color: '#333'
              }
            },
          },
          series: [
            {
              name: '已完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#638af9'
                }
              },
              stack:"总数",
              data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
            },
            {
              name: '未完成',
              type: 'bar',
              barWidth:20,
              itemStyle:{
                normal:{
                  color:'#f9b663'
                }
              },
              stack:"总数",
              data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
            }
          ]
        });
        myChart.on('click', function (param) {
          let index = param.dataIndex;
          //alert(index);
        });
      },

      //切换页面请求
      toggle(index){
        this.light = index;
        let data= new URLSearchParams();
        data.append("type",index);
        if(index==0){
          $(".box1").css("display","block");
          $(".box1").show().siblings('div').hide();
        }else if(index==1){
          $(".box2").css("display","block");
          $(".box2").show().siblings('div').hide();
          // 基于准备好的dom，初始化echarts实例
          let myChart1 = echarts.init(document.getElementById('pic1'))
          // 绘制图表
          myChart1.setOption({
            title: { text: '' },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['已完成','未完成']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type : 'category',
              splitLine:{show: false},
              data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                interval:0,
                rotate:40,
                textStyle: {
                  color: '#333'
                }
              },
            },
            yAxis: {
              splitLine:{show: false},
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                textStyle: {
                  color: '#333'
                }
              },
            },
            series: [
              {
                name: '已完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#638af9'
                  }
                },
                stack:"总数",
                data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
              },
              {
                name: '未完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"总数",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              }
            ]
          });
          this.$api.post("/mt/getByType",data,r=>{
            console.log(r);
            if(r.length==0){
              this.items1=r;
              alert("暂无数据!");
            }else{
              this.items1=r;
            }

          })
        }else if(index==2){
          $(".box3").css("display","block");
          $(".box3").show().siblings('div').hide();
          // 基于准备好的dom，初始化echarts实例
          let myChart2 = echarts.init(document.getElementById('pic2'))
          // 绘制图表
          myChart2.setOption({
            title: { text: '' },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['已完成','未完成']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type : 'category',
              splitLine:{show: false},
              data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                interval:0,
                rotate:40,
                textStyle: {
                  color: '#333'
                }
              },
            },
            yAxis: {
              splitLine:{show: false},
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                textStyle: {
                  color: '#333'
                }
              },
            },
            series: [
              {
                name: '已完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#638af9'
                  }
                },
                stack:"总数",
                data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
              },
              {
                name: '未完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"总数",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              }
            ]
          });
          this.$api.post("/mt/getByType",data,r=>{
            console.log(r);
            if(r.length==0){
              this.items1=r;
              alert("暂无数据!");
            }else{
              this.items1=r;
            }
          })
        }else if(index==3){
          $(".box4").css("display","block");
          $(".box4").show().siblings('div').hide();
          // 基于准备好的dom，初始化echarts实例
          let myChart3 = echarts.init(document.getElementById('pic3'))
          // 绘制图表
          myChart3.setOption({
            title: { text: '' },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['已完成','未完成']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type : 'category',
              splitLine:{show: false},
              data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                interval:0,
                rotate:40,
                textStyle: {
                  color: '#333'
                }
              },
            },
            yAxis: {
              splitLine:{show: false},
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                textStyle: {
                  color: '#333'
                }
              },
            },
            series: [
              {
                name: '已完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#638af9'
                  }
                },
                stack:"总数",
                data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
              },
              {
                name: '未完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"总数",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              }
            ]
          });
            this.$api.post("/mt/getByType",data,r=>{
              console.log(r);
              if(r.length==0){
                this.items1=r;
                alert("暂无数据!");
              }else{
                this.items1=r;
              }
            })
        }else{
          $(".box5").css("display","block");
          $(".box5").show().siblings('div').hide();
          // 基于准备好的dom，初始化echarts实例
          let myChart4 = echarts.init(document.getElementById('pic4'))
          // 绘制图表
          myChart4.setOption({
            title: { text: '' },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['已完成','未完成']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type : 'category',
              splitLine:{show: false},
              data : ['青羊区','金牛区','锦江区','武侯区','高新区','龙泉驿区','青白江区','新都区','天府新区','双流县','大邑县','新津县'],
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                interval:0,
                rotate:40,
                textStyle: {
                  color: '#333'
                }
              },
            },
            yAxis: {
              splitLine:{show: false},
              axisLine:{ lineStyle:{ color:'transparent' }},
              axisLabel: {
                textStyle: {
                  color: '#333'
                }
              },
            },
            series: [
              {
                name: '已完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#638af9'
                  }
                },
                stack:"总数",
                data: ['50','40','42','55','35','33','48','60','30','25','30','20',]
              },
              {
                name: '未完成',
                type: 'bar',
                barWidth:20,
                itemStyle:{
                  normal:{
                    color:'#f9b663'
                  }
                },
                stack:"总数",
                data: ['10','5','8','5','5','7','2','12','10','5','5','5',]
              }
            ]
          });
              this.$api.post("/mt/getByType",data,r=>{
                console.log(r);
                if(r.length==0){
                  this.items1=r;
                  alert("暂无数据!");
                }else{
                  this.items1=r;
                }
              })
        };
        //查询三会一课的type（得现有数据才能有回显。）
       /* this.$http({
          method: 'post',
          url: '/api/mt/getByType',
          data:{
            type:index,
          },
        })
          .then(function(res){
            console.log(res.data);
          })
          .catch(function(error){
            console.log(error);
          })*/
      },

      //modle确认
      handleSubmit: function (type) {
        let star = this.formValidate.starDate;
        let end = this.formValidate.endDate;
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
     /*   this.$refs[type].validate((valid) => {
          if (valid) {*/
            let _this = this;
            let str = parseInt(_this.formValidate.type);
            let data= new FormData();
            data.append("type",str);
            data.append("content",_this.formValidate.title);
            data.append("writerIds",0);
            data.append("writerName",_this.formValidate.record);
            data.append("participantsIds",0);
            data.append("participants",_this.formValidate.attendee);
            data.append("address",_this.formValidate.space);
            data.append("accessControl",123456);
            data.append("startTime",starTime);
            data.append("endTime",endTime);
            data.append("file",_this.file);
            _this.$api.post('/mt/save',data,r=>{
              console.log(r);
              console.log(_this.file);
              _this.meetting = false;
              _this.$Message.success('Success!');
            })
         /* } else {
            _this.$Message.error('Fail!');
          }
        })*/
      },

      //model清空
      handleReset (type) {
        this.$refs[type].resetFields();
        this.meetting = false;
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .pics ul{
    display: flex;
    justify-content: flex-start;
  }
  .pics ul li{
    width: 200px;
    height: 100px;
    margin-right:20px;

  }
  .pics ul li img{
    width: 100%;
    height: 100%;
  }
  .temporary{
    display: none;
  }
  .box1{
    width: 100%;
    height: 610px;
  }
  .box2,.box3,.box4,.box5{
    width: 100%;
    height: 610px;
    display: none;
  }
  #diff{
    margin:0 52px 0 0;
  }
  FormItem{
    display: flex;
    justify-content: space-between;
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
  .diff{
    margin-bottom: 20px;
  }
  .radio{
    display: inline-block;
  }
  .pro{
    display: inline-block;
  }
  .alone p{
    line-height: 30px;
  }
  .ck{
    height:43px;
  }
  .check{
    width: 100%;
    height: 43px;
    background: #6797b8;
    color:#fff;
  }
  .mode{
    width:270px;
    margin-top: 10px;
    height:235px;
    border:1px solid #ccc;
    border-radius: 10px;
  }
  .cont{
    height:150px;
  }
  .cont ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    line-height:45px;
  }
  .liLelf{
    padding-left: 40px;
  }
  .time{
    background: url("../../../static/img/little1.png")no-repeat 10px center;
  }
  .person{
    background: url("../../../static/img/little2.png")no-repeat 10px center;
  }
  .perpeo{
    background: url("../../../static/img/little3.png")no-repeat 10px center;
  }
  .liRight{
    padding-right: 10px;
  }
  .tit{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    padding: 0  10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  #pic,#pic1,#pic2,#pic3,#pic4{
    width:100%;
    height: 350px;
  }

  .all ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .bottom{
    width: 100%;
    height: 250px;
    background: #f1f1f1;
    border-radius: 10px;
  }
  .far{
    width:15%;
    line-height: 30px;
    margin-bottom: 30px;
  }
  .alone{
    width:85%;
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
  .add{
    width:30px;
    height: 30px;
    margin:30px 20px 0 20px;
    border:none;
    background: url("../../../static/img/add.png");
  }
  .adding{
    width: 30px;
    height: 30px;
    border:none;
    background: url("../../../static/img/add.png") no-repeat center center;
    background-size:50% 50%;
  }
  .ivu-modal-header{
    background: #027ed1;
  }
  .title{
    line-height:50px;
    height: 50px;
    font-size: 18px;
    color:#fff;
    text-align: center;
    background: #027ed1;
  }
  .layer span{
    color:red;
    font-size: 14px;
  }

  .content{
    height: 360px;
    width: 100%;
    background:#fff;
    border-radius: 10px;
  }
  .local{
    line-height: 40px;
    padding-left:20px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

  }
  .fri{
    font-size: 20px;
    color:#666;
  }
  .sec{
    font-size: 14px;
    color:#666;
    margin-left: 100px;
  }
  .light{
    border-bottom:1px solid #2db7f5;
  }
  .local ul{
    display: flex;
    justify-content: space-between;
  }
  .local ul li{
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
  }
</style>
