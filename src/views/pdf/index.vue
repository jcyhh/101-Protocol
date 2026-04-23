<template>
    <CusNav :title="title"></CusNav>
    <iframe id='pdfIframe' :src="src" class="pdf"></iframe>
</template>

<script setup lang="ts">
import { appPublicPath } from '@/config';
import { t } from '@/locale';
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CusNav from '@/components/CusNav/index.vue'

const { params } = useRoute()

const useStore = useAppStore()
const { lang } = storeToRefs(useStore)

const src = computed(()=>{
    if(params.type=='whitePaper')return `${appPublicPath}pdf/web/viewer.html?file=${appPublicPath}whitePaper_${lang.value=='zh-Hans'?'zh':'en'}.pdf`
    else return `${appPublicPath}pdf/web/viewer.html?file=${appPublicPath}csbg.pdf`
})

const title = computed(()=>params.type=='whitePaper'?t('白皮书'):t('初审报告'))
</script>

<style lang="scss" scoped>
.pdf{
    width: 100vw;
    height: calc(100vh - 100px);
    height: calc(100dvh - 100px);
    border: none;
}
</style>