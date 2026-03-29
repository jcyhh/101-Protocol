<template>
    <div class="flex jb ac mb30">
        <div class="size28">社区成员</div>
        <div class="size24 opc5" @click="show=!show">{{ show ? '取消' : '管理' }}</div>
    </div>

    <div class="cell mb20 card" v-for="(item,index) in 10" :key="index">
        <div class="flex jb ac">
            <div class="flex ac">
                <img src="@/assets/user/30.png" class="img32 mr10 animate__animated animate__zoomIn ani5" v-if="show">
                <img src="@/assets/user/31.png" class="img32 mr10" v-if="show">
                <div class="size28 bold5">12354320987@qq.com</div>
            </div>
            <div class="size28 bold main" v-init="1000"></div>
        </div>
        <div class="flex jb mt20 size24 opc5">
            <div>2026</div>
            <div>今日推荐业绩</div>
        </div>
    </div>

    <div class="gap30"></div>
    <div class="delbtn flex jc ac size28 bold6 animate__animated animate__slideInUp" v-if="show">踢出社区</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false)
</script>

<style lang="scss" scoped>
.card{
    padding: 30px;
    border-radius: 20px;
    &::before{
        border-radius: 20px;
    }
}
.delbtn{
    width: 690px;
    height: 80px;
    border-radius: 40px;
    background-color: $red;
    position: fixed;
    bottom: 72px;
    left: 30px;
    z-index: 5;
}
</style>