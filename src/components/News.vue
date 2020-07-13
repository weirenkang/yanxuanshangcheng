<template>
  <div class="News">
<van-nav-bar 
  title="专栏详情"
  left-arrow
  @click-left="onClickLeft"
  
/>    
   
        <p class="p1">{{xqy.title}}</p>
        <p ><img class="img12" :src="xqy.pic" alt=""></p>
        <div class="p2" v-html="xqy.content"></div>
    
          
   
  </div>
</template>

<script>
import axios from "axios"
export default {
name:"News",
data(){
    return {
        xqy:{}
    }
},
methods:{
    onClickLeft(){
        this.$router.go(-1)
    }
},
created(){
    axios.get("https://api.it120.cc/small4/cms/news/detail?id="+this.$route.query.id).then((res)=>{
         console.log(res.data.data)
        this.xqy=res.data.data
    })
}

}
</script>

<style>
.p2{
    font-size: 12px;
    color: #333333;
    line-height: 48px;
    
    margin-top: 10px;
}
.p1{
    text-align: center;
    margin-top: 20px;
}
.img12{
    
    width: 80%;
     height: 150px;
    display: block;
    margin: 0 auto;
}
</style>