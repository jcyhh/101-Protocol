<template>
    <CusNav :title="$t('申请记录')"></CusNav>
    <div class="pl30 pr30 rel pt30">
        
        <div class="cell card mb20" v-for="(item,index) in 10" :key="index">
            <div class="flex jb ac">
                <div class="size28 bold6 main">姓名</div>
                <div class="size28 bold6 green">已发货</div>
            </div>
            <div class="flex jb ac mt20 size24 opc5">
                <div>166****999</div>
                <div>2026</div>
            </div>
            <div class="pt20">
                <div class="line mb20"></div>
                <div class="size26 flex jb ac">
                    <div class="opc5">物流</div>
                    <div class="opc6">京东快递</div>
                </div>
                <div class="size26 flex jb ac mt20">
                    <div class="opc5">快递单号</div>
                    <div class="flex ac opc6">
                        <div>123456789</div>
                        <img src="@/assets/user/17.png" class="img26 ml10">
                    </div>
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