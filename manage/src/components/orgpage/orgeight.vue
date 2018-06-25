<template>
  <div>
    <div class="top">
      <div class="topLeft">
        组织机构
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
      </div>
    </div>
    <div class="content">
      <div class="tit">
        <div style="font-size: 16px">{{local}}</div>
        <div>
          <Button class="add" @click="addData()">新增</Button>
          <Button class="del" @click="deletaData()">删除</Button>
        </div>
      </div>
      <div class="box">
        <div class="tree" id="tree">
          <ul id="treeDemo" class="ztree" ></ul>
        </div>
        <div class="mess">
          <div class="fmlist">
             <Form ref="messageData" :model="messageData" :rules="rulesData" :label-width="100">
               <FormItem label="上级组织名称:" prop="title">
                 <Input v-model="messageData.title" placeholder="请输入上级组织名称" style="width:380px" id="leader"></Input>
               </FormItem>
               <FormItem label="组织类型:" prop="type">
                 <RadioGroup v-model="messageData.type">
                   <Radio label="1">省级</Radio>
                   <Radio label="2">市级</Radio>
                   <Radio label="3">区、县</Radio>
                   <Radio label="4">镇、街道</Radio>
                 </RadioGroup>
               </FormItem>
               <FormItem label="组织名称:" prop="name">
                 <Input v-model="messageData.name" placeholder="请输入组织名称" style="width:380px" id="local"></Input>
               </FormItem>
               <FormItem label="备注:" prop="mess">
                 <Input v-model="messageData.mess" placeholder="备注" style="width:380px"></Input>
               </FormItem>
               <FormItem label="单位地址:" prop="comname">
                 <Input v-model="messageData.comname" placeholder="请输入单位名称" style="width:380px"></Input>
               </FormItem>
               <FormItem label="单位传真:" prop="comfax">
                 <Input v-model="messageData.comfax" placeholder="请输入单位传真" style="width:380px"></Input>
               </FormItem>
               <FormItem label="单位电话:" prop="comtell">
                 <Input v-model="messageData.comtell" placeholder="请输入单位电话" style="width:380px"></Input>
               </FormItem>
               <FormItem>
                 <Button class="save" @click="handleSubmit('messageData')">保存</Button>
                 <Button class="ghost" @click="handleReset('messageData')">重置</Button>
               </FormItem>
             </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "orgeight",
      data(){
          return{
            model:'',
            mess:"",
            messageData:{
              parentId:0,
              parentName:"",
              title:"",
              type:"",
              name:"",
              mess:"",
              comname:"",
              comfax:"",
              comtell:"",
            },
            rulesData:{
              title:[
                { required: true, message: '上级组织不能为空', trigger: 'blur' }
              ],
              type:[
                { required: true, message: '请选择组织类型', trigger: 'change' }
              ],
              name:[
                { required: true, message: '组织名字不能为空', trigger: 'blur' }
              ],
            },
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
            local:'经开区',
            nodeData: [
            ],
            setting:{
              view: {
                showLine: false,
              },
              async: {
                enable: true,//采用异步加载
                url : "/api/org/getAll",
                dataType : "json"
              },
              data : {
                key : {
                  name : "name"
                },
                simpleData : {
                  enable : true,
                  idKey : "id",
                  pIdKey : "parentID",
                  rootPid : 0
                },
              },
              callback: {
                onClick: this.getFileDesc,//单击事件

              },
              check:{
                enable: true
              }
            },
          }
      },
      methods: {
          //提交事件
        handleSubmit (name){
          this.$refs[name].validate((valid) => {
              if (valid){
                let data ={
                  parentID:this.messageData.parentId,
                  parentName:this.messageData.title,
                  type:this.messageData.type,
                  name:this.messageData.name,
                  remark:this.messageData.mess,
                  address:this.messageData.comname,
                  fax:this.messageData.comfax,
                  phone:this.messageData.comtell
                };
                this.$api.post('/org/save',data,r=>{
                  if(r.success===true){
                    this.$Message.success("添加成功！")
                    window.location.reload();
                  }
                })
              }else{
                this.$Message.error('请输入必填选项!');
              }
          })
        },
        //重置事件
        handleReset (name) {
          this.$refs[name].resetFields();
        },
        //点击事件
        getFileDesc(){
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          var sNodes = zTree.getSelectedNodes();
          this.messageData.parentId=sNodes[0].parentID;
          this.messageData.title=sNodes[0].parentName;
          this.messageData.type=sNodes[0].type;
          this.messageData.name=sNodes[0].name;
          this.messageData.mess=sNodes[0].remark;
          this.messageData.comname=sNodes[0].address;
          this.messageData.comfax=sNodes[0].fax;
          this.messageData.comtell=sNodes[0].phone;
        },
        //添加节点
          addData(){
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            var sNodes = zTree.getSelectedNodes();
            console.log(sNodes);
            if(sNodes.length<=0){
              alert("请选择父级菜单");
              return
            }
            this.messageData.parentId=sNodes[0].id;
           this.messageData.title=sNodes[0].name;
           this.messageData.type="";
           this.messageData.name="";
           this.messageData.mess="";
           this.messageData.comname="";
           this.messageData.comfax="";
           this.messageData.comtell="";
           this.messageData.id=null;
        },
        //删除节点
        deletaData(){
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          var sNodes = zTree.getSelectedNodes();
          var data = new URLSearchParams();
          data.append("id",sNodes[0].id);
          this.$api.post("/org/del",data,r=>{
            console.log(r);
            if(r.success===true){
              alert("删除成功！");
              window.location.reload();
            }else{
              alert("删除失败！请重新删除。")
            }
          })
        },

      },
      mounted(){
        let nodeData = this.nodeData
        $.fn.zTree.init($("#treeDemo"), this.setting, nodeData);
        //请求获取树形
        this.$api.get('org/getAll',null,r=>{
          console.log(r);
        })
      }
    }
</script>

<style scoped>

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
  .content{
    width:100%;
    height:660px;
    margin-top: 20px;
    border-radius: 10px;
    background: #fff;
  }
  .tit{
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .add{
    background: #018eec;
    color:#fff;
    border:none;
    margin: 0 20px;
  }
  .del{
    background: #8a8787;
    color:#fff;
    border:none;
  }
  .box{
    width: 100%;
    height: 620px;
    display: flex;
    justify-content:space-between;
  }
  .tree{
    width:25%;
    height:90%;
    border:1px solid #ccc;
    margin-top: 50px;
    overflow-y: auto;
  }
  .mess{
    width: 70%;
    height: 620px;
  }
  .fmlist{
    width: 50%;
    margin: 0 auto;
    border:1px  solid #ccc;
    height: 90%;
    margin-top: 50px;
    padding-top: 20px;
    border-radius: 10px;
  }
  .ghost{
    background: #f5a623;
    color: #fff;
    border:none;
    margin-left: 200px;
  }
  .save{
    color: #fff;
    border:none;
    background:#018eec;
  }
</style>
