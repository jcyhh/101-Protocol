<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="bottom" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('修改密码') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="flex jb ac mt60">
                    <div class="size28 bold5">选择卡</div>
                </div>

                <div class="inp flex jb ac mt20 size28" @click="pickerShow=true">
                    <div v-if="currentPicker">{{ currentPicker.first_name }} {{ currentPicker.last_name }}({{ currentPicker.country_code }})</div>
                    <div class="gray" v-else>请选择卡</div>
                    <div class="gray">
                        <van-icon name="arrow" />
                    </div>
                </div>

                <div class="size28 bold5 mt30">新交易密码</div>
                <div class="inp flex jb ac mt20 size28">
                    <input type="password" placeholder="请输入交易密码" class="flex1">
                </div>

                <div class="size28 bold5 mt30">确认密码</div>
                <div class="inp flex jb ac mt20 size28">
                    <input type="password" placeholder="请再次输入新交易密码" class="flex1">
                </div>

                <div class="mainBtn mt100 flex jc ac size28 main bold6 btn">确认</div>

                <div class="safeArea"></div>
            </div>
        </div>
    </VanPopup>

    <CusPicker v-model:show="pickerShow" :list="pickerList" :title="$t('请选择')" :default-index="pickerCurrent" @change="$event=>pickerCurrent=$event">
        <template v-slot="{ item }">
            <span class="bold5">1111 **** **** 1111</span>
        </template>
    </CusPicker>
</template>

<script setup lang="ts">
import { useCard } from '@/hooks/useCardholder';
import { ref } from 'vue';
import CusPicker from '@/components/CusPicker/index.vue';
import { assetUSD, assetUSDT } from '@/config';

const { pickerShow, pickerList, currentPicker, pickerCurrent, loadPickerList } = useCard()

const show = ref(false)

const open = () => {
    show.value = true
    loadPickerList()
}

defineExpose({
    open
})
</script>

<style lang="scss" scoped>
.inp{
    height: 90px;
    padding: 0 30px;
    background-color: #FFE5A51F;
    border: 1px solid #FFFFFF1A;
    border-radius: 14px;
    .line{
        width: 1px;
        height: 44px;
        background-color: #FFFFFF33;
    }
}
</style>