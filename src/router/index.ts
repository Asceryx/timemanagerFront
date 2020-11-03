import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)



const routes: Array<RouteConfig> = [
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      { path: '', component: () => import('../components/Dashboard/WorkingTimesComponent.vue')},
      { path: 'chart', component: () => import('../components/Dashboard/ChartComponent.vue') },
      { path: 'workingtimes', component: () => import('../components/Dashboard/WorkingTimesComponent.vue') }
    ]
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Teams.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Authentification/Login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
