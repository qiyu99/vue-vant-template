import Vue from 'vue';
import { Lazyload } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';

Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
