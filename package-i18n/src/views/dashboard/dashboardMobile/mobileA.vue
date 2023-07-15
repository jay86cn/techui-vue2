<template>
    <div class="dashboardMobileA">
      <mapCounter></mapCounter>
      <div class="area-wrap">
        <div v-if="area.name!='bottom'" :class="`area-box area-${area.name}`" v-for="area in areas">
          <div class="portlet-wrapper"  v-for="(item,index) in area.portlets">
            <component v-if="item.border" :is='item.border' :config="getConfig(item)">
              <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
              <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboardC.PTitle.${item.id}`)}}</panelTitleA1>
              <component :is='item.component' ></component>
              <i>{{item.component}}</i>
            </component>
            <template v-else>
              <component :is='item.component'></component>
              <i>{{item.component}}</i>
            </template>
          </div>
      </div>

      <div :class="`area-box area-bottom`">
          <div class="content-tabs">
            <div class="tabs-item" :class="item.label==tabActive?'active':'deactive'" @click="tabActive=index" v-for="(item,index) in tabs">{{$t(`dashboardC.tabs.area${index+1}`)}}</div>
          </div>
          <div class="portlet-wrapper" v-for="(item,index) in areas[1].portlets">
            <component :is='item.border' :config="getConfig(item)">
              <template v-if="!item.charts">
                <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboardC.PTitle.${item.id}`)}}</panelTitleA1>
                <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
                <component :is='item.component' :tabActive="tabActive" ></component>
                <i>{{item.activeIn==tabActive }}-{{item.activeIn }}-{{item.component}}</i>
              </template>
              <template v-else>
                
                <template v-for="chart in item.charts" v-if="chart.activeIn==tabActive">
                  <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboardC.PTitle.${chart.id}`)}}</panelTitleA1>
                  <!-- <portletTitle :title="chart.title"></portletTitle> -->
                  <component :is='chart.component' :tabActive="tabActive" ></component>
                  <i>{{chart.activeIn==tabActive }}-{{chart.activeIn }}-{{chart.component}}</i>
                </template>
              
              </template>
            </component>
          </div>
        </div>
      </div>
      
      <systemTitleA1 :config="systemTitleConfig"></systemTitleA1>
      <!-- <mapDrill v-if="chartCounter>=8"></mapDrill> -->
    </div>
</template>
<script>

export default {
  mixins: [],
  components: {
    mapCounter:() => import('./portlet/map/map-counter.vue'),
    mapDrill:() => import('./portlet/map/map-simple.vue'),
    echartsBarA:() => import('./portlet/echarts-BarA.vue'),
    echartsBarHoriz:() => import('./portlet/echarts-BarHoriz.vue'),
    echartsLineA:() => import('./portlet/echarts-lineA.vue'),
    counterGrid:() => import('./portlet/counter-grid.vue'),
    echartsBarLineTabs:() => import('./portlet/echarts-barLineTabs.vue'),
    echartsLineB:() => import('./portlet/echarts-lineB.vue'),
    echartsLineC:() => import('./portlet/echarts-lineC.vue'),
    echartsPieTabs:() => import('./portlet/echarts-pieTabs.vue'),
    echartsBarLineA:() => import('./portlet/echarts-BarLineA.vue'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table.vue'),
    rankingBoard:() => import('./portlet/rankingBoardScroll.vue'),
    echartsLineD:() => import('./portlet/echarts-lineD.vue'),
    echartsBarB:() => import('./portlet/echarts-BarB.vue'),

    //mapDrill:() => import('../portlet/mapLN.vue'),
  },
  data() {
    return {
      systemTitleConfig:{
        scale:.65,
        width:502,
      },
      panelTitleConfig:{width:180,},
      tabActive:0,
      tabs:[
        {title:"Area A",label:0},
        {title:"Area B",label:1},
        {title:"Area C",label:2},
      ],
      
      areas:[
        {name:"top",portlets:[
          {id:"l0",title:"map",component:"mapDrill",border:"aYinTechBorderB4",hideTitle:true},
          {id:"l1",title:"Overexploitation area",component:"echartsBarA",border:"aYinTechBorderB4"},
          {id:"l2",title:"Water consumption",component:"echartsBarHoriz",border:"aYinTechBorderB4"},
          {id:"l3",title:"Water use",component:"echartsLineA",border:"aYinTechBorderB4"},
          {id:"l4",title:"Counter",component:"counterGrid",border:false},
          {id:"c1",title:"Pie Tabs",component:"echartsBarLineTabs",border:"aYinTechBorderB4",hideTitle:true},
          {id:"c2",title:"Groundwater trend",component:"echartsLineB",border:"aYinTechBorderB4"},
        ]},
        {name:"bottom",portlets:[
          {id:"r1",title:"Pie Tabs",component:"echartsPieTabs",border:"aYinTechBorderB4",hideTitle:true},

          {border:"aYinTechBorderB4",charts:[
            {id:"r2_1",title:"Transgressive area",component:"echartsLineC",activeIn:0},
            {id:"r2_2",title:"Water level A",component:"echartsLineD",activeIn:1},
            {id:"r2_3",title:"Water level B",component:"echartsLineD",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {id:"r3_1",title:"Transgressive Situation",component:"echarts-BarLineA",activeIn:0},
            {id:"r3_2",title:"Buried depth A",component:"echartsBarB",activeIn:1},
            {id:"r3_3",title:"Buried depth B",component:"echartsBarB",activeIn:2}
          ]},
          {border:"aYinTechBorderB4",charts:[
            {id:"r4_1",title:"Water consumption",component:"scrollBoardTable",activeIn:0},
            {id:"r4_2",title:"Water consumption A",component:"rankingBoard",activeIn:1},
            {id:"r4_3",title:"Water consumption B",component:"rankingBoard",activeIn:2}
          ]},
        ]},
        
      ]
      
    };
  },
  computed: {
    chartCounter(){
      return this.$tState.adaptiveConfig.chartCounter;
    }
  },
  methods: {
   
    getConfig(item){
      const {getColor}=this
      let borderConfig={
        title:item.title,
        // titleColor:$c.cyl5,
        // backgroundColor:$c.bll9,
        // borderColor:$c.bll7,
        // decorationColor:[$c.bll3,$c.cyl5],
        opacity:.6
      }
      return borderConfig;
    }
    
  },
  watch:{
    
  },
  mounted() {
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.dashboardMobileA{ padding:30px 15px; 
  // background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
  .i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .area-wrap{margin:210px 0 0 0;}
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .grid(1,4,20px);
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .portlet-wrapper{.por; height:250px;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-top{
      .portlet-wrapper{
        &:nth-child(1){grid-row: 1 / 3;height:auto;}
      }
    }
    &.area-bottom{margin-top:60px; }
  }
  .content-tabs{.poa;  top:-40px; left:80px; right:80px; text-align: center; height: 40px;
    &:before{content:" "; .bdb(var(--button-bd_hov));left:0; right:0; bottom:10px;.poa; z-index: 1;}
    .tabs-item{display:inline-block; padding:0 10px; .ff("cn1");.fc(var(--font-normal)); height: 30px;line-height: 30px; cursor: pointer; .ani; z-index: 2; .por;
      &:before{ .bgc(var(--button-bd_hov));}
      &:hover{.bgc(fade(@cbl3,30%));}
      &.active{.bdb(var(--font-strong)); .fc(var(--font-strong));}
    }
  }
  // .systemTitle-wrap{transform: scale(.7) translateX(-50%); transform-origin: left top;}
}

</style>
