import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import gwc from '@/components/gwc'
import gr from '@/components/gr'
import fl from '@/components/fl'
import News from '@/components/News'
import zhuci from '@/components/zhuci'
import dl from '@/components/dl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: sy,
      redirect:"/sy"
    },
    {
      path: '/sy',
      name: 'sy',
      component: sy,
      
    },
    {
      path: '/fl',
      name: 'fl',
      component: fl
    },
    {
      path: '/gwc',
      name: 'gwc',
      component:gwc
    },
    {
      path: '/gr',
      name: 'gr',
      component: gr
    },
    {
      path:"/news",
     component:News
    },
    {
      path:"/zhuci",
      name:"zhuci",
      component:zhuci,
    },
    {
      path:"/dl",
      name:"zhuci",
      component:dl,
    }
  ]
  
})
