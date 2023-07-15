<template>
   <adaptivePanel :config="adptivePanelConfig" class="mobileSA">
    <mobileA></mobileA>
   </adaptivePanel>
</template>
<script>
export default {
  mixins: [],
  data() {
    return {
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
          title: '请使用移动端访问',
          message: '本页面专为移动端打造，请使用手机访问。',
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