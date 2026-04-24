<template>
    <div class="page">
        <div class="gap100"></div>
        <img src="@/assets/home/18.png" class="pic18">
        <img src="@/assets/team/3.png" class="pic3">
        <div class="pl30 pr30 pt46 rel">

            <div class="flex jb ac">
                <div>
                    <div class="size24">我的地址</div>
                    <div class="size32 bold5 mt10" v-init:address="walletAddress"></div>
                    <div class="size24 opc5 mt10">注册时间 2026.04.26</div>
                </div>
                <img src="@/assets/home/19.png" class="pic19">
            </div>

            <div class="card mt25">
                <div class="box flex jb ac">
                    <div class="flex ac">
                        <img src="@/assets/home/20.png" class="img32 mr10">
                        <div class="size24">上级邀请人</div>
                    </div>
                    <div class="size24 bold5" v-init:address="walletAddress"></div>
                </div>
                <div class="tc mt40 size24">我的邀请码</div>
                <div class="flex jc ac mt20">
                    <div class="linearTxt size40 bold poppins">7C2EX8GN</div>
                    <img src="@/assets/team/1.png" class="img30 ml20">
                </div>
                <div class="flex ac mt40">
                    <div class="cell size28 flex ac">
                        <div style="overflow: hidden;">0xalifuiewhgouerg564vbfd8sv69a45s4s</div>
                    </div>
                    <img src="@/assets/team/2.png" class="img80 ml10">
                </div>
            </div>

            <div class="tc size24 mt80">直推节点收益</div>
            <div class="tc main size46 bold5 mt20">
                <span v-init="1000"></span>
                <span class="ml10">{{ assetUSDT }}</span>
            </div>
            <div class="flex jb ac mt50">
                <div class="stats flex1 tc">
                    <div class="size32 bold5">100</div>
                    <div class="size24 mt10 opc5">团队人数</div>
                </div>
                <div class="stats flex1 tc ml15 mr15">
                    <div class="size32 bold5">100</div>
                    <div class="size24 mt10 opc5">直推人数</div>
                </div>
                <div class="stats flex1 tc">
                    <div class="size32 bold5">100</div>
                    <div class="size24 mt10 opc5">团队节点</div>
                </div>
            </div>
            <div class="size32 bold5 mt60 mb30">邀请记录</div>
            <van-list v-bind="listProps">
                <div class="listcard mb20 flex jb ac" v-for="(item, index) in list" :key="index">
                    <div class="size28 bold5" v-init:address="walletAddress"></div>
                    <div class="size24 poppins opc5">2026</div>
                </div>
                <CusEmpty v-if="list?.length==0"></CusEmpty>
            </van-list>
            

        </div>
    </div>

</template>

<script setup lang="ts">
import { assetUSDT } from '@/config/name';
import { useDappStore } from '@/store';
import { storeToRefs } from 'pinia';
import { useLoadList } from '@/hooks/useLoadList';
import CusEmpty from '@/components/CusEmpty/index.vue'

const dappStore = useDappStore()
const { walletAddress } = storeToRefs(dappStore)

const { list, props: listProps, loadList } = useLoadList('/api/notices', 'notices')
// loadList()
</script>

<style lang="scss" scoped>
.pic18 {
    width: 100vw;
    height: 421px;
    position: absolute;
    top: 100px;
    left: 0;
}

.pic3 {
    width: 100vw;
    height: 500px;
    position: absolute;
    left: 0;
    top: 718px;
}

.pic19 {
    width: 232px;
    height: 152px;
}

.card {
    padding: 40px 30px;
    background-color: #FFFFFF1A;
    border: 2px solid #FFFFFF33;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 40px;
    border: 1px solid transparent;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 30px;
        background: linear-gradient(#99480A, #FFDA91);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        padding: 1px;
    }

    .box {
        height: 96px;
        border-radius: 20px;
        padding: 0 30px;
        background-color: $main-color;
    }

    .cell {
        flex: 1;
        height: 80px;
        border-radius: 20px;
        background-color: #FFFFFF0F;
        border: 2px solid #F6EEFF33;
        padding: 0 24px;
        overflow: hidden;
    }
}

.stats {
    padding: 20px;
    background-color: #FFFFFF1A;
    border: 2px solid #FFFFFF33;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
}

.listcard {
    padding: 30px;
    background-color: #FFFFFF1A;
    border: 2px solid #FFFFFF33;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
}
</style>