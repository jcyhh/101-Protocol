import { apiGet, apiPost } from "@/utils/request";

export const apiToken101Congfig = async () => await apiGet('/api/token101/config')

export const apiToken101Create = async () => await apiPost('/api/token101')

export const apiReservations = async (params:any) => await apiPost('/api/reservations', params)

export const apiWithdraw = async (params:any) => await apiPost('/api/withdraws', params)