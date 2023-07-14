import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabLayout from '../layout/TabLayout.vue'
import LoginPage from '../views/LoginPage.vue'
import ScreenInitial from '../views/splashscreen/ScreenInitial.vue'
import LoadDataUser from '../views/LoadDataUser.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/initial',
    component: ScreenInitial,
  },
  {
    path: '/',
    redirect: '/tabs/home',
    meta: { requiresAuth: true }
  },
  {
    path: '/tabs/',
    component: TabLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'explore',
        component: () => import('@/views/ExplorerPage.vue'),
        meta: { title: 'Explorar recetas' }
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
        meta: { title: 'Inicio' }
      },
      {
        path: 'add',
        component: () => import('@/views/AddRecettePage.vue'),
        meta: { title: 'Publica una receta' }
      },
      {
        path: 'comunidad',
        component: () => import('@/views/Tab3Page.vue'),
        meta: { title: 'Comunidad' }
      },
      {
        path: 'profile',
        component: () => import('@/views/Tab3Page.vue'),
        meta: { title: 'Perfil de usuario' }
      }
    ]
  },
  {
    path: '/load-user',
    component: LoadDataUser,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
