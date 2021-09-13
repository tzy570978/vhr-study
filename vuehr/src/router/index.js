import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/login2',
        component: () => import('@/views/login/index')
    }
]

const router = new Router({
    routes: constantRoutes
})

export default router
