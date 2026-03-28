export default [
    {
        path:'/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path:'/forget',
        component: () => import('@/views/login/forget.vue')
    },
    {
        path:'/edit',
        component: () => import('@/views/login/edit.vue')
    },
    {
        path:'/notice',
        component: () => import('@/views/home/notice/list.vue')
    },
    {
        path:'/notice/:id',
        component: () => import('@/views/home/notice/detail.vue')
    },
    {
        path:'/virtual',
        component: () => import('@/views/pay/card/virtual.vue')
    },
    {
        path:'/physical',
        component: () => import('@/views/pay/card/physical.vue')
    },
    {
        path:'/cardbag',
        component: () => import('@/views/user/cardbag.vue')
    },
    {
        path:'/team',
        component: () => import('@/views/user/team.vue')
    },
    {
        path:'/yueBao',
        component: () => import('@/views/home/yueBao.vue')
    },
]