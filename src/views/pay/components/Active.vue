<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="bottom" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('激活') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="size28 bold5 mt60">{{ $t('交易密码') }}</div>
                <div class="inp flex jb ac mt20 size28">
                    <input type="password" v-model="password" :placeholder="$t('请设置交易密码')" class="flex1">
                </div>

                <div class="size28 bold5 mt30">{{ $t('确认密码') }}</div>
                <div class="inp flex jb ac mt20 size28">
                    <input type="password" v-model="password1" :placeholder="$t('请再次输入交易密码')" class="flex1">
                </div>

                <div class="mainBtn mt100 flex jc ac size28 main bold6 btn" @click="submit">{{ $t('确认') }}</div>

                <div class="safeArea"></div>
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from '@/utils/message';
import { t } from '@/locale';
import { apiCardActive } from '@/api/card';

const id = ref()

const show = ref(false)

const password = ref()
const password1 = ref()

const open = (data:any) => {
    id.value = data
    show.value = true
}

const submit = async () => {
    if(!password.value)return message(t('请设置交易密码'))
    if(!password1.value)return message(t('请再次输入交易密码'))
    if(password.value != password1.value)return message(t('密码输入不一致'))
    await apiCardActive({
        pin: password.value,
        card_id: id.value
    })
    message(t('激活成功'), 'success')
    show.value = false
}

defineExpose({
    open
})
</script>

<style lang="scss" scoped>
.inp{
    height: 90px;
    padding: 0 30px;
    background-color: #FFE5A51F;
    border: 1px solid #FFFFFF1A;
    border-radius: 14px;
    .line{
        width: 1px;
        height: 44px;
        background-color: #FFFFFF33;
    }
}
</style>