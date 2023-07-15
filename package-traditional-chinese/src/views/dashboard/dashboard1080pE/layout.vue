<template>
  <div class="dashboard1080E">
   <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    <systemTitleA1></systemTitleA1>
  </div>
</template>
<script>

export default {
  mixins: [],
  components: {
    rankingBoard:() => import('./portlet/rankingBoard.vue'),
    counterGrid:() => import('./portlet/counter-grid.vue'),
    echartsLine1:() => import('./portlet/echarts-line1.vue'),
    echartsBar2:() => import('./portlet/echarts-Bar2.vue'),
    echartsBarLine1:() => import('./portlet/echarts-BarLine1.vue'),
    echartsPie1:() => import('./portlet/echarts-pie1.vue'),
    scrollBoardTable:() => import('./portlet/scrollBoard-Table.vue'),
  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      portlets:[
        {title:"統計模塊",component:"counterGrid",border:"blank",hideTitle:true},
        {title:"重點信息看板",component:"echartsBarLine1",border:"DVBorderBox1",hideTitle:true},
        {title:"銷售排行榜Top10",component:"rankingBoard",border:"aYinTechBorderB4"},
        {title:"回款變動推送",component:"scrollBoardTable",border:"aYinTechBorderB4"},
        {title:"回款與開票統計",component:"echartsLine1",border:"aYinTechBorderB1"},
        {title:"淨利潤環比",component:"echartsBar2",border:"aYinTechBorderB1"},
        {title:"合同類型占比",component:"echartsPie1",border:"aYinTechBorderB4"},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      let borderConfig={
        title:item.title,
        // titleColor:$c.cyl5,
        // backgroundColor:$c.bll9,
        // borderColor:$c.bll7,
        // decorationColor:[$c.bll3,$c.cyl5],
        ani:false,
        opacity:.6
      }
      let aYinTechBorderA1={
        decorationAlt: true, 
        titleWidth: 140, 
        rotate: "y"
      }
      if(item.border=="aYinTechBorderA1"){
        borderConfig=_.assign(borderConfig, aYinTechBorderA1)
      }
      if(item.border=="aYinTechBorderB1"){
        borderConfig.decoration=false
      }
      return borderConfig;
    }
  },
  mounted() {
    // this.$timer("loading",()=>{ this.state.loading=false },1000)
  },
  destroyed(){
  }
};
</script>
<style lang="less">
.portletInfo(){.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
.dashboard1080E {.poa; .fullbox; z-index: 1; padding:90px 30px 30px 30px;//pointer-events: none;
  .grid(24,24,30px);//columns, rows, gap
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    //左侧2 <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 13 / 7; padding:28px 0 3px 0;
      .border-content{padding:50px 20px 20px 20px;}
    }
    &:nth-child(2){ grid-area: 1 / 7 / 13 / 19;
      .border-content{padding:10px;}
    }
   
    &:nth-child(3){ grid-area: 1 / 19 / 13 / 25; padding:28px 0 3px 0;
      .border-content{padding:50px 20px 20px 20px;}
    }

    &:nth-child(4){ grid-area: 13 / 1 / 25 / 9;
      .border-content{padding:10px;}
    }
    &:nth-child(5){ grid-area: 13 / 9 / 19 / 17;
      .border-content{padding:10px;}
    }
    &:nth-child(6){ grid-area: 19 / 9 / 25 / 17;
      .border-content{padding:10px;}
    }
    &:nth-child(7){ grid-area: 13 / 17 / 25 / 25;
      .border-content{padding:10px;}
    }
    
    .blank{>i{.portletInfo;}}
    .border-content{padding:15px; 
      >i{.portletInfo;}
    }
  }
  .echarts-hasSelect{width: 100%;height: 100%;
    .el-select{.poa; top:10px; right:10px;z-index: 10; width: 120px; }
  }
}



</style>