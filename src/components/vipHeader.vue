<template>
    <div class="header">
        <div class="person">
            <div class="icon">
                <!-- 个人中心图片 -->
            </div>
            <div class="text">
                <div class="names">{{ this.store.name }}</div>
                <div class="shopStore">
                    <div class="collection">收藏商品( {{ this.store.coll }} )</div>
                    <div class="collection">收藏店铺( {{ this.store.collStore }} )</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        props: {
            store:{
                type: Object,
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../base/css/vip.scss';
.person {
    height: 1.92rem;
    background: url() no-repeat center/cover;
    &:nth-of-type(1){
        @include dpr-img("../assets/vip/myheader.gif");
    }
    display: flex;
    align-items: center;
    padding-left: .3rem;
    .icon {
        width: 1.06rem;
        height: 1.06rem;
        background: white;
        border-radius: 50%;
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1rem;
        margin-left: .3rem;
        .names {
            font-size: .38rem;
            color: white;
        }
        .shopStore {
            display: flex;
            flex-direction: row;
        }
        .collection {
            font-size: .33rem;
            color: white;
            margin-right: .3rem;
        }
    }
}
</style>

