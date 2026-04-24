<template>
    <div class="head flex jb ac">
        <div class="flex ac" @click="backHome">
            <img src="@/assets/common/logo.png" class="logo">
            <div class="size28 ml10 poppins">{{ appName }}</div>
        </div>
        <div class="flex ac">
            <img src="@/assets/common/lang.png" class="img52 mr20" @click="show=true">
            <div class="connect size24 bold flex0" v-init:address="walletAddress" v-if="walletAddress"></div>
            <div class="connect size24 bold flex0" v-else>{{ $t('链接钱包') }}</div>
            <img src="@/assets/common/menu.png" class="img48 ml20" @click="showMenu=true">
        </div>
    </div>

    <div class="content">
        <RouterView></RouterView>
    </div>

    <CusLang v-model:show="show"></CusLang>

    <Menu v-model:show="showMenu"></Menu>
</template>

<script setup lang="ts">
import CusLang from '@/components/CusLang/index.vue';
import Menu from './Menu.vue';
import { ref } from 'vue';
import { appName } from '@/config/name';
import { useDappStore } from '@/store';
import { storeToRefs } from 'pinia';
import { routerHome } from '@/config/router'
import { useRoute } from 'vue-router';
import { routerReplace } from '@/router';

const dappStore = useDappStore()
const { walletAddress } = storeToRefs(dappStore)

const route = useRoute()

const show = ref(false)

const showMenu = ref(false)

const backHome = () => {
    if(route.fullPath == routerHome)return
    routerReplace(routerHome)
}
</script>

<style lang="scss" scoped>
.head {
    width: 100vw;
    height: 100px;
    background-color: #03030333;
    border-bottom: 1px solid #FFFFFF33;
    z-index: 10;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    .logo{
        width: 64px;
        height: 50px;
    }

    .connect{
        height: 52px;
        border-radius: 12px;
        padding: 0 24px;
        line-height: 52px;
        background-color: $main-color;
    }
}
.tabbar{
    width: 100vw;
    background: linear-gradient(#000000, #222222);
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid transparent;
    z-index: 10;
    border-radius: 30px 30px 0 0;
    &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 30px 30px 0 0;
        background: linear-gradient(rgba(255, 255, 255, 0.2), #FFFFFF00);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        padding: 1px;
    }
    .bar{
        height: 100px;
    }
}
.tc{
    max-width: 100%;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>