import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/script/rem';
import './assets/style/style.scss';
import './assets/style/comment.scss';
import VueAMap from 'vue-amap';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;

VueAMap.initAMapApiLoader({
  key: 'e9c6b62527d515cbc7afd4d92954b939',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11' // 版本号
});
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  loading:require('./assets/loading.png'),
  error:require('./assets/error.png'),
  attempt: 1
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
