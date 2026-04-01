<template>
    <CusNav :title="$t('绑定实体卡')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="size28 bold6">持卡人</div>
        <div class="cell card mt20 flex jb ac" @click="pickerShow=true">
            <div v-if="currentPicker">{{ currentPicker.first_name }} {{ currentPicker.last_name }} ({{ currentPicker.country_code }})</div>
            <div class="gray" v-else>请选择持卡人</div>
            <div class="gray">
                <van-icon name="arrow" />
            </div>
        </div>

        <div class="mt30">
            <div class="size28 bold6">卡号</div>
            <div class="cell card mb20 flex jb ac mt20">
                <input type="text" placeholder="请输入卡号" class="flex1 size28">
            </div>
        </div>

    </div>

    <div class="safeArea"></div>
    <div class="gap130"></div>
    <div class="bottom">
        <div class="mainBtn size28 bold6 flex jc ac">确认</div>
        <div class="safeArea"></div>
    </div>

    <CusPicker v-model:show="pickerShow" :list="pickerList" :title="$t('请选择')" :default-index="pickerCurrent" @change="$event=>pickerCurrent=$event">
        <template v-slot="{ item }">
            <span class="bold5">{{ item.first_name }} {{ item.last_name }}({{ item.country_code }})</span>
        </template>
    </CusPicker>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import CusPicker from '@/components/CusPicker/index.vue';
import { useCardholder } from '@/hooks/useCardholder';
import { onMounted } from 'vue';

const { pickerShow, pickerList, currentPicker, pickerCurrent, loadPickerList } = useCardholder()

onMounted(()=>{
    loadPickerList()
})
</script>

<style lang="scss" scoped>
.card{
    border-radius: 20px;
    padding: 30px;
    &::before{
        border-radius: 20px;
    }
}
.bottom{
    width: 100vw;
    padding: 20px 30px 30px 30px;
    background-color: #040404;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
}
</style>