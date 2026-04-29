<template>
    <div class="titleContent">
        <div class="flex jc">
            <div class="title flex jc ac size32 bold6">{{ title }}</div>
        </div>
        <img src="@/assets/home/10.png" class="pic10 mt20">
    </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style lang="scss" scoped>
.titleContent{
    position: relative;
    z-index: 2;
    .title{
        width: 360px;
        height: 52px;
        background-image: url("@/assets/home/9.png");
        background-size: 100% 100%;
        color: #F4AF63;
    }
    .pic10{
        width: 100vw;
        height: 36px;
    }
}
</style>