
<template>
  <adaptivePanel :config="adptivePanelConfig">
    <div class="view3d-state" :class="[globalConfig.panel3D?'on3D':'off3D']">
      <div class="state state-on">3D view On</div>
      <div class="state state-off">3D view Off</div>
      <div class="desc">Please enable the 3D panel function in the global configuration item</div>
    </div>
    <div class="title-desc">Hive mode, all panel deformation directions are towards the cursor, all parameters are common, through v-for loop</div>
    <div class="panel3D-test-unity-wrap">
      
      <panel3D :config="boar3dConfig" class="panel-3d">
        <template slot-scope="parmas">
          <div class="gridDemoMax">
            <div class="item" :class="parmas.boxShadowItem" v-for="(item,index) in 15">
                <div class="demo-box">
                  <div class="inner-box"></div>
                </div>
            </div>
          </div>
        </template>
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
      boar3dConfig:{
        mode:"unity",
        view3d:true,
        coeff:.5,
        showShadow:true,
        eventBus:true,
        shadowCoeff:2,
        inadaptivePanel:true,//是否在全屏自适应组件中，默认是true
        eventElement:"eventElement"
      },
      toggleConfig:{
        checked:true,
        title:"3D View Switch"
      },
      adptivePanelConfig:{
        backgroundName:"A2",
        backgroundFillAll:true,
        loading:true
      }
    };
  },
  components: {
  },
  computed: {
   
  },
  watch:{
    "globalConfig.panel3D"(val){
      this.boar3dConfig.view3d=val
    }
  },
  methods: {
    
  },
  mounted() {
    this.boar3dConfig.view3d=this.globalConfig.panel3D
    this.$timer("B3DLoading",()=>{
      this.adptivePanelConfig.loading=false
    },1000)
  },
};
</script> 
<style lang="less">
.panel3D-test-unity-wrap{.poa; .fullbox(50px); //transform: perspective(1000px) translateZ(-100px); //.bd(@cyA10); 
  .panel-3d{.poa; .fullbox(50px); }
  .demo-box{.bdTech(var(--button-bd_act),var(--tech-deco_A)); .poa; .fullbox; .bgc(var(--button-bg));
    .inner-box{.bdTechBottom(var(--tech-deco_A))}
  }
}
.gridDemoMax {.poa; .fullbox(40px);.grid(5,3,60px);
  //grid-auto-rows: minmax(100px, 200px);//声明行的高度
  .item{position: relative; padding:20px; 
    
  }
}
.adaptivePanel {
  .title-desc{.poa; top:20px; left:50%; white-space: nowrap; .fixc("x"); font-size: 18px; .fc(@cyA10);}
}
</style>