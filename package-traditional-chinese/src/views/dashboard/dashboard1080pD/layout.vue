<template>
    <div class="dashboard1080D">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <panel3D :config="get3Dconfig(area)" class="panel-3d board-left">
          <div class="portlet-wrapper"  v-for="(item,index) in area.portlets">
            <component v-if="item.border" :is='item.border' :config="getConfig(item,area)">
              <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
              <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
              <component :is='item.component' ></component>
              <i>{{item.component}}</i>
            </component>
            <template v-else>
              <component :is='item.component'></component>
              <i>{{item.component}}</i>
            </template>
          </div>
        </panel3D>
      </div>
      
      <systemTitleA1></systemTitleA1>
      <!-- <systemTitleFree :title="'工程项目管理数据分析系统'"></systemTitleFree> -->
    </div>
</template>
<script>

export default {
  mixins: [],
  components: {
    echartsLine1:() => import('./portlet/echarts-Line1.vue'),
    echartsPie2:() => import('./portlet/echarts-Pie2.vue'),
    waterLevelPercentPond:() => import('./portlet/waterLevel-PercentPond.vue'),

    echartsBar1:() => import('./portlet/echarts-Bar1.vue'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table.vue'),
    counterGrid:() => import('./portlet/counter-grid.vue'),

    counterSix:() => import('./portlet/counter-six.vue'),
    echartsBarHoriz1:() => import('./portlet/echarts-BarHoriz1.vue'),
    echartPictorialBar:() => import('./portlet/echarts-PictorialBar.vue'),
    echartsBarLine1:() => import('./portlet/echarts-BarLine1.vue'),

  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      
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
          {title:"井場成本統計",component:"echartsLine1",border:"aYinTechBorderA1",hideTitle:true},
          {title:"壓裂/特作隊成本統計",component:"echartsPie2",border:"aYinTechBorderA1",hideTitle:true},
          {title:"各隊指標達標率",component:"waterLevelPercentPond",border:"aYinTechBorderA1",hideTitle:true},
        ]},
        {name:"right",portlets:[
          {title:"各科室審批統計",component:"echartsBar1",border:"aYinTechBorderA1",hideTitle:true},
          {title:"井場成本偏差率",component:"scrollBoardTable",border:"aYinTechBorderA1",hideTitle:true},
          {title:"計數器",component:"counterGrid",border:false,hideTitle:true},
        ]},
        {name:"center",portlets:[
          {title:"統計模塊",component:"counterSix",border:"blank",hideTitle:true},
          {title:"項目部審核統計",component:"echartsBarHoriz1",border:"aYinTechBorderB1"},
          {title:"壓裂隊表彰數量",component:"echartPictorialBar",border:"aYinTechBorderB1"},
          {title:"各項目季度情況總覽",component:"echartsBarLine1",border:"DVBorderBox5"},
        ]}
      ]
      
    };
  },
  computed: {
    chartCounter(){
      return this.adaptiveConfig.chartCounter;
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
    
    "globalConfig.panel3D"(val){
      this.view3DToggle(val)
    }
  },
  mounted() {
    this.view3DToggle(this.globalConfig.panel3D)
    if(this.deviceType=="mobile"){
      this.$tState.globalConfig.panel3D=false
    }
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.dashboard1080D{.poa; .fullbox; z-index: 1; padding:100px 70px 80px 70px;
  // background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
  
.i(){.poa; bottom:0; right:30px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .grid(24,24,30px);//columns, rows, gap
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .panel3D-wrap{ .poa; .fullbox; }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .portlet-wrapper{.por;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-left,&.area-right{.panel3D-inner{ .grid(1,3,20px); }}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; 
      .portlet-wrapper{
        // &:nth-child(1){grid-area: 1 / 1 / 3 / 2;}
      }
    }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{ grid-area: 1 / 7 / 25 / 19;.panel3D-inner{.grid(2,24,20px);}
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
