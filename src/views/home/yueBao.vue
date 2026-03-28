<template>
    <CusNav :title="$t('余额宝')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="flex jc">
            <div class="tag flex ac">
                <img src="@/assets/user/18.png" class="img30 mr10">
                <div class="size24">资产安全有保障</div>
            </div>
        </div>

        <div class="card mt30">
            <div class="opc5 size24 tc">总金额({{ assetUSDT }})</div>
            <div class="tc bold size52 mt20" v-init="1000"></div>
            <div class="stats mt30 flex ac tc">
                <div class="flex1">
                    <div class="size28 bold6" v-init="1000"></div>
                    <div class="size24 opc5 mt10">累计收益</div>
                </div>
                <div class="line"></div>
                <div class="flex1">
                    <div class="size28 bold6" v-init="1000"></div>
                    <div class="size24 opc5 mt10">昨日收益</div>
                </div>
            </div>
            <div class="pl6 pr6 mt40 flex size28 bold6">
                <div class="btn btn1 flex jc ac">明细</div>
                <div class="btn btn2 flex jc ac ml20">存入</div>
            </div>
        </div>
    </div>

    <CusTab v-model="current" :list="tabs"></CusTab>

    <div class="pl30 pr30 rel">

        <div class="cell item mb20" v-for="(item, index) in 10">
            <div class="flex jb">
                <div>
                    <div class="size24 opc5">存入金额(USDT)</div>
                    <div class="size40 bold6 main mt10" v-init="1000"></div>
                    <div class="size24 mt10">
                        <span>年化利率</span>
                        <span class="green ml10">10%</span>
                    </div>
                </div>
                <div class="flex col ae">
                    <div class="mainButton btn flex jc ac">取出</div>
                    <div class="progressBox mt30">
                        <CusProgress :progress="getPercent(50,100)"></CusProgress>
                    </div>
                    <div class="size24 opc5 mt10">进度 4/7天</div>
                </div>
            </div>
            <div class="flex mt40">
                <div class="flex1">
                    <div v-init="1000"></div>
                    <div class="mt10 size20 opc5">累计收益({{ assetUSDT }})</div>
                </div>
                <div class="flex1">
                    <div v-init="1000"></div>
                    <div class="mt10 size20 opc5">每日预估收益({{ assetUSDT }})</div>
                </div>
                <div class="flex1">
                    <div v-init="1000"></div>
                    <div class="mt10 size20 opc5">存入周期</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import CusTab from '@/components/CusTab/index.vue'
import { assetUSDT } from '@/config';
import { t } from '@/locale';
import { computed, ref } from 'vue';
import CusProgress from '@/components/CusProgress/index.vue'
import { getPercent } from '@/utils';

const current = ref(0)

const tabs = computed(()=>([
    {
        name: t('进行中'),
        value: 1
    },
    {
        name: t('已完成'),
        value: 2
    }
]))
</script>

<style lang="scss" scoped>
.tag{
    height: 54px;
    border-radius: 27px;
    background-color: #FFFFFF33;
    padding: 0 30px;
}
.card{
    background: linear-gradient(140.58deg, #FFE7AB 5.95%, #D3AC61 94.05%);
    border-radius: 20px;
    padding: 50px 24px 30px 24px;
    color: #000000;
    .stats{
        width: 100%;
        height: 144px;
        background-image: url("@/assets/user/19.png");
        background-size: 100% 100%;
        .line{
            width: 1px;
            height: 60px;
            background-color: #00000029;
        }
    }
    .btn{
        height: 80px;
        border-radius: 40px;
        flex: 1;
    }
    .btn1{
        background-color: #0000001A;
    }
    .btn2{
        background-color: #000000;
        color: #FFFFFF;
    }
}
.item{
    padding: 30px;
    border-radius: 20px;
    &::before{
        border-radius: 20px;
    }
    .btn{
        height: 60px;
        padding: 0 30px;
        font-size: 26px;
        color: $main-color;
    }
    .progressBox{
        width: 200px;
        height: 16px;
        border-radius: 8px;
    }
}
</style>