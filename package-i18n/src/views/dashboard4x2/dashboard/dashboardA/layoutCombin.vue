<template>
  <div class="dashboardA dashboardSub" id="dashboardA">
    <div class="portlet-wrapper" v-for="item in portlets">
      <component :is='item.border' :config="gbc">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title" ></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboard4x2A.PTitle.${item.id}`)}}</panelTitleA1>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
    <mapDrill class="dashboardCombin-map"></mapDrill>
  </div>
</template>
<script>

export default {
  name: "dashboardA",
  props:["state"],
  mixins: [],
  components: {
    mapDrill:() => import('./portlet/map/map-simple.vue'),
    counter:() => import('./portlet/counter.vue'),
    echartsPieA:() => import('./portlet/echarts-pieC.vue'),
    personalCondition:() => import('./portlet/personalCondition.vue'),
    pyramid:() => import('./portlet/pyramid.vue'),
    echartsBarLineTabs:() => import('./portlet/echarts-barLineTabs.vue'),
    echartsBarSpc:() => import('./portlet/echarts-barSpc.vue'),
    echartsLineA:() => import('./portlet/echarts-lineA.vue'),
  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      portlets:[
        {id:"p1",title:"Key indicators",component:"counter",border:"aYinTechBorderB1",hideTitle:true},
        {id:"p2",title:"Non-coal mine",component:"echartsPieA",border:"aYinTechBorderB4"},
        {id:"p3",title:"Underground Personnel",component:"personalCondition",border:"aYinTechBorderB4"},
        {id:"p4",title:"Accidents month",component:"echartsLineA",border:"aYinTechBorderB4"},
        {id:"p5",title:"Standardization Coal Mine",component:"pyramid",border:"aYinTechBorderB4"},
        {id:"p6",title:"Internet access",component:"echartsBarSpc",border:"aYinTechBorderB4"},
        {id:"p7",title:"Law Enforcement Situation",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:true},
      ]
    };
  },
  computed: {
    gbc(){
      let borderConfig={
        // backgroundColor:$c.bll9,
        // borderColor:$c.bll7,
        // decorationColor:[$c.bll3,$c.cyl5],
        opacity:.7,
      }
      return borderConfig;
    }
  },
  methods: {
    
  },
  mounted() {
    this.state.init++
    
  },
  destroyed(){
  }
};
</script>
<style lang="less">
.dashboardA {.poa; .fullbox; z-index: 1; padding:56px 30px; //pointer-events: none;
  .grid(24,24,30px);//columns, rows, gap
  // grid-template-areas:
  // "a a a . . . . . . d d d"
  // "a a a . . . . . . d d d"
  // "a a a . . . . . . d d d"//3
  // "a a a . . . . . . d d d"
  // "b b b . . . . . . e e e"
  // "b b b . . . . . . e e e"//6
  // "b b b . . . . . . e e e"
  // "b b b . . . . . . e e e"
  // "c c c g g g g g g f f f"//9
  // "c c c g g g g g g f f f"
  // "c c c g g g g g g f f f"
  // "c c c g g g g g g f f f";//12
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    // &:nth-child(1){ grid-area: a;}
    // &:nth-child(2){ grid-area: b;}
    // &:nth-child(3){ grid-area: c;}
    // &:nth-child(4){ grid-area: d;}
    // &:nth-child(5){ grid-area: e;}
    // &:nth-child(6){ grid-area: f;}
    // &:nth-child(7){ grid-area: g;}
    // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
    //左侧
    &:nth-child(1){ grid-area: 1 / 1 / 9 / 7;}
    &:nth-child(2){ grid-area: 9 / 1 / 17 / 7;}
    &:nth-child(3){ grid-area: 17 / 1 / 25 / 7;}
    // //右侧
    &:nth-child(4){ grid-area: 1 / 19 / 9 / 25;}
    &:nth-child(5){ grid-area: 9 / 19 / 17 / 25;}
    &:nth-child(6){ grid-area: 17 / 19 / 25 / 25;}
    // //底部
    &:nth-child(7){ grid-area: 17 / 7 / 25 / 19;}
    .border-content{
      >i{.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
    }
  }
  
}
</style>
