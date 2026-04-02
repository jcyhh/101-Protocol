import { apiGet, apiPost } from "@/utils/request";

export const apiCommentDetail = async (params:any) => await apiGet(`/api/forum/posts/${params}`)

export const apiCommentCreate = async (params:any) => await apiPost('/api/forum/posts', params)

export const apiCommentDelete = async (params:any) => await apiGet(`/api/forum/posts/${params}/delete`)

export const apiCommentJudge = async (params:any) => await apiPost('/api/forum/comments', params)