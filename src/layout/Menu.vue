<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="right" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="menu">

                <div class="flex jb ac">
                    <div class="flex ac">
                        <img src="@/assets/common/logo.png" class="logo">
                        <div class="size28 ml10 poppins">{{ appName }}</div>
                    </div>
                    <div class="img50 flex je ac" @click="show=false">
                        <img src="@/assets/common/close.png" class="img25">
                    </div>
                </div>

                <div class="size28 bold6 mt80">{{ $t('邀请链接') }}</div>

                <div class="box mt30 flex ac" v-copy="inviteLink">
                    <div class="flex1 size24 poppins opc5 link">{{ inviteLink }}</div>
                    <div class="line mr20"></div>
                    <img src="@/assets/common/copy.png" class="img32">
                </div>

                <div class="size28 bold6 mt80 mb30">{{ $t('服务') }}</div>

                <div class="pt30 pb30 flex jb ac" v-for="(item,index) in menus" :key="index" @click="jump(item.path)">
                    <div class="flex ac">
                        <img :src="currentRoute==item.path ? item.iconAct : item.icon" class="img40 mr10">
                        <div :class="currentRoute==item.path ? 'main' : ''">{{ item.name }}</div>
                    </div>
                    <van-icon name="arrow" color="#FFFFFF80" />
                </div>

            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import { appName } from '@/config/name';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import homeHlIcon from '@/assets/tabbar/homeHL.png'
import homeIcon from '@/assets/tabbar/home.png'
import teamHlIcon from '@/assets/tabbar/teamHL.png'
import teamIcon from '@/assets/tabbar/team.png'
import stakingHlIcon from '@/assets/tabbar/stakingHL.png'
import stakingIcon from '@/assets/tabbar/staking.png'
import assetHlIcon from '@/assets/tabbar/assetHL.png'
import assetIcon from '@/assets/tabbar/asset.png'
import stakingOrderHlIcon from '@/assets/tabbar/stakingOrderHL.png'
import stakingOrderIcon from '@/assets/tabbar/stakingOrder.png'
import subscribeOrderHlIcon from '@/assets/tabbar/subscribeHL.png'
import subscribeOrderIcon from '@/assets/tabbar/subscribe.png'
import { t } from '@/locale';
import { routerHome } from '@/config/router'
import { routerReplace } from '@/router';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { inviteLink } = storeToRefs(userStore)

const show = defineModel<boolean>('show', { default: false })

const route = useRoute()
const currentRoute = computed(()=> route.fullPath)

const menus = computed(()=>([
    {
        name: `${t('首页')}「${t('认购')}」`,
        icon: homeIcon,
        iconAct: homeHlIcon,
        path: routerHome
    },
    {
        name: t('入金'),
        icon: stakingIcon,
        iconAct: stakingHlIcon,
        path: '/staking/index'
    },
    {
        name: t('资产'),
        icon: assetIcon,
        iconAct: assetHlIcon,
        path: '/asset/index'
    },
    {
        name: t('社区'),
        icon: teamIcon,
        iconAct: teamHlIcon,
        path: '/team/index'
    },
    {
        name: t('入金订单'),
        icon: stakingOrderIcon,
        iconAct: stakingOrderHlIcon,
        path: '/order/staking'
    },
    {
        name: t('预约订单'),
        icon: subscribeOrderIcon,
        iconAct: subscribeOrderHlIcon,
        path: '/order/subscribe'
    }
]))

const jump = (path:string) => {
    show.value = false
    if(currentRoute.value != path)routerReplace(path)
}

onMounted(()=>{
    userStore.updateUserInfo()
})
</script>

<style lang="scss" scoped>
.menu{
    width: 604px;
    height: calc(100vh - 4px);
    height: calc(100vh - 4px);
    background: linear-gradient(to right, #341D00, #0F0000);
    padding: 50px 40px;
    border-radius: 40px 0 0 40px;
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
    &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 40px 0 0 40px;
        background: linear-gradient(to right, #FECD67, #FECD6700);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        padding: 1px;
    }
    .logo{
        width: 64px;
        height: 50px;
    }
    .box{
        height: 72px;
        border-radius: 10px;
        border: 2px solid #FFFFFF33;
        background-color: #FFFFFF1A;
        padding: 0 20px;
        .line{
            width: 1px;
            height: 32px;
            background-color: #FFFFFF33;
        }
        .link{
            overflow: hidden;
        }
    }
}
</style>