<template>
    <div class="cusTab flex ac size28 bold6">
        <div class="cusBox flex ac">
            <div class="cusTabAct" :style="{left: current==0?'0%':'50%'}"></div>
            <div class="flex1 flex jc ac rel ani" :class="{
                'opc5': current!=index,
                'ml20': Number(index) > 0
            }" v-for="(item, index) in list" :key="index" @click="onTabClick(index)">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['list'])
const current = defineModel<number>({ default: 0 })

const onTabClick = (index:any) => {
    const cur = Number(index)
    if(current.value == cur)return
    current.value = cur
}
</script>

<style lang="scss" scoped>
.cusTab{
    width: 100vw;
    height: 160px;
    padding: 0 30px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background-color: #03030333;
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 5;
    .cusBox{
        width: 100%;
        height: 80px;
        border-radius: 40px;
        background-color: #FFFFFF1A;
        position: relative;
        .cusTabAct{
            width: 50%;
            height: 80px;
            border-radius: 40px;
            background-color: $main-color;
            position: absolute;
            top: 0;
            left: 0%;
            transition: all 0.3s;
        }
    }
    
}
</style>