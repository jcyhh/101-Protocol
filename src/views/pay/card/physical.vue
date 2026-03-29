<template>
    <CusNav :title="$t('实体卡')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="mainCard rel">
            <div class="flex jb ac">
                <div class="size34 bold5 main">{{ appName }} {{ $t('实体卡') }}</div>
                <img src="@/assets/pay/2.png" class="img40">
            </div>
            
            <div class="cardSwiperWrap">
                <swiper
                    class="cardSwiper"
                    :slides-per-view="'auto'"
                    :space-between="space"
                    :centered-slides="true"
                >
                    <swiper-slide v-for="item in 5" :key="item" class="cardSlide">
                        <div class="cardBlock">
                            <img src="@/assets/card/physicalCard.png" class="cardImg">
                            <div class="tag">ACTIVE</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="gap200"></div>
            <div class="gap200"></div>

            <div class="flex jb ac mt30">
                <div class="flex ac">
                    <div class="size32 mr12">实体卡</div>
                    <img src="@/assets/login/eyeOpen.png" class="img30 animate__animated animate__zoomIn ani5" @click="show=false" v-if="show">
                    <img src="@/assets/login/eyeClose.png" class="img30" @click="show=true" v-else>
                </div>
                <div class="flex">
                    <div class="price bold">
                        <span class="size48" v-init="1000"></span>
                        <span class="size28 ml10">{{ assetUSDT }}</span>
                    </div>
                </div>
            </div>

            <div class="flex jb ac mt20">
                <div class="flex ac">
                    <div class="size30 bold6 main">3234 **** **** 7688</div>
                    <img src="@/assets/card/copy.png" class="img32 ml10">
                </div>
                <div class="size24 opc5">卡片金额</div>
            </div>

            <div class="mt20 flex ac">
                <div class="size20 opc5">EXP DATE</div>
                <div class="size28 ml10">****</div>
                <div class="size20 opc5 ml30">CVV NUM</div>
                <div class="size28 ml10">****</div>
            </div>

            <div class="flex ac mt40 size28 bold6 main">
                <div class="flex1 mainButton btn flex jc ac" @click="rechargeRef?.open()">
                    <img src="@/assets/user/3.png" class="img40 mr10">
                    <div>充值</div>
                </div>
                <div class="flex1 mainButton btn flex jc ac ml15 mr15" @click="transferRef?.open()">
                    <img src="@/assets/pay/3.png" class="img40 mr10">
                    <div>转账</div>
                </div>
                <div class="flex1 mainButton btn flex jc ac" @click="passwordRef?.open()">
                    <img src="@/assets/pay/4.png" class="img40 mr10">
                    <div>密码</div>
                </div>
            </div>
            <div class="gap10"></div>
        </div>

        <div class="flex mt40">
            <div class="card flex1 flex col ac" @click="routerPush('/physical/bind')">
                <img src="@/assets/pay/5.png" class="img46">
                <div class="size28 main mt8">绑定实体卡</div>
            </div>
            <div class="card flex1 flex col ac ml20" @click="routerPush('/physical/apply')">
                <img src="@/assets/pay/6.png" class="img46">
                <div class="size28 main mt8">申请实体卡</div>
            </div>
        </div>

        <div class="size34 main bold6 mt40 mb24">流水明细</div>

        <div class="cell mb12" v-for="(item,index) in 5">
            <div class="gap10"></div>
            <div class="flex jb ac">
                <div class="size28">备注</div>
                <div class="size28 bold green">
                    <span>-</span>
                    <span v-init="1000"></span>
                    <span>{{ assetUSDT }}</span>
                </div>
            </div>
            <div class="size24 opc5 mt20">2025.26.12 12:58:21</div>
            <div class="gap10"></div>
        </div>

    </div>

    <Recharge ref="rechargeRef"></Recharge>
    <Transfer ref="transferRef"></Transfer>
    <Password ref="passwordRef"></Password>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { appName, assetUSDT } from '@/config';
import { getAdaptPx } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/vue';
// @ts-ignore
import 'swiper/css';
import { ref } from 'vue';
import { routerPush } from '@/router';
import Recharge from '../components/Recharge.vue';
import Transfer from '../components/Transfer.vue';
import Password from '../components/Password.vue';

const space = getAdaptPx(30)

const show = ref(false)

const rechargeRef = ref()
const transferRef = ref()
const passwordRef = ref()
</script>

<style lang="scss" scoped>
.cardSwiperWrap{
    width: 100vw;
    overflow: hidden;
    position: absolute;
    top: 78px;
    left: -30px;
    z-index: 1;
}
.cardSwiper{
    width: 100vw;
    overflow: visible;
}
.cardSlide{
    width: 590px;
}
.cardBlock{
    width: 590px;
    height: 440px;
    padding-top: 40px;
    position: relative;
    .cardImg{
        width: 590px;
        height: 354px;
    }
    .tag{
        height: 34px;
        border-radius: 17px;
        padding: 0 10px;
        font-size: 20px;
        line-height: 34px;
        font-weight: bold;
        background-color: $green;
        position: absolute;
        top: 65px;
        right: 30px;
        z-index: 1;
    }
}
.price{
    display: inline-block;
    background: linear-gradient(281.88deg, #FFF1BF 24.66%, #FFF1BF 37.09%, #FFCD48 39.28%, #FFF1BF 59.99%, #FFCD48 64.38%, #FFF1BF 75.34%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
.btn{
    height: 88px;
    border-radius: 44px;
}
.card{
    border-radius: 30px;
    padding: 30px;
    background: linear-gradient(#FFE5A51F, #FFE5A500);
    border: 1px solid transparent;
    border-bottom: none;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 30px;
        background: linear-gradient(#8F8F8F, #8F8F8F00);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        padding: 1px;
    }
}
</style>