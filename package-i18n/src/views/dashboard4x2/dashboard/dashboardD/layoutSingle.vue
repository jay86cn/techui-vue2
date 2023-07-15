<template>
  <div class="dashboardSingleD" id="dashboardD">
    <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboard4x2D.PTitle.${item.id}`)}}</panelTitleA1>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  mixins: [],
  name: "dashboardD",
  // props:["state"],
  components: {
    echartsBarHoriA:() => import('./portlet/echarts-barHoriA.vue'),
    echartsBarHoriB:() => import('./portlet/echarts-barHoriB.vue'),
    echartsHitmapGroup:() => import('./portlet/hitmapCounter-group.vue'),
    echartsGaugeCounter:() => import('./portlet/gaugeCounter-group.vue'),
    echartsGaugeFour:() => import('./portlet/echarts-gaugeFour.vue'),
    
  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      portlets:[
        {id:"p1",title:"Real-time flow",component:"echartsBarHoriA",border:"DVBorderBox2",color:[0,1,3]},
        {id:"p2",title:"Root Source Alarm",component:"echartsHitmapGroup",border:"DVBorderBox1",color:[0,2,3],hideTitle:true},
        {id:"p3",title:"Alarm Situation",component:"echartsGaugeCounter",border:"DVBorderBox2",color:[0,1,3]},
        {id:"p4",title:"Multiple Instruments",component:"echartsGaugeFour",border:"DVBorderBox2",color:[0,1,3]},
        {id:"p5",title:"Traffic Ranking",component:"echartsBarHoriB",border:"DVBorderBox2",color:[0,1,3]},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      let borderConfig={
        title:this.$t(`dashboard4x2D.PTitle.${item.id}`),
        ani:false,
        titleWdith:250,
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
.dashboardSingleD {.poa; .fullbox; z-index: 1; padding:90px 30px 90px 30px;//pointer-events: none;
  .grid(24,24,30px);//columns, rows, gap
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    //左侧2 <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 25 / 6;}
    //中间
    &:nth-child(2){ grid-area: 1 / 6 / 13 / 20;
      .border-content{padding:25px 15px 15px 15px;}
    }  
    &:nth-child(3){ grid-area: 13 / 6 / 25 / 13;}
    &:nth-child(4){ grid-area: 13 / 13 / 25 / 20;}
    //右侧
    &:nth-child(5){ grid-area: 1 / 20 / 25 / 25;}
    .border-content{padding:15px;
      >i{.poa; bottom:10px; right:20px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
    }
  }
}

</style>