export default [
    {
        path:'/recharge',
        component: () => import('@/views/asset/recharge/index.vue')
    },
    {
        path:'/withdraw',
        component: () => import('@/views/asset/withdraw/index.vue')
    },
    {
        path:'/withdraw/record',
        component: () => import('@/views/asset/withdraw/record.vue')
    },
    {
        path:'/transfer',
        component: () => import('@/views/asset/transfer/index.vue')
    }
]