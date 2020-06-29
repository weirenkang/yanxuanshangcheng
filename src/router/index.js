import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import tooter from '@/components/tooter'
import gwc from '@/components/gwc'
import gr from '@/components/gr'
import fl from '@/components/fl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tooter',
      component: tooter
    },
    {
      path: '/sy',
      name: 'sy',
      component: sy
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
    }
  ]
})
