<template>
  <div class="screenB screenSub" id="screenB">
    <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <blockTitleA1 v-if="!item.hideTitle" :config="blockTitleConfig" >{{item.title}}</blockTitleA1>
        <component :is='item.component' :class="item.class"></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "screenB",
  props:["state"],
  mixins: [],
  components: {
    echartsRadar:() => import('./portlet/echarts-radar'),
    echartsGaugeTriple:() => import('./portlet/gaugeTriple-group'),
    echartScatter:() => import('./portlet/echarts-scatter'),
    echartsBarB:() => import('./portlet/echarts-barB'),
    echartsLineB:() => import('./portlet/echarts-lineB'),
  },
  data() {
    return {
      blockTitleConfig:{width:180,},
      portlets:[
        {title:"异常特征分布",component:"echartsRadar",border:"DVBorderBox2"},
        {title:"重点监控告警",component:"echartsGaugeTriple",border:"DVBorderBox1",hideTitle:true},//,class:"noAni"
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
    this.state.init++
  },
  destroyed(){
  }
};
</script>
<style lang="less">
.screenB {.poa; .fullbox; z-index: 1; padding:30px 30px 56px 30px;//pointer-events: none;
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    //上侧 <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 14 / 7; padding:26px 0 0 0;}
    &:nth-child(2){ grid-area: 1 / 7 / 14 / 19;}
    &:nth-child(3){ grid-area: 1 / 19 / 14 / 25; padding:26px 0 0 0;}
    //下侧
    &:nth-child(4){ grid-area: 14 / 1 / 25 / 13;}
    &:nth-child(5){ grid-area: 14 / 13 / 25 / 25;}
    
    .DVBorderBox1{
      &.hasRow{
        .border-content{padding:40px 15px 15px 15px;}
      }
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
@keyframes rotateCircle {
  0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
  //50% { opacity: 0.3; }
  100% {transform: translateX(-50%) translateY(-50%) rotate(360deg);}
}
</style>