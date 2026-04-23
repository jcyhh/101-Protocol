/**
 * 本地存储
 */

import { appDefaultLang } from "."
import type { TypeLang } from "./type"

const storageAddress: string = 'WELLET_ADDRESS' // 钱包地址

const storageRef: string = 'REF' // 邀请码

const storageToken: string = 'TOKEN' // Token

const storageLang: string = 'LANG' // 多语言

const storageAccount: string = 'ACCOUNT' // 登录账户

const storageAccountList: string = 'ACCOUNT_LIST' // 已登录账户列表

// 存
const setStorage = (key:string, data: string): void => localStorage.setItem(key, data)

// 取
const getStorage = (key:string): string | null => localStorage.getItem(key)

// 删
const delStorage = (key:string): void => localStorage.removeItem(key)

export function useStorage () {
    // 多语言
    const setLang = (lang:TypeLang): void => setStorage(storageLang, lang)
    const getLang = (): TypeLang => (getStorage(storageLang) as TypeLang) || appDefaultLang
    const delLang = (): void => delStorage(storageLang)

    // 钱包地址
    const setAddress = (address:string): void => setStorage(storageAddress, address)
    const getAddress = (): string | null => getStorage(storageAddress)
    const delAddress = (): void => delStorage(storageAddress)

    // 邀请码
    const setRef = (code:string): void => setStorage(storageRef, code)
    const getRef = (): string | null => getStorage(storageRef)
    const delRef = (): void => delStorage(storageRef)

    // Token
    const setToken = (token:string): void => setStorage(storageToken, token)
    const getToken = (): string | null => getStorage(storageToken)
    const delToken = (): void => delStorage(storageToken)

    // 账号
    const setAccount = (account:string): void => setStorage(storageAccount, account)
    const getAccount = (): string | null => getStorage(storageAccount)
    const delAccount = (): void => delStorage(storageAccount)

    // 已登录账号列表
    const setAccountList = (accounts:string): void => setStorage(storageAccountList, accounts)
    const getAccountList = (): string | null => getStorage(storageAccountList)
    const delAccountList = (): void => delStorage(storageAccountList)

    return {
        setRef, getRef, delRef,
        setLang, getLang, delLang,
        setToken, getToken, delToken,
        setAccount, getAccount, delAccount,
        setAddress, getAddress, delAddress,
        setAccountList, getAccountList, delAccountList
    }
}