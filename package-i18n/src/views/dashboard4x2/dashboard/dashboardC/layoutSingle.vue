<template>
  <div class="dashboardSingleC" id="dashboardC">
   <div class="portlet-wrapper" v-for="(item,index) in portlets">
      <component :is='item.border' :config="getConfig(item)">
        <!-- <portletTitle v-if="!item.hideTitle" :title="item.title"></portletTitle> -->
        <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{$t(`dashboard4x2C.PTitle.${item.id}`)}}</panelTitleA1>
        <component :is='item.component'></component>
        <i>{{item.component}}</i>
      </component>
    </div>
    
  </div>
</template>
<script>

export default {
  mixins: [],
  name: "dashboardC",
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
        {id:"p1",title:"Sales Performance",component:"echartsPieA",border:"DVBorderBox2"},
        {id:"p2",title:"Human Resources",component:"echartsPictorialBar",border:"DVBorderBox2"},
        {id:"p3",title:"Sales Performance",component:"echartsLineC",border:"DVBorderBox1",hideTitle:true},
        {id:"p4",title:"Scrolling List",component:"scrollBoard",border:"DVBorderBox2"},
      ]
    };
  },
  computed: {},
  methods: {
    getConfig(item){
      const {getColor}=this
      let borderConfig={
        title:this.$t(`dashboard4x2C.PTitle.${item.id}`),
        ani:false,
        titleWidth:250,
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
.dashboardSingleC {.poa; .fullbox; z-index: 1; padding:90px 30px 90px 30px;//pointer-events: none;
  .grid(24,24,30px);//columns, rows, gap
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

</style>