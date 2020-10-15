
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';


// routes
const routes = [
  { path: '/', name: 'Home', component: () => import(/* webpackChunkName:"Home" */ '../pages/Home'), meta: { requireUnAuth: true, layout: 'auth' }, },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName:"About" */ '../pages/About'), meta: { requireUnAuth: true, layout: 'auth' } },
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName:"About" */ '../pages/Contact'), meta: { requireUnAuth: true, layout: 'auth' } },
  {
    path: '/auth', name: 'Auth', component: () => import(/* webpackChunkName:"auth" */ '../auth'), meta: { requireUnAuth: true, layout: 'auth' },
    children: [
      { path: '', component: () => import(/* webpackChunkName:"auth" */  '../auth/Login') },
      { path: 'register', component: () => import(/* webpackChunkName:"auth" */  '../auth/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName:"auth" */  '../auth/ForgotPassword') },
      { path: 'verification', name: 'Verify', component: () => import(/* webpackChunkName:"auth" */  '../auth/Verification'), meta: { requireAuth: true, layout: 'auth' } }
    ]
  },
  {
    path: '/user', name: 'User', component: () => import(/* webpackChunkName:"user" */ '../user'), meta: { requireAuth: true, layout: 'user' },
    beforeEnter(to, _, next) {
      if (store.getters.isUser) {
        next()
      } else if (store.getters.userVerification) {
        next('/auth/verification')
      } else {
        next({
          path: '/auth',
          query: { redirectFrom: to.fullPath }
        })
      }
    },
    children: [
      { path: '', name: 'user-dashboard', component: () => import(/* webpackChunkName:"user" */ '../user/Dashboard'), },
      { path: 'posts', name: 'user-posts', component: () => import(/* webpackChunkName:"user" */ '../user/Posts'), },
      { path: 'projects', component: () => import(/* webpackChunkName:"user" */ '../user/Projects'), },
      { path: 'jobs', component: () => import(/* webpackChunkName:"user" */ '../user/Jobs'), },
      { path: 'profile', component: () => import(/* webpackChunkName:"user" */ '../user/Profile'), },
      { path: 'settings', component: () => import(/* webpackChunkName:"user" */ '../user/Settings'), }
    ]
  },
  {
    path: '/admin', name: 'Admin', component: () => import(/* webpackChunkName:"admin" */ '../admin'), meta: { requireAuth: true, layout: 'admin' },
    beforeEnter(to, _, next) {
      if (store.getters.isAdmin) {
        next()
      } else {
        next({
          path: '/auth',
          query: { redirectFrom: to.fullPath }
        })
      }
    },
    children: [
      { path: '', name: 'Dashboard', component: () => import(/* webpackChunkName:"admin" */ '../admin/Dashboard') },
      { path: 'category', name: 'Dategory', component: () => import(/* webpackChunkName:"admin" */ '../admin/Category') },
      { path: 'designation', name: 'Designation', component: () => import(/* webpackChunkName:"admin" */ '../admin/Designation') },
      { path: 'skill', name: 'Skill', component: () => import(/* webpackChunkName:"admin" */ '../admin/Skills') },
      { path: 'posts', name: 'Posts', component: () => import(/* webpackChunkName:"admin" */ '../admin/Posts') },
      { path: 'users', name: 'Users', component: () => import(/* webpackChunkName:"admin" */ '../admin/Users') },
      { path: 'settings', name: 'Settings', component: () => import(/* webpackChunkName:"admin" */ '../admin/Settings') },
      { path: 'admin-:notFound(.*)', name: 'AdminNotFound', component: () => import(/* webpackChunkName:"admin" */ '../admin/NotFound') }
    ]
  },
  {
    path: '/:notFound(.*)',
    component: () => import(/* webpackChunkName:"not-found" */ '../pages/NotFound'),
    meta: { requireUnAuth: false, layout: 'auth' }
  },
]



// router
const router = createRouter({
  routes,
  history: createWebHistory()
})


router.beforeEach((to, _, next) => {
  if (to.meta.requireAuth && !store.getters.isAuth) {
    next({
      path: '/auth',
      query: { redirectFrom: to.fullPath }
    })
  } else next()
})

// export
export default router;
