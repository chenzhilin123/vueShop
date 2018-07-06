<template>
    <div class="vip">
        <Header :store="store"/>
        <List :list="order"/>
        <NavList :list="another"/>
        <List :list="balance"/>
        <List :list="integral"/>
        <list :list="offer"/>
        <list :list="address"/>
        <list :list="phone"/>
    </div>
</template>
<script>
    import Header from '../components/vipHeader'
    import List from '../components/list'
    import NavList from '../components/navList'
    export default {
        data () {
            return {
                store: {
                    name: "不买不卖",
                    coll: 21,
                    collStore: 33
                },
                balance: {
                    isline: true,//需要下划线
                    icon: require('../assets/vip/Balance.png'),
                    leftText: '帐户余额',
                    rightText: '',
                    toPath: '/'
                },
                order: {
                    isline: false,//不需要下划线
                    icon: require('../assets/vip/orders.png'),
                    leftText: '我的订单',
                    rightText: '查看全部订单',
                    toPath: '/'
                },
                integral: {
                    isline: true,
                    icon: require('../assets/vip/integral.png'),
                    leftText: '积分',
                    rightText: '',
                    toPath: '/'
                },
                offer: {
                    isline: true,
                    icon: require('../assets/vip/coupon.png'),
                    leftText: '优惠卷',
                    rightText: '',
                    toPath: '/'
                },
                address: {
                    isline: true,
                    icon: require('../assets/vip/position.png'),
                    leftText: '管理收货地址',
                    rightText: '',
                    toPath: '/'
                },
                phone: {
                    isline: true,
                    icon: require('../assets/vip/Customer-service.png'),
                    leftText: '客服电话',
                    rightText: '400-8988-762',
                    toPath: '/home/vip'
                },
                another: [
                    {
                        nav: [
                                { img: require('../assets/vip/Pending-payment.png'),title:'待付款',class: 'vipImg',textClass:'grays'},
                                { img: require('../assets/vip/Pending-receipt.png'),title:'待收货',class: 'vipImg',textClass:'grays',count: 9},
                                { img: require('../assets/vip/evaluated.png'),title:'待平价',class: 'vipImg',textClass:'grays'},
                                { img: require('../assets/vip/sales.png'),title:'售后',class: 'vipImg',textClass:'grays'}
                            ]
                    }
                ]
            }
        },
        components: {
            Header,
            List,
            NavList
        }
    }
</script>
<style lang="scss" scoped>

</style>

