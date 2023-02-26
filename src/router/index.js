import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'signup',
        component: () => import('../SignUp.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../LoginView.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../ForgotPassword.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../HomeView.vue')
    },
    {
        path:'/catalog',
        name:'home',
        component:() => import('../CatalogView.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router