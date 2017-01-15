import Landing from 'components/Views/Landing.vue';
import Register from 'components/Views/Register.vue';
import Dashboard from 'components/Views/Dashboard.vue';
import Profile from 'components/Views/Profile.vue';

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
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default routes;
