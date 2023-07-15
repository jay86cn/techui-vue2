<template>
  <div class="dashboard1080AG">
    <!-- <button style="position:aboslute; left:10px; left:100px; z-index:10;" @click="toggleControlPanel">tesat</button> -->
    <div :class="`area-box area-${area.name}`" v-for="area in areas">
      <panel3D :config="getBorder3DConfig(area.name)" class="panel-3d">
        <div class="portlet-wrapper" v-for="(item,index) in area.portlets">
          <component v-if="item.border" :is='item.border' :config="getConfig(item)">
            <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboardA.title.${item.id}`)}}</panelTitleA1>
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
    mapDrill:() => import('./portlet/map/map-simple.vue'),
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
      panelTitleConfig:{
        width:160,
      },
      dialogConfig:{
        show:false,
        width:'60%',
        height:'60%',
        title:"Dialog Title",
        titleWidth:350,
      },
      systemTitleConfig:{
        width:1000,
        subType:"A",//A B C D E F
        gradientBG:true,
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
    },
  },
  computed: {
    chartCounter(){
      return this.$tState.adaptiveConfig.chartCounter;
    }
  },
  methods: {
    // toggleControlPanel(){
    //   this.$tState.controlPanelOn=!this.$tState.controlPanelOn
    // },
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
          title:this.$t(`dashboardA.title.${item.id}`),
          titleWidth:120,
          decoration:false,
          decorationAlt: true,
          rotate: "y",
          opacity: 0.7
        }
      }else{
        return {
          title:this.$t(`dashboardA.title.${item.id}`),
          titleWidth:120,
          decoration:false,
          opacity:.7
        }
      }
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
.dashboard1080AG{ z-index: 1; padding:70px 60px 50px 60px; height:100%;
  // background: @bll9 url(../common/images/bg.png) no-repeat  center / 100% 100%;
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  .grid(24,24,30px);
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
  .content-tabs{.poa;  top:-40px; left:80px; right:80px; text-align: center; height: 40px;
    &:before{content:" "; .bdb(var(--button-bd_hov));left:0; right:0; bottom:10px;.poa; z-index: 1;}
    .tabs-item{display:inline-block; padding:0 10px; .ff("cn1"); .fc(var(--font-normal)); height: 30px;line-height: 30px; cursor: pointer; .ani; z-index: 2; .por;
      &:before{content:" "; .bgc(var(--button-bd_hov)); .poa; .fullbox; opacity: 0;}
      &:hover{&:before{opacity: .3;}}
      &.active{ .bdb(var(--font-strong)); .fc(var(--font-strong));}
    }
  }
  .img-demo{.poa; left:50%; .fixc("x"); top:0; width: 800px; opacity: 0;}
}

</style>
