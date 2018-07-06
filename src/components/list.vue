<template>
    <div class="list" :class="this.list.isline?'isList':''">
            <div class="listItem">
                <div class="leftIcon">
                    <img v-lazy="this.list.icon" alt="Icon">
                    {{ this.list.leftText }}
                </div>
                <router-link :to="this.list.toPath" tag="div">
                <div class="rightMess">
                    {{ this.list.rightText }}
                    <img v-lazy="rightIcon" alt="进入">
                </div>
                </router-link>
            </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            rightIcon: require('../assets/right.png')
        }
    },
    props: {
        list: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../base/css/vip.scss';
.router-link-active {
    color: black;
}
.isList {
    // @include bs(1px);
    border-bottom: 1px solid gray;
}
.listItem {
    display: flex;
    padding: 0 .3rem 0 .3rem;
    height: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .leftIcon {
        font-size: .32rem;
        display: flex;
        align-items: center;
        line-height: .32rem;
        img {
            width: .4rem;
            height: .4rem;
            margin-right: .1rem;
        }
    }
    .rightMess {
        display: flex;
        align-items: center;
        font-size: .30rem;
        line-height: .30rem;
        color: gray;
        img {
            width: .35rem;
            height: .35rem;
            margin-left: .1rem;
        }
    }
}
</style>

