

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080B-SA" v-if="!reload">
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
        // backgroundFillAll:true,
        chartCount:10,
        backgroundConfig:{
          // view:{
          //   vectorBGA:$c.rel5,
          //   vectorBGB:$c.rel9,
          //   vectorBGC:$c.rel5,
          //   vectorBGX:$c.bll8,
          // },
          root:{
            vectorBGA:$c.gyl5,
            vectorBGB:$c.gyl9,
            vectorBGC:$c.gyl5,
            vectorBGX:$c.blr8,
          },
        }
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
    "globalConfig.language"(val){
      this.reload=true
      this.$nextTick(()=>{
        this.reload=false
      })
    },
    // '$route'(to, from){ cl("dashboard1080 $route",to,from) }
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: this.$t("tip.title.common"),
          message: this.$t("tip.desc.dashboardB"),
          duration: 10000
        });
      },3000)
      
    }
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