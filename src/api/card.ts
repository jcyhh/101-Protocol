import { apiGet, apiPost } from "@/utils/request";

export const apiOpenVirtualCard = (params:any) => apiPost('/api/card/virtual/create', params)

export const apiUpgradeVirtualCard = (params:any) => apiPost('/api/card/difference-level', params)

export const apiGetCardList = (params:any) => apiGet('/api/card/list', params)

export const apiRefreshCard = (params:any) => apiPost('/api/card/refresh', params)

export const apiRecharge = (params:any) => apiPost('/api/card/recharge', params)

export const apiTransfer = (params:any) => apiPost('/api/card/transfer', params)