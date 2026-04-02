<template>
    <CusNav :title="$t('绑定地址')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell flex ac">
            <input type="email" v-model="address" :placeholder="$t('钱包地址')" class="flex1 size28">
        </div>

        <div class="mainBtn mt60 flex jc ac size28 bold5" @click="submit">{{ $t('确认') }}</div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { ref } from 'vue';
import { message } from '@/utils/message';
import { t } from '@/locale';
import { apiBindAddress } from '@/api/login';
import { routerGo, } from '@/router';

const address = ref()

const submit = async () => {
    if(!address.value)return message(t('请输入钱包地址'))

    await apiBindAddress({
        address: address.value
    })

    message(t('绑定成功'), 'success')
    setTimeout(() => {
        routerGo()
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