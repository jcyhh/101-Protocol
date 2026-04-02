<template>
    <CusNav :title="$t('我的卡包')" :show-bg="false" :show-glass="false"></CusNav>

    <CusTab v-model="current" :list="tabs"></CusTab>

    <van-pull-refresh class="page rel" v-bind="props">
        <van-list class="page" v-bind="listProps">
            <div class="pl30 pr30">

                <div class="cell card mb20" v-for="(item, index) in list" :key="index">
                    <div class="flex ast">
                        <img :src="getCardIcon(item?.product?.id)" class="cardimg">
                        <div class="flex col jb ml24">
                            <div class="size28">{{ item?.product?.name }}</div>
                            <div>
                                <div class="flex">
                                    <div class="price bold">
                                        <span class="size48" v-init="item?.profit"></span>
                                        <span class="ml5 size26">{{ assetUSDT }}</span>
                                    </div>
                                </div>
                                <div class="size24 opc5 mt10">返佣</div>
                            </div>
                        </div>
                    </div>
                    <div class="line mt30"></div>
                    <div class="flex mt20">
                        <div class="flex1">
                            <div class="size20 opc5">抢购价格</div>
                            <div class="bold size24 mt10">
                                <span v-init="item?.usdt_amount"></span>
                                <span class="ml5">{{ assetUSDT }}</span>
                            </div>
                        </div>
                        <div class="flex1">
                            <div class="size20 opc5">支付</div>
                            <div class="bold size24 mt10">
                                <span v-init="item?.token_amount"></span>
                                <span class="ml5">{{ item?.ccy=='balance_nftc' ? assetNFTC : assetAIX }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CusEmpty v-if="list?.length==0"></CusEmpty>
            </div>
        </van-list>
    </van-pull-refresh>

</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import CusTab from '@/components/CusTab/index.vue'
import { assetAIX, assetNFTC, assetUSDT } from '@/config';
import { t } from '@/locale';
import { computed, ref, watch } from 'vue';
import { useLoadList } from '@/hooks/useLoadList';
import { usePullRefresh } from '@/hooks/usePullRefresh';
import CusEmpty from '@/components/CusEmpty/index.vue'
import { useCardIcon } from '@/hooks/useCardIcon';

const { getCardIcon } = useCardIcon()

const current = ref(0)

const tabs = computed(() => ([
    {
        name: t('未返佣'),
        value: 1
    },
    {
        name: t('已返佣'),
        value: 0
    }
]))

const params = computed(() => ({ status: tabs.value[current.value].value }))
const { list, props: listProps, loadList } = useLoadList('/api/order', '', params)
const { props } = usePullRefresh(loadList)

watch(current, () => loadList(), { immediate: true })
</script>

<style lang="scss" scoped>
.card {
    padding: 30px;
    border-radius: 20px;

    &::before {
        border-radius: 20px;
    }
}

.cardimg {
    width: 280px;
    height: 168px;
}

.price {
    display: inline-block;
    background: linear-gradient(281.88deg, #FFF1BF 24.66%, #FFF1BF 37.09%, #FFCD48 39.28%, #FFF1BF 59.99%, #FFCD48 64.38%, #FFF1BF 75.34%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.line {
    width: 100%;
    height: 1px;
    background-color: #FFFFFF1F;
}

.page {
    width: 100vw;
    min-height: calc(100vh - 200px);
    min-height: calc(100dvh - 200px);
}
</style>