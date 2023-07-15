<template>
    <div class="dashboard1080C">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <panel3D :config="area.name=='left'?configBLeft:configBCenter" class="panel-3d board-left">
          <div class="portlet-wrapper" v-if="area.name!='right'" v-for="(item,index) in area.portlets">
            <component v-if="item.border" :is='item.border' :config="getConfig(item)">
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

      <div :class="`area-box area-right`">
        <panel3D :config="configBRight" class="panel-3d board-right">
          <div class="content-tabs">
            <div class="tabs-item" :class="item.label==tabActive?'active':'deactive'" @click="tabActive=index" v-for="(item,index) in tabs">{{item.title}}</div>
          </div>
          <div class="portlet-wrapper" v-for="(item,index) in areas[1].portlets">
            <component :is='item.border' :config="getConfig(item)">
              <template v-if="!item.charts">
                <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle>
                <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
                <component :is='item.component' :tabActive="tabActive" ></component>
                <i>{{item.activeIn==tabActive }}-{{item.activeIn }}-{{item.component}}</i>
              </template>
              <template v-else>
                <template v-for="chart in item.charts" v-if="chart.activeIn==tabActive">
                  <!-- <portletTitle :title="chart.title"></portletTitle> -->
                  <panelTitleA1 :config="panelTitleConfig" >{{chart.title}}</panelTitleA1>
                  <component :is='chart.component' :tabActive="tabActive" ></component>
                  <i>{{chart.activeIn==tabActive }}-{{chart.activeIn }}-{{chart.component}}</i>
                </template>
              
              </template>
            </component>
          </div>
        </panel3D>
      </div>
      
      <systemTitleA4 :config="systemTitleConfig"></systemTitleA4>
      <!-- <mapDrill v-if="chartCounter>=8"></mapDrill> -->
      <mapDrill></mapDrill>
      <layoutDialog :config="dialogConfig" v-if="dialogConfig.show"></layoutDialog>
    </div>
</template>
<script>
export default {
  mixins: [],
  components: {
    mapDrill:() => import('./portlet/map/map-liaoning.vue'),
    echartsBarHoriz:() => import('./portlet/echarts-BarHoriz.vue'),
    echartsLineA:() => import('./portlet/echarts-lineA.vue'),
    counterGrid:() => import('./portlet/counter-grid.vue'),
    echartsPieTabs:() => import('./portlet/echarts-pieTabs.vue'),
    echartsLineC:() => import('./portlet/echarts-lineC.vue'),
    echartsLineD:() => import('./portlet/echarts-lineD.vue'),
    echartsBarLineA:() => import('./portlet/echarts-BarLineA.vue'),
    echartsBarA:() => import('./portlet/echarts-BarA.vue'),
    echartsBarB:() => import('./portlet/echarts-BarB.vue'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table.vue'),
    rankingBoard:() => import('./portlet/rankingBoardScroll.vue'),
    echartsBarLineTabs:() => import('./portlet/echarts-barLineTabs.vue'),
    echartsLineB:() => import('./portlet/echarts-lineB.vue'),
    layoutDialog:()=>import('./dialog/index-dialog.vue'),
  },
  data() {
    return {
      systemTitleConfig:{
        subType:"B"
      },
      dialogConfig:{
        show:false,
        width:'60%',
        height:'60%',
        title:"",
        titleWidth:350,
      },
      panelTitleConfig:{width:180,},
      
      tabActive:0,
      tabs:[
        {title:"Area A",label:0},
        {title:"Area B",label:1},
        {title:"Area C",label:2},
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
          {title:"Overexploitation area",component:"echartsBarA",border:"aYinTechBorderB4"},
          {title:"Water consumption",component:"echartsBarHoriz",border:"aYinTechBorderB4"},
          {title:"Water use",component:"echartsLineA",border:"aYinTechBorderB4"},
          {title:"Counter",component:"counterGrid",border:false},
        ]},
        {name:"right",portlets:[
          {title:"Pie Tabs",component:"echartsPieTabs",border:"aYinTechBorderB4",hideTitle:true},

          {border:"aYinTechBorderB4",charts:[
            {title:"Transgressive area",component:"echartsLineC",activeIn:0},
            {title:"Water level A",component:"echartsLineD",activeIn:1},
            {title:"Water level B",component:"echartsLineC",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {title:"Transgressive Situation",component:"echarts-BarLineA",activeIn:0},
            {title:"Buried depth A",component:"echartsBarB",activeIn:1},
            {title:"Buried depth B",component:"echartsBarA",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {title:"Water consumption",component:"scrollBoardTable",activeIn:0},
            {title:"Water consumption A",component:"rankingBoard",activeIn:1},
            {title:"Water consumption B",component:"rankingBoard",activeIn:2}
          ]},
        ]},
        {name:"center",portlets:[
          {title:"Pie Tabs",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:true},
          {title:"Groundwater trend",component:"echartsLineB",border:"aYinTechBorderB4"},
        ]}
      ]
      
    };
  },
  computed: {
    chartCounter(){
      return this.adaptiveConfig.chartCounter;
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
    
    "$tState.chartData.title"(val,old){
      this.dialogConfig.show=false
      this.$nextTick(()=>{
        this.dialogConfig.title=this.$tState.chartData.title
        this.dialogConfig.show=true
      })
    },
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
.dashboard1080C{ z-index: 1; padding:70px 60px 50px 60px; height:100%;
  // background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .grid(24,24,30px);//columns, rows, gap
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .panel3D-wrap{ .poa; .fullbox;

    }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .portlet-wrapper{.por;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{ grid-area: 19 / 7 / 25 / 19; }
    &.area-left,&.area-right{.panel3D-inner{.grid(1,4,20px);}}
    &.area-center{.panel3D-inner{ .grid(2,1,20px); }
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
