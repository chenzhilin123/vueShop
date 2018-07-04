<template>
    <div class="film">
        <div :ref="el">

        </div>
        <Loading></Loading>
    </div>
</template>

<script>
    import Loading from './loading.vue';
    export default {
        name: 'film',
        data () {
            return {
                
            }
        },
        props: {

        },
        components: {
            Loading
        },
        props:['el'],
        mounted () {
            console.log(this.el);
            console.log(this.$refs[this.el]);
            console.log(this.$refs[this.el].dataset);
        }
    }
</script>

<style lang="scss" scoped>
.film {
    width: 100%;
    padding: 1rem 0;
    background: red;
}
</style>
  
