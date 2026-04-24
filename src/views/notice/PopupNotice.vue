<template>
    <VanPopup v-model:show="show" style="background: transparent;" overlay-class="cusMask" teleport="#app">
        <div class="popupCenter mainCard">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('最新公告') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="size28 bold5 mt30 noticeContent">
                    <div class="size30 bold5">{{ data?.title }}</div>
                    <div class="size24 opc5 mt10">{{ data?.updated_at }}</div>
                    <div class="size24 mt30" v-html="data?.content"></div>
                </div>

                <div class="mainBtn flex1 flex jc ac mt50" v-scale @click="submit">{{ $t('知道了') }}</div>
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
const props = defineProps(['data'])

const show = defineModel<boolean>('show', { default: false })

const emits = defineEmits(['submit'])

const submit = () => {
    show.value = false
    emits('submit')
}
</script>

<style lang="scss" scoped>
.noticeContent{
    max-height: 50vh;
}
</style>