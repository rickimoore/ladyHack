import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Navigation from 'components/Elements/Navigation/Navigation.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

import routes from 'docs/routes';
import 'docs/style.scss';

export const LoadingState = new Vue();

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

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
