import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router=new Router({
  //mode:"history",
  //base: "devMode/",
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:"/dashboardA",
    },
    {
      path: '/dashboardA',
      name: 'dashboardA',
      component: () => import('@/views/dashboard/dashboard1080pA/index.vue'),
    },
    {
      path: '/dashboardB',
      name: 'dashboardB',
      component: () => import('@/views/dashboard/dashboard1080pB/index.vue'),
    },
    {
      path: '/dashboardC',
      name: 'dashboardC',
      component: () => import('@/views/dashboard/dashboard1080pC/index.vue'),
    },
    {
      path: '/dashboardD',
      name: 'dashboardD',
      component: () => import('@/views/dashboard/dashboard1080pD/index.vue'),
    },
    {
      path: '/dashboardE',
      name: 'dashboardE',
      component: () => import('@/views/dashboard/dashboard1080pE/index.vue'),
    },
    {
      path: '/dashboardMobileA',
      name: 'dashboardMobileA',
      component: () => import('@/views/dashboard/dashboardMobile/index.vue'),
    },
    {
      path: '/panel3D',
      name: 'panel3D',
      component: () => import('@/views/panel3D/panel3D-index.vue'),
    },
    {
      path: '/dashboard4x2Single',
      name: 'dashboard4x2Single',
      component: () => import('@/views/dashboard4x2/dashboardSingle-index.vue'),
    },
    {
      path: '/dashboard4x2Combin',
      name: 'dashboard4x2Combin',
      component: () => import('@/views/dashboard4x2/dashboardCombin-index.vue'),
    },
    {
      path: '/chartPalette',
      name: 'chartPalette',
      component: () => import('@/views/chartPalette/index-chartPalette.vue'),
    },
  
  ]
})

export default router;