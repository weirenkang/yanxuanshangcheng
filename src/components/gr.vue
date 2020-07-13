<template>
  <div class="gr">
       <!-- 头部 -->
    <div class="header">
       <img class="img_1" src="static/dl.jpg" alt="">
       <p class="pp_1"><router-link to="/dl" style="color: white;">立即登录</router-link></p>
       <p class="pp_2">积分 : 0</p>
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
name:"gr"
}
</script>

<style>
.img_1{
    width:70px;
    height:70px;
    border-radius: 50px;
    margin-top:34px;
    margin-left:15px;
   
}
.pp_1{
    font-size:18px;
    color: white;
    position: absolute;
    left: 105px;
    top:55px;
}
.pp_2{
    width:80px;
    padding: 6px;
    color: #fff;
    background: #b3a078;
    border-radius: .0694444444rem;
    position: absolute;
    left: 102px;
    top: 90px;
    opacity: .8;
    font-size:14px;
}
.p_1{
    color:#999;
}
.header{
    width:100%;
    height:132px;
    background:#C1B18F;
}
.banan{
    width: 100%;
    height: 100px;
     list-style: none;
     display: flex;
    position: fixed;
    left: -2px;
    top: 487px;
    background: white;
}
.banan li{
    width: 25%;
    height: 50px;
    text-align: center;
   line-height: 50px;
   justify-content: space-between;
}
</style>