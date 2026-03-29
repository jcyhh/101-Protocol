<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="bottom" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('立即开卡') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="close" />
                </div>

                <div class="mt40 size48 bold" v-init="1000"></div>
                <div class="size24 mt20 opc5">开卡金额({{ assetUSDT }})</div>
                <div class="flex jb ac mt30">
                    <div class="size24">
                        <span class="opc5">可用余额</span>
                        <span class="main ml10" v-init="1000"></span>
                        <span class="main ml5">{{ assetUSDT }}</span>
                    </div>
                    <div class="flex ac">
                        <div class="size24 opc5">卡币种</div>
                        <div class="tag flex ac ml10">
                            <img src="@/assets/common/usd.png" class="img28 mr10">
                            <div class="size20 bold6">{{ assetUSD }}</div>
                        </div>
                    </div>
                </div>
                <div class="size28 bold5 mt30">持卡人</div>
                <div class="inp flex jb ac mt20 size28" @click="pickerShow=true">
                    <div v-if="currentPicker">{{ currentPicker.first_name }} {{ currentPicker.last_name }}({{ currentPicker.country_code }})</div>
                    <div class="gray" v-else>请选择持卡人</div>
                    <div class="gray">
                        <van-icon name="arrow" />
                    </div>
                </div>

                <div class="mainButton mt40 flex jc ac size28 main bold6 btn" @click="submit">确认开卡</div>

                <div class="safeArea"></div>
                
            </div>
        </div>
    </VanPopup>

    <CusPicker v-model:show="pickerShow" :list="pickerList" :title="$t('选择持卡人')" :default-index="pickerCurrent" @change="$event=>pickerCurrent=$event">
        <template v-slot="{ item }">
            <span class="bold5">{{ item.first_name }} {{ item.last_name }}({{ item.country_code }})</span>
        </template>
    </CusPicker>
</template>

<script setup lang="ts">
import { assetUSD, assetUSDT } from '@/config';
import { ref } from 'vue';
import CusPicker from '@/components/CusPicker/index.vue';
import { useCardholder } from '@/hooks/useCardholder';

const { pickerShow, pickerList, currentPicker, pickerCurrent, loadPickerList } = useCardholder()

const show = ref(false)

const open = () => {
    show.value = true
    loadPickerList()
}

const close = () => show.value = false

const submit = () => {

}

defineExpose({
    open
})
</script>

<style lang="scss" scoped>
.btn{
    height: 88px;
    border-radius: 44px;
}
.tag{
    height: 44px;
    border-radius: 22px;
    padding: 0 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
}
.inp{
    height: 90px;
    padding: 0 30px;
    background-color: #FFE5A51F;
    border: 1px solid #FFFFFF1A;
    border-radius: 14px;
}
</style>