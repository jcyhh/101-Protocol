import { apiGet, apiPost } from "@/utils/request";

export const getNodeConfig = async () => await apiGet('/api/node/config')

export const buyNode = async () => await apiPost('/api/node')