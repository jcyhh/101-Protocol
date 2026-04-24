import { apiUserInfo } from '@/api/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {

    const userInfo = ref()

    const inviteLink = computed(()=>`${window.origin}/ref/${userInfo.value?.referral_code}`)

    const updateUserInfo = async () => {
        const res:any = await apiUserInfo()
        userInfo.value = res
    }

    return {
        userInfo,
        inviteLink,
        updateUserInfo
    }
})