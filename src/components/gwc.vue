<template>
  <div class="gwc">
    <div class="head">
      <p class="p_1" style="color:red">编辑</p>
      <p class="p_2">购物车</p>
    </div>

    <!-- div56545554 -->
    <div class="gwc22">
      <div>
        <ul class="ul1">
          <li v-for="(item,index) in $store.state.cart" :key="index">
           <van-checkbox-group v-model="result" ref="checkboxGroup"  >
          <van-checkbox name="a" v-model="item.checked"></van-checkbox>
       
        </van-checkbox-group>
            <img class="img1" :src="item.pic" alt />

            <div class="div1">
              <p class="p24" v-html="item.name"></p>
              <p class="p23">
                <span v-for="(v,i) in item.pro" :key="i">{{v.name}}</span>
              </p>
              <p class="p21">￥{{item.price}}</p>
            </div>
            <p class="p90">
              <van-stepper v-model="value" input-width="40px" button-size="20px" @change="ch(index)" />
            </p>
          </li>
        </ul>
      </div>
      </div>
        <div class="dibu" >
          <ul class="ul110">
            <li>
          <van-checkbox name="a" v-model="checked">全选</van-checkbox>
            </li>
            <li style="color:red;">合计 ￥{{$store.getters.zong}}</li>
            <li class="li3" v-show="!edit">下单</li>
            <li class="shan" v-show="edit">删除</li>
          </ul>
        </div>
    <!-- 底部路由 -->
    <ul class="banan">
      <li>
        <router-link to="sy">
          <img src="static/sy1.png" alt />
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="fl">
          <img src="static/sy2.png" alt />
          <p>分类</p>
        </router-link>
      </li>
      <li>
        <router-link to="gwc">
          <img src="static/sy3.png" alt />
          <p>购物车</p>
        </router-link>
      </li>
      <li>
        <router-link to="gr">
          <img src="static/sy4.png" alt />
          <p>个人</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from 'vant';
import {mapState} from 'vuex'
export default {
  name: "gwc",
  data(){
    return {
      checked:true,
      edit:false,
       result: [],
    }
  },
  computed:{
    ...mapState({
      list:state=>state.cart,
      t:state=>state.title
    }),
    ss:{
      get:function(){
        return this.$route.getters.select
      },
      set:function(v){
        console.log(v)
        this.$route.commit("qx",v)
      }
    }
  },
  methds:{


    //  checkAll() {
    //    alert("6666")
    //   this.$refs.checkboxGroup.toggleAll(true);
    // },
    // toggleAll() {
    //   this.$refs.checkboxGroup.toggleAll();
    // },
    // sel(n){
    //   this.list[n].checked
    //   console.log(this.list[n].checked)
    // },
    // ch(n){
    //   alert(this.list[n].num)
    // }
  }
};
</script>

<style lang="scss">
.in1{
 width: 14%;
}
.ul110{
  width: 100%;
  height: 50px;
  
  display: flex;
  position: fixed;
  left: 0px;
  top: 550px;
  border-bottom: 1px solid grey;
  background: #FFFFFF;
}
.ul110>li{
  width: 33.33%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.ul110>.li3{
  width: 130px;
  height: 50px;
  background: #D00000;
  color: wheat;
}
.gwc22 {
  width: 100%;
  height: 100%;

  position: relative;
  top: 42px;
  left: 0px;
  flex-wrap: wrap;
}

.head {
  width: 100%;
  height: 40px;
  display: flex;
  float: left;
  border-bottom: 1px solid #999;
}
.head .p_1 {
  line-height: 40px;
  margin-left: 30px;
}
.head .p_2 {
  line-height: 40px;
  margin-left: 120px;
  font-size: 20px;
}
.banan {
  width: 100%;
  height: 100px;
  list-style: none;
  display: flex;
  position: fixed;
  left: -2px;
  top: 598px;
  background: white;
}
.banan li {
  width: 25%;
  height: 36px;
  text-align: center;
  line-height: px;
  justify-content: space-between;
}
.ul1 {
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gainsboro;
    padding: 10px 10px;
    box-sizing: border-box;
    img {
      width: 15%;
      margin: 3px 12px auto;
    }
    .div1 {
      margin-left: 60px;
      width: 40%;
      box-sizing: border-box;
      .p24 {
        font-size: 14px;
        width: 142px;
        margin-left: -65px;
        text-overflow: inherit;
        overflow: visible;
        white-space: inherit;
      }
      .p23 {
        font-size: 13px;
        color: gainsboro;
        margin-left: -65px;
      }
      .p21 {
        color: red;
        margin-left: -65px;
      }
    }
    .p90 {
     width: 260px;
    margin-top: 14px;
    }
  }
}
</style>