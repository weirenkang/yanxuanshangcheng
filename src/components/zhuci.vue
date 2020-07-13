<template>
  <div id="zhuce">
    <h3>新用户注册</h3>
    <p class="p_1">很高兴您将成为商城的会员（注册只需要一</p>
    <p class="p_1">步）</p>
    <p class="p_2">
      <input class="input_1" type="text" name="" id=""
       placeholder="手机号码" v-model="title">
    <van-icon class="van" name="phone-o" /></p>
    <p class="p_2"><input class="input_1" type="text" name="" id="" placeholder="密码"
    v-if="show"
    v-model="pwd"
    ><span><van-icon name="closed-eye"  @click="dj"/></span></p>
    <p class="p_2"><input class="input_1" type="text" name="" id="" placeholder="确认密码"><van-icon name="closed-eye" /></p>
    <p class="p_2"><input class="input_1" type="text" name="" id="" placeholder="用户名"><van-icon name="contact" /></p>
    <p class="p_2">
      <input class="input_1" type="text"  v-model="pic">
    <img class="img1" :src="imgde + key" alt="" @click="coon"> 
    </p>
    <p class="p_2"><input class="input_1" type="text" name="" id="" ></p>
    <p class="p_2">
      <input class="input_2" type="text" name=""
       id="" v-model="code">
    <span class="span1" @click="getcode">获取验证码</span></p>
    <span>{{ sec }}s后再试</span>
    <p class="p_3" @click="zhuce">立即注册</p>
    <p class="p_4">已有账号？ 立即登录</p>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
import qs from "qs";
export default {
name:"",
data() {
return {
   imgde:"https://api.it120.cc/small4/verification/pic/get?key=",
   key:uuidv4(),
   title:"",
   pic:"",
   show:true,
   pwd:"",
   code:"",
   timer:null,
  sec:60,
  confirm:true,
}
},
methods:{
coon(){
  // this.imgde ="https://api.it120.cc/small4/verification/pic/get?key="+uuidv4()
    this.key = uuidv4()
 },
 getcode(){
  var data ={"mobile":this.title,picCode:this.pic,key:this.key}
   
   this.$axios.post("https://api.it120.cc/small4/verification/sms/get",qs.stringify(data)).then((msg)=>{
     console.log(msg)
   })
    this.confirm=false;
  this.timer=setInterval(()=>{
    if(this.sec>0 && this.sec<=60){
    this.sec--;
    }else{
    this.confirm=true;
    clearInterval(this.timer)
    this.sec=60;
    this.timer=null;
    }
    },1000)
 },
 zhuce(){
    var data ={"mobile":this.title,pwd:this.pwd,code:this.code}
   
   this.$axios.post("https://api.it120.cc/small4/user/m/register",qs.stringify(data)).then((msg)=>{
     console.log(msg)
   })
  },
 dj(){
   this.show = !this.show
 }
  
  
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
.img1{
  width: 100px;
    height: 41px;
    border: 1px solid;
    position: absolute;
    left: 186px;
    top: 395px;
}
/* @import url(); 引入css类 */
*{
    list-style: none;
}
h3{
    margin-left:30px;
    margin-top:15px;
}
.p_1{
    font-size:15px;
    margin-left:25px;
    color:#909090;
    margin-top:15px;
}
.p_2{
    width:245px;
    height:40px;
    background:#f5f5f5;
    margin-top:25px;
    margin-left:50px;
}
.input_1{
    width:200px;
    height:38px;
    border:1px solid #f5f5f5;
    background:#f5f5f5;
    margin-left:10px;
    font-size:13px;
}
.p_3{
    width: 10rem;
    height: 2rem;
    border-radius: 0.06rem;
    background: -webkit-gradient(linear, left top, right top, from(#5ea6f8), to(#bb87f6));
    background: linear-gradient(90deg, #5ea6f8, #bb87f6);
    text-align: center;
    line-height: 2rem;
    font-size: 0.2rem;
    color: white;
    letter-spacing: 0.06rem;
    margin: 0 auto;
    margin-top:15px;
}
.p_4{
    font-size: 0.2rem;
    color: #549ff9;
    margin-top: 0.27rem;
    text-align: center;
}
.input_2{
    width:150px;
    height:38px;
    border:1px solid #f5f5f5;
    background:#f5f5f5;
    margin-left:8px;
    font-size:13px;
}
.span1{
    font-size:13px;
}
</style>