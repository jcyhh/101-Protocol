<template>
    <CusNav :title="$t('记录')"></CusNav>
    <van-pull-refresh class="fullPage rel" v-bind="props">
        <van-list class="fullPage" v-bind="listProps">
            <div class="pl30 pr30 pt30 rel">
        
                <div class="cell card mb20" v-for="(item,index) in list" :key="index">
                    <div class="flex jb ac">
                        <div class="size28 bold5">
                            <span v-if="item.type==3">未中奖</span>
                            <span v-else>中奖</span>
                        </div>
                        <div class="size28 bold6">
                            <span class="green" v-if="item.type==1">U卡</span>
                            <span class="main" v-else-if="item.type==2">再来一次</span>
                            <span class="red" v-else>谢谢参与</span>
                        </div>
                    </div>
                    <div class="size24 opc5 mt20">{{ item.created_at }}</div>
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

const { list, props: listProps, loadList } = useLoadList('/api/order/rush_log', '')
const { props } = usePullRefresh(loadList)
loadList()
</script>

<style lang="scss" scoped>
.card{
    border-radius: 20px;
    padding: 30px;
    &::before{
        border-radius: 20px;
    }
}
</style>