<template>
  <div class="gwc">
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
name:"gwc"
}
</script>

<style>
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