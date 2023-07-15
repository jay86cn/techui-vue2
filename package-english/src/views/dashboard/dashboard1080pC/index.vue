

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080C-SA">
    <layout></layout>
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
		}
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: 'Prompt',
          message: 'For data dashboards with rich and complex content, it is usually not recommended to place so much content in one data dashboard.',
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