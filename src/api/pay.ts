import { apiGet, apiPost } from "@/utils/request";

export const apiCurrencys = async () => await apiGet('/api/global_pay/remittance-config')

export const apiFields = async (params:any) => await apiGet('/api/global_pay/remittance-fields', params)

export const apiGlobalPay = async (params:any) => await apiPost('/api/global_pay/remittance', params)