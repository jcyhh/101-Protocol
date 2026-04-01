import { apiUserInfo } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {

    const userInfo = ref()

    const loadUserInfo = async () => userInfo.value = await apiUserInfo()

    return {
        userInfo,
        loadUserInfo
    }
})