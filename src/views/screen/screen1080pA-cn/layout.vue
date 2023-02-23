<template>
    <div class="screen1080A" :style="svgBG1">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <board3D :config="getBorder3DConfig(area.name)" class="board-3d">
          <div class="portlet-wrapper" v-for="(item,index) in area.portlets">
            <component v-if="item.border" :is='item.border' :config="getConfig(item)">
              <blockTitleA1 v-if="!item.hideTitle" :config="blockTitleConfig" >{{item.title}}</blockTitleA1>
              <component :is='item.component' ></component>
              <i>{{item.component}}</i>
            </component>
            <template v-else>
              <component :is='item.component'></component>
              <i>{{item.component}}</i>
            </template>
          </div>
        </board3D>
      </div>
      <sysTitleA1></sysTitleA1>
      <!-- <mapDrill v-if="chartInitCounter>=8"></mapDrill> -->
      <mapDrill></mapDrill>
      <layoutDialog :config="dialogConfig" v-if="dialogConfig.show"></layoutDialog>
    </div>
</template>
<script>
export default {
  mixins: [],
  components: {
    //mapDrill:() => import('../portlet/mapLN'),
    // mapDrill:() => import('../portlet/mapDrill'),
    mapDrill:() => import('./portlet/map/map-simple'),
    echartsBarA:() => import('./portlet/echarts-BarA'),
    echartsBarHoriz:() => import('./portlet/echarts-BarHoriz'),
    echartsLineA:() => import('./portlet/echarts-lineA'),
    counterGrid:() => import('./portlet/counter-grid'),
    echartsBarLineTabs:() => import('./portlet/echarts-barLineTabs'),
    echartsLineB:() => import('./portlet/echarts-lineB'),
    echartsLineC:() => import('./portlet/echarts-lineC'),
    echartsPieTabs:() => import('./portlet/echarts-pieTabs'),
    echartsBarLineA:() => import('./portlet/echarts-BarLineA'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table'),
    rankingBoard:() => import('./portlet/rankingBoardScroll'),
    echartsLineD:() => import('./portlet/echarts-lineD'),
    echartsGaugeTriple:() => import('./portlet/echarts-gaugeTriple'),
    echartsBarB:() => import('./portlet/echarts-BarB'),
    echartsBarHorizA:() => import('./portlet/echarts-BarHorizA'),
    echartsSunburst:() => import('./portlet/echarts-sunburst'),
    layoutDialog:()=>import('./dialog/index-dialog')
  },
  data() {
    return {
      blockTitleConfig:{
        width:160,
      },
      dialogConfig:{
        show:false,
        width:'60%',
        height:'60%',
        title:"对话框标题",
        titleWidth:350,
      },
      // blockTitleConfig:{
      //   width:180,
      //   theme:true
      // },
      
      tabActive:0,
      tabs:[
        {title:"海侵区",label:0},
        {title:"保护区A",label:1},
        {title:"保护区B",label:2},
      ],
      configBLeft:{
        rotate: {
          y:8,
        },
        transformOrigin:"right",
        view3d:true,
        showShadow:false,
        hoverDelay:0
      },
      configBCenter:{
        rotate: {
          x:30,
        },
        transformOrigin:"bottom",
        view3d:true,
        showShadow:false,
        hoverDelay:0
      },
      configBRight:{
        rotate:{
          y:-8,
        },
        transformOrigin:"left",
        view3d:true,
        showShadow:false,
        hoverDelay:0
      },
      areas:[
        {name:"left",portlets:[
          {id:"l2",title:"收支情况",component:"echartsBarHoriz",border:"aYinTechBorderA1",hideTitle:true},
          {id:"l3",title:"业务收益情况",component:"echartsLineA",border:"aYinTechBorderA1",hideTitle:true},
          {id:"l1",title:"销售任务",component:"echartsBarHorizA",border:"aYinTechBorderA1",hideTitle:true},
        ]},
        {name:"right",portlets:[
          {id:"r1",title:"销售情况",component:"counterGrid",border:"blank",hideTitle:true},
          {id:"r2",title:"任务完成情况",component:"echartsGaugeTriple",border:"aYinTechBorderA1",hideTitle:true},
          {id:"r3",title:"业务利润占比",component:"echartsSunburst",border:"aYinTechBorderA1"},
        ]},
        
      ]
      
    };
  },
  computed: {
    chartInitCounter(){
      return this.$vuex.state.dashboardConfig.chartInitCounter;
    }
  },
  methods: {
    getBorder3DConfig(pos){
      if(pos=="left"){
        return this.configBLeft
      }else if(pos=="right"){
        return this.configBRight
      }else if(pos=="center"){
        return this.configBCenter
      }
    },
    view3DToggle(val){
      const {configBLeft,configBCenter,configBRight}=this
      configBLeft.view3d=val
      configBCenter.view3d=val
      configBRight.view3d=val
    },
    getConfig(item){
      const {id}=item
      if(id=='r3'){
        return {
          directionAlt: true,
          rotate: "z",
          opacity: 0.7
        }
      }else if(id.includes("l")){
        return {
          title:item.title,
          titleWidth:120,
          decoration:false,
          decorationAlt: true,
          rotate: "y",
          opacity: 0.7
        }
      }else{
        return {
          title:item.title,
          titleWidth:120,
          decoration:false,
          opacity:.7
        }
      }
    }
    
  },
  watch:{
    // "$vuex.state.dashboardConfig.chartInitCounter"(val,old){ cl("SAResizeCounter",val,old) },
    "$vuex.state.chartData.title"(val,old){
      this.dialogConfig.show=false
      this.$nextTick(()=>{
        this.dialogConfig.title=this.$vuex.state.chartData.title
        this.dialogConfig.show=true
      })
    },
    "$vuex.state.globalConfig.board3D"(val){
      this.view3DToggle(val)
    }
  },
  mounted(){
    this.view3DToggle(this.$vuex.state.globalConfig.board3D)
    if(this.$vuex.state.deviceType=="mobile"){
      this.$vuex.state.globalConfig.board3D=false
    }
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.screen1080A{ z-index: 1;padding:70px 60px 50px 60px;
  background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .board-3d-wrap{ .poa; .fullbox;

    }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .blank,
    .portlet-wrapper{.por;
      >i{.i;}
      
    }
    .border-content{>i{.i;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; 
      .portlet-wrapper{
        &:nth-child(3){grid-area:3 / 1 /5/ 2}
      }
    }
    &.area-center{ grid-area: 19 / 7 / 25 / 19; }
    &.area-left{.board-3d-inner{ display: grid; grid-template-columns: repeat(1,1fr); grid-template-rows:repeat(3,1fr); grid-gap: 20px;}}
    &.area-right{.board-3d-inner{ display: grid; grid-template-columns: repeat(1,1fr); grid-template-rows:repeat(4,1fr); grid-gap: 20px;}}
    &.area-center{.board-3d-inner{ display: grid; grid-template-columns: repeat(2,1fr); grid-template-rows:repeat(1,1fr); grid-gap: 20px; }
      .portlet-wrapper{ margin-top:-8px;}
    }
    
  }
  .content-tabs{.poa;  top:-40px; left:80px; right:80px; text-align: center; height: 40px;
    &:before{content:" "; .bdb(var(--button-bd_hov));left:0; right:0; bottom:10px;.poa; z-index: 1;}
    .tabs-item{display:inline-block; padding:0 10px; .ff("cn1"); .fc(var(--font-normal)); height: 30px;line-height: 30px; cursor: pointer; .ani; z-index: 2; .por;
      &:before{content:" "; .bgc(var(--button-bd_hov)); .poa; .fullbox; opacity: 0;}
      &:hover{&:before{opacity: .3;}}
      &.active{ .bdb(var(--font-strong)); .fc(var(--font-strong));}
    }
  }
}

</style>
