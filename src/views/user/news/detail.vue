<template>
    <CusNav :title="$t('详情')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30">
        
        <div class="mainCard">
            <div class="size40 main lh60">{{ info?.title }}</div>
            <div class="flex jb ac mt30">
                <div class="size24">来自 {{ info?.email }}</div>
                <div class="size24 opc5">{{ info?.created_at }}</div>
            </div>
            <div class="flex jb ac mt12">
                <div class="flex ac">
                    <img src="@/assets/user/20.png" class="img34 mr6">
                    <div class="size20 opc5 mr10">{{ info?.community_name }}</div>
                    <div class="size20 main">NO.{{ info?.community_rank }}</div>
                </div>
                <div class="size24 opc5">发布时间</div>
            </div>
            <div class="line mt40 mb40"></div>
            <div class="size26 lh40">{{ info?.content }}</div>
        </div>

        <div class="size30 mt40 mb26">
            <span class="bold">评论</span>
            <span class="size24 ml5">({{ info?.comment_count }})</span>
        </div>

        <van-list v-bind="listProps">
            <Comment :data="item" v-for="(item,index) in list" :key="index"></Comment>
            <CusEmpty v-if="list?.length==0"></CusEmpty>
        </van-list>

    </div>

    <div class="gap120"></div>
    <div class="safeArea"></div>
    <div class="bottom">
        <div class="bottomBox flex jb ac">
            <div class="bottomSearch flex ac" @click="show=true">
                <div class="size28 opc5">说点什么</div>
            </div>
        </div>
        <div class="safeArea"></div>
    </div>

    <Judeg v-model:show="show" :id="params?.id" @success="loadList()"></Judeg>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import Comment from '../components/Comment.vue';
import { useRoute } from 'vue-router';
import { apiCommentDetail, apiCommentJudge } from '@/api/comment';
import { computed, onMounted, ref } from 'vue';
import { useLoadList } from '@/hooks/useLoadList';
import CusEmpty from '@/components/CusEmpty/index.vue'
import { message } from '@/utils/message';
import { t } from '@/locale';
import Judeg from '../components/Judeg.vue';

const { params } = useRoute()

const show = ref(false)

const info = ref()
const loadData = async () => info.value = await apiCommentDetail(params?.id)

const paramsData = computed(()=>({
    parent_id: 0,
    post_id: params?.id
}))
const { list, props: listProps, loadList } = useLoadList('/api/forum/comments', 'comments', paramsData)
loadList()

const content = ref()

const submit = async () => {
    if(!content.value)return message(t('请输入评论'))
    await apiCommentJudge({
        parent_id: 0,
        post_id: params?.id,
        content: content.value
    })
    message(t('评论成功'), 'success')
    content.value = ''
    loadList()
}

onMounted(()=>{
    loadData()
})
</script>

<style lang="scss" scoped>
.bottom{
    background: linear-gradient(#FFE5A51F, #FFE5A500);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    .bottomBox{
        height: 100px;
        padding: 0 30px;
        .bottomSearch{
            flex: 1;
            background-color: #00000033;
            height: 70px;
            border: 2px solid #DBDBDB33;
            padding: 0 30px;
            border-radius: 35px;
        }
        .send{
            height: 60px;
            border-radius: 30px;
            padding: 0 30px;
            font-size: 24px;
        }
    }
}
</style>