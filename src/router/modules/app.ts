export default [
    {
        path:'/notice',
        component: () => import('@/views/notice/list.vue')
    },
    {
        path:'/notice/:id',
        component: () => import('@/views/notice/detail.vue')
    },
    {
        path:'/help',
        component: () => import('@/views/help/list.vue')
    },
    {
        path:'/help/:id',
        component: () => import('@/views/help/detail.vue')
    },
]