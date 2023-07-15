
<template>
  <adaptivePanel :config="adptivePanelConfig">
    <div class="view3d-state" :class="[globalConfig.panel3D?'on3D':'off3D']">
      <div class="state state-on">{{$t("panel3D.state.on")}}</div>
      <div class="state state-off">{{$t("panel3D.state.off")}}</div>
      <div class="desc">{{$t("panel3D.state.offTip")}}</div>
    </div>
    <div class="title-desc">{{$t("panel3D.desc.hover")}}</div>
    <!-- <anyToggle :config="toggleConfig" class="panel3D-view-toggle"></anyToggle> -->
    <div class="panel3D-test-hover-wrap">
      <panel3D :config="configBLeft" class="panel-3d board-left">
        <div class="demo-box"> </div>
      </panel3D>
      <panel3D :config="configBTopLeft" class="panel-3d board-topLeft">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </panel3D>
      <panel3D :config="configBTopRight" class="panel-3d board-topRight">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </panel3D>
      <panel3D :config="configBBottomLeft" class="panel-3d board-bottomLeft">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </panel3D>
      <panel3D :config="configBBottomRight" class="panel-3d board-bottomRight">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </panel3D>
      <panel3D :config="configBRight" class="panel-3d board-right">
        <div class="demo-box"> <div class="inner-box"></div> </div>
      </panel3D>
    </div>
  </adaptivePanel>
</template>
<script>
export default {
  name: "SVC",
  mixins: [],
  data() {
    return {
      loading:true,
      adptivePanelConfig:{
        backgroundName:"A1",
        backgroundFillAll:true,
        loading:true
      },
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
        title:"3D View Switch"
      },
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "globalConfig.panel3D"(val){
      this.change3Dview()
    }
  },
  methods: {
    change3Dview(){
      let val=this.globalConfig.panel3D;
      let arry=[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight]
      arry.forEach((item,i)=>{
        item.view3d=val;
      })
    }
  },
  mounted() {
    this.change3Dview()
    this.$timer("B3DLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.panel3D-test-hover-wrap{.poa; .fullbox;  transform:  perspective(1000px) translateZ(-100px);
  .panel-3d{  .poa;.fullbox(60px); 
    .panel3D-inner{ .bdr(20px);}
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
.adaptivePanel {
  .title-desc{.poa; top:20px; left:50%; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>