<template>
    <div class="navList">
        <div class="Category_Navigation">
            <div class="item_list under" v-for="(item,index) in this.list">
                <div v-for="(item,index) in item.nav" style="position: relative;">
                    <span v-if="item.count">{{ item.count }}</span>
                    <img v-lazy="item.img" alt="" :class="item.class">
                    <p :class="item.textClass">{{ item.title }}</p>
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
        list: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.Category_Navigation {
    padding: 0.3rem 0.3rem;
    .item_list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            display: block;
            width: .35rem;
            height: .35rem;
            border-radius: 50%;
            position: absolute;
            top: -0.2rem;
            right: 0;
            background: #ff2150;
            color: white;
            text-align: center;
            line-height: .35rem;
            font-size: .28rem;
        }
    }
    .item_list>div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 0.32rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    .item_list>div>p {
        margin-top: .2rem;
    }
    .under {
        margin-bottom: .3rem;
    }
}
.indexImg {
    width: 1.06666666rem;
    height: 1.06666666rem;
}
.vipImg {
    width: .5rem;
    height: .5rem;
}
.grays {
    color: gray;
}
</style>
