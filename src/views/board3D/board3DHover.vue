
<template>
  <screenAdaptive  :adaptiveType="'proportional'" :loading="loading" :style="svgBG1">
    <div class="view3d-state" :class="[$vuex.state.globalConfig.board3D?'on3D':'off3D']">
      <div class="state state-on">3D view is on</div>
      <div class="state state-off">3D view is off</div>
      <div class="desc">Please enable the 3D panel function in the global configuration item</div>
    </div>
    <div class="title-desc">Hover mode is a static parameter, this demo is a parameter configured separately, deformation axis, parameter, shadow, etc.</div>
    <!-- <anyToggle :config="toggleConfig" class="board3D-view-toggle"></anyToggle> -->
    <div class="board3D-test-hover-wrap">
      <board3D :config="configBLeft" class="board-3d board-left">
        <div class="demo-box"> </div>
      </board3D>
      <board3D :config="configBTopLeft" class="board-3d board-topLeft">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </board3D>
      <board3D :config="configBTopRight" class="board-3d board-topRight">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </board3D>
      <board3D :config="configBBottomLeft" class="board-3d board-bottomLeft">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </board3D>
      <board3D :config="configBBottomRight" class="board-3d board-bottomRight">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </board3D>
      <board3D :config="configBRight" class="board-3d board-right">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </board3D>
    </div>
  </screenAdaptive>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      loading:true,
      configBLeft:{
        rotate: {
          y:20,
        },
        transformOrigin:"right",
        view3d:true,
        showShadow:true
      },
      configBTopLeft:{
        rotate: {
          y:20,
          x:-35,
        },
        rotateHover: {
          x:-20,
          y:-20,
        },
        view3d:true,
        showShadow:true
      },
      configBTopRight:{
        rotate: {
          y:-20,
          x:-35,
        },
        view3d:true,
        showShadow:true
      },
      configBBottomLeft:{
        rotate: {
          y:20,
          x:35,
        },
        view3d:true,
        showShadow:true
      },
      configBBottomRight:{
        rotate: {
          y:-20,
          x:35,
        },
        view3d:true,
        showShadow:true
      },
      configBRight:{
        rotate:{
          y:-20,
        },
        
        transformOrigin:"left",
        view3d:true,
        showShadow:true
      },
      toggleConfig:{
        checked:true,
        title:"3D视图开关"
      },
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "$vuex.state.globalConfig.board3D"(val){
      this.change3Dview()
    }
  },
  methods: {
    change3Dview(){
      let val=this.$vuex.state.globalConfig.board3D;
      let arry=[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight]
      arry.forEach((item,i)=>{
        item.view3d=val;
      })
    }
  },
  mounted() {
    this.change3Dview()
    A("tis","B3DLoading",()=>{
      this.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.board3D-test-hover-wrap{.poa; .fullbox;  transform:  perspective(1000px) translateZ(-100px);
  .board-3d{  .poa;.fullbox(60px); 
    .board-3d-inner{ .bdr(20px);}
    .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
      .inner-box{.bdTechBottom(var(--tech-deco_A))}
    }
    &.board-left{  right:auto; width: 400px; }
    &.board-right{ left:auto; width: 400px; }
    &.board-topLeft{ bottom:auto; left:30%;  right:auto; width: 300px; height: 300px; }
    &.board-topRight{ bottom:auto; right:30%;  left:auto; width: 300px; height: 300px; }
    &.board-bottomLeft{ top:auto; left:30%;  right:auto; width: 300px; height: 450px; }
    &.board-bottomRight{ top:auto; right:30%;  left:auto; width: 300px; height: 450px; }
  }
}
.screenAdaptive {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>