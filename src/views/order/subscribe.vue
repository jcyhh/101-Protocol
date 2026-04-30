<template>
    <div class="pageBg"></div>
    <CusTab :list="tabs" v-model="current" @change="loadList()"></CusTab>
    <div class="gap200"></div>
    <div class="gap60"></div>
    <div class="rel pl30 pr30">
        
        <van-list v-bind="listProps">
            <div class="cell mb20" v-for="(item,index) in list" :key="index">
                <div class="flex jb ac">
                    <div class="size24 opc5">{{ $t('总下单金额') }}</div>
                    <CusProgress :progress="getPercent(item.ordered_amount, item.total_amount)" class-name="orderProgress"></CusProgress>
                </div>
                <div class="flex jb ac mt10">
                    <div class="size40 bold6">
                        <span v-init="item.total_amount"></span>
                        <span class="ml10">{{ assetUSDT }}</span>
                    </div>
                    <div class="size24 opc5">
                        <span v-init="item.ordered_amount"></span>
                        <span class="ml5 mr5">/</span>
                        <span class="mr5" v-init="item.total_amount"></span>
                        <span>{{ assetUSDT }}</span>
                    </div>
                </div>
                <div class="red size24 bold5 mt20" v-if="item.next_order_at && current==0">{{ $t('下次自动下单时间') }}: {{ item.next_order_at }}</div>
                <div class="flex jb ac mt40 size24">
                    <div class="opc5">{{ $t('剩余下单金额') }}</div>
                    <div>
                        <span v-init="item.remaining_amount"></span>
                        <span class="ml5">{{ assetUSDT }}</span>
                    </div>
                </div>
                <div class="flex jb ac mt20 size24">
                    <div class="opc5">{{ $t('已下单金额') }}</div>
                    <div>
                        <span v-init="item.ordered_amount"></span>
                        <span class="ml5">{{ assetUSDT }}</span>
                    </div>
                </div>
                <div class="flex jb ac mt20 size24">
                    <div class="opc5">{{ $t('下单时间') }}</div>
                    <div class="opc5">{{ item.created_at }}</div>
                </div>
            </div>
            <CusEmpty v-if="list?.length==0"></CusEmpty>
        </van-list>

    </div>
</template>

<script setup lang="ts">
import CusTab from '@/components/CusTab/index.vue'
import { t } from '@/locale';
import { computed, ref } from 'vue';
import { useLoadList } from '@/hooks/useLoadList';
import CusEmpty from '@/components/CusEmpty/index.vue'
import { onMounted } from 'vue';
import { assetUSDT } from '@/config/name';
import CusProgress from '@/components/CusProgress/index.vue'
import { getPercent } from '@/utils';

const current = ref(0)
const tabs = computed(()=>([
    {name:t('进行中'), value:1},
    {name:t('已完成'), value:2}
]))
const params = computed(()=>({
    status: tabs.value[current.value].value
}))

const { list, props: listProps, loadList } = useLoadList('/api/reservations', 'reservation_orders', params)

onMounted(()=>{
    loadList()
})
</script>

<style lang="scss" scoped>

</style>