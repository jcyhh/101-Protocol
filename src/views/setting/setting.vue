<template>
    <CusNav :title="$t('设置')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30">
        
        <div class="cell card flex jb ac" @click="routerPush('/edit')">
            <div class="size28">{{ $t('修改密码') }}</div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell card flex jb ac mt20" @click="routerPush('/editPay')">
            <div class="size28">{{ $t('修改支付密码') }}</div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell card flex jb ac mt20" @click="routerPush('/helps')">
            <div class="size28">{{ $t('帮助中心') }}</div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell card flex jb ac mt20" @click="routerPush('/account')" v-if="appWebviewEnable && appIsWebview">
            <div class="size28">{{ $t('切换账号') }}</div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="mainButton mainButtonDel flex jc ac main btn flex1 mt100" v-scale @click="show=true" v-if="appWebviewEnable && appIsWebview">{{ $t('退出登录') }}</div>

    </div>

    <CusAsk v-model:show="show" @submit="logout()">{{ $t('确定要退出登录吗？') }}</CusAsk>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { routerPush } from '@/router';
import CusAsk from '@/components/CusAsk/index.vue'
import { ref } from 'vue';
import { appWebviewEnable, appIsWebview } from '@/config'
import { logout } from '@/utils/request'

const show = ref(false)

</script>

<style lang="scss" scoped>
.card{
    padding: 30px;
}
.btn{
    height: 88px;
    border-radius: 44px;
}
</style>