<template>
    <div class="flex jc ac">
        <img src="@/assets/user/1.gif" class="img36">
        <div class="ml15 mr15 size26 bold6">{{ title }}</div>
        <img src="@/assets/user/1.gif" class="img36 gif1">
    </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style lang="scss" scoped>
.gif1{
    transform: scaleX(-1);
}
</style>