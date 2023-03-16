<template>
  <div class="screen4X2Combin">
    <template v-if="pcMode">
      <screenDragTool :state="state"></screenDragTool>
      <screenAdaptive :width="7680" :height="2160" :adaptiveType="'proportional'" :chartCount="chartCount">
        <sysTitleA2 :config="sysTitleConfig" :class="`${state.hover?'hide':'show'}`" ></sysTitleA2>
        <div class="screen-wrapper" :style="svgBG1">
          <div class="screen-item" v-for="item in state.screen">
            <div :class="`screen-name ${state.hover?'show':'hide'}`"><i>{{item.name}}</i></div>
            <component :is='item.component' :data-name="item.component" v-if="state.init>=item.id" :state="state"></component>
          </div>
        </div>
      </screenAdaptive>
    </template>
    <template v-else>
      <div class="mobileMode-alert">
        <p class="title">4x2 combo screen Tip</p>
        <p>It is detected that you are currently viewing in mobile mode, the 4x2 combined screen has a large amount of data and usually the performance of mobile devices is limited to support the display of this feature.</p>
        <p>Please move to PC to access.</p>
        <!-- <p>如果您已经在用pc端访问，请确保您的浏览器窗口已经最大化，然后尝试刷新。</p> -->
      </div>
    </template>
  </div>
</template>
<script>

export default {
  mixins: [],
  name: "screen4X2Combin",
  components: {
    screenA:() => import('./screen/screenA/layoutCombin'),
    screenB:() => import('./screen/screenB/layoutCombin'),
    screenC:() => import('./screen/screenC/layoutCombin'),
    screenD:() => import('./screen/screenD/layoutCombin'),
    screenE:() => import('./screen/screenE/layoutCombin'),
  },
  data() {
    return {
      sysTitleConfig:{
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
        screen:[
          {id:0,name: "ScreenA",component:"screenA" }, 
          {id:1,name: "ScreenB",component:"screenB" }, 
          {id:2,name: "ScreenC",component:"screenC" }, 
          {id:3,name: "ScreenD",component:"screenD" }, 
          {id:4,name: "ScreenE",component:"screenE" }
        ],
      }
    };
  },
  watch:{
    "$vuex.state.deviceType"(val){
      if(val=="mobile"){
        this.pcMode=false;
      }else{
        this.pcMode=true;
      }
    }
    
  },
  computed: {
   tipState(){
    return this.$vuex.state.globalConfig.tip
   }
  },
  methods: {
    
  },
  beforeMount(){},
  mounted() {
    const {tipState,$notify}=this
    if(A("dt")!="mobile"){
      // this.$vuex.state.globalConfig.ani=false
      if(tipState){
        A("tis","notify1",()=>{
          $notify({
            title: 'Performance tip',
            message: 'The Data Portfolio screen is designed for enterprise level large screen display and requires a higher performance environment to run. Due to the large amount of chart data displayed at the same time, it is difficult to face some weak PC environment, if you encounter lag, please change your computer and try again. You can also try turning off background blurring, animation effects etc. in the control panel to improve page efficiency. The control panel switch is located in the top right hand corner of the window',
            duration: 0
          });
        },3000)
        A("tis","notify2",()=>{
          $notify({
            title: 'tip',
            message: 'The content of the middle main screen in a 4x2 splicing screen can be swapped by dragging and dropping the panel in the bottom right corner. The large screen can be customised to suit any resolution.',
            duration: 0
          });
        },5000)

      }
    }else{
      this.pcMode=false;
    }
    
  },
  beforeDestroy() {
    const {$notify}=this
    $notify.closeAll()
    A("tic","notify2")
  },
  
};










</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.screen4X2Combin{.poa; .fullbox;
  
  .screenAdaptive{
    .adaptiveObject{ .bd(var(--tech-bg),2px); // backdrop-filter:contrast(90%) brightness(120%) saturate(80%); .bgc(fade(@blA19,50%));
      .sysTitle-wrap{transform: scale(2) translateX(-50%); .ani; top:10px; transform-origin: left top; 
        &.show{opacity: 1;}
        &.hide{opacity: 0;}
      }
      //.svgBG('bg2',@blA17,@blA18,@blA19);
      //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230c50a7' fill-opacity='.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), radial-gradient(ellipse at bottom,lighten(@blA19,15%) 3%,lighten(@blA19,0%) 50%,@blA19 100% );
      
    }
  }
  .screen-wrapper{ .poa; .fullbox(0); padding:60px 80px;  display: grid; grid-template-columns: repeat(4,1fr); grid-template-rows:repeat(2,1fr); grid-gap: 0;
    .screen-item{.por;
      .screen-name{ .poa; .ani; .fullbox; z-index: 5; margin:-1px;.bgc(var(--popup-bg)); .bd(var(--tech-deco_A));  pointer-events: none; //.bdFilter;
        &.show{opacity: 1;}
        &.hide{opacity: 0;}
        i{.absoluteCenter; font-size: 100px; .ff("cn0");.fc(var(--font-normal)); font-style: normal;}
      }
    // grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
      &:nth-child(1){ grid-area: 1 / 2 / 3 / 4;
        .screen-name{ i{ font-size: 180px;} }
        .screenSub{width: 1879px; height: 1010px;.scale(2,'nofix'); padding:40px 30px;}
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
