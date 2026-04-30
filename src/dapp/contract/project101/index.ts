import { type Abi } from "viem";
import { useContract } from "../useContract";
import abi from './abi.json'
import { useStorage } from "@/config/storage";

export function useProject101() {

    const { getAddress } = useStorage()

    const contract = useContract(import.meta.env.VITE_PROJECT101, abi as Abi)

    const readSellableUsdtAmount = async () => await contract.read('sellableUsdtAmount', [getAddress()])
    
    const writeOrder = async (...args: any[]) => await contract.write('order', args)
    
    const writeWithdraw = async (...args: any[]) => await contract.write('withdraw', args)
    
    const writeDepositHostedOrder = async (...args: any[]) => await contract.write('depositHostedOrder', args, { value: BigInt(args[2]) })

    return {
        readSellableUsdtAmount,
        writeOrder,
        writeWithdraw,
        writeDepositHostedOrder
    }
}