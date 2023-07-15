

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
    const {tipState,$notify,$timer}=this
    $timer("pumpStationLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: this.$t("tip.title.common"),
          message: this.$t("tip.desc.chartPalette"),
          duration: 0
        });
      },5000)
    }
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify1")
  },
};
</script> 
<style lang="less">

</style>