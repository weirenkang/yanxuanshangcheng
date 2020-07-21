<template>
  <div class="dl">
    <h3 class="p1">登录账号</h3>
    <p>虾米 - 严选商城欢迎您</p>
    <p class="p_2">
      <input class="input_1" type="text" placeholder="手机号" v-model="sjh" />
      <van-icon name="phone-o" />
    </p>
    <p class="p_2">
      <input class="input_1" type="text" placeholder="密码" v-model="pwd" />
      <van-icon name="closed-eye" />
    </p>

    <p class="p_3" @click="login">登录</p>
    <p style="color: #9898;">忘记密码</p>
    <p style="color:#549ff9">还没有注册？ 立即注册</p>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "dl",
  data() {
    return {
      sjh: "",
      pwd: "",
      p1:""
    };
  },
  methods: {
    login() {
      var data = {
        mobile: this.sjh,
        pwd: this.pwd
      };
      this.$axios
        .post(
          "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
          qs.stringify(data)
        )
        .then(res => {
          console.log(res);
          if (res.data.msg == "success") {
           
           localStorage.setItem("token",res.data.data.token);
           if(this.p1 !=""){
             this.$router.push(this.p1)
           }else{
             this.$router.push("/gr");
           }
            
          } else {
            alert("亲 你的用户名或者密码不对");
          }
        });
    }
  },
  created(){
    console.log(this.$route)
  },
  mounted(){
   
  },
   beforeRouterEnter (to,from ,next){
      console.log(from)
      next(vm=>{
        // 通过vm访问组件实例
        vm.p1=from.path
      })
    }
};
</script>

<style>

.p_2 {
  width: 245px;
  height: 40px;
  background: #f5f5f5;
  margin-top: 25px;
  margin-left: 50px;
}
.input_1 {
  width: 200px;
  height: 38px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  margin-left: 10px;
  font-size: 13px;
}
.dl {
  width: 335px;
  height: 500px;
  border: 1px solid #333333;
  margin: 0 auto;
  margin-top: 21px;
}
h3 {
  text-align: center;
  margin-top: 20px;
}
p {
  margin-top: 20px;
  text-align: center;
}
.p_3 {
  width: 10rem;
  height: 2rem;
  border-radius: 0.06rem;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#5ea6f8),
    to(#bb87f6)
  );
  background: linear-gradient(90deg, #5ea6f8, #bb87f6);
  text-align: center;
  line-height: 2rem;
  font-size: 0.2rem;
  color: white;
  letter-spacing: 0.06rem;
  margin: 0 auto;
  margin-top: 15px;
}
</style>