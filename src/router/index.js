import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/views/MainLayout.vue'
import MainHome from '@/views/Home/MainHome.vue'
const MainLogin=()=>import("@/views/MainLogin.vue")
//const login = () => import('@/views/MainLogin.vue')
const category = () => import('@/views/Category/MainCategory.vue')

const routes = [
  {
    path:'/',
    name:'Layout',
    component:MainLayout,
    children:[
      {
        path:'/',
        component:MainHome,
      },{
        path:'/category/:id',
        component:category,
      }
    ],
  },
  {
    path:"/login",
    component:MainLogin,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
  