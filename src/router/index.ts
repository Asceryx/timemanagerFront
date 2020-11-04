import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'
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
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('../components/Dashboard/WorkingTimesComponent.vue')},
      { path: 'chart', component: () => import('../components/Dashboard/ChartComponent.vue') },
      { path: 'workingtimes', component: () => import('../components/Dashboard/WorkingTimesComponent.vue') }
    ]
    

  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Teams.vue'),
    meta: { requiresManager: true }/*on protège la route*/
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

router.beforeEach((to,from,next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)){/*si la route est protégée*/
    if(store.state.Auth.authState.status.loggedIn){/*Si l'utilisateur est autorisée(authentifié et avec le bon rôle)*/
      next()
    }
    else{
      router.push('/login') /*L'utilisateur est redirigé vers la page login s'il n'est pas autorisé*/
    }

  }

  if (to.matched.some(record => record.meta.requiresManager)){/*les routes réservées au manager*/
    if(store.state.Auth.authState.status.loggedIn){
      if(store.state.Auth.authState.userResponse.userRole !== null && store.state.Auth.authState.userResponse.userRole == "manager" ) {
        next();
      }
      else{
          router.push('/login')
      }
    }
    else{
      router.push('/login') 
    }

  }
  else{
    next();
  }

}

)
export default router
