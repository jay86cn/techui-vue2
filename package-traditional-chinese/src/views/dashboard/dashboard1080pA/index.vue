

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
          message:"如果您的電腦運行有些卡頓，請在控制面板中關閉過渡動畫、3D面板、背景模糊等效果。控制面板開關位於窗口右上角。如非首次訪問，可在控制面板中關閉所有提示選項。",
          duration: 0
        });
      },3000)
      $timer("notify2",()=>{
        $notify({
          title: "提示",
          message: "導航菜單位於頁面底部中央的脈衝按鈕。",
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
  },
};
</script> 
<style lang="less">
</style>