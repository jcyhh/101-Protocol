<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="bottom" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('抽卡结果') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="close" />
                </div>

                <div class="pt30" v-if="false">
                    <div class="red size24">请支付抢卡资金，取消支付则此卡作废</div>
                    <div class="mt100 flex jc ac">
                        <img src="@/assets/draw/8.png" class="pic8">
                        <img src="@/assets/draw/9.png" class="pic9">
                    </div>
                    <div class="tc mt50 size28 bold5">
                        <span>恭喜获取</span>
                        <span class="main ml10">"0.99卡"</span>
                    </div>
                    <div class="tc mt60 size48 bold main" v-init="0.99"></div>
                    <div class="tc mt20 size24 bold5 opc5">抢卡资金 ({{ assetUSDT }})</div>
                    <div class="mt200 tc size24 bold6">
                        <span class="grey mr10">可用余额</span>
                        <span v-init="1000"></span>
                        <span>{{ assetUSDT }}</span>
                    </div>
                    <div class="mainButton mt40 flex jc ac size28 main bold6 btn" @click="showConfetti">确认支付</div>
                </div>

                <div class="pt160">
                    <div class="flex jc ac">
                        <img src="@/assets/draw/8.png" class="pic8">
                        <img src="@/assets/draw/10.png" class="pic9">
                    </div>
                    <div class="tc mt50 size28 bold5">
                        <span>恭喜获取</span>
                        <span class="main ml10">"再来一次"</span>
                    </div>
                    <div class="mt200 tc size24 bold6">
                        <span class="main">10{{ assetUSDT }}</span>
                        <span class="ml5">抽1次</span>
                        <span class="ml20">抽卡次数</span>
                        <span class="main ml5">3</span>
                    </div>
                    <div class="mainButton mt40 flex jc ac size28 main bold6 btn" @click="showConfetti">继续抽卡</div>
                </div>

                <div class="safeArea"></div>
                
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import { assetUSDT } from '@/config';
import { useConfetti } from '@/hooks/useConfetti';
import { ref } from 'vue';

const { showConfetti } = useConfetti()

const show = ref(false)

const open = () => {
    show.value = true
    showConfetti()
}

const close = () => show.value = false

defineExpose({
    open
})
</script>

<style lang="scss" scoped>
.pic8{
    width: 200px;
    height: 200px;
    animation: rotate 5s linear infinite;
}
.pic9{
    width: 146px;
    height: 146px;
    position: absolute;
    z-index: 1;
}
.btn{
    height: 88px;
    border-radius: 44px;
}
</style>