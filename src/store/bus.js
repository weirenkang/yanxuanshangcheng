import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export  default new Vuex.Store({
       state:{
            title:"hello",
            cart:[]
       },
       mutations:{
            addCart(state,goods){
                // findIndex
              var n = state.cart.findIndex((item)=>{
                        return item.id == goods.id
                });
                console.log(n)
                if(n==-1){
                    state.cart.push(goods)
                }else{
                    var cart = state.cart;
                    cart[n].num += goods.num
                    state.cart = cart
                }

            }

       },
       action:{

       },
       getters:{
             nums(state){
                  
                  var s = 0;
                  state.cart.forEach((item)=>{

                           s+= item.num
                  })
                  return s

             },
             zong(state){
            var s =0;
            state.cart.forEach((item)=>{
                    if(item.checked){
                        s+= item.num*item.price
                    }
             
                 })
             return s
        },
        qx(state,d){
         var cart= state.cart;
         cart.forEach((item)=>{
               item.checked =d
            })
            state.cart =cart
        }
            
       }
})