import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Navigation from 'components/Elements/Navigation/Navigation.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

import routes from 'src/routes';
import 'src/style.scss';

export const LoadingState = new Vue();

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

const body = document.querySelector('body');
body.style.background = window.location.pathname.includes('register') ? '#e0f5f5' : '#fff';

export const App = new Vue({
  router,
  components: {
    Navigation,
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }
}).$mount('#app');
