import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Test from './components/Test'
import User from './components/User'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path:'/test',
      component: Test
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')