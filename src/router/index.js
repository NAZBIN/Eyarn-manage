import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Bill = () => import('../components/Bill');

const routes = [
  //   {
  //     path: "/",
  //     redirect: "/login",
  //   },
  {
    path: '/bill',
    name: 'bill',
    component: Bill,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
