<template>
   <div>
  		<keep-alive>
   			<router-view></router-view>	 
   		</keep-alive>
		<Footer></Footer>
   </div>
</template>

<script>
import Footer from '../components/footer.vue'
export default {
	data () {
		return {

		}
	},
	components: {
		Footer
	}
}
</script>
