import { useStorage } from '@/config/storage'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDappStore = defineStore('dapp', () => {

    const { setAddress } = useStorage()

    const providerStatus = ref(0) // 0异步等待钱包对象注入中 1有MetaMask环境 2无MetaMask环境

    const walletAddress = ref('') // 钱包地址

    const dappLoading = ref(false) // 合约等待中...

    // 同步当前地址到本地缓存
    watch(walletAddress, (address:string) => address && setAddress(address))

    return {
        providerStatus,
        walletAddress,
        dappLoading
    }
})