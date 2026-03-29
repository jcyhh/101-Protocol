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
        path:'/account',
        component: () => import('@/views/login/account.vue')
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
        path:'/helps',
        component: () => import('@/views/home/helps/list.vue')
    },
    {
        path:'/helps/:id',
        component: () => import('@/views/home/helps/detail.vue')
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
    {
        path:'/community',
        component: () => import('@/views/user/community/index.vue')
    },
    {
        path:'/community/my',
        component: () => import('@/views/user/community/my.vue')
    },
    {
        path:'/community/apply',
        component: () => import('@/views/user/community/apply.vue')
    },
    {
        path:'/community/rank',
        component: () => import('@/views/user/community/rank.vue')
    },
    {
        path:'/news',
        component: () => import('@/views/user/news/list.vue')
    },
    {
        path:'/news/:id',
        component: () => import('@/views/user/news/detail.vue')
    },
    {
        path:'/cardholder',
        component: () => import('@/views/user/cardholder/list.vue')
    },
    {
        path:'/cardholder/:id',
        component: () => import('@/views/user/cardholder/edit.vue')
    },
    {
        path:'/setting',
        component: () => import('@/views/user/setting.vue')
    },
]