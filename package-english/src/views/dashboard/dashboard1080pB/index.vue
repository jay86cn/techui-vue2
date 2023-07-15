

<template>
  <adaptivePanel :config="adptivePanelConfig" class="dashboard1080B-SA" >
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
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: 'Prompt',
          message: "This data dashboard has a minimalist design without any technological decoration elements, and also follows the overall design of the framework, and can directly call the framework's multilingual and theme functions. Its 3D map is developed based on Echarts-gl.",
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