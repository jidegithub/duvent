import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Listings from '../views/Listings.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Listings',
    component: Listings,
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Booking.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
