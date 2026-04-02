<template>
    <CusNav :title="$t('规则')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        <div v-html="lottery_text"></div>
    </div>
</template>

<script setup lang="ts">
import { apiDrawConfig } from '@/api/card'
import CusNav from '@/components/CusNav/index.vue'
import { onMounted, ref } from 'vue'

const lottery_text = ref()
const loadPrice = async () => {
    const res:any = await apiDrawConfig()
    lottery_text.value = res.lottery_text
}

onMounted(()=>{
    loadPrice()
})
</script>

<style lang="scss" scoped>

</style>