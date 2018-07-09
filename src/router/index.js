import Vue from 'vue'
import Router from 'vue-router'
// 定义组件
import tabs from '@/pages/tabs'
import home from '@/pages/home'
import echarts from '@/pages/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/tabs',
      name: 'tabs',
      component: tabs
    },{
      path: '/echarts',
      name: 'echarts',
      component: echarts
    }
  ]
})
