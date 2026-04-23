<template>
    <div class="start flex col jc ac">
        <img src="@/assets/start/1.png" class="pic1 animate__animated animate__zoomIn delay3" />
        <img src="@/assets/start/2.png" class="pic2 animate__animated animate__fadeIn">
    </div>
</template>

<script setup lang="ts">
import { apiDappLogin } from '@/api/login';
import { useStorage } from '@/config/storage';
import { getSign } from '@/dapp';
import { routerReplace } from '@/router';
import { useDappStore } from '@/store';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { appWebviewEnable, appIsWebview } from '@/config'
import { routerLogin, routerHome } from '@/config/router'

const { getRef, getToken, setRef, setToken } = useStorage()

const dappStore = useDappStore()
const { providerStatus, walletAddress } = storeToRefs(dappStore)

const { params } = useRoute()
if(params?.ref)setRef(params?.ref as any)

const token = getToken()

if(appWebviewEnable && appIsWebview){
    // webview环境
    setTimeout(() => {
        if(params?.ref){
            routerReplace('/register')
        }else{
            if(token)routerReplace(routerHome)
            else routerReplace(routerLogin)
        }
    }, 1200);
}

// 登录
const dappLoginIn = async () => {
    const signInfo = await getSign('Login')
    const res:any = await apiDappLogin({
        ref: getRef(),
        address: walletAddress.value,
        ...signInfo
    })
    setToken(res.token)
    routerReplace(routerHome)
}

watch(providerStatus, status => {
    if(appWebviewEnable && appIsWebview)return;
    if(status==1){
        // 有钱包环境
        setTimeout(() => {
            token ? routerReplace(routerHome) : dappLoginIn()
        }, 1200)
    }else if(status==2){
        // 无钱包环境
        setTimeout(() => {
            if(token)routerReplace(routerHome)
            else routerReplace(routerLogin)
        }, 1200);
    }
}, {immediate: true})
</script>

<style lang="scss" scoped>
.start{
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background: linear-gradient(#000000, #301500, #000000);
}
.pic1{
    width: 350px;
    height: 230px;
}
.pic2{
    width: 100vw;
    height: 306px;
}
</style>