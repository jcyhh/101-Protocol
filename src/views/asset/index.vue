<template>
    <div class="pageBg"></div>
    <img src="@/assets/staking/1.png" class="bg animate__animated animate__slideInDown">
    <div class="gap140"></div>

    <div class="content pl30 pr30">
        <div class="card">
            <div class="flex jb ac">
                <div>
                    <div class="size24 mb10">资产预览({{ assetUSDT }})</div>
                    <div class="linearTxt size48 bold poppins">
                        <span v-init="1000"></span>
                    </div>
                    <div class="flex mt10">
                        <div class="btn flex jc ac size26 bold6">提现</div>
                    </div>
                </div>
                <img src="@/assets/staking/4.png" class="pic4">
            </div>
            <div class="cell flex jb ac mt50">
                <div class="size24 opc5">累计推荐收益</div>
                <div class="size26">
                    <span v-init="1000"></span>
                    <span class="ml10">{{ assetUSDT }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="content pl30 pr30 mt40">
        <div class="size32 bold5 mb30">资产明显</div>
        <van-list v-bind="listProps">
            <div class="cell mb20" v-for="(item,index) in 10" :key="index">
                <div class="flex jb ac">
                    <div>备注</div>
                    <div class="size28 bold5 green">
                        <span>+</span>
                        <span class="ml5 mr5" v-init="1000"></span>
                        <span>{{ assetUSDT }}</span>
                    </div>
                </div>
                <div class="flex jb ac mt20">
                    <div class="opc5 size24">2026</div>
                </div>
            </div>
            <CusEmpty v-if="list?.length==0"></CusEmpty>
        </van-list>
    </div>

    <div class="gap30"></div>

    <Withdraw></Withdraw>
</template>

<script setup lang="ts">
import Title from '@/components/Title/index.vue'
import { assetUSDT } from '@/config/name';
import { padZero } from '@/utils';
import { useLoadList } from '@/hooks/useLoadList';
import CusEmpty from '@/components/CusEmpty/index.vue'
import { onMounted } from 'vue';
import Withdraw from './withdraw/Popup.vue'

const { list, props: listProps, loadList } = useLoadList('/api/users/my/referrals', 'referrals')

onMounted(()=>{
    loadList()
})
</script>

<style lang="scss" scoped>
.bg{
    width: 100%;
    height: 740px;
    transform-origin: top center;
    position: fixed;
    top: 0;
    left: 0;
    animation: bgBreath 3.6s ease-in-out infinite;
}
.pic4{
    width: 194px;
    height: 164px;
    animation: picFloat 3.8s ease-in-out infinite;
}

@keyframes picFloat {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes bgBreath {
    0% {
        opacity: 0.82;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.82;
    }
}

.content{
    position: relative;
    z-index: 2;
}
.card{
    padding: 60px 30px;
    border-radius: 40px;
    position: relative;
    background-color: #FFFFFF1A;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid transparent;
    z-index: 1;
    &::after{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 40px;
        background: linear-gradient(#99480A, #FFDA91);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        padding: 1px;
    }
    .line{
        width: 96px;
        height: 2px;
        border-radius: 1px;
        background: linear-gradient(to right, #FFFFFF00, #FFFFFF80);
    }
    .lineRight{
        background: linear-gradient(to right, #FFFFFF80, #FFFFFF00);
    }
    .countdownBtn{
        height: 80px;
        border-radius: 40px;
        background-color: #FF44441A;
    }
    .btn{
        height: 56px;
        border-radius: 28px;
        background-color: $main-color;
        width: 156px;
    }
}
.box{
    background-color: #FFFFFF1A;
    border: 1px solid #FFFFFF4D;
    border-radius: 30px;
    padding: 40px 30px;
    .asset{
        height: 68px;
        border-radius: 32px;
        padding: 0 20px;
        background-color: #FFFFFF1A;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #FFFFFF33;
    }
    .btn{
        background-color: #FF78101A;
        border: 1px solid $main-color;
        border-radius: 20px;
        height: 80px;
        color: $main-color;
    }
}
</style>