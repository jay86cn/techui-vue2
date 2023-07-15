<template>
    <div class="dashboard1080B">
      <div :class="`area-box area-${area.name}`" v-for="area in areas">
        <div class="portlet-wrapper" v-for="(item,index) in area.portlets">
          <component v-if="item.border" :is='item.border'>
            <panelTitleB2 v-if="!item.hideTitle" :config="panelTitleConfig">{{item.title}}</panelTitleB2>
            <component :is='item.component' ></component>
            <i>{{item.component}}</i>
          </component>
          <template v-else>
            <component :is='item.component'></component>
            <i>{{item.component}}</i>
          </template>
        </div>
      </div>
      <systemTitleB1></systemTitleB1>
      <!-- <mapDrill></mapDrill> -->
      <map3D></map3D>
      <layoutDialog :config="dialogConfig" v-if="dialogConfig.show"></layoutDialog>
    </div>
</template>
<script>
export default {
  mixins: [],
  components: {
    map3D:() => import('./portlet/map/map-geo3D-bar-liaoning.vue'),
    echartsHill:() => import('./portlet/echarts-hill-group/echarts-hill.vue'),
    echartsBarHorizA:() => import('./portlet/echarts-BarHorizA.vue'),
    echartsPieTabs:() => import('./portlet/echarts-pieTabs.vue'),
    echartsRadar:() => import('./portlet/echarts-radar.vue'),
    echartsGaugeTriple:() => import('./portlet/echarts-gaugeTriple.vue'),
    chartCounter:() => import('./portlet/chartCounter/chartCounter.vue'),
    layoutDialog:()=>import('./dialog/index-dialog.vue'),
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
      panelTitleConfig:{
        color:$c.wh,
        scale:1.1
      },
      
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
          {id:"r1",title:"销售情况",component:"chartCounter",border:"blank"},
          {id:"r2",title:"任务完成情况",component:"echartsGaugeTriple",border:"blank"},
          {id:"r3",title:"开支占比",component:"echartsRadar",border:"blank"},
        ]},
        {name:"right",portlets:[
          {id:"l2",title:"收支情况",component:"echartsPieTabs",border:"blank"},
          {id:"l3",title:"业务收益情况",component:"echartsBarHorizA",border:"blank"},
          {id:"l1",title:"行业收入占比",component:"echarts-hill",border:"blank"},
        ]},
        
        
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
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.dashboard1080B{ z-index: 1; padding:80px 40px 40px 40px; height:100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .grid(24,24,30px);//columns, rows, gap
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10;  padding:15px; .bdFilter(5px,120%); .bdr(10px); 
    &:before{  content:" "; .poa; .fullbox;.bdFilter(10px,300%); .bdr(10px); opacity: .8; .bd(var(--tech-vectorBG_A));}//
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .blank,
    .portlet-wrapper{.por;
      >i{.i;}
    }
    .border-content{>i{.i;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; 
      .portlet-wrapper{
        &:nth-child(3){grid-area:3 / 1 /5/ 2}
      }
    }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{ grid-area: 19 / 7 / 25 / 19; }
    &.area-right{.grid(1,3,20px);}
    &.area-left{.grid(1,4,20px);}
    &.area-center{.grid(2,1,20px);
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
  .panelTitleB2{left:0; top:0;}
  // .systemTitle-01{left:40px; transform: none;}
}

</style>
