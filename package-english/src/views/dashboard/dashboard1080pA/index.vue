

<template>
  <adaptivePanel :config="adptivePanelConfig">
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
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: "Prompt",
          message:"If your computer is running a little stuck, please turn off transition animation, 3D panel, background blur and other effects in the control panel. The control panel switch is located in the upper right corner of the window. If it is not the first visit, you can turn off all prompts in the control panel option.",
          duration: 0
        });
      },3000)
      $timer("notify3",()=>{
        $notify({
          title: "Prompt",
          message: "The navigation menu is located at the pulse button at the bottom center of the page.",
          duration: 0
        });
      },4000)
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