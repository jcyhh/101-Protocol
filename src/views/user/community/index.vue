<template>
    <CusNav :title="$t('全网社区')"></CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="cell card mb20" v-for="(item,index) in 10" :key="index">
            <div class="flex ac">
                <img src="@/assets/user/20.png" class="img100 avatar">
                <div class="flex1">
                    <div class="flex jb ac">
                        <div class="size28 bold6 main">社区名称</div>
                        <div class="size24 bold6">20/100</div>
                    </div>
                    <div class="size24 opc5 mt10">创建人 1234567890@qq.com</div>
                </div>
            </div>
            <div class="line mt24 mb20"></div>
            <div class="flex jb ac">
                <div class="flex ac">
                    <img src="@/assets/user/21.png" class="img26 mr10">
                    <div class="size24 opc5 line1 desc">欢迎来到我们的社区！！</div>
                </div>
                <div class="mainButton btn flex ac main">申请加入</div>
            </div>
        </div>

    </div>

    <div class="safeArea"></div>
    <div class="gap130"></div>
    <div class="bottom">
        <div class="mainBtn size28 bold6 flex jc ac" @click="show=true">创建社区</div>
        <div class="safeArea"></div>
    </div>

    <Create v-model:show="show"></Create>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import Create from '../components/Create.vue';
import { ref } from 'vue';

const show = ref(false)
</script>

<style lang="scss" scoped>
.card{
    padding: 24px 24px 20px 24px;
    border-radius: 20px;
    &::before{
        border-radius: 20px;
    }
    .avatar{
        border-radius: 16px;
        margin-right: 20px;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #FFFFFF33;
    }
    .desc{
        width: 300px;
    }
    .btn{
        height: 60px;
        padding: 0 20px;
        border-radius: 30px;
        font-size: 28px;
        font-weight: 600;
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
</style>