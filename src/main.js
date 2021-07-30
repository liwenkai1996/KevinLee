// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入根模板
import home from './components/home'
// 引入路由配置信息
import routes from './router'
// 通过components下的index.js文件导入组件
import components from './components/index'
/* eslint-disable no-new */

Vue.use(VueRouter)
const router = new VueRouter(
  {
    hashbang: false,
    history: true,
    routes: routes,
    scrollBehavior: function (to, from, savedPosition) {
      return {
        'x': 0,
        'y': 0
      }
    }
  }
)

// 对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
new Vue({
  router,
  render: h => h(home)
}).$mount('#app')
