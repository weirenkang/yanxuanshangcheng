<template>
    <!-- 轮播图 -->
  <div class="tooter">
      <div class="swper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img class="img1" src="static/lbt1.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img1" src="static/lbt2.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img1" src="static/lbt3.png" alt=""></van-swipe-item>
        <van-swipe-item><img class="img1" src="static/lbt1.png" alt=""></van-swipe-item>
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
                <van-swipe-item><img src="static/mn1.png" alt="">
                <p class="p15">《影》螳螂捕蝉黄雀在后</p>
                <p class="p16">我记得被色彩惊艳到的 《英雄》，视觉...</p>
                </van-swipe-item>
                <van-swipe-item><img src="static/mn2.png" alt="">
                <p class="p17">因为相爱，终将相遇---《寻梦环游记》</p>
                <p class="p18">妈妈，我老了的时候，你还会在吗？我...</p>
                </van-swipe-item>
                <van-swipe-item><img src="static/mn3.png" alt="">
                <p class="p17">因为相爱，终将相遇---《寻梦环游记》</p>
                <p class="p18">妈妈，我老了的时候，你还会在吗？我...</p>
                </van-swipe-item>
                <van-swipe-item><img src="static/mn4.png" alt="">
                <p class="p17">因为相爱，终将相遇---《寻梦环游记》</p>
                <p class="p18">妈妈，我老了的时候，你还会在吗？我...</p>
                </van-swipe-item>
                <van-swipe-item><img src="static/mn5.png" alt="">
                <p class="p17">因为相爱，终将相遇---《寻梦环游记》</p>
                <p class="p18">妈妈，我老了的时候，你还会在吗？我...</p>
                </van-swipe-item>
                </van-swipe>
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
export default {
    name:"tooter"
}
</script>

<style>
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
.p15{
    margin-top: 7px;
}
.p16{
    margin-top: 20px;
    font-size: 14px;
    color: grey;
    margin-left: 6px;
}
.wei{
   
    height: 500px;
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
    border-radius:25px ;
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
.img1{
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
    height: 50px;
     list-style: none;
     display: flex;
    position: fixed;
    left: -2px;
    top: 485px;
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