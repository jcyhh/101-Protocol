<template>
    <CusNav :title="$t('详情')" :show-bg="false"></CusNav>
    <div class="pl30 pr30 pt30">
        
        <div class="mainCard">
            <div class="size40 main lh60">#云南滇东南大环线，最值得打卡的有哪些景点!</div>
            <div class="flex jb ac mt30">
                <div class="size24">来自 1321234567@qq.com</div>
                <div class="size24 opc5">2026</div>
            </div>
            <div class="flex jb ac mt12">
                <div class="flex ac">
                    <img src="@/assets/user/20.png" class="img34 mr6">
                    <div class="size20 opc5 mr10">社区名称</div>
                    <div class="size20 main">NO.10</div>
                </div>
                <div class="size24 opc5">发布时间</div>
            </div>
            <div class="line mt40 mb40"></div>
            <div class="size26 lh40">这个月想要去云南的大环线，有经验的小伙伴们给我画推荐几个好玩的景点，避免踩坑！！！</div>
        </div>

        <div class="size30 mt40 mb26">
            <span class="bold">评论</span>
            <span class="size24">(</span>
            <span class="size24" v-init="1000"></span>
            <span class="size24">)</span>
        </div>

        <Comment v-for="(item,index) in 10" :key="index"></Comment>

    </div>

    <div class="gap120"></div>
    <div class="safeArea"></div>
    <div class="bottom">
        <div class="bottomBox flex jb ac">
            <div class="bottomSearch flex ac">
                <input type="text" placeholder="说点什么" class="flex1 size28">
            </div>
            <div class="flex col jc ac flex0 ml20">
                <img src="@/assets/user/38.png" class="img40">
                <div class="size24 mt8 opc5" v-init="1000"></div>
            </div>
        </div>
        <div class="safeArea"></div>
    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import Comment from '../components/Comment.vue';
</script>

<style lang="scss" scoped>
.bottom{
    background: linear-gradient(#FFE5A51F, #FFE5A500);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    .bottomBox{
        height: 100px;
        padding: 0 30px;
        .bottomSearch{
            flex: 1;
            background-color: #00000033;
            height: 70px;
            border: 2px solid #DBDBDB33;
            padding: 0 30px;
            border-radius: 35px;
        }
    }
}
</style>