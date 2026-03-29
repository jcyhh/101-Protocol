<template>
    <VanPopup v-model:show="show" style="background: transparent;" position="bottom" overlay-class="cusMask" teleport="#app">
        <div class="popup">
            <div class="content">
                <div class="flex jb ac">
                    <div class="size28 main bold6">{{ $t('创建社团') }}</div>
                    <van-icon size="20" name="cross" color="#8D9094" @click="show=false" />
                </div>

                <div class="flex jc mt80">
                    <img src="@/assets/user/22.png" class="upload">
                </div>
                <div class="tc size28 bold6 mt30">社团头像</div>
                <div class="size26 mt40">社团名称</div>
                <div class="inp mt30 flex">
                    <input type="text" placeholder="请给社团起一个名称吧！" class="flex1 size28">
                </div>
                <div class="size26 mt40">社团介绍</div>
                <div class="area mt30">
                    <textarea :maxlength="40" placeholder="请简单介绍一下您的社团" class="size28 areainp" />
                    <div class="tr size24 opc5">0/40</div>
                </div>

                <div class="mainButton mt40 flex jc ac size28 main bold6 btn" @click="submit">确认创建</div>
                <div class="safeArea"></div>
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">
import { routerReplace } from '@/router';

const show = defineModel<boolean>('show', { default: false })

const submit = () => {
    routerReplace('/community/my')
}
</script>

<style lang="scss" scoped>
.btn{
    height: 88px;
    border-radius: 44px;
}
.upload{
    width: 200px;
    height: 200px;
    border-radius: 16px;
    object-fit: cover;
}
.inp{
    height: 90px;
    background-color: #FFE5A51F;
    border-radius: 14px;
    padding: 0 30px;
    border: 1px solid #FFFFFF1A;
}
.area{
    padding: 30px;
    background-color: #FFE5A51F;
    border-radius: 14px;
    border: 1px solid #FFFFFF1A;
    .areainp{
        background-color: transparent;
        border: none;
        height: 200px;
        width: 100%;
        resize: none;
    }
}
</style>