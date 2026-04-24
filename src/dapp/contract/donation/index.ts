import { type Abi } from "viem";
import { useContract } from "../useContract";
import abi from './abi.json'

export function useDonation() {

    const contract = useContract(import.meta.env.VITE_DONATED, abi as Abi)

    const writeDonate = async (...args: any[]) => await contract.write('donate', args)

    return {
        writeDonate
    }
}