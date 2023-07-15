

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080C-SA" v-if="!reload">
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
        backgroundFillAll:true,
        backgroundName:"A1",
        chartCount:9,
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
    '$route'(to, from){
			cl("dashboard1080 $route",to,from)
		},
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
          message: this.$t("tip.desc.dashboardC"),
          duration: 3000
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