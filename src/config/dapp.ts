import { parseEther, parseGwei, defineChain } from 'viem'

export const dappApproveMaxAmount: string = '115792089237316195423570985008687907853269984665640564039457584007913129639935' // 授权额度

export const dappGasLimitMultiplier = 130n // gas limit 倍数 (130n = 1.3倍)

export const dappDefaultGasPrice = parseGwei('0.05') // GWEI

export const dappMinGasBalance = parseEther('0.0004') // 交易前最低 ETH 余额

export const dappApproveMaxAmountEnable: boolean = true; // 授权额度不足时，是否直接授权最大额度，否则按需授权

export const dappDevCheckChainEnable: boolean = false; // 开发环境是否检查网络

export const dappDevEstimateGasEnable: boolean = false; // 开发环境是否估算Gas

// 自定义测试网络配置
export const dappLocalTestnet = defineChain({
    id: 31337,
    name: 'Local Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'GO',
        symbol: 'GO',
    },
    rpcUrls: {
        default: { http: [import.meta.env.VITE_RPC_URL] }
    }
})