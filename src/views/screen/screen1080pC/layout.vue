<template>
    <div class="screen1080C" :style="theme!='blue'&&svgBG1">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <board3D :config="area.name=='left'?configBLeft:configBCenter" class="board-3d board-left">
          <div class="portlet-wrapper" v-if="area.name!='right'" v-for="(item,index) in area.portlets">
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

      <div :class="`area-box area-right`">
        <board3D :config="configBRight" class="board-3d board-right">
          <div class="content-tabs">
            <div class="tabs-item" :class="item.label==tabActive?'active':'deactive'" @click="tabActive=index" v-for="(item,index) in tabs">{{item.title}}</div>
          </div>
          <div class="portlet-wrapper" v-for="(item,index) in areas[1].portlets">
            <component :is='item.border' :config="getConfig(item)">
              <template v-if="!item.charts">
                <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle>
                <blockTitleA1 v-if="!item.hideTitle" :config="blockTitleConfig" >{{item.title}}</blockTitleA1>
                <component :is='item.component' :tabActive="tabActive" ></component>
                <i>{{item.activeIn==tabActive }}-{{item.activeIn }}-{{item.component}}</i>
              </template>
              <template v-else>
                <template v-for="chart in item.charts" v-if="chart.activeIn==tabActive">
                  <!-- <portletTitle :title="chart.title"></portletTitle> -->
                  <blockTitleA1 :config="blockTitleConfig" >{{chart.title}}</blockTitleA1>
                  <component :is='chart.component' :tabActive="tabActive" ></component>
                  <i>{{chart.activeIn==tabActive }}-{{chart.activeIn }}-{{chart.component}}</i>
                </template>
              
              </template>
            </component>
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
    echartsBarB:() => import('./portlet/echarts-BarB'),
    layoutDialog:()=>import('./dialog/index-dialog')
    
  },
  data() {
    return {
      
      dialogConfig:{
        show:false,
        width:'60%',
        height:'60%',
        title:"对话框标题",
        titleWidth:350,
      },
      blockTitleConfig:{width:180,},
      
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
          {title:"超采区关系",component:"echartsBarA",border:"aYinTechBorderB4"},
          {title:"超采区水位 / 用水量",component:"echartsBarHoriz",border:"aYinTechBorderB4"},
          {title:"超采区行政区用水情况",component:"echartsLineA",border:"aYinTechBorderB4"},
          {title:"计数器",component:"counterGrid",border:false},
        ]},
        {name:"right",portlets:[
          {title:"饼图选项卡",component:"echartsPieTabs",border:"aYinTechBorderB4",hideTitle:true},

          {border:"aYinTechBorderB4",charts:[
            {title:"海侵区面积变化情况",component:"echartsLineC",activeIn:0},
            {title:"区域内监测站水位A",component:"echartsLineD",activeIn:1},
            {title:"区域内监测站水位B",component:"echartsLineC",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {title:"海侵区情况",component:"echarts-BarLineA",activeIn:0},
            {title:"区域内监测站埋深A",component:"echartsBarB",activeIn:1},
            {title:"区域内监测站埋深B",component:"echartsBarA",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {title:"企业用水量超标报警",component:"scrollBoardTable",activeIn:0},
            {title:"日用水量排行榜A",component:"rankingBoard",activeIn:1},
            {title:"日用水量排行榜B",component:"rankingBoard",activeIn:2}
          ]},
        ]},
        {name:"center",portlets:[
          {title:"柱状图选项卡",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:true},
          {title:"地下水总体趋势",component:"echartsLineB",border:"aYinTechBorderB4"},
        ]}
      ]
      
    };
  },
  computed: {
    chartInitCounter(){
      return this.$vuex.state.dashboardConfig.chartInitCounter;
    }
  },
  methods: {
    
    view3DToggle(val){
      const {configBLeft,configBCenter,configBRight}=this
      configBLeft.view3d=val
      configBCenter.view3d=val
      configBRight.view3d=val
    },
    
    getConfig(item){
      let borderConfig={
        title:item.title,
        opacity:.7
      }
      return borderConfig;
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
.screen1080C{ z-index: 1; padding:70px 60px 50px 60px;
  background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .board-3d-wrap{ .poa; .fullbox;

    }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .portlet-wrapper{.por;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{ grid-area: 19 / 7 / 25 / 19; }
    &.area-left,&.area-right{.board-3d-inner{ display: grid; grid-template-columns: repeat(1,1fr); grid-template-rows:repeat(4,1fr); grid-gap: 20px;}}
    &.area-center{.board-3d-inner{ display: grid; grid-template-columns: repeat(2,1fr); grid-template-rows:repeat(1,1fr); grid-gap: 20px; }
      .portlet-wrapper{ margin-top:-8px;}
    }
    
  }
  .content-tabs{.poa;  top:-40px; left:80px; right:80px; text-align: center; height: 40px;
    &:before{content:" "; .bdb(var(--button-bd_hov)); left:0; right:0; bottom:10px;.poa; z-index: 1;}
    .tabs-item{display:inline-block; padding:0 10px; .ff("cn1"); .fc(var(--font-normal)); height: 30px;line-height: 30px; cursor: pointer; .ani; z-index: 2; .por;
      &:before{content:" ";  .bgc(var(--button-bd_hov)); .poa; .fullbox; opacity: 0;}
      &:hover{&:before{opacity: .3;}}
      &.active{ .bdb(var(--font-strong)); .fc(var(--font-strong));}
    }
  }
}
</style>
