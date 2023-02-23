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
      redirect:"/screenAGlobal",
    },
    {
      path: '/screenAGlobal',
      name: 'screenAGlobal',
      component: () => import('@/views/screen/screen1080pA-global/index'),
    },
    {
      path: '/screenA',
      name: 'screenA',
      component: () => import('@/views/screen/screen1080pA-cn/index'),
    },
    {
      path: '/screenC',
      name: 'screenC',
      component: () => import('@/views/screen/screen1080pC/index'),
    },
    {
      path: '/screenD',
      name: 'screenD',
      component: () => import('@/views/screen/screen1080pD/index'),
    },
    {
      path: '/board3D',
      name: 'board3D',
      component: () => import('@/views/board3D/Board3D-index'),
    },
    {
      path: '/borderDemo',
      name: 'borderDemo',
      component: () => import('@/views/borderDemo/borderDemo-index'),
    },
    {
      path: '/chartPalette',
      name: 'chartPalette',
      component: () => import('@/views/chartPalette/index-chartPalette'),
    },
  ]
})

export default router;