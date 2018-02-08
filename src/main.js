// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GoogleAuth from 'vue-google-auth'
// import GSignInButton from 'vue-google-signin-button'

Vue.config.productionTip = false

// Vue.use(GoogleAuth, {clientID: ''});


// Vue.use(GSignInButton);


// Vue.googleAuth().load();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
