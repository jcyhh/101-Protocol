import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from "./modules";
import { appPublicPath, appRouterMode } from '@/config'


export const router = createRouter({
    history: appRouterMode === 'hash' ? createWebHashHistory(appPublicPath) : createWebHistory(appPublicPath),
    routes,
    scrollBehavior() { // 切换页面后回滚到顶部
        return { top: 0 }
    }
})

// 跳转
export const routerPush = (path:string, query:any = null) => {
    let obj = { path }
    if(query)obj = {...obj,...{query}}
    router.push(obj)
}

// 替换
export const routerReplace = (path:string, query:any = null) => {
    let obj = { path }
    if(query)obj = {...obj,...{query}}
    router.replace(obj)
}

// 默认返回
export const routerBack = (count:number = -1, fallbackPath:string = '/') => {
    if(count < 0 && !window.history.state?.back){
        routerReplace(fallbackPath)
        return
    }
    router.go(count)
}