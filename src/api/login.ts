import { apiPost } from "@/utils/request";

// 登录
export const apiLogin = async (params:any) => await apiPost('/api/auth/login', params)

// dapp登录
export const apiDappLogin = async (params:any) => await apiPost('/api/auth/login', params)

// 注册
export const apiRegister = async (params:any) => await apiPost('/api/auth/register', params)

// 发验证码
export const apiSendEmailCode = async (params:any) => await apiPost('/api/auth/email_code', params)

// 忘记密码
export const apiForgetPassword = async (params:any) => await apiPost('/api/auth/forget_password', params)

// 修改密码
export const apiEditPassword = async (params:any) => await apiPost('/api/users/my/update_password', params)

// 绑定邮箱
export const apiBindEmail = async (params:any) => await apiPost('/api/users/my/bind_email', params)

// 绑定地址
export const apiBindAddress = async (params:any) => await apiPost('/api/users/my/bind_address', params)