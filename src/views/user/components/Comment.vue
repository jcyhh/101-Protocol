<template>
    <div class="card">
        <div class="flex jb ac">
            <div class="size28 main">{{ data?.email || data?.address }}</div>
            <!-- <div class="flex ac">
                <div class="size22 opc5">200人评论</div>
                <div class="line ml16 mr16"></div>
                <img src="@/assets/user/36.png" class="img24">
            </div> -->
        </div>
        <div class="size24 mt10 opc5">{{ data?.created_at }}</div>
        <div class="size26 mt16 lh40">{{ data?.content }}</div>
        <div class="flex pics grid col3 mt30 mb72" v-if="data?.images && data?.images.length>0">
            <img :src="item" class="picitem" v-for="(item,index) in data?.images" :key="index">
        </div>
        <!-- <div class="pl12">
            <div class="comment" :class="index<1?'':'borderNone'" v-for="(item,index) in 2" :key="index">
                <img src="@/assets/user/37.png" class="img24 pic24">
                <div class="flex jb ac">
                    <div class="size24">1234213456@qq.com</div>
                    <div class="size24 opc5">2026</div>
                </div>
                <div class="size24 mt12 lh40">
                    <span class="opc5">回复</span>
                    <span class="main">@昵称</span>
                    <span class="opc5"> : 评论内容</span>
                </div>
            </div>
        </div>
        <div class="lineCol mb22"></div>
        <div class="flex jc ac size24 opc5">
            <div class="mr10">展开更多</div>
            <van-icon name="arrow-down" />
        </div> -->
    </div>
    <div class="gap20"></div>
</template>

<script setup lang="ts">
defineProps(['data'])
</script>

<style lang="scss" scoped>
.card{
    border: 1px solid #FFFFFF1A;
    background-color: #FFE5A51F;
    border-radius: 20px;
    padding: 30px;
    .line{
        width: 1px;
        height: 20px;
        background-color: #FFFFFF33;
    }
    .lineCol{
        width: 100%;
        height: 1px;
        background-color: #FFFFFF33;
    }
    .pics{
        gap: 15px;
        .picitem{
            width: 200px;
            height: 200px;
            border-radius: 20px;
        }
    }
    .comment{
        border-left: 1px solid #FFFFFF33;
        padding: 0 0 40px 32px;
        position: relative;
        .pic24{
            width: 24px;
            height: 24px;
            position: absolute;
            top: 0;
            left: -12px;
            z-index: 1;
        }
    }
    .borderNone{
        border: none;
    }
}
</style>