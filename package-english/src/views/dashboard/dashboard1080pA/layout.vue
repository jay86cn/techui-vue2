<template>
  <div class="dashboard1080A">
    <div :class="`area-box area-${area.name}`" v-for="area in areas">
      <panel3D :config="getBorder3DConfig(area.name)" class="panel-3d">
        <div class="portlet-wrapper" v-for="(item,index) in area.portlets">
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
    <systemTitleA2 :config="systemTitleConfig"></systemTitleA2>
    <!-- <mapDrill v-if="chartCounter>=8"></mapDrill> -->
    <mapDrill></mapDrill>
    <layoutDialog :config="dialogConfig" v-if="dialogConfig.show"></layoutDialog>
  </div>
</template>
<script>
export default {
  mixins: [],
  components: {
    // mapDrill:() => import('../portlet/mapLN.vue'),
    // mapDrill:() => import('../portlet/mapDrill.vue'),
    mapDrill:() => import('./portlet/map/map-liaoning.vue'),
    echartsBarHoriz:() => import('./portlet/echarts-BarHoriz.vue'),
    echartsLineA:() => import('./portlet/echarts-lineA.vue'),
    counterGrid:() => import('./portlet/counter-grid.vue'),
    echartsGaugeTriple:() => import('./portlet/echarts-gaugeTriple.vue'),
    echartsBarHorizA:() => import('./portlet/echarts-BarHorizA.vue'),
    echartsSunburst:() => import('./portlet/echarts-sunburst.vue'),
    layoutDialog:()=>import('./dialog/index-dialog.vue'),
  },
  data() {
    return {
      systemTitleConfig:{
        // gradientBG:false,
        subType:"B"
      },
      panelTitleConfig:{
        width:160,
      },
      dialogConfig:{
        show:false,
        width:'60%',
        height:'60%',
        title:"对话框标题",
        titleWidth:350,
      },
      // panelTitleConfig:{
      //   width:180,
      //   theme:true
      // },
      
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
          {id:"l2",title:"In & Out",component:"echartsBarHoriz",border:"aYinTechBorderA1",hideTitle:true},
          {id:"l3",title:"Revenue",component:"echartsLineA",border:"aYinTechBorderA1",hideTitle:true},
          {id:"l1",title:"Sales tasks",component:"echartsBarHorizA",border:"aYinTechBorderA1",hideTitle:true},
        ]},
        {name:"right",portlets:[
          {id:"r1",title:"Sales Status",component:"counterGrid",border:"blank",hideTitle:true},
          {id:"r2",title:"Task Completion",component:"echartsGaugeTriple",border:"aYinTechBorderA1",hideTitle:true},
          {id:"r3",title:"Business Profit",component:"echartsSunburst",border:"aYinTechBorderA1"},
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
  mounted(){
    this.view3DToggle(this.globalConfig.panel3D)
    if(this.deviceType=="mobile"){
      this.$tState.globalConfig.panel3D=false
    }
  },
  beforeDestroy(){},
};
</script>

<style lang="less">
.dashboard1080A{ z-index: 1;padding:70px 60px 50px 60px; height:100%;
  // background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .grid(24,24,30px);//columns, rows, gap
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .panel3D-wrap{ .poa; .fullbox;

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
    &.area-left{.panel3D-inner{ .grid(1,3,20px);}}
    &.area-right{.panel3D-inner{ .grid(1,4,20px);}}
    &.area-center{.panel3D-inner{ .grid(2,1,20px);}
      .portlet-wrapper{ margin-top:-8px;}
    }
    
  }
  
}

</style>
