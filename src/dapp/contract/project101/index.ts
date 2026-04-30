import { type Abi } from "viem";
import { useContract } from "../useContract";
import abi from './abi.json'

export function useProject101() {

    const contract = useContract(import.meta.env.VITE_PROJECT101, abi as Abi)

    const writeOrder = async (...args: any[]) => await contract.write('order', args)
    
    const writeWithdraw = async (...args: any[]) => await contract.write('withdraw', args)
    
    const writeDepositHostedOrder = async (...args: any[]) => await contract.write('depositHostedOrder', args, { value: BigInt(args[2]) })

    return {
        writeOrder,
        writeWithdraw,
        writeDepositHostedOrder
    }
}