<template>
    <CusNav :title="$t('我的卡包')" :show-bg="false" :show-glass="false"></CusNav>

    <CusTab v-model="current" :list="tabs"></CusTab>

    <div class="pl30 pr30">
        
        <div class="cell card mb20" v-for="(item, index) in 10">
            <div class="flex ast">
                <img src="@/assets/card/0.png" class="cardimg">
                <div class="flex col jb ml24">
                    <div class="size28">全球黑金卡</div>
                    <div>
                        <div class="flex">
                            <div class="price bold">
                                <span class="size48" v-init="1000"></span>
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
                        <span v-init="1000"></span>
                        <span class="ml5">{{ assetUSDT }}</span>
                    </div>
                </div>
                <div class="flex1">
                    <div class="size20 opc5">支付</div>
                    <div class="bold size24 mt10">
                        <span v-init="1000"></span>
                        <span class="ml5">{{ assetUSDT }}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import CusTab from '@/components/CusTab/index.vue'
import { assetUSDT } from '@/config';
import { t } from '@/locale';
import { computed, ref } from 'vue';

const current = ref(0)

const tabs = computed(()=>([
    {
        name: t('未返佣'),
        value: 1
    },
    {
        name: t('已返佣'),
        value: 2
    }
]))
</script>

<style lang="scss" scoped>
.card{
    padding: 30px;
    border-radius: 20px;
    &::before{
        border-radius: 20px;
    }
}
.cardimg{
    width: 280px;
    height: 168px;
}
.price{
    display: inline-block;
    background: linear-gradient(281.88deg, #FFF1BF 24.66%, #FFF1BF 37.09%, #FFCD48 39.28%, #FFF1BF 59.99%, #FFCD48 64.38%, #FFF1BF 75.34%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
.line{
    width: 100%;
    height: 1px;
    background-color: #FFFFFF1F;
}
</style>