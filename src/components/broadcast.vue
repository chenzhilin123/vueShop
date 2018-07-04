<template>
    <div class="broadcast">
        <img v-lazy="hots" alt="" class="hot">
        <div class="line"></div>
        <img v-lazy="broadcase" alt="" class="broadcase">
        <p>{{ this.message }}</p>
    </div>
</template>
<script>
    export default {
        name: 'broadcast',
        props: ['message'],
        data () {
            return {
                hots: require('../assets/index-img/hot.png'),
                broadcase: require('../assets/index-img/broadcast.png')
            }
        }
    }
</script>
<style lang="scss" scoped>
.broadcast {
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: .2rem 0;
    display: flex;
    align-items: center;
    .hot {
        width: 1.333333333rem;
        height: 0.333333333rem;
        margin: 0 .2rem;
    }
    .line {
        border: 1px solid #ccc;
        height: .5rem;
    }
    .broadcase {
        width: .333333333rem;
        height: .333333333rem;
        margin: 0 .3rem 0 .2rem;
    }
    p {
        font-size: .32rem;
        font-family: Arial, Helvetica, sans-serif;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
}
</style>

