<template>
    <CusNav :title="$t('全网社区')"></CusNav>

    <van-pull-refresh class="fullPage rel" v-bind="props">
        <van-list class="fullPage" v-bind="listProps">
            <div class="pl30 pr30 pt30 rel">
                <div class="cell card mb20" v-for="(item, index) in list" :key="index">
                    <div class="flex ac">
                        <img :src="item.logo" class="img100 avatar">
                        <div class="flex1">
                            <div class="flex jb ac">
                                <div class="size28 bold6 main">{{ item.name }}</div>
                                <div class="size24 bold6">{{ item.member_count }}/{{ item.community_max_num }}</div>
                            </div>
                            <div class="size24 opc5 mt10">创建人 {{ item.email || item.address }}</div>
                        </div>
                    </div>
                    <div class="line mt24 mb20"></div>
                    <div class="flex jb ac">
                        <div class="flex ac">
                            <img src="@/assets/user/21.png" class="img26 mr10">
                            <div class="size24 opc5 line1 desc">{{ item.desc }}</div>
                        </div>
                        <div class="mainButton btn flex ac main" v-scale @click="openAsk(item)">申请加入</div>
                    </div>
                </div>
                <CusEmpty v-if="list?.length == 0"></CusEmpty>
            </div>
        </van-list>
    </van-pull-refresh>

    <CusAsk v-model:show="show" @submit="submit">确定要申请加入 "{{ currentData?.name }}" 吗？</CusAsk>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { useLoadList } from '@/hooks/useLoadList';
import { usePullRefresh } from '@/hooks/usePullRefresh';
import CusEmpty from '@/components/CusEmpty/index.vue'
import CusAsk from '@/components/CusAsk/index.vue'
import { ref } from 'vue';
import { apiCommunityApply } from '@/api/community';
import { message } from '@/utils/message';
import { t } from '@/locale';

const { list, props: listProps, loadList } = useLoadList('/api/community/rank', 'list')
const { props } = usePullRefresh(loadList)
loadList()

const currentData = ref()
const openAsk = (data:any) => {
    currentData.value = data
    show.value = true
}

const show = ref(false)
const submit = async () => {
    await apiCommunityApply({
        community_id: currentData.value?.id
    })
    message(t('申请已提交'), 'success')
    show.value = false
}
</script>

<style lang="scss" scoped>
.card {
    padding: 24px 24px 20px 24px;
    border-radius: 20px;

    &::before {
        border-radius: 20px;
    }

    .avatar {
        border-radius: 16px;
        margin-right: 20px;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #FFFFFF33;
    }

    .desc {
        width: 300px;
    }

    .btn {
        height: 60px;
        padding: 0 20px;
        border-radius: 30px;
        font-size: 28px;
        font-weight: 600;
    }
}

.bottom {
    width: 100vw;
    padding: 20px 30px 30px 30px;
    background-color: #040404;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
}
</style>