<template>
    <CusNav :title="$t('明细')"></CusNav>

    <van-pull-refresh class="fullPage rel" v-bind="props">
        <van-list class="fullPage" v-bind="listProps">
            <div class="pl30 pr30 pt30">

                <div class="cell mb12" v-for="(item,index) in list" :key="index">
                    <div class="gap10"></div>
                    <div class="flex jb ac">
                        <div class="size28">{{ item.content }}</div>
                        <div class="size28 bold" :class="item.is_inc ? 'green' : 'red'">
                            <span>{{ item.is_inc ? '+' : '-' }}</span>
                            <span v-init="item.amount"></span>
                            <span>{{ assetUSDT }}</span>
                        </div>
                    </div>
                    <div class="size24 opc5 mt20">{{ item.created_at }}</div>
                    <div class="gap10"></div>
                </div>

            </div>
            <CusEmpty v-if="list?.length==0"></CusEmpty>
        </van-list>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { useLoadList } from '@/hooks/useLoadList';
import { usePullRefresh } from '@/hooks/usePullRefresh';
import CusEmpty from '@/components/CusEmpty/index.vue'
import { computed } from 'vue';
import { assetUSDT } from '@/config';

const params = computed(()=>({ccy: 'balance_usdt'}))
const { list, props: listProps, loadList } = useLoadList('/api/yuebao/asset_log', 'asset_logs', params)
const { props } = usePullRefresh(loadList)
loadList()
</script>

<style lang="scss" scoped>
.cell{
    background: #FFE5A51F;
    border: 1px solid #FFFFFF1A;
    padding: 0 30px;
    height: 88px;
    border-radius: 14px;
}
</style>