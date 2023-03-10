import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import KitchenAssign from './views/KitchenAssign.vue';
import AcceptanceQueue from './views/AcceptanceQueue.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/root',
      name: 'root',
      // lazy-loaded
      component: () => import('./views/BoardRoot.vue')
    },
    {
      path: '/mod',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/assignments',
      name: 'kitchenassign',
      component: KitchenAssign
    },
    {
      path: '/acceptance',
      name: 'acceptanceQueue',
      component: AcceptanceQueue
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
