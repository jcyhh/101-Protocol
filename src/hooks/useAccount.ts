/**
 * 账号登录账号切换功能
 */

import type { LoginAccountItem } from "@/config/interface"
import { useStorage } from "@/config/storage"

export function useAccount () {

    const { setAccountList, getAccountList, delAccountList } = useStorage()

    // 存
    const setList = (list: LoginAccountItem[]): void => setAccountList(JSON.stringify(list || []))

    // 取
    const getList = (): LoginAccountItem[] => {
        const data = JSON.parse(getAccountList() || '[]')
        return Array.isArray(data) ? data : []
    }

    // 删全部
    const delList = (): void => delAccountList()

    // 更新 || 添加
    const updateList = (data: LoginAccountItem): void => {
        const list = getList()
        const index = list.findIndex(item => item.account === data.account)
    
        if (index > -1) list[index] = data
        else list.unshift(data)
    
        setList(list)
    }

    // 删除单个
    const delSingleAccount = (account: string): void => setList(getList().filter(item => item.account !== account))

    return {
        getList,
        delList,
        updateList,
        delSingleAccount
    }
}