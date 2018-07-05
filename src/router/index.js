import Vue from 'vue'
import Router from 'vue-router'
// 定义组件
import tabs from '@/pages/tabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabs',
      component: tabs
    }
  ]
})
