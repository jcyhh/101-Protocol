<template>
    <VanPopup v-model:show="show" style="background: transparent;" overlay-class="cusMask" teleport="#app">
        <div class="popupCenter mainCard">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size36 bold6">提取</div>
                    <van-icon size="25" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="mt34 popcell flex jb ac">
                    <div class="size28 opc5">提取资产</div>
                    <div class="flex ac">
                        <img src="@/assets/common/usdt.png" class="img40 mr10">
                        <div class="size28">{{ assetUSDT }}</div>
                    </div>
                </div>

                <div class="flex jb ac mt30">
                    <div class="size28">提取金额</div>
                    <div class="size24">
                        <span class="opc5">可提取</span>
                        <span class="main ml10" v-init="1000"></span>
                        <span class="main ml10">{{ assetUSDT }}</span>
                    </div>
                </div>

                <div class="mt20 popcell flex jb ac">
                    <input type="number" placeholder="请输入提取金额" class="flex1 size28">
                    <img src="@/assets/common/usdt.png" class="img40">
                </div>

                <div class="mt40 flex ac bold5">
                    <div class="leftBtn flex1 flex jc ac main" @click="show=false">{{ $t('取消') }}</div>
                    <div class="rightBtn ml20 flex1 flex jc ac" @click="submit">{{ $t('确认') }}</div>
                </div>
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import { assetUSDT } from '@/config/name';

const show = defineModel<boolean>('show', { default: true })

const submit = async () => {

}
</script>

<style lang="scss" scoped>
.popcell{
    background-color: #FFFFFF0F;
    border: 1px solid #F6EEFF33;
    height: 88px;
    border-radius: 44px;
    padding: 0 30px;
    border-radius: 20px;
}
.leftBtn{
    height: 80px;
    border-radius: 20px;
    background-color: #FF78101A;
    border: 1px solid #FF7810;
}
.rightBtn{
    height: 80px;
    border-radius: 20px;
    background-color: $main-color;
}
</style>