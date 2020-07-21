<template>
    <!-- 轮播图 -->
  <div class="tooter">
      <div class="swper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img class="img178" src="static/lbt1.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img178" src="static/lbt2.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img178" src="static/lbt3.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img178" src="static/lbt1.png" alt=""></van-swipe-item>
        </van-swipe>
      </div>
      

    <!-- nav导航栏 -->
    <div class="nav">
        <ul class="box">
            <li>
                <img class="img2" src="static/nav1.png" alt="">
                <p>签到</p>
            </li>
            <li>
                <img  class="img2" src="static/nav2.png" alt="">
                 <p>礼劵</p>
            </li>
            <li>
                <img  class="img2" src="static/nav3.png" alt="">
                 <p>砍价</p>
            </li>
            <li>
                <img  class="img2" src="static/nav4.png" alt="">
                 <p>专栏</p>
            </li>
        </ul>
    </div>

        <!-- 全民砍价 -->
        <p class="p1">全民砍价   》</p>

        <!-- 裤子 -->
        <div class="kz">
            <ul class="kz1">
                <li>
                    <img class="img6" src="static/kz1.png" alt="">
                    <p class="p3">男生羊羔绒休闲外套</p>
                    <p style="color: grey;" class="p3">仿羊绒内里，却又真实安全感</p>
                    <p  class="p3">
                        <span style="color: red;">￥1</span>
                        <span style="color: grey;">￥429</span>
                        <span style="color: grey;">100件</span>
                    </p>
                    <p  class="p3">
                        <span>低价</span>
                        <span style="color: grey;" >原价</span>
                        <span style="color: grey;">限量</span>
                    </p>
                </li>
            </ul>
            <ul class="kz1">
                <li>
                    <img class="img7" src="static/kz2.png" alt="">
                    <p class="p3">男生羊羔绒休闲外套</p>
                    <p style="color: grey;" class="p3">仿羊绒内里，却又真实安全感</p>
                    <p  class="p3">
                        <span style="color: red;">￥1</span>
                        <span style="color: grey;">￥429</span>
                        <span style="color: grey;">100件</span>
                    </p>
                    <p  class="p3">
                        <span>低价</span>
                        <span style="color: grey;" >原价</span>
                        <span style="color: grey;">限量</span>
                    </p>
                </li>
            </ul>
            <ul class="kz1">
                <li>
                    <img class="img4" src="static/kz3.png" alt="">
                    <p class="p3">男生羊羔绒休闲外套</p>
                    <p style="color: grey;" class="p3">仿羊绒内里，却又真实安全感</p>
                    <p  class="p3">
                        <span style="color: red;">￥1</span>
                        <span style="color: grey;">￥429</span>
                        <span style="color: grey;">100件</span>
                    </p>
                    <p  class="p3">
                        <span>低价</span>
                        <span style="color: grey;" >原价</span>
                        <span style="color: grey;">限量</span>
                    </p>
                </li>
            </ul>
        </div>

        <!-- 精选专题 -->
          <p class="p14">精选专题   》</p>

          <!-- blt -->

          <div class="wei">
              <van-swipe :loop="false" :width="300">
                <van-swipe-item v-for="(item,key) in nav" :key="key" @click="go(item.id)"><img class="img110" :src="item.pic" alt="">
                <p class="pp1">{{item.title}}</p>
                <p class="pp2">{{item.descript}}</p>
                </van-swipe-item>
               
                </van-swipe>
               
          </div>
            
          <!-- 人气推荐 -->
         
              <p class="p14">人气推荐    》</p>

              <div class="ren" >
                <ul class="ul20">
                    <li v-for="(item,key) in list" :key="key" @click="gog(item.id)">
                        <img :src="item.pic" alt="">
                        <p class="p20">{{item.name}}</p>
                        <p class="p21">{{item.characteristic}}</p>
                        <p class="p22">￥{{item.minPrice}}</p>
                    </li>

                </ul>
              </div>
          
      <!-- 底部路由 -->
      <ul class="banan">
          <li>
             
              <router-link to="sy">
               
              <img src="static/sy1.png" alt="">
               <p>首页</p>
              </router-link>
          </li>
          <li>
              <router-link to="fl">
             
             <img src="static/sy2.png" alt="">
              <p>分类</p>
             </router-link>
          </li>
          <li>
              <router-link to="gwc">
              
               <img src="static/sy3.png" alt="">
               <p>购物车</p>
               </router-link>
          </li>
          <li>
              <router-link to="gr">
              
               <img src="static/sy4.png" alt="">
               <p>个人</p>
               </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"tooter",
    data(){
        return {
            list:[],
            nav:[]
        }
    },
    methods:{
    // 跳转购物车
    // add(id){
    //     this.$router.push({name:"Detail",params:{id:id}})
    // },
    go(id){
      this.$router.push("/News?id="+id)
    },
    gog(id){

        this.$router.push({name:"Detail",params:{id:id}})
        }
    },
    created(){
        axios.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
            // console.log(res)
            this.list=res.data.data
        }),
         axios.get("https://api.it120.cc/small4/cms/news/list").then((res)=>{
          console.log(res)
          this.nav=res.data.data
      })
    },
   
}
</script>

