require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('all-product', require('./components/ProductComponent.vue').default);
Vue.component('table-cart', require('./components/TableCart.vue').default);
Vue.component('table-all', require('./components/TableAll.vue').default);
Vue.component('cart', require('./components/CartComponent.vue').default);

const app = new Vue({
    el: '#app',
});
