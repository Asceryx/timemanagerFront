import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
<<<<<<< HEAD
    path: "/account",
    name: "account",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
=======
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue'),
    meta: { requiresAuth: true }
>>>>>>> 380b74ca90c9b6bb00892cabc3bfe018f1ab18ef
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: { requiresAuth: true },
    children: [
<<<<<<< HEAD
      {
        path: "",
        component: () =>
          import("../components/Dashboard/WorkingTimesComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("../components/Dashboard/ChartComponent.vue"),
      },
      {
        path: "workingtimes",
        component: () =>
          import("../components/Dashboard/WorkingTimesComponent.vue"),
      },
    ],
=======
      { path: '', component: () => import('../components/Dashboard/WorkingTimesComponent.vue')},
      { path: 'chart', component: () => import('../components/Dashboard/ChartComponent.vue') },
      { path: 'workingtimes', component: () => import('../components/Dashboard/WorkingTimesComponent.vue') }
    ]
>>>>>>> 380b74ca90c9b6bb00892cabc3bfe018f1ab18ef
  },
  {
    path: "/report",
    name: "report",
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/Report.vue"),
    meta: { requiresAuth: true },
  },
  {
<<<<<<< HEAD
    path: "/team",
    name: "team",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/Teams.vue"),
    meta: { requiresManager: true } /*on protège la route*/,
=======
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Teams.vue'),
    meta: { requiresManager: true }
>>>>>>> 380b74ca90c9b6bb00892cabc3bfe018f1ab18ef
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../components/Authentification/Login/Login.vue"
      ),
  },
<<<<<<< HEAD
];
=======
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: { requiresAdmin: true }
  }
]
>>>>>>> 380b74ca90c9b6bb00892cabc3bfe018f1ab18ef

const router = new VueRouter({
  mode: "history",
  routes,
});

const token = localStorage.getItem('token') || ''
const role = localStorage.getItem('role') || ''

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    /*si la route est protégée*/
    if (token != '') {
      /*Si l'utilisateur est autorisée(authentifié et avec le bon rôle)*/
      next();
    } else {
      router.push(
        "/login"
      ); /*L'utilisateur est redirigé vers la page login s'il n'est pas autorisé*/
    }
  }

  if (to.matched.some((record) => record.meta.requiresManager)) {
    /*les routes réservées au manager*/ 
    if (role == "1" || role == '2') {
      if (token != '') {
        next();
      }
      else {
        router.push("/login");
      }
    }
    else {
      router.push("/login");
    }
  }
<<<<<<< HEAD
  else {
=======
  if (to.matched.some(record => record.meta.requiresAdmin)){/*les routes réservées au manager*/
    if(store.state.Auth.authState.status.loggedIn){
      if(store.state.Auth.authState.userResponse.userRole !== null && store.state.Auth.authState.userResponse.userRole == "admin" ) {
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
>>>>>>> 380b74ca90c9b6bb00892cabc3bfe018f1ab18ef
    next();
  }
});
export default router;
