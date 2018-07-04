// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue框架
import App from './App' // 引入App.vue
import router from './router' // 引入路由设置
import ElementUI from 'element-ui' //  引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
