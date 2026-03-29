import { apiGet, apiPost } from "@/utils/request";

export const apiCardholder = async (params:any) => await apiGet('/api/cardholder', params)

export const apiCardholderAdd = async (params:any) => await apiPost('/api/cardholder', params)

export const apiCardholderInfo = async (params:any) => await apiGet(`/api/cardholder/${params}`)

export const apiCardholderUpdate = async (params:any) => await apiPost('/api/cardholder/update', params)