<template>
    <CusNav :title="$t('划转')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell card mb20 flex jb ac" @click="pickerShow=true">
            <div class="size28 main">币种</div>
            <div class="size28 bold6 flex ac">
                <img :src="currentPicker.icon" class="img48 mr10">
                <div class="mr10">{{ currentPicker.name }}</div>
                <div class="opc5">
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>

        <div class="mt30">
            <div class="size28 bold6">转账账号</div>
            <div class="cell card mb20 flex jb ac mt20">
                <input type="text" placeholder="请输入转账地址或邮箱" class="flex1 size28">
            </div>
        </div>

        <div class="flex jb ac mt30">
            <div class="size28 bold6">转账金额</div>
            <div class="size24">
                <span class="opc5 mr10">可用余额</span>
                <span class="main mr5" v-init="1000"></span>
                <span class="main">{{ currentPicker.name }}</span>
            </div>
        </div>
        <div class="cell card mb20 flex jb ac mt20">
            <input type="text" placeholder="请输入转账金额" class="flex1 size28">
            <div class="bold6">全部</div>
        </div>

        <div class="flex jb ac mt30">
            <div class="size28 bold6">到账金额</div>
            <div class="size24">
                <span class="opc5 mr10">手续费</span>
                <span class="main">2%</span>
            </div>
        </div>
        <div class="cell card mb20 flex jb ac mt20 bold6">
            <div>0.00</div>
            <div>{{ currentPicker.name }}</div>
        </div>

    </div>

    <div class="safeArea"></div>
    <div class="gap130"></div>
    <div class="bottom">
        <div class="mainBtn size28 bold6 flex jc ac">确认</div>
        <div class="safeArea"></div>
    </div>

    <CusPicker v-model:show="pickerShow" :list="pickerList" :title="$t('请选择')" :default-index="pickerCurrent" @change="$event=>pickerCurrent=$event">
        <template v-slot="{ item }">
            <div class="flex jc ac">
                <img :src="item.icon" class="img48 mr10">
                <div class="size28 bold5">{{ item.name }}</div>
            </div>
        </template>
    </CusPicker>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { assetAIX, assetNFTC, assetUSDT } from '@/config'
import { computed, ref } from 'vue'
import CusPicker from '@/components/CusPicker/index.vue';
import iconUsdt from '@/assets/common/usdt.png'
import iconAix from '@/assets/common/aix.png'
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';

const appStore = useAppStore()
const { isH5 } = storeToRefs(appStore)

const pickerCurrent = ref(0)
const pickerShow = ref(false)
const pickerList = [
    {name:assetUSDT, icon: iconUsdt, value:''},
    {name:assetAIX, icon: iconAix, value:''},
    {name:assetNFTC, icon: iconUsdt, value:''}
]
const currentPicker = computed(()=>pickerList[pickerCurrent.value])
</script>

<style lang="scss" scoped>
.card{
    border-radius: 20px;
    padding: 30px;
    &::before{
        border-radius: 20px;
    }
}
.bottom{
    width: 100vw;
    padding: 20px 30px 30px 30px;
    background-color: #040404;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
}
</style>