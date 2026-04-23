import { routerLogin } from '@/config/router'

export default [
    {
        path:routerLogin, // 登录
        component: () => import('@/views/login/index.vue')
    },
    {
        path:'/register', // 注册
        component: () => import('@/views/login/register.vue')
    },
    {
        path:'/forget', // 忘记密码
        component: () => import('@/views/login/forget.vue')
    },
    {
        path:'/editPassword', // 修改密码
        component: () => import('@/views/login/editPassword.vue')
    },
    {
        path:'/bindEmail',
        component: () => import('@/views/login/bindEmail.vue')
    },
    {
        path:'/bindAddress',
        component: () => import('@/views/login/bindAddress.vue')
    },
    {
        path:'/editPayPassword',
        component: () => import('@/views/login/editPayPassword.vue')
    },
    {
        path:'/account',
        component: () => import('@/views/login/account.vue')
    },
]