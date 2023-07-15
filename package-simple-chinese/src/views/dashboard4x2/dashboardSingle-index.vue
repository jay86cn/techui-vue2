<template>
  <div class="dashboard4X2">
    <adaptivePanel :config="adptivePanelConfig">
      <floatTabs @beforeChange="showLoading" :tabConfig="tabConfig"></floatTabs>
      <systemTitleA2 :config="systemTitleConfig"></systemTitleA2>
      <dashboardA v-if="tabConfig.current==0"></dashboardA>
      <dashboardB v-if="tabConfig.current==1"></dashboardB>
      <dashboardC v-if="tabConfig.current==2"></dashboardC>
      <dashboardD v-if="tabConfig.current==3"></dashboardD>
      <dashboardE v-if="tabConfig.current==4"></dashboardE>
    </adaptivePanel>
  </div>
</template>
<script>
export default {
  name: "dashboard4X2",
  components: {
    dashboardA:() => import('./dashboard/dashboardA/layoutSingle.vue'),
    dashboardB:() => import('./dashboard/dashboardB/layoutSingle.vue'),
    dashboardC:() => import('./dashboard/dashboardC/layoutSingle.vue'),
    dashboardD:() => import('./dashboard/dashboardD/layoutSingle.vue'),
    dashboardE:() => import('./dashboard/dashboardE/layoutSingle.vue'),
  },
  data() {
    return {
      systemTitleConfig:{ subType:"A" },
      boxStyle:{
        color1:$c.fade($c.bk,.3),
        color2:$c.blm7,
        color3:$c.bll1,
        BGColor:$c.fade($c.bll9,.8),
      },
      tabConfig:{
        tabs:[
          {title:"dashboardA",comp:"dashboardA",chartCount:5,bgName:"A1"},
          {title:"dashboardB",comp:"dashboardB",chartCount:7,bgName:"A2"},
          {title:"dashboardC",comp:"dashboardC",chartCount:3,bgName:"A1"},
          {title:"dashboardD",comp:"dashboardD",chartCount:5,bgName:"A2"},
          {title:"dashboardE",comp:"dashboardE",chartCount:4,bgName:"A1"},
          //{title:"中国地图F",label:"dashboardF"}, 
        ],
        current:0,
      },
      adptivePanelConfig:{
        adaptiveType:"advance",
        backgroundName:"A1",
        backgroundFillAll:true,
        chartCount:5,
        loading:true
      }
      
    };
  },
  watch:{
    "tabConfig.current"(val){ 
      const {tabConfig}=this
      this.adptivePanelConfig.backgroundName=tabConfig.tabs[val].bgName
      this.adptivePanelConfig.chartCount=tabConfig.tabs[val].chartCount
      this.$tState.adaptiveConfig.resizeCounter=1
      this.$tState.adaptiveConfig.chartCounter=0
    }
  },
  computed: {
   
  },
  methods: {
    showLoading(){
      this.adptivePanelConfig.loading=true
      
      // this.state.loading=true
    }
  },
  beforeMount(){
    
  },
  mounted() {
    const {tipState,$notify,$timer}=this
    if(tipState){
      $timer("notify1",()=>{
        $notify({
          title: '提示',
          message: '本功能是4x2组合屏的单屏模式，针对企业大屏开发的内容，可以拆分单屏的方式展示在普通pc查看，提升用户体验！可通过底部导航在各个数据屏之间做跳转。',
          duration: 0
        });
      },5000)
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
 .dashboard4X2{.poa; .fullbox;  //.vectorBG('bg2');
  //background-image: radial-gradient(ellipse at bottom,@blA16 10%,@blA17 50%,@blA19 100% );
  // backdrop-filter:brightness(80%);
  .adaptivePanel{
    .adaptiveObject{ //.bxs(100%,@bk,10px);// .vectorBG('bg1',@blA17,@blA18,@blA19);
      //.systemTitle-wrap{.scale(1.2);}
    }
  }
  .float-tabs{bottom:20px; z-index: 10; transform: scale(.7) translateX(-50%); transform-origin:left;}
}
</style>
