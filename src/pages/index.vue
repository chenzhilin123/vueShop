<template>
    <div>
        <SwiperComponent :swiperOption="swiperOption"></SwiperComponent>
        <!-- <Film :el="films.el"></Film> -->
        <!-- NavList -->
        <NavList :list="classE"/>
        <!-- NavList -->
        <!-- 广播 -->
        <Brodcase :message="message"/>
        <!-- 广播 -->

        <!-- timme-limit -->
        <TimeLimit :store="store" :storeTop="storeTop"/>
        <!-- timme-limit -->
    </div>
</template>

<script>
    import SwiperComponent from '../components/swiper.vue'
    import Film from '../components/film.vue'
    import Brodcase from '../components/broadcast.vue'
    import TimeLimit from '../components/timelimit.vue'
    import NavList from '../components/navList.vue'
    export default {
        data(){
            return{
                swiperOption: {
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    direction: 'horizontal',   
                    autoplayDisableOnInteraction : false //解决滑动后不会自动播放的问题       
                },
                films: {
                    el: "today"
                },
                classE: [
                    {
                        nav: [
                                { img: require('../assets/index-img/Special.png'),title:'今日特惠',class: 'indexImg'},
                                { img: require('../assets/index-img/Global.png'),title:'全球购',class: 'indexImg'},
                                { img: require('../assets/index-img/Recharge.png'),title:'充值中心',class: 'indexImg'},
                                { img: require('../assets/index-img/integral.png'),title:'我的积分',class: 'indexImg'}
                            ]
                    },
                    {
                        nav: [
                                { img: require('../assets/index-img/Signin.png'),title:'今日签到',class: 'indexImg'},
                                { img: require('../assets/index-img/coupon.png'),title:'获得优惠',class: 'indexImg'},
                                { img: require('../assets/index-img/Lightning-purchase.png'),title:'极速购买',class: 'indexImg'},
                                { img: require('../assets/index-img/Brand-street.png'),title:'大品牌街',class: 'indexImg'}
                            ]
                    }
                ],
                message: '商城开业狂欢，四重好礼等你来抢！',
                store: [
                    { img: require('../assets/index-img/design_03.png'), title: '超级特优电饭锅'},
                    { img: require('../assets/index-img/design_05.png'), title: '达夫妮秋款包包'},
                    { img: require('../assets/index-img/design_07.png'), title: '特百惠优质水杯'},
                    { img: require('../assets/index-img/design_09.png'), title: '易捷手机充电宝'}
                ],
                storeTop: {
                    title: '限时抢购',
                    discount: '全场一折'
                }
            }
        },
        components: {
            SwiperComponent,
            Film,
            Brodcase,
            TimeLimit,
            NavList
        },
        mounted () {
            //获取热门资讯消息
            //获取限时抢购商品
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
    }
    .item_list>div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 0.32rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    .item_list>div>img{
        width: 1.06666666rem;
        height: 1.06666666rem;
    }
    .item_list>div>p {
        margin-top: .2rem;
    }
    .under {
        margin-top: .3rem;
    }
}
</style>
