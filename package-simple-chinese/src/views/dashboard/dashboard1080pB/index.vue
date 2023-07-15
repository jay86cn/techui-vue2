

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
          title: '提示',
          message: '本数据屏为极简设计，未采用任何的科技装饰元素，也遵循框架的整体设计，可以直接调用框架的多语言和主题等功能。其3D地图基于Echarts-gl开发。',
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