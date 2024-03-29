// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
  el: '#app',
  render: h=>h(App),
  // 安装全局事件总线
  beforeCreate() {
    // beforeCreate这个钩子里面的this指向当前的Vue实例对象vm
    Vue.prototype.$bus = this
  },
})