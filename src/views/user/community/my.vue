<template>
    <CusNav :title="$t('我的社区')">
        <div class="tr rel">
            <span class="size26" @click="routerPush('/community/apply')">新成员</span>
            <div class="dot"></div>
        </div>
    </CusNav>
    <div class="pl30 pr30 pt30 rel">
        
        <div class="top">
            <div class="tag size24 flex ac">有效社团</div>
            <div class="tag tag1 size24 flex ac">无效社团</div>
            <div class="flex ac">
                <img src="@/assets/user/20.png" class="img100 avatar">
                <div class="flex1">
                    <div class="flex jb ac">
                        <div class="size28 bold6">社区名称</div>
                        <div class="size24 bold6">20/100</div>
                    </div>
                    <div class="size24 opc5 mt10">创建人 1234567890@qq.com</div>
                </div>
            </div>
            <div class="line mt24 mb20"></div>
            <div class="flex ac">
                <img src="@/assets/user/23.png" class="img26 mr10">
                <div class="size24 opc5 line1 flex1">欢迎来到我们的社区！！</div>
            </div>
        </div>

        <div class="flex mt30 size28 bold6">
            <div class="mainButton mainButtonDel flex jc ac main btn flex1 mr20 ">退出社团</div>
            <div class="mainButton flex jc ac main btn flex1">添加新成员</div>
        </div>
        

        <div class="mainCard mt40">
            <div class="flex">
                <div class="flex1">
                    <div class="flex ac">
                        <img src="@/assets/user/24.png" class="img32 mr10">
                        <div class="size24 opc5">社区总业绩</div>
                    </div>
                    <div class="size40 bold main mt30">
                        <CusNumber :amount="1485025.26" sizeClass="size24"></CusNumber>
                    </div>
                    <div class="flex mt30">
                        <div class="ccy flex ac">
                            <img src="@/assets/common/usdt.png" class="img32 mr10">
                            <div class="size24">{{ assetUSDT }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex1">
                    <div class="flex ac">
                        <img src="@/assets/user/25.png" class="img32 mr10">
                        <div class="size24 opc5">社区当日业绩</div>
                    </div>
                    <div class="size40 bold green mt30 flex ac">
                        +<CusNumber :amount="1485025.26" sizeClass="size24"></CusNumber>
                    </div>
                    <div class="flex mt30">
                        <div class="ccy flex ac">
                            <img src="@/assets/common/usdt.png" class="img32 mr10">
                            <div class="size24">{{ assetUSDT }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box mt38">
                <CusTitle title="全网社区排行榜"></CusTitle>
                <div class="pl20 pr20 mt35">
                    <div class="pt15 pb15 flex jb ac">
                        <div class="flex ac">
                            <img src="@/assets/user/26.png" class="img32 mr8">
                            <div class="size24 bold">1284983472@qq.com</div>
                        </div>
                        <div class="flex ac">
                            <div class="size24 bold mr10" v-init="1000"></div>
                            <img src="@/assets/common/usdt.png" class="img24">
                        </div>
                    </div>
                    <div class="pt15 pb15 flex jb ac">
                        <div class="flex ac">
                            <img src="@/assets/user/27.png" class="img32 mr8">
                            <div class="size24 bold">1284983472@qq.com</div>
                        </div>
                        <div class="flex ac">
                            <div class="size24 bold mr10" v-init="1000"></div>
                            <img src="@/assets/common/usdt.png" class="img24">
                        </div>
                    </div>
                    <div class="pt15 pb15 flex jb ac">
                        <div class="flex ac">
                            <img src="@/assets/user/28.png" class="img32 mr8">
                            <div class="size24 bold">1284983472@qq.com</div>
                        </div>
                        <div class="flex ac">
                            <div class="size24 bold mr10" v-init="1000"></div>
                            <img src="@/assets/common/usdt.png" class="img24">
                        </div>
                    </div>
                    <div class="pt15 pb15 flex jb ac">
                        <div class="flex ac">
                            <div class="flex jc ac img32 mr8 size24 opc5 bold">4</div>
                            <div class="size24 bold">1284983472@qq.com</div>
                        </div>
                        <div class="flex ac">
                            <div class="size24 bold mr10" v-init="1000"></div>
                            <img src="@/assets/common/usdt.png" class="img24">
                        </div>
                    </div>
                </div>

                <div class="mainButton mt30 flex jc ac size26 bold6 btn" @click="routerPush('/community/rank')">
                    <img src="@/assets/user/29.png" class="img36 mr10">
                    <div>查看全部排行榜</div>
                </div>
            </div>
        </div>

        <div class="gap40"></div>
        <Member></Member>


    </div>
</template>

<script setup lang="ts">
import CusNav from '@/components/CusNav/index.vue'
import CusNumber from '@/components/CusNumber/index.vue'
import Member from '../components/Member.vue';
import { assetUSDT } from '@/config';
import { routerPush } from '@/router';
import CusTitle from '@/components/CusTitle/index.vue'
</script>

<style lang="scss" scoped>
.dot{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $red;
    position: absolute;
    top: 0px;
    right: -6px;
    z-index: 1;
}
.top{
    background: linear-gradient(140.58deg, #FFE7AB 5.95%, #D3AC61 94.05%);
    border-radius: 20px;
    padding: 30px;
    color: #000000;
    position: relative;
    .tag{
        background: linear-gradient(90deg, #5CC751 0%, #11B700 100%);
        border-radius: 25px 0 0 25px;
        height: 50px;
        padding: 0 30px 0 26px;
        color: #FFFFFF;
        position: absolute;
        right: 0;
        bottom: 64px;
        z-index: 1;
    }
    .tag1{
        background: #000000;
    }
    .avatar{
        border-radius: 16px;
        margin-right: 20px;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #00000033;
    }
}
.btn{
    height: 88px;
    border-radius: 44px;
}
.ccy{
    height: 48px;
    border-radius: 24px;
    background-color: #FFFFFF1A;
    padding: 0 12px;
}
.box{
    background: linear-gradient(#C19F4F4D, #C19F4F00);
    padding: 40px 10px 12px 10px;
    border-radius: 20px;
}
</style>