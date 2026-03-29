<template>
    <CusNav :title="$t('新成员')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30">
        
        <div class="cell card mb20 flex jb ac" v-for="(item,index) in 10" :key="index">
            <div>
                <div class="size28 bold5">12354320987@qq.com</div>
                <div class="size24 mt10 opc5">2026</div>
            </div>
            <div class="flex size28 bold6">
                <div class="mainButton mainButtonDel flex jc ac main btn flex1 mr12">删除</div>
                <div class="mainButton flex jc ac main btn flex1">通过</div>
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
    .btn{
        height: 60px;
        border-radius: 30px;
        width: 110px;
    }
}
</style>