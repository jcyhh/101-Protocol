import axios from 'axios'
import { useStorage } from '@/config/storage'
import { httpHeaderLang, httpHeaderAddress, httpHeaderToken, timeOut, uploadTimeOut, httpUploadApi, httpUploadFileName } from '@/config/http'
import { closeToast, showLoadingToast } from 'vant';
import { router, routerPush } from '@/router'
import { routerDappLogin, routerLogin } from '@/config/router'
import { appWebviewEnable, appIsWebview } from '@/config'
import { message } from './message';
import { useAccount } from '@/hooks/useAccount';
import { t } from '@/locale';

const { getToken, delToken, getLang, getAddress, getAccount } = useStorage()

const { delSingleAccount } = useAccount()

// 登录失效
export function logout() {
    delToken()
    let routerPath;
    if(appWebviewEnable){
        routerPath = appIsWebview ? routerLogin : routerDappLogin
        const account = getAccount()
        if(appIsWebview && account)delSingleAccount(account)
    }else{
        routerPath = routerDappLogin
    }
    const currentRoute = router.currentRoute.value
    if (currentRoute.path !== routerPath) routerPush(routerPath)
}

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: timeOut * 1000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (config.data instanceof FormData) config.timeout = uploadTimeOut * 1000
        else config.headers['Content-Type'] = "application/json; charset=UTF-8"

        config.headers[httpHeaderToken] = `Bearer ${getToken()}`
        if (httpHeaderAddress) config.headers[httpHeaderAddress] = getAddress()
        if (httpHeaderLang) config.headers[httpHeaderLang] = getLang()
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
    response => response.data,
    error => {
        const code = error.status
        if (code == 401) {
            // 登录失效
            logout()
            return Promise.reject(new Error(error.response.data || 'Error'))
        } else {
            if (error.response.data) message(error.response.data)
            else message(t('操作失败'), 'fail')
            return Promise.reject(new Error(error.response.data || 'Error'))
        }
    }
)

export const apiGet = (url: string, params: any = '') => service({ url, method: 'get', params })
export const apiPost = (url: string, data: any = {}) => service({ url, method: 'post', data })
export const apiDel = (url: string, data: any = {}) => service({ url, method: 'delete', data })
export const apiPut = (url: string, data: any = {}) => service({ url, method: 'put', data })

// 上传单张图片
export const apiUpload = (filename:string = httpUploadFileName) => {
    return new Promise((resolve, reject) => {
        if (appIsWebview) {
            const flutterWindow = window as Window & {
                Flutter?: { postMessage?: (message: string) => void }
                receiveMessageFromFlutter?: (message: string) => void
            }
            const { Flutter } = flutterWindow

            if(Flutter && Flutter.postMessage){
                showLoadingToast({
                    overlay: true,
                    forbidClick: true,
                    duration: 0,
                    zIndex: 10000000000
                });

                const prevHandler = flutterWindow.receiveMessageFromFlutter
                let finished = false

                const cleanup = () => {
                    closeToast()
                    if (flutterWindow.receiveMessageFromFlutter === onFlutterMessage) {
                        flutterWindow.receiveMessageFromFlutter = prevHandler
                    }
                }

                const onFlutterMessage = (message: string) => {
                    prevHandler?.(message)
                    if (finished || typeof message !== 'string' || !message.startsWith('uploadImageUrl:')) return

                    const uploadImageUrl = message.replace('uploadImageUrl:', '').trim()
                    if (!uploadImageUrl) return

                    finished = true
                    cleanup()
                    resolve({ url: uploadImageUrl })
                }

                flutterWindow.receiveMessageFromFlutter = onFlutterMessage

                Flutter.postMessage(JSON.stringify({
                    type: 'uploadImage',
                    token: getToken()
                }))
            }else{
                message('上传不可用！', 'fail')
                reject(new Error('上传不可用！'))
            }
        }else{
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'

            input.onchange = async (e: Event) => {
                const file = (e.target as HTMLInputElement)?.files?.[0]
                if (!file) {
                    input.remove()
                    reject(new Error('未选择文件'))
                    return
                }

                const formData = new FormData()
                formData.set(filename, file, file.name)

                try {
                    showLoadingToast({
                        overlay: true,
                        forbidClick: true,
                        duration: 0,
                        zIndex: 10000000000
                    });
                    const response = await service({
                        url: httpUploadApi,
                        method: 'post',
                        data: formData,
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })
                    closeToast()
                    input.remove()
                    resolve(response)
                } catch (error) {
                    input.remove()
                    closeToast()
                    reject(error)
                }
            }

            input.click()
        }
    })
}