<template>
    <div class="pageBg"></div>
    <img src="@/assets/staking/1.png" class="bg animate__animated animate__slideInDown">
    <img src="@/assets/staking/2.png" class="pic2">
    <div class="gap200"></div>
    <div class="gap200"></div>
    <div class="gap40"></div>

    <div class="content pl30 pr30">
        <div class="card">
            <div class="flex jc">
                <div class="linearTxt size60 bold poppins">
                    <span v-init="1000"></span>
                    <span class="ml10">{{ assetUSDT }}</span>
                </div>
            </div>
            <div class="flex jc ac">
                <div class="line"></div>
                <div class="size24 opc5 ml20 mr20">{{ $t('节点金额') }}</div>
                <div class="line lineRight"></div>
            </div>
            <div class="flex jb ac mt40">
                <div class="size26 opc5">钱包余额</div>
                <div class="flex ac size26">
                    <div v-init="1000"></div>
                    <div class="ml10">{{ assetUSDT }}</div>
                    <img src="@/assets/staking/3.png" class="img30 ml10">
                </div>
            </div>
            <!-- <div class="mainBtn size32 bold6 mt50 flex jc ac">确认入金</div> -->
            <div class="countdownBtn flex jc ac mt50">
                <van-count-down :time="96400 * 1000">
                    <template #default="timeData">
                        <div class="flex ac red size26 bold5">
                            <span>{{ padZero(timeData.days) }}</span>
                            <span class="ml5 mr5">:</span>
                            <span>{{ padZero(timeData.hours) }}</span>
                            <span class="ml5 mr5">:</span>
                            <span>{{ padZero(timeData.minutes) }}</span>
                            <span class="ml5 mr5">:</span>
                            <span>{{ padZero(timeData.seconds) }}</span>
                        </div>
                    </template>
                </van-count-down>
                <div class="size26 bold ml10 red">后再下单</div>
            </div>
        </div>
    </div>

    <div class="gap60"></div>
    <Title :title="$t('预约下单')"></Title>

    <div class="content pl30 pr30 mt30">
        <div class="box">
            <div class="flex jb ac">
                <div class="size24">预约金额</div>
                <div class="flex ac size24 opc5">
                    <div v-init="1000"></div>
                    <div class="ml10">{{ assetUSDT }}</div>
                    <img src="@/assets/staking/3.png" class="img30 ml10">
                </div>
            </div>
            <div class="flex jb ac mt32">
                <div class="flex ac asset">
                    <img src="@/assets/common/usdt.png" class="img40 mr10">
                    <div class="size28 bold poppins">{{ assetUSDT }}</div>
                </div>
                <input type="number" placeholder="0.00" class="flex1 tr size40 bold">
            </div>
            <div class="line mt30"></div>
            <div class="btn mt40 flex ac jc size28 bold">预约</div>
        </div>
    </div>

    <div class="gap30"></div>
</template>

<script setup lang="ts">
import Title from '@/components/Title/index.vue'
import { assetUSDT } from '@/config/name';
import { padZero } from '@/utils';

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
.pic2{
    width: 442px;
    height: 442px;
    position: absolute;
    top: 120px;
    left: 154px;
    z-index: 1;
    animation: picFloat 3.8s ease-in-out infinite;
}

@keyframes picFloat {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-16px);
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