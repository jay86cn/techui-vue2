<template>
  <div class="dashboardC dashboardSub" id="dashboardC">
   <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "dashboardC",
  props:["state"],
  mixins: [],
  components: {
    echartsLineC:() => import('./portlet/echarts-lineC.vue'),
    echartsPictorialBar:() => import('./portlet/echarts-pictorialBar.vue'),
    scrollBoard:() => import('./portlet/scrollBoard.vue'),
    echartsPieA:() => import('./portlet/echarts-pieA.vue'),
  },
  data() {
    return {
      panelTitleConfig:{width:180,},
      portlets:[
        {title:"Sales Performance",component:"echartsPieA",border:"DVBorderBox2"},
        {title:"Human Resources",component:"echartsPictorialBar",border:"DVBorderBox2"},
        {title:"Sales Performance",component:"echartsLineC",border:"DVBorderBox1",hideTitle:true},
        {title:"Scrolling List",component:"scrollBoard",border:"DVBorderBox2"},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      const {getColor}=this
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
.dashboardC {.poa; .fullbox; z-index: 1; padding:56px 30px;//pointer-events: none;
  .grid(24,24,30px);
  .portlet-wrapper{.bdr(5px);  overflow: hidden; pointer-events: visible; position: relative; z-index: 10; //height: 300px;
    //左侧2 <row-start> / <column-start> / <row-end> / <column-end>;
    &:nth-child(1){ grid-area: 1 / 1 / 11 / 10;
      .border-content{padding:40px 20px 20px 20px;}
    }
    &:nth-child(2){ grid-area: 1 / 10 / 11 / 19;
      .border-content{padding:40px 20px 20px 20px;}
    }
    &:nth-child(3){ grid-area: 11 / 1 / 25 / 19;
      .border-content{padding:20px 20px 20px 20px;}
    }
    //右侧1
    &:nth-child(4){ grid-area: 1 / 19 / 25 / 25; //padding:20px 0 0 0;
      .border-content{padding:50px 20px 20px 20px;}
    }
    .border-content{padding:15px;
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