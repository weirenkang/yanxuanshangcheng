<template>
  <div class="fl">
      <div class="input11">
          <p class="input13"><input class="input14"  type="text" placeholder="回车搜索商品"></p>
      </div>
      <section>
                <!-- 左边内容 -->
      <div class="left1">
          <ul style="text-align:center;line-height:30px">
              <li @click="qh(0,1)" :class="[newkey==0?'active':'']">所有分类</li>
              <li v-for="(item,key) in yjfl" :key="key" :class="[newkey==key+1?'active':'']" @click="qh(key+1,item.id)">{{item.name}}</li>
          </ul>
      </div>
         <!-- 右边内容 -->
      <div class="right1">
          <ul>
              <li v-for="(item,key) in sysp" :key="key">
                  <img :src="item.icon" alt="">
                  <p class="p1">{{item.name}}</p>
              </li>
          </ul>
      </div>
      </section>
      <!-- 底部路由 -->
      <ul class="banan">
          <li>
             
              <router-link to="sy">
               
              <img src="static/sy1.png" alt="">
               <p class="p2">首页</p>
              </router-link>
          </li>
          <li>
              <router-link to="fl">
             
             <img src="static/sy2.png" alt="">
              <p class="p2">分类</p>
             </router-link>
          </li>
          <li>
              <router-link to="gwc">
              
               <img src="static/sy3.png" alt="">
               <p class="p2">购物车</p>
               </router-link>
          </li>
          <li>
              <router-link to="gr">
              
               <img src="static/sy4.png" alt="">
               <p class="p2">个人</p>
               </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
name:"fl",
data(){
    return{
        yjfl:[],
        sysp:[],
        newsysp:[],
        newkey:0
    }
},
methods:{
    async getData(){
     var d = await this.$axios.get("https://api.it120.cc/small4/shop/goods/category/all")
     console.log(d.data.data)
     this.sysp=d.data.data
     this.newsysp=d.data.data
     this.yjfl=d.data.data.filter((res)=>{
         return res.level==1
     })
    },
    qh(key,id){
        this.newkey=key
        this.sysp=this.newsysp
        // alert(id)
        if(id==1){
            this.sysp=this.newsysp
        }else{
            var b=this.sysp.filter((res)=>{
            return res.pid==id
            })
            this.sysp=b
        }
        console.log(b)
    }
},
created(){
    this.getData();
}
}
</script>

<style>
.p2{
    color: #333333;
    font-size: 12px;
}
.p1{
    line-height: 34px;
}
.left1{
    width: 30%;
    border-right: 1px solid #E9E9E9;
    height: 60%;
    position: fixed;
    left: 0;
    top: 51px;
    overflow: auto;
    background: white;
    z-index: 1;
    /* background: violet; */
}
.right1{
    width: 70%;   
    position: fixed;
    left: 30%;
    text-align: center;
    height: 60%;
    top: 51px;
    overflow: auto;
   /* background: palegreen; */
   
}
.left1>ul>li{

font-size: 12px;

}

.right1>ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.right1>ul>li{
    width: 30%;
    height: 100px;
    color: #675D56;
    font-size: 12px;
}
.right1>ul>li>img{
    width: 80%;
    height: 60%;
    display: block;
    margin: 0 auto;
}
.input13{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #F3F3F3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.input14{
    width:347px;
    height: 35px;
    background: #F5F5F5;
    border: none;
    border-radius: 20px;
    margin-left: 20px;
    padding-left: 20px;
}
.banan{
  width: 100%;
    height: 58px;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    left: -2px;
    top: 493px;
    background: white;
}
.banan li{
    width: 25%;
    height: 50px;
    text-align: center;
   line-height: 27px;
   justify-content: space-between;
}
.active{
    color: red;
    border-left:solid 3px red;
}
</style>