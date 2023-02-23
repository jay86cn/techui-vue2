

<template>
  <screenAdaptive class="screen1080A-SA"  :adaptiveType="'advance'" :component="component" :loading="loading"> </screenAdaptive>
</template>
<script>
import chartPalette from './chartPalette'
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      loading:true,
      component:chartPalette,
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
  watch:{
    // '$route'(to, from){ }
  },
  mounted() {
    A("tis","pumpStationLoading",()=>{
      this.loading=false
    },1000)
  },
  
};
</script> 
<style lang="less">

</style>