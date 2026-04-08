<template>
    <CusNav :title="$t('保存卡信息')"></CusNav>
    <div class="pt30 rel">
        
        <div class="size32 bold6 mb20 pl30">{{ $t('卡片信息') }}</div>

        <iframe :src="link" frameborder="0" class="cardweb"></iframe>

        <div class="mt20 pl30 pr30">
            <div class="size32 bold6">{{ $t('卡号') }}</div>
            <div class="size24 mt20 opc5">{{ $t('点击') }} <span>Show Data</span> {{ $t('复制卡片信息后填入进行绑定或修改卡信息') }}</div>
            <div class="cell card flex jb ac mt30">
                <input type="text" v-model="complete_card_number" :placeholder="$t('请输入卡号')" class="flex1 size28">
            </div>
            <div class="cell card flex jb ac mt30">
                <input type="text" v-model="cvv" placeholder="cvv" class="flex1 size28">
            </div>
            <div class="cell card flex jb ac mt30">
                <input type="text" v-model="expire_date" placeholder="Expire Date" class="flex1 size28">
            </div>
        </div>

    </div>

    <div class="safeArea"></div>
    <div class="gap130"></div>
    <div class="bottom">
        <div class="mainBtn size28 bold6 flex jc ac" @click="submit">{{ $t('保存') }}</div>
        <div class="safeArea"></div>
    </div>
</template>

<script setup lang="ts">
import { apiCardInfo, apiCardInfoUpdate } from '@/api/card';
import CusNav from '@/components/CusNav/index.vue'
import { t } from '@/locale';
import { routerGo } from '@/router';
import { message } from '@/utils/message';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute()

const link = ref('')
const loadLink = async () => {
    const res:any = await apiCardInfo({card_id: params.id})
    link.value = res.url
}

const complete_card_number = ref()
const cvv = ref()
const expire_date = ref()
const submit = async () => {
    if(!complete_card_number.value)return message(t('请输入卡号'))
    if(!cvv.value)return message(t('请输入CVV'))
    if(!expire_date.value)return message(t('请输入Expire Date'))
    await apiCardInfoUpdate({
        card_id: params.id,
        complete_card_number: complete_card_number.value,
        cvv: cvv.value,
        expire_date: expire_date.value
    })
    message(t('操作成功'), 'success')
    setTimeout(() => {
        routerGo()
    }, 1200);
}

onMounted(()=>{
    loadLink()
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
.cardweb{
    width: 100vw;
    height: 500px;
}
</style>