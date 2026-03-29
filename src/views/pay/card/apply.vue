<template>
    <CusNav :title="$t('申请实体卡')">
        <div class="tr size26" @click="routerPush('/physical/record')">申请记录</div>
    </CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="size28 bold6">收件人姓名</div>
        <div class="cell card mb20 flex jb ac mt20">
            <input type="text" placeholder="请输入收件人姓名" class="flex1 size28">
        </div>

        <div class="size28 bold6 mt30">收件地址</div>
        <div class="cell card mb20 flex jb ac mt20">
            <input type="text" placeholder="请输入收件地址" class="flex1 size28">
        </div>

        <div class="size28 bold6 mt30">收件电话</div>
        <div class="cell card mb20 flex jb ac mt20">
            <input type="text" placeholder="请输入收件电话" class="flex1 size28">
        </div>

    </div>

    <div class="safeArea"></div>
    <div class="gap130"></div>
    <div class="bottom">
        <div class="mainBtn size28 bold6 flex jc ac">确认</div>
        <div class="safeArea"></div>
    </div>

    <VanPopup v-model:show="show" style="background: transparent;" overlay-class="cusMask" teleport="#app">
        <div class="popupCenter mainCard">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('申请实体卡') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="size26 mt50">支付 199$ 申请</div>

                <div class="mt50 flex ac">
                    <div class="mainButton btn flex jc ac">取消</div>
                    <div class="mainBtn btn ml20 flex jc ac">确认</div>
                </div>
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { routerPush } from '@/router';
import { ref } from 'vue';

const show = ref(false)
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
.btn{
    flex: 1;
    height: 68px;
    border-radius: 34px;
}
</style>