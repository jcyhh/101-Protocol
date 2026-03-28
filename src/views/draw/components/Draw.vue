<template>
    <div class="flex jc">
        <div class="draw">
            <img src="@/assets/draw/2.png" class="pic2">
            <img src="@/assets/draw/3.png" class="pic3">
            <div
                class="drawRotateBox"
                :style="{
                    transform: `rotate(${drawRotate}deg)`,
                    transitionDuration: `${drawDuration}ms`,
                    transitionTimingFunction: drawTiming
                }"
            >
                <img src="@/assets/draw/4.png" class="pic4">
                <div class="drawBox">
                    <div
                        v-for="(item, index) in drawItems"
                        :key="`${item.name}-${index}`"
                        class="drawItem"
                        :style="{ transform: `rotate(${index * 45}deg)` }"
                    >
                        <div class="drawItemContent">
                            <div class="drawPrice">{{ item.price }}</div>
                            <div class="drawName">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex jc mt60">
        <div class="btn flex jc ac" @click="submit(0)">{{ $t('开始抢卡') }}</div>
    </div>

    <DrawResult ref="resultRef"></DrawResult>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DrawResult from './DrawResult.vue'

const resultRef = ref()

const drawItems = [
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' },
    { price: '0.99', name: 'U卡' }
]

const drawRotate = ref(0)
const drawDuration = ref(0)
const drawTiming = ref('linear')
const isDrawing = ref(false)

const DRAW_COUNT = drawItems.length
const DRAW_STEP = 360 / DRAW_COUNT

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const submit = async (targetIndex: number) => {
    if(isDrawing.value)return

    const finalIndex = ((targetIndex % DRAW_COUNT) + DRAW_COUNT) % DRAW_COUNT
    const targetBase = (360 - finalIndex * DRAW_STEP) % 360
    const accelerateTurns = 2 * 360
    const decelerateTurns = 4 * 360

    isDrawing.value = true

    drawDuration.value = 900
    drawTiming.value = 'cubic-bezier(0.45, 0, 0.9, 0.55)'
    drawRotate.value += accelerateTurns

    await sleep(drawDuration.value)

    const currentAfterFast = ((drawRotate.value % 360) + 360) % 360
    const extraToTarget = (targetBase - currentAfterFast + 360) % 360

    drawDuration.value = 4200
    drawTiming.value = 'cubic-bezier(0.12, 0.8, 0.18, 1)'
    drawRotate.value += decelerateTurns + extraToTarget

    await sleep(drawDuration.value)

    drawDuration.value = 0
    drawTiming.value = 'linear'
    drawRotate.value = ((drawRotate.value % 360) + 360) % 360
    isDrawing.value = false
}
</script>

<style lang="scss" scoped>
.draw{
    width: 660px;
    height: 660px;
    position: relative;
    .pic2{
        width: 660px;
        height: 660px;
    }
    .pic3{
        width: 250px;
        height: 366px;
        position: absolute;
        top: 35px;
        left: 205px;
        z-index: 5;
    }
    .drawRotateBox{
        width: 520px;
        height: 520px;
        position: absolute;
        top: 70px;
        left: 70px;
        z-index: 2;
        border-radius: 50%;
    }
    .pic4{
        width: 520px;
        height: 520px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .drawBox{
        width: 520px;
        height: 520px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        border-radius: 50%;
    }
    .drawItem{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center center;
        pointer-events: none;
    }
    .drawItemContent{
        width: 110px;
        position: absolute;
        top: 26px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: #FFFFFF;
        line-height: 1.15;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    }
    .drawPrice{
        font-size: 32px;
        font-weight: 600;
    }
    .drawName{
        margin-top: 6px;
        font-size: 28px;
        font-weight: 600;
    }
}
.btn{
    width: 400px;
    height: 100px;
    background-image: url("@/assets/draw/5.png");
    background-size: 100% 100%;
    color: #4E1F0B;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 0px 1px 2px #FFFFFF;
}
</style>