import { getWalletClient, getConnectedAddress } from '@/dapp'
import type { Abi, Address } from 'viem'
import { useDappStore } from '@/store'
import { dappDefaultGasPrice, dappGasLimitMultiplier, dappDevEstimateGasEnable } from '@/config/dapp'
import { message } from '@/utils/message'
import { t } from '@/locale'

export const useContract = <T extends Abi>(address: Address, abi: T) => {
    // 读合约
    const read = async (functionName: string, args: any[] = []) => {
        const walletClient = getWalletClient()
        return walletClient.readContract({
            address,
            abi,
            functionName,
            args
        })
    }

    // 写合约
    interface WriteOptions {
        gas?: bigint        // 自定义 gas limit
        gasPrice?: bigint   // 自定义 gas price
        value?: bigint      // 发送的 ETH 数量
    }
    const write = async (functionName: string, args: any[] = [], options?: WriteOptions) => {
        const dappStore = useDappStore()
        dappStore.dappLoading = true

        try {
            const walletClient = getWalletClient()
            const account = await getConnectedAddress()
            
            const hash = await walletClient.writeContract({
                address,
                abi,
                functionName,
                args,
                account,
                ...options  // gas, value 等
            })
            
            // 等待交易确认
            const receipt = await walletClient.waitForTransactionReceipt({ hash })
            
            // 判断交易状态: 'success' | 'reverted'
            if (receipt.status === 'reverted') {
                message(t('操作失败'), 'fail')
                throw new Error('操作失败')
            }
            message(t('操作成功'), 'success')
            return receipt
        } catch (error: any) {
            // 用户拒绝交易
            message(t('操作失败'), 'fail')
            throw error
        } finally {
            dappStore.dappLoading = false
        }
    }

    // 估算 gas
    const estimateGas = async (functionName: string, args: any[] = []) => {
        const walletClient = getWalletClient()
        const account = await getConnectedAddress()
        return walletClient.estimateContractGas({
            address,
            abi,
            functionName,
            args,
            account
        })
    }

    // 写合约（自动估算 gas 并设置 gas limit / gas price）
    const writeWithGas = async (functionName: string, args: any[] = [], options?: Omit<WriteOptions, 'gas'>) => {

        // 开发环境是否估算 gas
        if (!import.meta.env.PROD && !dappDevEstimateGasEnable) {
            return await write(functionName, args, options)
        }
        
        const dappStore = useDappStore()
        dappStore.dappLoading = true
        try {
            const estimated = await estimateGas(functionName, args)
            const gas = estimated * dappGasLimitMultiplier / 100n
            const gasPrice = dappDefaultGasPrice
            return await write(functionName, args, { ...options, gas, gasPrice })
        } catch (error: any) {
            // 用户拒绝交易
            message(t('操作失败'), 'fail')
            throw error
        } finally {
            dappStore.dappLoading = false
        }
    }

    return { read, write, writeWithGas, estimateGas }
}