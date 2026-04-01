<template>
    <CusNav :title="$t('汇款记录')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell card mb24" v-for="(item,index) in 10" :key="index">
            <div class="flex jb ac">
                <div class="size28 bold6">订单号 {{ 111111 }}</div>
                <div class="size28 bold6 main">状态</div>
            </div>
            <div class="flex jb ac mt30">
                <div class="size24 opc5 mr10">支付金额</div>
                <div class="size24 bold5">
                    <span v-init="1000"></span>
                    <span class="ml5">USD</span>
                </div>
            </div>
            <div class="flex jb ac mt20">
                <div class="size24 opc5 mr10">到账金额</div>
                <div class="size24 bold5">
                    <span v-init="1000"></span>
                    <span class="ml5">USD</span>
                </div>
            </div>
            <div class="line mt24 mb24"></div>
            <div class="flex jb ac mt20">
                <div class="size24 opc5 mr10">2026</div>
                <div class="size24 bold5 flex ac opc5">
                    <div>查看详情</div>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
</script>

<style lang="scss" scoped>
.card{
    border-radius: 20px;
    padding: 30px;
    &::before{
        border-radius: 20px;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #FFFFFF33;
    }
}
</style>