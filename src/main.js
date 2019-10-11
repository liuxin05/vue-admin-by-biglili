import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import "./components/style/reset.css";
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

Vue.config.productionTip = false

Vue.use(iView);
// Vue.use(VueAxios,axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
