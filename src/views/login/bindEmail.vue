<template>
    <CusNav :title="$t('绑定邮箱')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell flex ac">
            <input type="email" v-model="email" :placeholder="$t('邮箱')" class="flex1 size28">
        </div>

        <div class="cell flex ac mt30 mb30">
            <input type="text" v-model="emailCode" :placeholder="$t('验证码')" class="flex1 size28">
            <div class="size28 main flex0">
                <CusSms :account="email" type="5"></CusSms>
            </div>
        </div>

        <div class="mainBtn mt60 flex jc ac size28 bold5" @click="submit">{{ $t('确认') }}</div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { ref } from 'vue';
import { message } from '@/utils/message';
import { t } from '@/locale';
import { apiBindEmail } from '@/api/login';
import { routerBack } from '@/router';
import CusSms from '@/components/CusSms/index.vue'

const email = ref()
const emailCode = ref()

const submit = async () => {
    if(!email.value)return message(t('请输入邮箱'))
    if(!emailCode.value)return message(t('请输入验证码'))

    await apiBindEmail({
        email: email.value,
        email_code: emailCode.value
    })

    message(t('绑定成功'), 'success')
    setTimeout(() => {
        routerBack()
    }, 1200);
}

</script>

<style lang="scss" scoped>
.cell{
    background: #FFE5A51F;
    border: 1px solid #FFFFFF1A;
    padding: 0 30px;
    height: 88px;
    border-radius: 14px;
}
</style>