<template>
    <div class="cusProgress" :class="className">
        <div class="cusProgressLine" :style="{width: `${progress}%`}"></div>
    </div>
</template>

<script setup lang="ts">
defineProps(['progress', 'className'])
</script>

<style lang="scss" scoped>
.cusProgress{
    background-color: #FFFFFF1A;
    width: 100%;
    overflow: hidden;
    height: inherit;
    border-radius: inherit;
    .cusProgressLine{
        height: inherit;
        border-radius: inherit;
        transition: all 0.3s;
        background-color: $main-color;
    }
}
.orderProgress{
    width: 200px;
    height: 14px;
    border-radius: 7px;
}
</style>