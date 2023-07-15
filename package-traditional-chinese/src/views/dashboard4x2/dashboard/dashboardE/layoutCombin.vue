<template>
  <div class="dashboardE dashboardSub" id="dashboardE">
    <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "dashboardE",
  props:["state"],
  mixins: [],
  components: {
    echartsLineD:() => import('./portlet/echarts-lineD.vue'),
    echartsBarA:() => import('./portlet/echarts-barA.vue'),
    echartsGaugeTwo:() => import('./portlet/echarts-gaugeTwo.vue'),
    echartsPie:() => import('./portlet/echarts-pieB.vue'),
    
  },
  data() {
    return {
      portlets:[
        {title:"年度收益預測走勢",component:"echartsLineD",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"業務盈利能力走勢",component:"echartsBarA",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"倉庫溫濕度",component:"echartsGaugeTwo",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"其他圖表",component:"echartsPie",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
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
  destroyed(){ }
};
</script>
<style lang="less">
.dashboardE {.poa; .fullbox; z-index: 1; padding:30px 30px 56px 30px;//pointer-events: none;
  .grid(24,24,30px);
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    &:nth-child(1){ grid-area: 1 / 1 / 13 / 13;}
    &:nth-child(2){ grid-area: 1 / 13 / 13 / 25;}
    &:nth-child(3){ grid-area: 13 / 1 / 25 / 13;}
    &:nth-child(4){ grid-area: 13 / 13 / 25 / 25;}
    .border-content{padding:40px 15px 15px 15px;
      >i{.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
    }
  }
  
}
@keyframes rotateCircle{
  0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
  //50% { opacity: 0.3; }
  100% {transform: translateX(-50%) translateY(-50%) rotate(360deg);}
}
</style>