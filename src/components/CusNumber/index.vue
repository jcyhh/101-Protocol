<template>
    <div>
        <span v-init="amountInt"></span>
        <span :class="sizeClass">{{ amountFloat }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['amount', 'sizeClass'])

const amountInt = computed(()=>{
    if(!props.amount)return 0
    return `${Number(props.amount)}`.split('.')[0]
})

const amountFloat = computed(()=>{
    if(!props.amount)return ''
    const arr = `${Number(props.amount)}`.split('.')
    return arr.length > 1 ? `.${arr[1]}` : ''
})
</script>

<style lang="scss" scoped>

</style>