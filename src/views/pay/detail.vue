<template>
    <CusNav :title="$t('详情')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="flex ac">
            <div class="size24 mr10">{{ $t('订单号') }} : {{ info?.order_no || '--' }}</div>
            <img src="@/assets/user/17.png" class="img26" v-copy="info?.order_no">
        </div>
        <div class="flex jb ac mt20">
            <div class="size24 opc5">{{ $t('交易时间') }} {{ info?.created_at }}</div>
            <div class="flex ac green" v-if="info?.status==40">{{ info?.status_text }}</div>
            <div class="flex ac red" v-else-if="info?.status==20">{{ info?.status_text }}</div>
            <div class="flex ac main" v-else>{{ info?.status_text }}</div>
        </div>
        <div class="mainCard mt20">
            <div class="size24 opc5">{{ $t('汇款金额') }}</div>
            <div class="fsz32 bold6 mt20"><span v-init="info?.remittance_amount"></span> {{ info?.remittance_currency }}</div>
            <div class="flex jb ac mt20 size24">
                <div>{{ $t('您支付') }}</div>
                <div class="color-green"><span v-init="info?.paid_amount"></span>{{ info?.paid_currency }}</div>
            </div>
            <div class="flex jb ac mt20 size24">
                <div>{{ $t('通道费') }}</div>
                <div><span v-init="info?.channel_fee"></span> USD</div>
            </div>
            <div class="flex jb ac mt20 size24">
                <div>{{ $t('手续费') }}</div>
                <div><span v-init="info?.service_fee"></span> USD</div>
            </div>
            <div class="flex jb ac mt20 size24">
                <div>{{ $t('实时汇率') }}</div>
                <div>{{ info?.exchange_rate }}</div>
            </div>
        </div>
        <div class="flex jb ac mt30 opc5">
            <div>{{ $t('汇款通道') }}</div>
            <div>{{ info?.remittance_channel }}</div>
        </div>
        <div class="flex jb ac mt30 opc5">
            <div>{{ $t('汇款目的') }}</div>
            <div>{{ purposeText(info?.purpose) }}</div>
        </div>
        <div class="flex jb ac mt30 opc5" v-if="info?.arrived_at">
            <div>{{ $t('到账时间') }}</div>
            <div>{{ info?.arrived_at }}</div>
        </div>
        <div class="size26 mt30">{{ $t('收款人信息') }}</div>
        <div class="flex jb ac mt30 opc5">
            <div>{{ $t('银行名称') }}</div>
            <div>{{ info?.bank_name }}</div>
        </div>
        <div class="flex jb ac mt30 opc5">
            <div>{{ $t('银行账号') }}</div>
            <div>{{ info?.bank_account_masked }}</div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { apiPayDetail } from '@/api/pay';
import { t } from '@/locale';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute()

const info = ref()
const loadData = async () => {
    const res:any = await apiPayDetail(params?.id)
    info.value = res.data
}

const purposeMap:any = {
    'Loan Settlement': '贷款结算',
    'Business Transaction': '业务往来',
    'Service Fee': '服务费用',
    'Procurement Payment': '采购款项',
    'Engineering Payment': '工程款项',
    'Project Payment': '项目款项',
    'Investment Payment': '投资款项',
    'Expense Payment': '费用支付',
    'Fund Transfer': '资金划拨',
    'Loan Repayment': '借款偿还',
    'Other Purpose': '其它用途'
}
const purposeText = (value:string) => value ? t(purposeMap[value] || value) : ''

onMounted(()=>{
    loadData()
})
</script>

<style lang="scss" scoped>
</style>