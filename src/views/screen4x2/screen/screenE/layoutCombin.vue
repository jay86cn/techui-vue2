<template>
  <div class="screenE screenSub" id="screenE">
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
  name: "screenE",
  props:["state"],
  mixins: [],
  components: {
    echartsLineD:() => import('./portlet/echarts-lineD'),
    echartsBarA:() => import('./portlet/echarts-barA'),
    echartsGaugeTwo:() => import('./portlet/echarts-gaugeTwo'),
    echartsPie:() => import('./portlet/echarts-pieB'),
    
  },
  data() {
    return {
      portlets:[
        {title:"年度收益预测走势",component:"echartsLineD",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"业务盈利能力走势",component:"echartsBarA",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"仓库温湿度",component:"echartsGaugeTwo",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"其他图表",component:"echartsPie",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
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
.screenE {.poa; .fullbox; z-index: 1; padding:30px 30px 56px 30px;//pointer-events: none;
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
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