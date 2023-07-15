<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080AG-SA" v-if="!reload" >
    <layout></layout>
  </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      reload:false,
      adptivePanelConfig:{
        adaptiveType:"advance",
        // backgroundName:"none",
        // backgroundFillAll:true,
        chartCount:11,
      }
    };
  },
  components: {
    layout:() => import('./layout.vue'),
  },
  computed: {
   
  },
  methods: {
    
  },
  watch:{
    '$route'(to, from){ },
    "globalConfig.language"(val){
      this.reload=true
      this.$nextTick(()=>{
        this.reload=false
      })
    },
  },
  mounted() {
    
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: this.$t("tip.title.common"),
          message: this.$t("tip.desc.dashboardA1"),
          duration: 0
        });
      },3000)
      $timer("notify3",()=>{
        $notify({
          title: this.$t("tip.title.common"),
          message: this.$t("tip.desc.dashboardA2"),
          duration: 0
        });
      },4000)
    }
    // console.log("busGetData",this.$tBus.getData("adaptiveConfig"));
    this.$tBus.$on('adaptiveConfig', (data) => {
      console.log("ReviceBus",data);
    });
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify1")
    $timer("notify2")
    $timer("notify3")
  },
};
</script> 
<style lang="less">
</style>