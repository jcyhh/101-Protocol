/**
 * keepAlive: true —— 跳转别的页面后，本页面不销毁
 */
import Start from '@/views/index.vue'
import Layout from '@/layout/index.vue'
import loginPages from './login'
// import assetPages from './asset'
import appPages from './app'
import { appWebviewEnable } from '@/config'
import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = [
    {
        path:'/', // 启动
        component: Start
    },
    {
        path:'/home',
        component: Layout,
        redirect: '/home/index',
        children:[{
            path:'index',
            component: () => import('@/views/home/index.vue')
        }]
    },
    {
        path:'/team',
        component: Layout,
        redirect: '/team/index',
        children:[{
            path:'index',
            component: () => import('@/views/team/index.vue')
        }]
    }
]

const theEndPages = [
    {
        path:'/pdf/:type', // PDF 文件预览
        component: () => import('@/views/pdf/index.vue')
    },
    {
        path:'/ref/:ref([a-zA-Z0-9]+)', // 接收邀请码
        component: Start
    }
]

if(appWebviewEnable)routes.push(...loginPages)

// 资产充提转
// routes.push(...assetPages)

// 通用页面
routes.push(...appPages)

// 需配置在常规路由的下方
routes.push(...theEndPages)

export default routes;