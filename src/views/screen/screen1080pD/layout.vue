<template>
    <div class="screen1080D" :style="theme!='blue'&&svgBG1">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <board3D :config="get3Dconfig(area)" class="board-3d board-left">
          <div class="portlet-wrapper"  v-for="(item,index) in area.portlets">
            <component v-if="item.border" :is='item.border' :config="getConfig(item,area)">
              <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
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
      <!-- <sysTitleFree :title="'工程项目管理数据分析系统'"></sysTitleFree> -->
    </div>
</template>
<script>

export default {
  mixins: [],
  components: {
    echartsLine1:() => import('./portlet/echarts-Line1'),
    echartsPie2:() => import('./portlet/echarts-Pie2'),
    waterLevelPercentPond:() => import('./portlet/waterLevel-PercentPond'),

    echartsBar1:() => import('./portlet/echarts-Bar1'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table'),
    counterGrid:() => import('./portlet/counter-grid'),

    counterSix:() => import('./portlet/counter-six'),
    echartsBarHoriz1:() => import('./portlet/echarts-BarHoriz1'),
    echartPictorialBar:() => import('./portlet/echarts-PictorialBar'),
    echartsBarLine1:() => import('./portlet/echarts-BarLine1'),

  },
  data() {
    return {
      blockTitleConfig:{width:180,},
      tabActive:0,
      tabs:[
        {title:"海侵区",label:0},
        {title:"保护区A",label:1},
        {title:"保护区B",label:2},
      ],
      configBLeft:{
        rotate: {
          y:10,
        },
        transformOrigin:"right",
        view3d:true,
        showShadow:false,
        hoverDelay:0
      },
      configBCenter:{
        rotate: { x:0, },
        transformOrigin:"bottom",
        view3d:false,
        showShadow:false
      },
      configBRight:{
        rotate:{
          y:-10,
        },
        transformOrigin:"left",
        view3d:true,
        showShadow:false,
        hoverDelay:0
      },
      areas:[
        {name:"left", portlets:[
          {title:"井场成本统计",component:"echartsLine1",border:"aYinTechBorderA1",hideTitle:true},
          {title:"压裂/特作队成本统计",component:"echartsPie2",border:"aYinTechBorderA1",hideTitle:true},
          {title:"各队指标达标率",component:"waterLevelPercentPond",border:"aYinTechBorderA1",hideTitle:true},
        ]},
        {name:"right",portlets:[
          {title:"各科室审批统计",component:"echartsBar1",border:"aYinTechBorderA1",hideTitle:true},
          {title:"井场成本偏差率",component:"scrollBoardTable",border:"aYinTechBorderA1",hideTitle:true},
          {title:"计数器",component:"counterGrid",border:false,hideTitle:true},
        ]},
        {name:"center",portlets:[
          {title:"统计模块",component:"counterSix",border:"blank",hideTitle:true},
          {title:"项目部审核统计",component:"echartsBarHoriz1",border:"aYinTechBorderB1"},
          {title:"压裂队表彰数量",component:"echartPictorialBar",border:"aYinTechBorderB1"},
          {title:"各项目季度情况总览",component:"echartsBarLine1",border:"DVBorderBox5"},
        ]}
      ]
      
    };
  },
  computed: {
    chartInitCounter(){
      return this.$vuex.state.dashboardConfig.chartInitCounter;
    },
    
  },
  methods: {
    get3Dconfig(area){
      switch(area.name){
        case("left"):
          return this.configBLeft
          break;
        case("right"):
          return this.configBRight
          break;
        case("center"):
          return this.configBCenter
          break;
      }
    },
    view3DToggle(val){
      const {configBLeft,configBCenter,configBRight}=this
      configBLeft.view3d=val
      configBCenter.view3d=val
      configBRight.view3d=val
      
    },
    
    getConfig(item,area){
      let borderConfig={
        title:item.title,
        // titleColor:$c.cyl5,
        // backgroundColor:$c.bll9,
        // borderColor:$c.bll7,
        // decorationColor:[$c.bll3,$c.cyl5],
        opacity:.6
      }
      // cl("item",item,area);
      if(area.name=="left"){
        borderConfig.rotate="y"
        borderConfig.titleWidth=150
        borderConfig.decoration=false
      }else if(area.name=="right"){
        borderConfig.decoration=false
      }
      if(item.border=="aYinTechBorderB1"){
        borderConfig.decoration=false
      }
      return borderConfig;
    }
    
  },
  watch:{
    // "$vuex.state.dashboardConfig.chartInitCounter"(val,old){ cl("SAResizeCounter",val,old) },
    "$vuex.state.globalConfig.board3D"(val){
      this.view3DToggle(val)
    }
  },
  mounted() {
    this.view3DToggle(this.$vuex.state.globalConfig.board3D)
    if(this.$vuex.state.deviceType=="mobile"){
      this.$vuex.state.globalConfig.board3D=false
    }
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.screen1080D{.poa; .fullbox; z-index: 1; padding:100px 70px 80px 70px;
  background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
  
.i(){.poa; bottom:0; right:30px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .board-3d-wrap{ .poa; .fullbox; }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .portlet-wrapper{.por;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-left,&.area-right{.board-3d-inner{ display: grid; grid-template-columns: repeat(1,1fr); grid-template-rows:repeat(3,1fr); grid-gap: 20px;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; 
      .portlet-wrapper{
        // &:nth-child(1){grid-area: 1 / 1 / 3 / 2;}
      }
    }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{ grid-area: 1 / 7 / 25 / 19;.board-3d-inner{ display: grid; grid-template-columns: repeat(2,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 20px; }
      .portlet-wrapper{
        &:nth-child(1){grid-area: 1 / 1 / 6 / 3;}
        &:nth-child(2){grid-area: 6 / 1 / 13 / 2;}
        &:nth-child(3){grid-area: 6 / 2 / 13 / 3;}
        &:nth-child(4){grid-area: 13 / 1 / 25 / 3;}
      }
    }
  }

  .echarts-hasSelect{width: 100%;height: 100%;
    &.at1-left{.el-select{right:20px; }}
    &.at1-right{.el-select{right:auto; left:20px; }}
    .el-select{.poa; top:10px; right:10px;z-index: 10; width: 120px; }
  }
  
}

</style>
