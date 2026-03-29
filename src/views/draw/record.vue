<template>
    <CusNav :title="$t('记录')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell card mb20" v-for="(item,index) in 10" :key="index">
            <div class="flex jb ac">
                <div class="size28">
                    <span>中奖</span>
                    <span>未中奖</span>
                </div>
                <div class="size28 bold6">
                    <span class="green">U卡</span>
                    <span class="main">再来一次</span>
                    <span class="red">谢谢参与</span>
                </div>
            </div>
            <div class="size24 opc5 mt20">2026</div>
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
}
</style>