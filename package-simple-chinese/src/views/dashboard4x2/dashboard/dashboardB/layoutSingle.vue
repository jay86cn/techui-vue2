<template>
  <div class="dashboardSingleB" id="dashboardB">
    <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
        <component :is='item.component' :class="item.class"></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  mixins: [],
  name: "dashboardB",
  components: {
    echartsRadar:() => import('./portlet/echarts-radar.vue'),
    echartsGaugeTriple:() => import('./portlet/gaugeTriple-group.vue'),
    echartScatter:() => import('./portlet/echarts-scatter.vue'),
    echartsBarB:() => import('./portlet/echarts-barB.vue'),
    echartsLineB:() => import('./portlet/echarts-lineB.vue'),
  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      portlets:[
        {title:"异常特征分布",component:"echartsRadar",border:"DVBorderBox2"},
        {title:"重点监控告警",component:"echartsGaugeTriple",border:"DVBorderBox1",hideTitle:true},//class:"noAni",
        {title:"散点分布图",component:"echartScatter",border:"DVBorderBox2"},
        {title:"echartsBarB",component:"echartsBarB",border:"DVBorderBox2"},
        {title:"echartsLineB",component:"echartsLineB",border:"DVBorderBox2"},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      let borderConfig={
        title:item.title,
        ani:false,
        // titleColor:$c.cbl3,
        // backgroundColor:$c.bll9,
        // borderColor:$c.bll7,
        // decorationColor:[$c.bll3,$c.cyl5],
        opacity:.7,
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
.dashboardSingleB {.poa; .fullbox; z-index: 1; padding:90px 30px ;//pointer-events: none;
  .grid(24,24,30px);
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    //上侧 <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 14 / 7;}
    &:nth-child(2){ grid-area: 1 / 7 / 14 / 19;}
    &:nth-child(3){ grid-area: 1 / 19 / 14 / 25;}
    //下侧
    &:nth-child(4){ grid-area: 14 / 1 / 25 / 13;}
    &:nth-child(5){ grid-area: 14 / 13 / 25 / 25;}
    
    .dv-border-box-11{
      &.hasRow{
        .border-content{padding:40px 15px 15px 15px;}
      }
    }
    .DVBorderBox1{
      .border-content{padding:30px 15px 15px 15px;}
    }
    .border-content{padding:15px;
      >i{.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
    }
    .hasRow{
      .border-content{padding:15px;
        .el-row{height: 100%; position: relative;
          .el-col{height: 100%; position: relative;
            &.el-col-half{height:50%;}
            &.padding15{padding:15px; }
            .dv-conical-column-chart{}
          }
        }
      }
    }
  }
}

</style>