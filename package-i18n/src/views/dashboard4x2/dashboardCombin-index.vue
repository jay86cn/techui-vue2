<template>
  <div class="dashboard4X2Combin">
    <template v-if="pcMode">
      <dragTool :state="state" v-if="!reload"></dragTool>
      <adaptivePanel :config="adptivePanelConfig">
        <systemTitleA2 :config="systemTitleConfig" :class="`${state.hover?'hide':'show'}`" ></systemTitleA2>
        <div class="dashboard-wrapper">
          <div class="dashboard-item" v-for="item in state.dashboard">
            <div :class="`dashboard-name ${state.hover?'show':'hide'}`"><i>{{item.name}}</i></div>
            <component :is='item.component' :data-name="item.component" v-if="state.init>=item.id" :state="state"></component>
          </div>
        </div>
      </adaptivePanel>
    </template>
    <template v-else>
      <div class="mobileMode-alert">
        <p class="title">{{$t("tip.title.combin4x2Mobile")}}</p>
        <p>{{$t("tip.desc.dashboardCombinA")}}</p>
        <p>{{$t("tip.desc.dashboardCombinB")}}</p>
      </div>
    </template>
  </div>
</template>
<script>

export default {
  mixins: [],
  name: "dashboard4X2Combin",
  components: {
    dashboardA:() => import('./dashboard/dashboardA/layoutCombin.vue'),
    dashboardB:() => import('./dashboard/dashboardB/layoutCombin.vue'),
    dashboardC:() => import('./dashboard/dashboardC/layoutCombin.vue'),
    dashboardD:() => import('./dashboard/dashboardD/layoutCombin.vue'),
    dashboardE:() => import('./dashboard/dashboardE/layoutCombin.vue'),
  },
  data() {
    return {
      reload:false,
      adptivePanelConfig:{
        adaptiveType:"proportional",
        backgroundFillAll:true,
        width:7680,
        height:2160,
        chartCount:24,
      },
      systemTitleConfig:{
        subType:"B"
      },
      pcMode:true,
      chartCount:23,
      boxStyle:{
        color1:$c.fade($c.bk,.3),
        color2:$c.blm7,
        color3:$c.bll1,
        BGColor:$c.fade($c.bll9,.8),
      },
      state:{
        hover:false,
        init:0,
        dashboard:[
          {id:0,name: "boardA",component:"dashboardA" }, 
          {id:1,name: "boardB",component:"dashboardB" }, 
          {id:2,name: "boardC",component:"dashboardC" }, 
          {id:3,name: "boardD",component:"dashboardD" }, 
          {id:4,name: "boardE",component:"dashboardE" }
        ],
      }
    };
  },
  watch:{
    "$tState.deviceType"(val){
      if(val=="mobile"){
        this.pcMode=false;
      }else{
        this.pcMode=true;
      }
    },
    "globalConfig.language"(val){
      this.dragInitLang()
    },
    
  },
  computed: {
   
  },
  methods: {
    dragInitLang(){
      this.state.dashboard.forEach((item,i)=>{
        item.name=this.$t(`common.dragTool.board${i+1}`)
      })
    }
  },
  beforeMount(){},
  mounted() {
    this.dragInitLang()
    const {tipState,$notify,$timer}=this
    if(this.deviceType!="mobile"){
      
      if(tipState){
        $timer("notify1",()=>{
          $notify({
            title: this.$t("tip.title.performance"),
            message: this.$t("tip.desc.dashboardCombin1"),
            duration: 0
          });
        },3000)
        $timer("notify2",()=>{
          $notify({
            title: this.$t("tip.title.common"),
            message: this.$t("tip.desc.dashboardCombin2"),
            duration: 0
          });
        },5000)

      }
    }else{
      this.pcMode=false;
    }
    
  },
  beforeDestroy() {
    const {$notify,$timer}=this
    $notify.closeAll()
    $timer("notify2")
  },
  
};










</script>


<style lang="less">
.dashboard4X2Combin{.poa; .fullbox;
  
  .adaptivePanel{
    .adaptiveObject{ //.bd(var(--tech-bg),2px);  backdrop-filter:contrast(90%) brightness(120%) saturate(80%); .bgc(fade(@blA19,50%));
      .systemTitle-wrap{transform: scale(2) translateX(-50%); .ani; top:10px; transform-origin: left top; 
        &.show{opacity: 1;}
        &.hide{opacity: 0;}
      }
      //.vectorBG('bg2',@blA17,@blA18,@blA19);
      //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230c50a7' fill-opacity='.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), radial-gradient(ellipse at bottom,lighten(@blA19,15%) 3%,lighten(@blA19,0%) 50%,@blA19 100% );
      
    }
  }
  .dashboard-wrapper{ .poa; .fullbox(0); padding:60px 80px;  .grid(4,2,0);
    .dashboard-item{.por;
      .dashboard-name{ .poa; .ani; .fullbox; z-index: 5; margin:-1px;.bgc(var(--popup-bg)); .bd(var(--tech-deco_A));  pointer-events: none; //.bdFilter;
        &.show{opacity: 1;}
        &.hide{opacity: 0;}
        i{.absoluteCenter; font-size: 100px; .ff("cn0");.fc(var(--font-normal)); font-style: normal;}
      }
    // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
      &:nth-child(1){ grid-area: 1 / 2 / 3 / 4;
        .dashboard-name{ i{ font-size: 180px;} }
        .dashboardSub{width: 1879px; height: 1010px;.scale(2,"fixNone");; padding:40px 30px;}
      }
    }
  }
  .mobileMode-alert{.absoluteCenter;  font-size: 18px; width: 80%;
    p{.fc(@cbl7); 
      &.title{font-size: 24px;font-weight: bold; .fc(@cbl3);}
      &:nth-child(3){font-weight: bold;}
    }
  }
}

</style>
