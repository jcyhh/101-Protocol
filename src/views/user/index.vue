<template>
    <img src="@/assets/login/bg.png" class="pagebg animate__animated animate__slideInDown">
    <div class="pl30 pr30 pt60 rel">
        
        <div class="flex jb ac">
            <div class="flex ac">
                <img src="@/assets/user/1.png" class="img110 mr24">
                <div>
                    <div class="size24 opc5">我的邮箱</div>
                    <div class="size32 bold mt20">1234567890@qq.com</div>
                </div>
            </div>
            <img src="@/assets/user/2.png" class="img56 animate__animated animate__zoomIn" @click="routerPush('/setting')">
        </div>

        <div class="top mt50" @click="routerPush('/cardbag')">
            <div class="flex jb ac">
                <div class="size30 bold5">我的卡包</div>
                <div class="flex ac size24 opc5">
                    <div class="mr5">查看全部</div>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="gap150"></div>
            <div class="bannerBox">
                <Banner></Banner>
            </div>
        </div>

        <div class="mainCard mt30">
            <div class="flex jb ac">
                <div class="size30 bold5 main">资产预览</div>
                <div class="flex ac size24 opc5">
                    <div class="mr5">查看明细</div>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="flex mt40">
                <div class="flex1">
                    <div class="size28" v-init="1000"></div>
                    <div class="size24 opc5 mt10">{{ assetAIX }} {{ $t('余额') }}</div>
                </div>
                <div class="flex1 ml30">
                    <div class="size28" v-init="1000"></div>
                    <div class="size24 opc5 mt10">{{ assetNFTC }} {{ $t('余额') }}</div>
                </div>
                <div class="flex1">
                    <div class="size28" v-init="1000"></div>
                    <div class="size24 opc5 mt10">{{ assetUSDT }} {{ $t('余额') }}</div>
                </div>
            </div>
            <div class="flex mt30">
                <div class="flex1">
                    <div class="size28" v-init="1000"></div>
                    <div class="size24 opc5 mt10">{{ $t('抽奖') }} {{ assetAIX }}</div>
                </div>
                <div class="flex1 ml30">
                    <div class="size28" v-init="1000"></div>
                    <div class="size24 opc5 mt10">{{ $t('收益') }} {{ assetNFTC }}</div>
                </div>
                <div class="flex1"></div>
            </div>
        </div>

        <div class="mt20 flex jb ac size26 main">
            <div class="item flex col jc ac">
                <img src="@/assets/user/3.png" class="img40">
                <div class="mt20">充值</div>
            </div>
            <div class="item flex col jc ac">
                <img src="@/assets/user/4.png" class="img40">
                <div class="mt20">提现</div>
            </div>
            <div class="item flex col jc ac">
                <img src="@/assets/user/5.png" class="img40">
                <div class="mt20">转账</div>
            </div>
            <div class="item flex col jc ac">
                <img src="@/assets/user/6.png" class="img40">
                <div class="mt20">划转</div>
            </div>
        </div>

        <div class="mt40 size34 bold6 main">{{ $t('常用功能') }}</div>

        <div class="cell flex jb ac mt30" @click="routerPush('/community/my')">
            <div class="flex ac">
                <img src="@/assets/user/7.png" class="img64 mr20">
                <div class="size28">我的社区</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell flex jb ac mt20" @click="routerPush('/community')">
            <div class="flex ac">
                <img src="@/assets/user/8.png" class="img64 mr20">
                <div class="size28">全网社区</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell flex jb ac mt20" @click="routerPush('/news')">
            <div class="flex ac">
                <img src="@/assets/user/9.png" class="img64 mr20">
                <div class="size28">全网论坛</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell flex jb ac mt20" @click="routerPush('/team')">
            <div class="flex ac">
                <img src="@/assets/user/10.png" class="img64 mr20">
                <div class="size28">团队</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell flex jb ac mt20">
            <div class="flex ac">
                <img src="@/assets/user/11.png" class="img64 mr20">
                <div class="size28">释放订单</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

        <div class="cell flex jb ac mt20" @click="routerPush('/cardholder')">
            <div class="flex ac">
                <img src="@/assets/user/12.png" class="img64 mr20">
                <div class="size28">持卡人管理</div>
            </div>
            <van-icon name="arrow" color="#FFFFFF80" />
        </div>

    </div>

    <div class="gap40"></div>
</template>

<script setup lang="ts">
import { assetAIX, assetNFTC, assetUSDT } from '@/config';
import Banner from './components/Banner.vue';
import { routerPush } from '@/router';
</script>

<style lang="scss" scoped>
.top{
    border-radius: 30px;
    padding: 30px;
    background: linear-gradient(100.27deg, #D3AC61 7.67%, #FFE7AB 28.43%, #D3AC61 92.33%);
    color: #000000;
    position: relative;
    .bannerBox{
        width: 100vw;
        height: 120px;
        position: absolute;
        bottom: 30px;
        left: -30px;
        z-index: 1;
    }
}
.item{
    width: 160px;
    height: 140px;
    background: linear-gradient(180deg, rgba(255, 229, 165, 0.12) 0%, rgba(255, 229, 165, 0.04) 100%);
    border-radius: 20px;
}
</style>