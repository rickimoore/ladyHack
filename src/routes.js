import Landing from 'components/Views/Landing.vue';
import Register from 'components/Views/Register.vue';
import Dashboard from 'components/Views/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

export default routes;
