

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080A-SA">
    <chartPalette></chartPalette>
  </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      adptivePanelConfig:{
        adaptiveType:"advance",
        backgroundFillAll:true,
        loading:true
      }
    };
  },
  components: {
    chartPalette:() => import('./chartPalette.vue'),
  },
  computed: {
   
  },
  methods: {
    
  },
  watch:{
    // '$route'(to, from){ }
  },
  mounted() {
    const {$timer}=this
    $timer("pumpStationLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
  },
  
};
</script> 
<style lang="less">

</style>