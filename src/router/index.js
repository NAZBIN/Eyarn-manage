import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Bill = () => import('../components/Bill');
const Bunks = () => import('../components/Bunks');
const Nurses = () => import('../components/Nurses');
const Patientin = () => import('../components/Patientin');
const Patientout = () => import('../components/Patientout');

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
  {
    path: '/bunks',
    name: 'bunks',
    component: Bunks,
  },
  {
    path: '/nurses',
    name: 'nurses',
    component: Nurses,
  },
  {
    path: '/patientin',
    name: 'patientin',
    component: Patientin,
  },
  {
    path: '/patientout',
    name: 'patientout',
    component: Patientout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
