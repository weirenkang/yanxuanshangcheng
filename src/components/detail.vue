<template>
  <div class="detail">
    <div v-if="loading">加载中</div>
    <div v-else>
      <div id="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="p in detail.pics" :key="p.id">
            <img :src="p.pic" alt />
          </van-swipe-item>
        </van-swipe>
        <div class="back" @click="goback">
          <van-icon name="arrow-left" size="25px" />
        </div>
      </div>
      <div class="desc">
        <p>{{ detail.basicInfo.name }}</p>
        <p>{{ detail.basicInfo.characteristic }}</p>
        <div>
          <p>
            低价
            <span>￥{{ detail.basicInfo.minPrice }}</span>
          </p>
          <p>原价￥{{ detail.basicInfo.originalPrice }}</p>
          <p>库存{{ detail.basicInfo.stores }}</p>
        </div>
      </div>
      <van-tabs @click="onClick" @change="ch">
        <van-tab title="商品介绍">
          <div v-html="detail.content"></div>
        </van-tab>
        <van-tab title="商品评价">
          <ul class="comment">
            <li v-for="item of comments" :key="item.id">
              <i class="van-icon van-icon-user-circle-o">
                <!---->
              </i>
              <div>
                <div>
                  <p>123123</p>
                  <p>好评</p>
                </div>
                <p>系统默认好评</p>
                <div>
                  <p>2019-11-12 10:20:00</p>
                  <p>
                    选择规格:
                    <span>牛仔外套:L（175/92A）</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="show" closeable position="bottom">
      <div id="liebxq">
        <div>
          <img :src="detail.basicInfo.pic" alt />
          <div>
            <p>{{ detail.basicInfo.name }}</p>
            <p>￥{{ detail.basicInfo.minPrice }}</p>
          </div>
        </div>
        <div>
          <div v-for="(p,index1) in ps" :key="p.id">
            <p>{{ p.name }}</p>
            <div>
              <div
                class="redwu"
                :class="{'active':p2.checked}"
                @click="select(index1,index2)"
                v-for="(p2,index2) in p.childsCurGoods"
                :key="p2.id"
              >{{ p2.name }}</div>
            </div>
          </div>
        </div>
        <!---->
        <div>
          <p>购买数量</p>
          <van-stepper id="jia" v-model="value" />
        </div>
        <!---->
      <p @click="buy">
        
        加入购物车
        
        </p> 
      </div>
    </van-popup>
    <van-goods-action id="gwc">
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="$store.getters.nums" @click="gogwc" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"  />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  components: {},
  props: {},
  data() {
    return {
      detail: {},
      loading: true,
      n: 0,
      comments: [],
      show: false,
      value: 1,
      ps: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    tab(n) {
      this.n = n;
    },
    onClick() {},
    ch(e) {
      // console.log(e)
      if (e == 1) {
        if (this.comments.length == 0) {
          this.$axios
            .get(
              "https://api.it120.cc/small4/shop/goods/reputation?goodsId=" +
                this.$route.params.id
            )
            .then(msg => {
              console.log(msg);
              if (msg.data.msg == "success") {
                this.comments = msg.data.data;
              } else {
              }
            });
        }
      }
    },
    addCart() {
      this.show = true;
    },
    select(n1, n2) {
      this.ps[n1].childsCurGoods.forEach((item, index) => {
        if (index == n2) {
          item.checked = true;
          this.$set(this.ps[n1].childsCurGoods, index, item);
        } else {
          item.checked = false;
          this.$set(this.ps[n1].childsCurGoods, index, item);
        }
      });
    },
    buy() {
      var t = localStorage.getItem("token");
      console.log(t);
      if (t) {
        // 把数据添加到购物车
        var p0 = [];
        this.ps.forEach(item => {
          var r = item.childsCurGoods.filter(p => {
            return p.checked;
          });
          p0 = p0.concat(r);
        });
        console.log(p0);
        if (p0.length < this.ps.length){
          // alert("请选择属性")

          this.$notify("请选择属性");
          return false;
        }
        var obj = {
          pic: this.detail.basicInfo.pic,
          name: this.detail.basicInfo.name,
          price: this.detail.basicInfo.minPrice,
          num: this.value,
          pro: p0,
          checked: false,
          id: this.detail.basicInfo.id
        };
        this.$store.commit("addCart", obj);
        Toast.success('加入成功');
        this.show =false
        this.$router.push('/gwc')
      } else {
        this.$router.push("/dl");
      }
    },
    gogwc(){
      this.$router.push("/gwc")
    }
  },
  created() {
    var id = this.$route.params.id;
    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/detail?id=" + id)
      .then(msg => {
        console.log(msg);
        if (msg.data.msg == "success") {
          this.detail = msg.data.data;
          this.loading = false;
          var arr = this.detail.properties;
          arr.forEach(item => {
            item.childsCurGoods.forEach(a => {
              a.checked = false;
            });
          });

          this.ps = arr;
        }
      });
  },
  mounted() {}
};
</script>
<style lang="scss" >
#gwc{
    width: 78%;
    height: 50px;
}
.van-icon-cross::before {
    margin-left: -94px;
    margin-top: 10px;
}

