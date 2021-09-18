import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js';
import Vuex from 'vuex';


import storeData from './store/store.js';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


//api instance
var instance = axios.create({
    baseURL: 'http://medpad.rtgroup-rdc.com/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
Vue.prototype.$axios = instance;


//vue using
Vue.use(Vuex);
Vue.use(VueSweetalert2);
Vue.filter('sortlength', function(text, length, suffix) {
    return text.substring(0, length) + suffix;
});

const store = new Vuex.Store(storeData);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');