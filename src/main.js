// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import mescroll from 'mescroll.js'   
import axios from 'axios';

import utils from './utils/utils'
import Bus from './utils/vueBus';
import Vuex from 'vuex';

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

import api from './utils/api.js'
import axiosApi from './utils/axios'
Vue.prototype.$api = api;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.use(axiosApi);
Vue.config.productionTip = false
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.utils = utils  //工具封装类
Vue.prototype.router = router  //路由

Vue.use(Bus);
Vue.use(Vuex);
// Vue.use(MintUI)

// Vue.prototype.MeScroll = mescroll  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


