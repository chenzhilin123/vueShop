<template>
    <div class="header">
        <div class="person">
            <div class="icon">
                <!-- 个人中心图片 -->
            </div>
            <div class="text">
                <div class="names">陈志林</div>
                <div class="shopStore">sdff</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

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
        margin-left: .5rem;
    }
}
</style>

