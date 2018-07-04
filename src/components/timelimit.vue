<template>
<div>
    <div class="timelimit">
        <div class="top">
            <div class="limit">
                <span>{{ this.storeTop.title }}</span>
                <img v-lazy="limitImg" alt="">
                <em>01.23</em>
            </div>
            <div class="right_">
                <div class="ricle">{{ this.storeTop.discount }}</div>
                <img v-lazy="rightIcon" alt="">
            </div>
        </div>
        <div class="list">
            <div class="box" v-for="(item,index) in store" :key="index">
                <img v-lazy="item.img" alt="">
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
    <div class="timelimit">
        <div class="top">
            <div class="limit">
                <span>今日特卖</span>
            </div>
            <div class="right_">
                <div class="ricle">0.1元抢购</div>
                <img v-lazy="rightIcon" alt="">
            </div>
        </div>
        <div class="list unders">
            <div class="box" v-for="(item,index) in store" :key="index">
                <img v-lazy="item.img" alt="">
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'timelimit',
        data () {
            return {
                limitImg: require('../assets/index-img/clock.png'),
                rightIcon: require('../assets/right.png')
            }
        },
        props: {
            store:{
                type: Array,
                default: null
            },
            storeTop:{
                type: Object,
                default: null
            }
        }
    }
</script>
<style lang="scss" scoped>
.timelimit {
    width: 100%;
    white-space: nowrap;
    margin-top: .3rem;
    .top {
        padding: .2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ccc;
        img {
            width: .24rem;
            height: .24rem;
            margin-left: .1rem;
        }
        em {
            font-size: .32rem;
            margin-left: .2rem;
        }
        .right_ {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .limit>span {
        color: #ff2150;
        font-size: .32rem;
    }
    .ricle {
        padding: .1rem .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .1rem;
        border: 1px solid #ff2150;
        color: #ff2150;
        font-size: .32rem;
    }
    .unders {
        margin-bottom: 1.111rem;
    }
}
.list {
    border-bottom: 1px solid  #ccc;
    border-top: 1px solid  #ccc;
    overflow-x: auto;
    .box {
        border-right: 1px solid #ccc;
        padding: .5rem .5rem;
        text-align: center;
        display: inline-block;
    }
    .box>img {
        width: 1.533333rem;
        height: 1.6rem;
    }
    .box>p {
        margin-top: .2rem;
        font-size: .3rem;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>

