import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../pages/MainPage.vue')
    },
    {
       path:'/welcome',
       name:'welcome',
       component:() => import('../pages/HomeView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/LoginView.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../pages/ForgotPassword.vue')
    },
    {
        path: '/sign-up',
        name: 'signUp',
        component: () => import('../pages/SignUp.vue')
    },
    {
        path:'/catalog',
        name:'home',
        component:() => import('../pages/CatalogView.vue')
    },
    {
        path:'/laptops',
        name:'laptops',
        component:() => import('../LaptopsView.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router