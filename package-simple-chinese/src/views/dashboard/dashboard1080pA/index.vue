

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
          title: "提示",
          message:"如果您的电脑运行有些卡顿，请在控制面板中关闭过渡动画、3D面板、背景模糊等效果。控制面板开关位于窗口右上角。如非首次访问，可在控制面板中关闭所有提示选项。",
          duration: 0
        });
      },3000)
      $timer("notify2",()=>{
        $notify({
          title: "提示",
          message: "导航菜单位于页面底部中央的脉冲按钮。",
          duration: 0
        });
      },4000)
      
    }
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify1")
    $timer("notify3")
  },
};
</script> 
<style lang="less">
</style>