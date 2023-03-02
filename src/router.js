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
      path: '/screenMobileA',
      name: 'screenMobileA',
      component: () => import('@/views/screen/screenMobile/index'),
    },
    {
      path: '/screen4x2Single',
      name: 'screen4x2Single',
      component: () => import('@/views/screen4x2/screenSingle-index'),
    },
    {
      path: '/screen4x2Combin',
      name: 'screen4x2Combin',
      component: () => import('@/views/screen4x2/screenCombin-index'),
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