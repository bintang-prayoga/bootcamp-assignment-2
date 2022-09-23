require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('app', require('./components/App.vue').default);
Vue.component('all-product', require('./components/Product.vue').default);
Vue.component('table-cart', require('./components/TableCart.vue').default);
Vue.component('table-all', require('./components/TableAll.vue').default);
Vue.component('cart', require('./components/Cart.vue').default);

const app = new Vue({
    el: '#app',
});