<style>
.pp1{
    font-size:12px;
    margin-top:6px;
    margin-left:5px;
}
.pp2{
    font-size:8px;
    color:#999;
    margin-top:12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.img110{
  width: 100%;
  height: 150px;
}
.p20{
    margin-top:5px;
}
.p21{
    margin-top:-1px;
    color:#999;
}
.p22{
    margin-top:6px ;
      color:red;
}
.ren{
    width: 100%;
    
   
}
.ul20{
    width: 100%;
    flex-wrap:wrap;
    display: flex;
}
.ul20 li{
    width: 50%;
    height: 269px;
   
    text-align: center;

    font-size: 12px;
}
.ul20 li img{
    width: 86%;
    height: 200px;
}
.van-swipe__indicator {
   
    height: 6px;
    background-color: #ebedf0;
    border-radius: 100%;
    opacity: .3;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
}
.p17{
    margin-top: 7px;
    margin-left: 45px;
    font-size: 15px;
}
.p18{
     margin-top: 20px;
    font-size: 14px;
    color: grey;
    margin-left: 49px;
}
.wei{
   width: 100%;
    height: 200px;
  margin-left:10px ;
}
.img6{
    width: 122px;
    height: 115px;
    margin-top: -1px;
}

.img7{
     width: 122px;
    height: 124px;
    margin-top: 20px;
}
.img4{
   width: 122px;
    height: 124px;
    margin-top: 56px;
}
.kz1{
    width: 300px;
    height: 100px;
    float: left;
   
}
.p3{
   width: 210px;
    height: 143px;
    margin-left: 128px;
    margin-top: -113px;
    display: block;
     font-size:14px ;
}
.kz{
    width: 100%;
    height: 380px;
   
}
.p14{
    width: 200px;
    height: 37px;
    background: white;
    text-align: center;
    margin-left: 80px;
    margin-top: 21px;
}
.p1{
    width: 200px;
    height: 37px;
    background: white;
    text-align: center;
    margin-left: 80px;
    margin-top: 90px;
}
.nav{
    width: 100%;
    height: 100px;
    border-radius:17px ;
    background: white;
    position: absolute;
    top: 232px;
    left: 0px;
}
.img2{
    width: 50px;
    height: 48px;
}
.box{
    width: 100%;
    height: 50px;
    display: flex;
}
.box li{
    width: 25%;
    height: 50px;
    line-height: 50px;
    justify-content: space-around;
  
    text-align: center;
}
.img178{
width: 100%;
height: 250px;
}
 .my-swipe .van-swipe-item {
     width: 100%;
     height: 250px;
 
    font-size: 20px;
    line-height: 250px;
    text-align: center;
   
  }
.banan{
  width: 100%;
    height: 77px;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    left: -2px;
    top: 610px;
    background: white;
}
.banan li{
    width: 25%;
    height: 50px;
    text-align: center;
   line-height: 50px;
   justify-content: space-between;
}
p{
    margin-top: -25px;
}
a{
    text-decoration: none;
}
</style>