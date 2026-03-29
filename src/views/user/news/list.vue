<template>
    <CusNav :title="$t('全网论坛')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30">
        
        <div class="cell card mb24" v-for="(item,index) in 10" :key="index" @click="routerPush(`/news/id`)">
            <div class="flex">
                <div class="flex1">
                    <div class="line1 size30 bold6">#分享出您的咖啡器具和故事</div>
                    <div class="line1 size24 opc5 mt20">#分享出您的咖啡器具和故事</div>
                </div>
                <img src="@/assets/user/20.png" class="img130 cover flex0 ml30">
            </div>
            <div class="size24 mt6">来自 1321234567@qq.com</div>
            <div class="flex jb ac mt10">
                <div class="flex ac">
                    <img src="@/assets/user/20.png" class="img34 mr6">
                    <div class="size20 opc5 mr10">社区名称</div>
                    <div class="size20 main">NO.10</div>
                </div>
                <div class="flex ac">
                    <div class="size22 opc5">200人评论</div>
                    <div class="line ml16 mr16"></div>
                    <img src="@/assets/user/36.png" class="img24">
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import { routerPush } from '@/router';
</script>

<style lang="scss" scoped>
.card{
    border-radius: 20px;
    padding: 30px;
    &::before{
        border-radius: 20px;
    }
    .cover{
        border-radius: 10px;
        object-fit: cover;
    }
    .line{
        width: 1px;
        height: 20px;
        background-color: #FFFFFF33;
    }
}
</style>