#jia{
    position: absolute;
    left: 242px;
    top: 231px;
    background: aqua;
   
}

.van-stepper__input {
 
    box-sizing: border-box;
    width: 64px;
    height: -30px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 11px;
    line-height: normal;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;
}
#banner {
  position: relative;
  .my-swipe {
    img {
      width: 100%;
    }
  }
  .back {
    position: absolute;
    left: 1px;
    top: 1px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    opacity: 0.8;
  }
}
.desc {
  width: 475px;
  height: 124px;
  background: #ffffff;
  padding-left: 2px;
  border-bottom: 14px solid #f5f5f5;
  > p:nth-of-type(1) {
    font-size: 22px;
    color: #464646;
    margin-top: 3px;
  }
  > p:nth-of-type(2) {
    font-size: 16px;
    color: #b8b8b8;
    margin-top: 16px;
  }
  > div {
    display: flex;
    margin-top: 2px;
    > p:nth-of-type(1) {
      font-size: 18pxpx;
      color: #cc0c0c;
      width: 54px;
      span {
        font-size: 2px;
      }
    }
    > p:nth-of-type(2) {
      font-size: 14px;
      color: #b8b8b8;
      margin-top: 0.6px;
      width: 340px;
    }
    > p:nth-of-type(3) {
      font-size: 12px;
      color: #b8b8b8;
      margin-top: 0.6px;
      margin-left: -93px;
    }
  }
}
.tab {
  .title {
    ul {
      display: flex;
      li {
        width: 50%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
      }
      li.active {
        border-bottom: 2px solid #f00;
      }
    }
  }
}
.van-tabs__content {
  width: 100%;
  overflow: hidden;
  img {
    width: 100% !important;
  }
  ul {
    li {
      height: 42px;
      line-height: 26px;

      padding-left: 15px;
      span {
        font-size: 18px;
      }
    }
    li:nth-of-type(1) {
      margin-top: 1px;
    }
  }

  .comment {
    li {
      height: 154px;
      padding: 0.2px;
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      > i {
        font-size: 82px;
        margin-top: 37px;
      }
      > div {
        margin-left: 14px;
        > div:nth-of-type(1) {
          display: flex;
          align-items: center;
          margin-top: 18px;
          p:nth-of-type(1) {
            font-size: 16px;
          }
          p:nth-of-type(2) {
            width: 86px;
            height: 27px;
            border-radius: 0.6px;
            color: white;
            text-align: center;
            line-height: 27px;
            background: #b7282e;
            font-size: 16px;
            margin-left: 0.2px;
          }
        }
        > p:nth-of-type(1) {
          font-size: 16px;
          margin-top: 1px;
        }
        > div:nth-of-type(2) {
          display: flex;
          margin-top: 2px;
          > p {
            font-size: 12px;
            color: #b2b2b2;
          }
          > p:nth-of-type(2) {
            margin-left: 0.25px;
          }
        }
      }
    }
  }
}

#liebxq {
  > div:nth-of-type(1) {
    height: 1.23rem;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    > img {
      width: 85px;
      height: 85px;
      display: block;
      margin-left: 2px;
      margin-top: 2px;
    }
    > div:nth-of-type(1) {
      margin-left: 16px;
      width: 350px;
      > p:nth-of-type(1) {
        font-size: 13px;
        margin-top: 10px;
      }
      > p:nth-of-type(2) {
        font-size: 18px;
        color: #d00000;
        margin-top: 24px;

      }
    }
    > i {
      font-size: 3px;
      margin-top: 12px;
      color: #989898;
    }
  }
  > div:nth-of-type(2) {
    padding: 3px 0;
    border-bottom: 1px solid #e9e9e9;
    > div {
      > p {
        font-size: 16px;
        margin-left: 12px;
        margin-top: 102px;
      }
      > div {
        display: flex;
        flex-wrap: wrap;
        > div {
          padding: 1px 2px;

          border-radius: 0.6px;
          margin-top: 12px;
          margin-left: 12px;
        }
      }
    }
    > div:nth-of-type(2) {
      margin-top: 24px;
    }
  }
  > div:nth-of-type(3) {
    height: 98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2px;

    > p {
      font-size: 16px;
      letter-spacing: 1px;
      margin-left: 10px;
    }
  }
  > p:nth-of-type(1) {
    width: 81%;
    height: 47px;
    text-align: center;
    line-height: 47px;
    font-size: 22px;
    color: white;
    background: #b7282e;
  }
  .active {
    border: 1px solid purple;
  }
}
</style>