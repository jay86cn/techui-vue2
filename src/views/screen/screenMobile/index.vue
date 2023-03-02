<template>
   <screenAdaptive class="mobileSA" :adaptiveType="'scroll'" :width="500" :component="component" :loading="loading"> </screenAdaptive>
</template>
<script>
import pumpStation from './mobileA'
export default {
  mixins: [],
  data() {
    return {
      loading:true,
      component:pumpStation
    };
  },
  components: {
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   }
  },
  methods: {
  },
  mounted() {
    const {tipState,$notify}=this
    A("tis","screenMobileA",()=>{
      this.loading=false
    },1000)

    if(tipState&&this.$vuex.state.deviceType=="pc"){
      A("tis","notify1",()=>{
        $notify({
          title: 'Please use mobile to access this page',
          message: 'This page is built for mobile, so please use your mobile phone to access it, or scale your browser window to a screen ratio close to that of your phone.',
          duration: 0
        });
      },3000)
    }
    
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
  },
};
</script> 
<style lang="less">
.mobileSA{::-webkit-scrollbar{width:2px; height:2px;}}
</style>