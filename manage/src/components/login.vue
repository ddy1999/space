<template>
    <div id="login">
      <h1>中欣智慧党建云平台</h1>
      <div class="box">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="150" class="from">
          <FormItem  prop="account">
            <Input v-model="formValidate.account" placeholder="请输入账号" style="width: 300px;"></Input>
          </FormItem>
          <FormItem  prop="password">
            <Input type="password"  v-model="formValidate.password" placeholder="请输入密码" style="width: 300px;"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')" class="sub">登录</Button>
          </FormItem>
        </Form>
      </div>
      <div class="fix">
        <ul>
          <li>
            <router-link to="">修改密码</router-link>
          </li>
          <li>
            <router-link to="">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import qs from 'qs'
  import cookie from '../../static/assets/lib/jquery.cookie'
    export default {
        name: "login",
      data(){
          return{
            formValidate:{
              account:"",
              password:"",
            },
            ruleValidate:{
              account: [
                { required: true, message: '账号不能为空', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
              ],
            },
          }
      },
      methods:{
        handleSubmit(account){
          let data = new URLSearchParams();
          data.append('idCard',this.formValidate.account);
          data.append('password',this.formValidate.password);
          this.$api.post('/login',data, r=>{
          if(r.id !==null){
            this.$Message.success('成功!')
            this.$router.push({path: '/'});
            localStorage.setItem("id",r.id);
          }else{
            alert("请确认你的账号是否存在？")
          }
          })


        /*  if(res.data==''){
            alert("请确认你的账号是否存在？")
          }else {
            this.$Message.success('成功!')
            this.$router.push({path: '/'});
            localStorage.setItem("res.data.id",res.data.id);
          }*/
        /* this.$refs[account].validate((valid) => {
            if (valid) {
              var data = new URLSearchParams();
              data.append('idCard',this.formValidate.account);
              data.append('password',this.formValidate.password);
              this.$api.post('/login',data,)
                .then(res=>{
                  console.log(res);
                })

            } else {
              this.$Message.error('失败!');
            }
          })*/
        }
      },
      mounted(){
        $("#header").css("display","none");
        $("#footer").css("display","none");

      }
    }
</script>

<style scoped>
  #login{
    width: 1920px;
    height: 1080px;
    background:url("../../static/img/loginbg.png")left center no-repeat;
  }
  #login h1{
    font-size: 60px;
    color: #ffffff;
    font-weight: normal;
    text-align: center;
    padding:165px 0;
  }
  .box{
    width: 1160px;
    height: 190px;
    border:1px solid #ccc;
    background: #054b6c;
    margin: 0 auto;
  }
  .from{
    display: flex;
    justify-content: flex-start;
    margin-top: 80px;
  }
  .fix{
    width: 1160px;
    height: 60px;
    margin:0 auto;
    font-size: 14px;

  }
  .fix ul{
    display: flex;
    justify-content: flex-end;
  }
  .fix ul li{
    list-style: none;
    margin:0 30px;
    line-height: 60px;
  }
  .fix ul li a{
    color:#fff;
  }
  .fix ul li a:hover{
    color:#2baee9;
  }
  .ivu-input{
    padding:10px 0;
  }
  .sub{
    padding:6px 20px;

  }
</style>
