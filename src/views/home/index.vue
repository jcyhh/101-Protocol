<template>
    <div class="page">
        
        <img src="@/assets/home/1.jpg" class="pic1">

        <div class="rel pl30 pr30 pt180">

            <div class="flex jc">
                <div class="linearTxt size68 bold tc">{{ $t('全链自治・共识共治') }}</div>
            </div>
            <div class="size24 tc mt10">{{ $t('链上透明决策，去中心化自主治理，构建无许可自治生态') }}</div>
            <div class="flex jc">
                <img src="@/assets/home/2.png" class="pic2">
            </div>

            <div class="notice mt30 flex ac" @click="routerPush('/notice')">
                <img src="@/assets/home/3.png" class="img36 mr20">
                <van-swipe class="noticeSwi" :show-indicators="false" :vertical="true" :autoplay="3000">
                    <van-swipe-item v-for="item in noticeList">
                        <div class="noticeSwi line1 size24">
                            <span @click.stop="routerPush(`/notice/${item.id}`)">{{ item.title }}</span>
                        </div>
                    </van-swipe-item>
                </van-swipe>
                <img src="@/assets/home/4.png" class="img20 ml20">
            </div>

            <div class="rel mt42">
                <img src="@/assets/home/5.png" class="pic5">
                <img src="@/assets/home/6.png" class="pic6">
                <img src="@/assets/home/8.png" class="pic8">
                <div class="shine"></div>
                <div class="gap200"></div>
                <div class="card">
                    <div class="flex jc">
                        <div class="linearTxt size60 bold">
                            <span class="mr10" v-init="node_price"></span>
                            <span>{{ assetUSDT }}</span>
                        </div>
                    </div>
                    <div class="flex jc ac mt20">
                        <div class="line"></div>
                        <div class="size24 opc5 ml20 mr20">{{ $t('节点金额') }}</div>
                        <div class="line lineRight"></div>
                    </div>
                    <div class="flex jb ac mt40 size26">
                        <div class="opc5">{{ $t('钱包余额') }}</div>
                        <div class="flex ac">
                            <div v-init="balance"></div>
                            <div class="ml10">{{ assetUSDT }}</div>
                            <img src="@/assets/home/7.png" class="img30 ml20">
                        </div>
                    </div>
                    <div class="mainBtn size32 bold flex jc ac mt50" v-scale @click="showAsk=true">{{ $t('认购') }}</div>
                </div>
            </div>
        </div>

        <div class="gap80"></div>

        <Title :title="$t('关于我们')"></Title>

        <div class="pl30 pr30 mt40 size24 lh52 tc">
            {{ $t('desc') }}
        </div>

        <div class="desc pt60 pb60 flex">
            <div class="gap-30"></div>
            <div class="descitem item1 mr20">
                <div class="flex jb ac">
                    <img src="@/assets/home/11.png" class="img40">
                    <div class="size26 bold6 main">{{ $t('定位与规模') }}</div>
                </div>
                <div class="size20 opc5 mt40 lh40">{{ $t('desc1') }}</div>
            </div>
            <div class="descitem item2 mr20">
                <div class="flex jb ac">
                    <img src="@/assets/home/12.png" class="img40">
                    <div class="size26 bold6">{{ $t('资金支持') }}</div>
                </div>
                <div class="size20 opc5 mt40 lh40">{{ $t('desc2') }}</div>
            </div>
            <div class="descitem item1 mr20">
                <div class="flex jb ac">
                    <img src="@/assets/home/13.png" class="img40">
                    <div class="size26 bold6 main">{{ $t('资金实力') }}</div>
                </div>
                <div class="size20 opc5 mt40 lh40">{{ $t('desc3') }}</div>
            </div>
            <div class="gap-30"></div>
        </div>

        <div class="gap20"></div>
        <Title :title="$t('创始NFT权益')"></Title>

        <div class="pl30 pr30 mt60">
            <div class="box">
                <div class="pt6 pl6 pr6">
                    <img src="@/assets/home/14.png" class="pic14">
                </div>
                <div class="mt40 pl24 pr24 size32 bold6">{{ appName }} {{ $t('正式开启NFT股东招募计划') }}</div>
                <div class="pl30 pr30 mt30">
                    <div class="flex jb ac">
                        <div class="flex ac">
                            <div class="size28">{{ $t('第一阶段') }}</div>
                            <img src="@/assets/home/15.png" class="img28 ml10">
                        </div>
                        <div class="size24 opc5">{{ $t('限量 500 个') }}</div>
                    </div>
                    <div class="flex ac mt40">
                        <img src="@/assets/home/16.png" class="img24 mr10">
                        <div class="size26 bold5">{{ $t('权益说明') }}</div>
                    </div>
                    <div class="mt20 size22 opc5 lh40 pb30">
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('价值500000个101排单币，单边上涨；') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('享受101交易手续费8%分红；') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('享受102交易手续费1.5%分红；') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('赠送20个102万倍通证;') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('享受...') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('提前购买三天购买权;') }}</div>
                        </div>
                        <div class="flex">
                            <div class="pt15 pl10 mr20">
                                <div class="dot"></div>
                            </div>
                            <div>{{ $t('104白明单8折购买权。') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex jc mt80">
            <div class="title flex jc ac size32 bold6">{{ $t('联系我们') }}</div>
        </div>
        <div class="bot rel mt35 pt70">
            <img src="@/assets/home/10.png" class="line">
            <div class="flex ac jc">
                <img src="@/assets/home/17.png" class="img28 mr10">
                <div class="size26">Telegram</div>
            </div>
            <div class="flex jc mt20">
                <div class="link size24 main" @click="openLink('https://t.me/p101102103')">https://t.me/p101102103</div>
            </div>
            <div class="flex ac jc mt40">
                <img src="@/assets/home/21.png" class="img28">
            </div>
            <div class="flex jc mt20">
                <div class="link size24 main" @click="openLink('https://x.com/101102103104a')">https://x.com/101102103104a</div>
            </div>
            <div class="mt40 size26 tc">{{ $t('官网') }}</div>
            <div class="flex jc mt20">
                <div class="link size24 main">--</div>
            </div>
        </div>
    </div>

    <CusAsk v-model:show="showAsk" @submit="submit">{{ $t('确认认购节点吗？') }}</CusAsk>

    <PopupNotice v-model:show="showNoticePop" :data="noticePopInfo" @submit="readNotice"></PopupNotice>
</template>

<script setup lang="ts">
import { buyNode, getNodeConfig } from '@/api/node';
import { appName, assetUSDT } from '@/config/name';
import { useErc20 } from '@/dapp/contract/erc20';
import { useNotice } from '@/hooks/useNotice';
import { routerPush } from '@/router';
import { useDappStore } from '@/store';
import { storeToRefs } from 'pinia';
import { formatEther, parseEther } from 'viem';
import { onMounted, ref, watch } from 'vue';
import CusAsk from '@/components/CusAsk/index.vue'
import { checkGasBalance } from '@/dapp';
import { useDonation } from '@/dapp/contract/donation';
import PopupNotice from '@/views/notice/PopupNotice.vue';
import { openLink } from '@/utils';
import Title from '@/components/Title/index.vue'

const dappStore = useDappStore()
const { walletAddress } = storeToRefs(dappStore)

const { readBalanceOf, writeApprove } = useErc20()

const { writeDonate } = useDonation()

const { noticeList, loadNotice, showNoticePop, readNotice, noticePopInfo, loadNoticePop } = useNotice() // 公告

// 钱包余额
const balance = ref()
const loadBalance = async () => {
    const balanceOf = await readBalanceOf()
    balance.value = Number(formatEther(balanceOf))
}

watch(walletAddress, val => {
    if(!val)return
    loadBalance()
}, { immediate: true})

// 价格
const node_price = ref('')
const loadData = async () => {
    const res:any = await getNodeConfig()
    node_price.value = res.node_price
}

const showAsk = ref(false)
const submit = async () => {
    const amount = parseEther(node_price.value)
    await checkGasBalance()
    await writeApprove(import.meta.env.VITE_DONATED, amount)
    const res:any = await buyNode()
    const { id, usdtAmount, receiver, referrer, referralReward, expired_at, sign } = res
    console.log(id, usdtAmount, receiver, referrer, referralReward, expired_at, sign);
    await writeDonate(id, usdtAmount, receiver, referrer, referralReward, expired_at, sign)
    showAsk.value = false
    setTimeout(() => {
        loadBalance()
    }, 1000);
}

onMounted(()=>{
    loadNoticePop()
    loadNotice()
    loadData()
})
</script>

<style lang="scss" scoped>
.pic1{
    width: 100vw;
    height: 1050px;
    position: absolute;
    top: 0;
    left: 0;
}
.pic2{
    width: 618px;
    height: 484px;
}
.notice{
    height: 72px;
    border-radius: 36px;
    padding: 0 20px;
    background-color: #00000033;
    border: 2px solid #FFFFFF33;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    .noticeSwi{
        width: 550px;
        height: 50px;
        line-height: 50px;
    }
}
.pic5{
    width: 640px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 25px;
    z-index: 4;
    transform-origin: center center;
    animation: confettiFloat 3.8s ease-in-out infinite;
}
.shine{
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    left: 220px;
    z-index: 3;
    &::after{
        content: '';
        position: absolute;
        top: -20%;
        left: -55%;
        width: 36%;
        height: 140%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
        transform: rotate(22deg);
        filter: blur(2px);
        animation: badgeShine 3.6s linear infinite;
    }
}
.pic6{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 20px;
    left: 195px;
    z-index: 2;
    transform-origin: center center;
    filter: drop-shadow(0 10px 18px rgba(255, 184, 77, 0.22));
    animation: badgeBreath 2.8s ease-in-out infinite;
}
.pic8{
    width: 686px;
    height: 96px;
    position: absolute;
    bottom: 0;
    left: 2px;
    z-index: 2;
}

@keyframes confettiFloat {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.04);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes badgeBreath {
    0% {
        transform: scale(1);
        filter: drop-shadow(0 10px 18px rgba(255, 184, 77, 0.22));
    }
    50% {
        transform: scale(1.03);
        filter: drop-shadow(0 14px 26px rgba(255, 184, 77, 0.35));
    }
    100% {
        transform: scale(1);
        filter: drop-shadow(0 10px 18px rgba(255, 184, 77, 0.22));
    }
}

@keyframes badgeShine {
    0% {
        left: -55%;
        opacity: 0;
    }
    8% {
        opacity: 1;
    }
    30% {
        left: 120%;
        opacity: 0.95;
    }
    31%, 100% {
        left: 120%;
        opacity: 0;
    }
}
.card{
    padding: 160px 30px 96px 30px;
    border-radius: 30px;
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
    background: linear-gradient(#0F05004D, #783E00);
    &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 30px;
        background: linear-gradient(#FFDA91, #99480A);
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
}
.desc{
    width: 100vw;
    overflow-x: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    .gap-30{
        width: 30px;
        height: 100%;
        flex-shrink: 0;
    }
    .descitem{
        width: 400px;
        padding: 30px 30px 46px 30px;
        flex-shrink: 0;
        border-radius: 20px;
    }
    .item1{
        background-color: #FF78101A;
        border: 1px solid #FF7810;
    }
    .item2{
        background-color: #FFFFFF1A;
        border: 1px solid #FFFFFF;
    }
}
.box{
    background-color: #FFFFFF1A;
    border: 1px solid #FFFFFF4D;
    border-radius: 20px;
    .pic14{
        width: 100%;
        height: auto;
    }
    .dot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #FFFFFF80;
    }
}
.bot{
    background: linear-gradient(#FF78101A, #FF781000);
    min-height: 400px;
    padding-bottom: 100px;
    .line{
        width: 100%;
        height: 36px;
        position: absolute;
        top: -12px;
        left: 0;
        z-index: 1;
    }
    .link{
        text-decoration: underline;
    }
}
</style>