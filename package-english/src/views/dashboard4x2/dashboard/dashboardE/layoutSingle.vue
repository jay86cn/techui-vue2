<template>
  <div class="dashboardSingleE" id="dashboardE">
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
  mixins: [],
  name: "dashboardE",
  // props:["state"],
  components: {
    echartsLineD:() => import('./portlet/echarts-lineD.vue'),
    echartsBarA:() => import('./portlet/echarts-barA.vue'),
    echartsGaugeTwo:() => import('./portlet/echarts-gaugeTwo.vue'),
    echartsPie:() => import('./portlet/echarts-pieB.vue'),
    
  },
  data() {
    return {
      portlets:[
        {title:"Annual revenue forecast trend",component:"echartsLineD",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"Business Profitability Trend",component:"echartsBarA",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"Temperature and Humidity",component:"echartsGaugeTwo",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {title:"Other Charts",component:"echartsPie",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      let borderConfig={
        title:item.title,
        ani:false,
        titleWidth:350,
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
  destroyed(){ }
};
</script>
<style lang="less">
.dashboardSingleE {.poa; .fullbox; z-index: 1; padding:90px 30px 90px 30px;//pointer-events: none;
  .grid(24,24,30px);
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    &:nth-child(1){ grid-area: 1 / 1 / 13 / 13;}
    &:nth-child(2){ grid-area: 1 / 13 / 13 / 25;}
    &:nth-child(3){ grid-area: 13 / 1 / 25 / 13;}
    &:nth-child(4){ grid-area: 13 / 13 / 25 / 25;}
    .border-content{padding:25px 15px 15px 15px;
      >i{.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
    }
  }
  
}

</style>