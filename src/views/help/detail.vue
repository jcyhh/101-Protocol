<template>
    <CusNav :title="$t('详情')"></CusNav>
    
    <div class="pl30 pr30 pt30 rel">

        <div class="size30 bold">{{ noticeDetail?.question }}</div>

        <div class="size24 gray mt20" v-init:time="noticeDetail?.updated_at"></div>

        <div class="mt40" v-html="noticeDetail?.content" v-if="noticeDetail?.type==1"></div>

        <video :src="noticeDetail?.video_url" class="helpvideo mt60" controls autoplay muted v-else></video>

    </div>
</template>

<script setup lang="ts">
import { apiHelpDetail } from '@/api/user';
import CusNav from '@/components/CusNav/index.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute()

const noticeDetail = ref()

const loadData = async () => {
    const res:any = await apiHelpDetail(params?.id)
    noticeDetail.value = res
}

onMounted(()=>{
    loadData()
})
</script>

<style lang="scss" scoped>
.helpvideo{
    width: 100%;
    height: auto;
    border-radius: 10px;
}
</style>