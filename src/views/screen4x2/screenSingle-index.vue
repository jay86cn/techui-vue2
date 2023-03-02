<template>
  <div class="screen4X2">
    <screenAdaptive :adaptiveType="'advance'" :chartCount="tabConfig.tabs[tabConfig.current].chartCount">
      <floatTabs @beforeChange="showLoading" :tabConfig="tabConfig"></floatTabs>
      <sysTitleA1></sysTitleA1><!---->
      <screenA v-if="tabConfig.current==0"></screenA>
      <screenB v-if="tabConfig.current==1"></screenB>
      <screenC v-if="tabConfig.current==2"></screenC>
      <screenD v-if="tabConfig.current==3"></screenD>
      <screenE v-if="tabConfig.current==4"></screenE>
    </screenAdaptive>
  </div>
</template>
<script>
export default {
  name: "screen4X2",
  components: {
    screenA:() => import('./screen/screenA/layoutSingle'),
    screenB:() => import('./screen/screenB/layoutSingle'),
    screenC:() => import('./screen/screenC/layoutSingle'),
    screenD:() => import('./screen/screenD/layoutSingle'),
    screenE:() => import('./screen/screenE/layoutSingle'),
  },
  data() {
    return {
      boxStyle:{
        color1:$c.fade($c.bk,.3),
        color2:$c.blm7,
        color3:$c.bll1,
        BGColor:$c.fade($c.bll9,.8),
      },
      tabConfig:{
        tabs:[
          {title:"ScreenA",comp:"screenA",chartCount:4},
          {title:"ScreenB",comp:"screenB",chartCount:7},
          {title:"ScreenC",comp:"screenC",chartCount:3},
          {title:"ScreenD",comp:"screenD",chartCount:5},
          {title:"ScreenE",comp:"screenE",chartCount:4},
          //{title:"中国地图F",label:"screenF"}, 
        ],
        current:0,
      },
      
    };
  },
  watch:{
    "tabConfig.current"(val){ 
    }
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   }
  },
  methods: {
    showLoading(){
      this.$vuex.state.dashboardConfig.SAResizeCounter=1
      this.$vuex.state.dashboardConfig.chartInitCounter=0
      //this.$vuex.commit('resetDS')
      //this.state.loading=true
    }
  },
  beforeMount(){
    
  },
  mounted() {
    const {tipState,$notify}=this
    if(tipState){
      A("tis","notify1",()=>{
        $notify({
          title: '提示',
          message: '本功能是4x2组合屏的单屏模式，针对企业大屏开发的内容，可以拆分单屏的方式展示在普通pc查看，提升用户体验！可通过底部导航在各个数据屏之间做跳转。',
          duration: 0
        });
      },5000)
    }
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify1")
  },
  
};










</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
 .screen4X2{.poa; .fullbox;  //.svgBG('bg2');
  //background-image: radial-gradient(ellipse at bottom,@blA16 10%,@blA17 50%,@blA19 100% );
  // backdrop-filter:brightness(80%);
  .screenAdaptive{
    .adaptiveObject{ .bxs(100%,@bk,10px);// .svgBG('bg1',@blA17,@blA18,@blA19);
      //.sysTitle-wrap{.scale(1.2);}
    }
  }
  .float-tabs{bottom:20px; z-index: 10; transform: scale(.7) translateX(-50%); transform-origin:left;}
}
</style>
