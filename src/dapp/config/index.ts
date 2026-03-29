import { parseEther, parseGwei } from 'viem'

export const loginPath = '/' // 登录页面

export const homePath = '/home' // 首页

export const approveAmount: string = '115792089237316195423570985008687907853269984665640564039457584007913129639935' // 授权额度

export const gasLimitMultiplier = 130n // gas limit 倍数 (130n = 1.3倍)

export const defaultGasPrice = parseGwei('0.05') // GWEI

export const minGasBalance = parseEther('0.0004') // 交易前最低 ETH 余额

export type SignMessage = 'Login' | 'Transfer' | 'Withdraw' | 'Order' | 'Node' | 'Pledge' | 'Claim' | 'Saving' | 'TokenOrder' | 'ClaimQuota'; // 签名前缀

const addressKey: string = 'WELLET_ADDRESS' // 存储钱包地址的KEY

// 存储钱包地址
export const setAddress = (data: string): void => localStorage.setItem(addressKey, data)
export const getAddress = (): string => localStorage.getItem(addressKey)||''
export const delAddress = (): void => localStorage.removeItem(addressKey)