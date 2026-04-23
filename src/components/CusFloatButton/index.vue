<template>
    <img
        ref="buttonRef"
        src="./kefu.png"
        class="cus-float-button"
        :style="buttonStyle"
        v-bind="$attrs"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
    >
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface Props {
    edgeGap?: number
    initialBottomGap?: number
}

const props = withDefaults(defineProps<Props>(), {
    edgeGap: 30,
    initialBottomGap: 200
})

const buttonRef = ref<HTMLImageElement>()

const getDefaultPosition = () => {
    if (typeof window === 'undefined') {
        return { left: 0, top: 0 }
    }
    const width = buttonRef.value?.offsetWidth || 100
    const height = buttonRef.value?.offsetHeight || 100
    return {
        left: Math.max(window.innerWidth - width - props.edgeGap, 0),
        top: Math.max(window.innerHeight - height - props.initialBottomGap, 0)
    }
}

const defaultPosition = getDefaultPosition()
const buttonLeft = ref(defaultPosition.left)
const buttonTop = ref(defaultPosition.top)
const buttonDragging = ref(false)
const buttonReady = ref(false)
const dragOffsetX = ref(0)
const dragOffsetY = ref(0)

const getBounds = () => {
    const width = buttonRef.value?.offsetWidth || 100
    const height = buttonRef.value?.offsetHeight || 100
    const maxLeft = Math.max(window.innerWidth - width, 0)
    const maxTop = Math.max(window.innerHeight - height, 0)
    const minLeft = Math.min(props.edgeGap, maxLeft)
    const minTop = Math.min(props.edgeGap, maxTop)
    return {
        minLeft,
        minTop,
        maxLeft: Math.max(maxLeft - props.edgeGap, minLeft),
        maxTop: Math.max(maxTop - props.edgeGap, minTop)
    }
}

const clampPosition = (left: number, top: number) => {
    const { minLeft, minTop, maxLeft, maxTop } = getBounds()
    return {
        left: Math.min(Math.max(left, minLeft), maxLeft),
        top: Math.min(Math.max(top, minTop), maxTop)
    }
}

const getSnapLeft = (left: number) => {
    const { minLeft, maxLeft } = getBounds()
    return left <= (minLeft + maxLeft) / 2 ? minLeft : maxLeft
}

const buttonStyle = computed(() => ({
    left: `${buttonLeft.value}px`,
    top: `${buttonTop.value}px`,
    transition: !buttonReady.value || buttonDragging.value ? 'none' : 'left 0.3s ease, top 0.3s ease'
}))

const onTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0]
    if (!touch) return
    buttonDragging.value = true
    dragOffsetX.value = touch.clientX - buttonLeft.value
    dragOffsetY.value = touch.clientY - buttonTop.value
}

const onTouchMove = (event: TouchEvent) => {
    const touch = event.touches[0]
    if (!touch) return
    const position = clampPosition(
        touch.clientX - dragOffsetX.value,
        touch.clientY - dragOffsetY.value
    )
    buttonLeft.value = position.left
    buttonTop.value = position.top
}

const onTouchEnd = () => {
    buttonDragging.value = false
    buttonLeft.value = getSnapLeft(buttonLeft.value)
}

onMounted(() => {
    const position = clampPosition(
        window.innerWidth,
        window.innerHeight - props.initialBottomGap + props.edgeGap
    )
    buttonLeft.value = position.left
    buttonTop.value = position.top
    buttonReady.value = true
})
</script>

<style scoped>
.cus-float-button {
    width: 100px;
    height: 100px;
    position: fixed;
    z-index: 9999;
    touch-action: none;
    user-select: none;
}
</style>