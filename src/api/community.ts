import { apiGet, apiPost } from "@/utils/request";

export const apiMyCommunity = async () => await apiGet('/api/community/info')

export const apiCommunityRank = async (params:any) => await apiGet('/api/community/rank', params)

export const apiCommunityCreate = async (params:any) => await apiPost('/api/community/create', params)

export const apiCommunityApply = async (params:any) => await apiPost('/api/community/apply', params)

export const apiCommunityAudit = async (params:any) => await apiPost('/api/community/audit', params)

export const apiCommunityDistory = async () => await apiPost(`/api/community/dissolve`)

export const apiCommunityQuit = async () => await apiPost('/api/community/quit')

export const apiCommunityKick = async (params:any) => await apiPost('/api/community/kick', params)