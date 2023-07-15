<template>
   <adaptivePanel :config="adptivePanelConfig" class="mobileSA" v-if="!reload">
    <mobileA></mobileA>
   </adaptivePanel>
</template>
<script>
export default {
  mixins: [],
  data() {
    return {
      reload:false,
      adptivePanelConfig:{
        adaptiveType:"scroll",
        backgroundName:"A1",
        chartCount:9,
        width:480
      }
    };
  },
  components: {
    mobileA:() => import('./mobileA.vue'),
  },
  watch:{
    "globalConfig.language"(val){
      this.reload=true
      this.$nextTick(()=>{
        this.reload=false
      })
    },
  },
  computed: {
   
  },
  methods: {
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    $timer("dashboardMobileA",()=>{
      this.loading=false
    },1000)

    if(tipState&&this.deviceType=="pc"){
      $timer("notify1",()=>{
        $notify({
          title: this.$t("tip.title.mobileAccess"),
          message: this.$t("tip.desc.dashboardMobile"),
          duration: 0
        });
      },3000)
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
.mobileSA{::-webkit-scrollbar{width:2px; height:2px;}}
</style>