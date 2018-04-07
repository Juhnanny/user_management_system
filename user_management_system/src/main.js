// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

// 配置路由
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
});

/* eslint-disable no-new */
new Vue({
	router,
  	el: '#app',
	components: { App },
	template: '<App/>'
})
