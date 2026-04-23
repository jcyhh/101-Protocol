import type { TypeLang, TypeRouterMode } from "./type";

/**
 * 邀请链接的【邀请码】后是否保存到本地
 * 不保存：每次使用邀请链接才可邀请注册
 * 保存：每次使用邀请链接刷新本地存储，否则一直使用本地存储邀请码
 */
export const appSaveInviteCodeEnable = true;

/**
 * 路由模式
 * history - 打包链接【不带】哈希符#，需后端配置重定向
 * hash    - 打包链接【携带】哈希符#，无需配置重定向
 */
export const appRouterMode: TypeRouterMode = 'history'

export const appPublicPath = '/h5/'; // 部署目录

export const appDefaultLang:TypeLang = 'en'; // 默认语言

export const appTimeZone: string = 'Asia/Shanghai'; // 计算距离接口某个日期的时间时，使用的时区

export const appWebviewEnable = false; // 是否同时支持 Dapp && Webview

export const appIsWebview = typeof window !== 'undefined' && (window as any).__FROM_WEBVIEW__ === true; // 当前是否是 webview 环境

export const appSaveAccountEnable = true; // 账号登录时，是否缓存登录账号，用于登录失效时自动填入