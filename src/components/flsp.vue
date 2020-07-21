<template>
  <div class="flsp">
      <van-nav-bar
    title="分类商品"
    left-text="返回"
   left-arrow
  @click-left="onClickLeft"
  
/>
    <ul class="ull123" v-if="list.length !=0">
        <li @click="add(item.id)" v-for="item of list" :key="item.id">
            <img :src="item.pic" alt="">
            <p class="p1">{{item.name}}</p>
            <p class="p2">￥{{item.originalPrice}}</p>
        </li>
    </ul>
    <div v-else  class="img99">
        <img class="img999" src="static/shangp.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
name:"flsp",
data(){
    return {
        list:[]
    }
},
methods:{
    onClickLeft(){
        this.$router.go(-1)
    },
    add(id){
        this.$router.push({name:"Detail",params:{id:id}})
    }
},
created(){
   
   this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then((msg)=>{
    //    console.log(msg.data.msg)
    //    var a=msg.data.data.filter((itme)=>{
    //        return itme.categoryId ==this.$route.query.id
    //    })
    // //    console.log(a)
    //    this.list=a
       if(msg.data.msg == "success"){
        var a = msg.data.data.filter((item)=>{
               return item.categoryId ==this.$route.query.id
           })
           this.list=a
       }
    //    alert(this.$route.query.id)
   })
}
}
</script>

<style>
.img99{
   margin: 0 auto;
}
.img999{
    width: 400px;
    height: 500px;
}
.p1{
    text-align: center;
    font-size: 12px;
    color: #b69b72;
}
.p2{
    text-align: center;
    font-size: 12px;
    color: red;
}
.ull123{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.ull123>li>img{
   width: 151px;
    height: 153px;
}
.ull123>li{
    width: 40%;
    
}
.van-nav-bar__text {
    color: #333;
}
 .van-icon::before {
    display: inline-block;
     color: #333;
} 
</style>